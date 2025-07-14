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
    try {
      await transporter.sendMail({
        from: '"SyncTown" <hello@synctown.ai>',
        to: clean,
        subject: '🎵 Welcome to SyncTown Waitlist!',
        text: `Thanks for joining the waitlist as a ${role}!`,
      });
    } catch (e) {
      console.error('mail error', e);
    }
  }

  return res.status(200).json({ success: true });
} 