const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, PutCommand, GetCommand, QueryCommand, ScanCommand } = require('@aws-sdk/lib-dynamodb');

// Initialize DynamoDB client with security best practices
const client = new DynamoDBClient({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Create document client for easier data manipulation
const docClient = DynamoDBDocumentClient.from(client, {
  marshallOptions: {
    removeUndefinedValues: true,
  },
});

// Table name from environment variable
const WAITLIST_TABLE_NAME = process.env.AWS_DYNAMODB_WAITLIST_TABLE || 'synctown-waitlist';

// Validate and sanitize email to prevent injection
function sanitizeEmail(email) {
  // Remove any potentially harmful characters
  return email.toLowerCase().trim().replace(/[^\w@.-]/g, '');
}

// Check if email already exists in the waitlist
async function checkEmailExists(email) {
  try {
    const sanitizedEmail = sanitizeEmail(email);
    
    const command = new GetCommand({
      TableName: WAITLIST_TABLE_NAME,
      Key: {
        email: sanitizedEmail,
      },
    });

    const response = await docClient.send(command);
    return !!response.Item;
  } catch (error) {
    console.error('Error checking email existence:', error);
    throw new Error('Failed to check email existence');
  }
}

// Add email to waitlist
async function addToWaitlist(email, role) {
  try {
    const sanitizedEmail = sanitizeEmail(email);
    const now = new Date().toISOString();
    
    const command = new PutCommand({
      TableName: WAITLIST_TABLE_NAME,
      Item: {
        email: sanitizedEmail,
        role: role,
        createdAt: now,
        updatedAt: now,
      },
      ConditionExpression: 'attribute_not_exists(email)', // Prevent overwriting existing entries
    });

    await docClient.send(command);
  } catch (error) {
    if (error.name === 'ConditionalCheckFailedException') {
      throw new Error('Email already exists in waitlist');
    }
    console.error('Error adding to waitlist:', error);
    throw new Error('Failed to add to waitlist');
  }
}

// Get waitlist entry by email
async function getWaitlistEntry(email) {
  try {
    const sanitizedEmail = sanitizeEmail(email);
    
    const command = new GetCommand({
      TableName: WAITLIST_TABLE_NAME,
      Key: {
        email: sanitizedEmail,
      },
    });

    const response = await docClient.send(command);
    return response.Item || null;
  } catch (error) {
    console.error('Error getting waitlist entry:', error);
    throw new Error('Failed to get waitlist entry');
  }
}

// Get all waitlist entries
async function getAllWaitlistEntries() {
  try {
    const command = new ScanCommand({
      TableName: WAITLIST_TABLE_NAME,
    });

    const response = await docClient.send(command);
    return response.Items || [];
  } catch (error) {
    console.error('Error getting all waitlist entries:', error);
    throw new Error('Failed to get waitlist entries');
  }
}

// Get waitlist statistics
async function getWaitlistStats() {
  try {
    const entries = await getAllWaitlistEntries();
    const stats = {
      total: entries.length,
      byRole: {}
    };
    
    entries.forEach(entry => {
      stats.byRole[entry.role] = (stats.byRole[entry.role] || 0) + 1;
    });
    
    return stats;
  } catch (error) {
    console.error('Error getting waitlist stats:', error);
    throw new Error('Failed to get waitlist statistics');
  }
}

module.exports = {
  checkEmailExists,
  addToWaitlist,
  getWaitlistEntry,
  getAllWaitlistEntries,
  getWaitlistStats,
  sanitizeEmail
}; 