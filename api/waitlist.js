const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, GetCommand, PutCommand } = require('@aws-sdk/lib-dynamodb');
const nodemailer = require('nodemailer');

// Email transporter setup
function createTransporter() {
  return nodemailer.createTransporter({
    host: process.env.SMTP_HOST || 'smtppro.zoho.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      ciphers: 'SSLv3',
      rejectUnauthorized: false
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 10000
  });
}

// DynamoDB setup
const client = new DynamoDBClient({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const docClient = DynamoDBDocumentClient.from(client, {
  marshallOptions: {
    removeUndefinedValues: true,
  },
});

const TABLE_NAME = process.env.AWS_DYNAMODB_WAITLIST_TABLE || 'synctown-waitlist';

// Sanitize email to prevent injection
function sanitizeEmail(email) {
  return email.toLowerCase().trim().replace(/[^\w@.-]/g, '');
}

// Vercel Serverless Function for Waitlist
module.exports = async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, role } = req.body;

    // Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address' });
    }

    const validRoles = ['Music Producer', 'Singer/Songwriter', 'Beat Maker', 'Indie Artist', 'Music Student', 'Content Creator', 'Hobbyist', 'Other'];
    if (!role || !validRoles.includes(role)) {
      return res.status(400).json({ error: 'Please select a valid role' });
    }

    const sanitizedEmail = sanitizeEmail(email);

    // Check if email already exists
    try {
      const getCommand = new GetCommand({
        TableName: TABLE_NAME,
        Key: {
          email: sanitizedEmail,
        },
      });

      const existingUser = await docClient.send(getCommand);
      if (existingUser.Item) {
        return res.status(409).json({ error: "You're already on our waitlist!" });
      }
    } catch (dbError) {
      console.error('Database check error:', dbError);
      return res.status(500).json({ error: 'Database error, please try again later' });
    }

    // Add to waitlist
    try {
      const putCommand = new PutCommand({
        TableName: TABLE_NAME,
        Item: {
          email: sanitizedEmail,
          role: role,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        ConditionExpression: 'attribute_not_exists(email)', // Prevent overwriting
      });

      await docClient.send(putCommand);
      console.log('✅ New user added to waitlist:', { email: sanitizedEmail, role });

    } catch (dbError) {
      if (dbError.name === 'ConditionalCheckFailedException') {
        return res.status(409).json({ error: "You're already on our waitlist!" });
      }
      console.error('Database save error:', dbError);
      return res.status(500).json({ error: 'Failed to save to database, please try again later' });
    }

    // Send welcome email
    try {
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        console.log('📧 Starting email send...');
        console.log('📧 Recipient:', sanitizedEmail);
        
        const transporter = createTransporter();
        
        // Verify SMTP connection
        console.log('📧 Verifying SMTP connection...');
        await transporter.verify();
        console.log('✅ SMTP connection verified');
        
        const emailContent = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; text-align: center; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to SyncTown!</h1>
            </div>
            
            <div style="padding: 40px; background: #f8f9fa; border-radius: 0 0 10px 10px;">
              <h2 style="color: #333; margin-bottom: 20px;">Thank you for joining the waitlist!</h2>
              
              <p style="color: #666; font-size: 16px; line-height: 1.6;">
                Dear ${sanitizedEmail},
              </p>
              
              <p style="color: #666; font-size: 16px; line-height: 1.6;">
                We are excited to have you on the waitlist! As a <strong>${role}</strong>, you will receive priority access when we launch.
              </p>
              
              <div style="background: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #1976d2; margin-top: 0;">You will receive the following benefits:</h3>
                <ul style="color: #666; padding-left: 20px;">
                  <li>🚀 Priority access</li>
                  <li>🎁 Exclusive release discounts</li>
                  <li>💎 Early access to advanced features</li>
                  <li>🎵 Participate in product development</li>
                </ul>
              </div>
              
              <p style="color: #666; font-size: 16px; line-height: 1.6;">
                We will notify you as soon as the product is ready.
              </p>
              
              <p style="color: #666; font-size: 16px; line-height: 1.6;">
                Looking forward to creating music with you!
              </p>
              
              <div style="margin-top: 30px; padding-top: 30px; border-top: 1px solid #ddd;">
                <p style="color: #999; font-size: 14px;">
                  SyncTown Team<br/>
                  hello@synctown.ai
                </p>
              </div>
            </div>
          </div>
        `;

        console.log('📧 Sending email...');
        await transporter.sendMail({
          from: '"SyncTown Team" <hello@synctown.ai>',
          to: sanitizedEmail,
          subject: '🎵 Welcome to SyncTown Waitlist!',
          html: emailContent,
        });
        
        console.log('✅ Welcome email sent to:', sanitizedEmail);
      } else {
        console.log('⚠️ Email configuration incomplete, skipping email send');
      }
    } catch (emailError) {
      console.error('❌ Email sending failed:', emailError.message);
      console.error('❌ Detailed error:', emailError);
      // Don't fail the entire request if email fails
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Thank you for joining the waitlist!' 
    });

  } catch (error) {
    console.error('Waitlist API error:', error);
    return res.status(500).json({ error: 'Server error, please try again later' });
  }
} 