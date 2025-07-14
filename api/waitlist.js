import nodemailer from 'nodemailer';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand, PutCommand } from '@aws-sdk/lib-dynamodb';

// --- DynamoDB setup ---
const ddb = DynamoDBDocumentClient.from(
  new DynamoDBClient({
    region: process.env.AWS_REGION || 'us-east-1',
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  }),
  { marshallOptions: { removeUndefinedValues: true } },
);

const TABLE = process.env.AWS_DYNAMODB_WAITLIST_TABLE || 'synctown-waitlist';
const ROLES = [
  'Music Producer',
  'Singer/Songwriter',
  'Beat Maker',
  'Indie Artist',
  'Music Student',
  'Content Creator',
  'Hobbyist',
  'Other',
];
const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const sanitize = (e) => e.toLowerCase().trim().replace(/[^\w@.-]/g, '');

// --- Mailer setup (Zoho / any SMTP) ---
const transporter =
  process.env.SMTP_USER && process.env.SMTP_PASS
    ? nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtppro.zoho.com',
        port: +process.env.SMTP_PORT || 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        tls: { ciphers: 'SSLv3', rejectUnauthorized: false },
      })
    : null;

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email = '', role = '' } = req.body || {};
  const clean = sanitize(email);
  if (!emailRx.test(clean)) return res.status(400).json({ error: 'Invalid email' });
  if (!ROLES.includes(role)) return res.status(400).json({ error: 'Invalid role' });

  // check existing
  try {
    const r = await ddb.send(new GetCommand({ TableName: TABLE, Key: { email: clean } }));
    if (r.Item) return res.status(409).json({ error: "You're already on our waitlist!" });
  } catch (e) {
    console.error('DDB get error', e);
  }

  // save
  try {
    await ddb.send(
      new PutCommand({
        TableName: TABLE,
        Item: { email: clean, role, createdAt: new Date().toISOString() },
        ConditionExpression: 'attribute_not_exists(email)',
      }),
    );
  } catch (e) {
    if (e.name === 'ConditionalCheckFailedException')
      return res.status(409).json({ error: "You're already on our waitlist!" });
    console.error('DDB put error', e);
  }

  // send mail (best-effort)
  if (transporter) {
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to SyncTown!</h1>
        </div>
        <div style="padding: 40px; background: #f8f9fa; border-radius: 0 0 10px 10px;">
          <h2 style="color: #333; margin-bottom: 20px;">Thank you for joining the waitlist!</h2>
          <p style="color: #666; font-size: 16px; line-height: 1.6;">Dear ${clean},</p>
          <p style="color: #666; font-size: 16px; line-height: 1.6;">We are excited to have you on the waitlist! As a <strong>${role}</strong>, you will receive priority access when we launch.</p>
          <div style="background: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1976d2; margin-top: 0;">You will receive the following benefits:</h3>
            <ul style="color: #666; padding-left: 20px;">
              <li>🚀 Priority access</li>
              <li>🎁 Exclusive release discounts</li>
              <li>💎 Early access to advanced features</li>
              <li>🎵 Participate in product development</li>
            </ul>
          </div>
          <p style="color: #666; font-size: 16px; line-height: 1.6;">We will notify you as soon as the product is ready.</p>
          <p style="color: #666; font-size: 16px; line-height: 1.6;">Looking forward to creating music with you!</p>
          <div style="margin-top: 30px; padding-top: 30px; border-top: 1px solid #ddd;">
            <p style="color: #999; font-size: 14px;">SyncTown Team<br/>hello@synctown.ai</p>
          </div>
        </div>
      </div>`;
    try {
      await transporter.sendMail({
        from: '"SyncTown" <hello@synctown.ai>',
        to: clean,
        subject: '🎵 Welcome to SyncTown Waitlist!',
        html: emailContent,
      });
    } catch (e) {
      console.error('mail error', e);
    }
  }

  return res.status(200).json({ success: true });
} 