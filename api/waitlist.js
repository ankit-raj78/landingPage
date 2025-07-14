const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, GetCommand, PutCommand } = require('@aws-sdk/lib-dynamodb');

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

    return res.status(200).json({ 
      success: true, 
      message: 'Thank you for joining the waitlist!' 
    });

  } catch (error) {
    console.error('Waitlist API error:', error);
    return res.status(500).json({ error: 'Server error, please try again later' });
  }
} 