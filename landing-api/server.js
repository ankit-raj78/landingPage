'use strict';

const express = require('express');
const { Firestore } = require('@google-cloud/firestore');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json({ limit: '16kb' }));

// Trust the GCP LB / Cloudflare proxy chain
app.set('trust proxy', true);

const PORT = parseInt(process.env.PORT || '8080', 10);
const PROJECT_ID = process.env.GOOGLE_CLOUD_PROJECT || 'sentinel-platform-dev';
const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY || '';
const SMTP_HOST = process.env.SMTP_HOST || 'smtppro.zoho.com';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587', 10);
const SMTP_USER = process.env.SMTP_USER || '';
const SMTP_PASS = process.env.SMTP_PASS || '';

const db = new Firestore({ projectId: PROJECT_ID });

// ─── CORS (only landing domain + localhost dev) ──────────────────────────────
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || 'https://scam.ai,http://localhost:3001').split(',');

app.use((req, res, next) => {
  const origin = req.headers.origin || '';
  if (ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Validate Cloudflare Turnstile token */
async function verifyTurnstile(token, ip) {
  if (!TURNSTILE_SECRET) return true; // skip in dev if not configured
  const body = new URLSearchParams({
    secret: TURNSTILE_SECRET,
    response: token,
    remoteip: ip || '',
  });
  const resp = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body,
  });
  const data = await resp.json();
  return data.success === true;
}

/** IP-based rate limit using Firestore — max `limit` requests per `windowSecs` */
async function checkRateLimit(bucket, key, limit, windowSecs) {
  const now = Date.now();
  const windowStart = now - windowSecs * 1000;
  const ref = db.collection('rate_limits').doc(`${bucket}:${key}`);

  return db.runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    const data = snap.exists ? snap.data() : { hits: [] };
    // Prune old hits
    const hits = (data.hits || []).filter((t) => t > windowStart);
    if (hits.length >= limit) return false;
    hits.push(now);
    tx.set(ref, { hits, updatedAt: now }, { merge: false });
    return true;
  });
}

/** Sanitize email */
function sanitizeEmail(raw) {
  return raw.toLowerCase().trim().replace(/[^\w@.+-]/g, '');
}

/** Send welcome email (non-fatal) */
async function sendWelcomeEmail(to, role) {
  if (!SMTP_USER || !SMTP_PASS) return;
  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: false,
      requireTLS: true,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
    });
    await transporter.sendMail({
      from: '"SyncTown Team" <hello@synctown.ai>',
      to,
      subject: '🎵 Welcome to the SyncTown Waitlist!',
      html: `<p>Hi there,</p>
<p>You're on the list as a <strong>${role}</strong>. We'll notify you the moment we launch.</p>
<p>— The SyncTown Team</p>`,
    });
  } catch (err) {
    console.error('Email send failed (non-fatal):', err.message);
  }
}

// ─── Health check ─────────────────────────────────────────────────────────────
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

// ─── POST /api/waitlist ───────────────────────────────────────────────────────
const VALID_ROLES = new Set([
  'Music Producer', 'Singer/Songwriter', 'Beat Maker', 'Indie Artist',
  'Music Student', 'Content Creator', 'Hobbyist', 'Other',
]);

app.post('/api/waitlist', async (req, res) => {
  try {
    const { email, role, turnstileToken } = req.body || {};
    const ip = req.ip || 'unknown';

    // Input validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address' });
    }
    if (!role || !VALID_ROLES.has(role)) {
      return res.status(400).json({ error: 'Please select a valid role' });
    }

    // Turnstile check
    if (TURNSTILE_SECRET) {
      const valid = await verifyTurnstile(turnstileToken || '', ip);
      if (!valid) return res.status(403).json({ error: 'Bot verification failed. Please try again.' });
    }

    // Rate limit: 5 submissions per IP per 15 min
    const allowed = await checkRateLimit('waitlist', ip, 5, 900);
    if (!allowed) {
      return res.status(429).json({ error: 'Too many requests. Please try again later.' });
    }

    const sanitizedEmail = sanitizeEmail(email);
    const ref = db.collection('waitlist').doc(sanitizedEmail);

    // Atomic write — only if not already present
    const written = await db.runTransaction(async (tx) => {
      const snap = await tx.get(ref);
      if (snap.exists) return false;
      tx.set(ref, {
        email: sanitizedEmail,
        role,
        createdAt: Firestore.Timestamp.now(),
        ip,
      });
      return true;
    });

    if (!written) {
      return res.status(409).json({ error: "You're already on our waitlist!" });
    }

    // Fire-and-forget welcome email
    sendWelcomeEmail(sanitizedEmail, role);

    return res.status(200).json({ success: true, message: 'Thank you for joining the waitlist!' });
  } catch (err) {
    console.error('waitlist error:', err);
    return res.status(500).json({ error: 'Server error, please try again later' });
  }
});

// ─── POST /api/trial ──────────────────────────────────────────────────────────
app.post('/api/trial', async (req, res) => {
  try {
    const { email, useCase, turnstileToken } = req.body || {};
    const ip = req.ip || 'unknown';

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address' });
    }

    // Turnstile check
    if (TURNSTILE_SECRET) {
      const valid = await verifyTurnstile(turnstileToken || '', ip);
      if (!valid) return res.status(403).json({ error: 'Bot verification failed. Please try again.' });
    }

    // Rate limit: 3 trial requests per IP per hour
    const allowed = await checkRateLimit('trial', ip, 3, 3600);
    if (!allowed) {
      return res.status(429).json({ error: 'Too many requests. Please try again later.' });
    }

    const sanitizedEmail = sanitizeEmail(email);
    const ref = db.collection('trial_requests').doc(sanitizedEmail);

    const written = await db.runTransaction(async (tx) => {
      const snap = await tx.get(ref);
      if (snap.exists) return false;
      tx.set(ref, {
        email: sanitizedEmail,
        useCase: useCase || '',
        status: 'pending',
        createdAt: Firestore.Timestamp.now(),
        ip,
      });
      return true;
    });

    if (!written) {
      return res.status(409).json({ error: 'A trial request for this email already exists.' });
    }

    return res.status(200).json({ success: true, message: 'Trial request received! We will be in touch shortly.' });
  } catch (err) {
    console.error('trial error:', err);
    return res.status(500).json({ error: 'Server error, please try again later' });
  }
});

// ─── Start ────────────────────────────────────────────────────────────────────
app.listen(PORT, () => console.log(`sentinel-landing-api listening on :${PORT}`));
