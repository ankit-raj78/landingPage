import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand, GetCommand, QueryCommand, ScanCommand } from '@aws-sdk/lib-dynamodb';

// Initialize DynamoDB client with security best practices
const client = new DynamoDBClient({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

// Create document client for easier data manipulation
export const docClient = DynamoDBDocumentClient.from(client, {
  marshallOptions: {
    removeUndefinedValues: true,
  },
});

// Table name from environment variable
export const WAITLIST_TABLE_NAME = process.env.AWS_DYNAMODB_WAITLIST_TABLE || 'synctown-waitlist';

// Interface for waitlist entry
export interface WaitlistEntry {
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

// Validate and sanitize email to prevent injection
export function sanitizeEmail(email: string): string {
  // Remove any potentially harmful characters
  return email.toLowerCase().trim().replace(/[^\w@.-]/g, '');
}

// Check if email already exists in the waitlist
export async function checkEmailExists(email: string): Promise<boolean> {
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
export async function addToWaitlist(email: string, role: string): Promise<void> {
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
  } catch (error: any) {
    if (error.name === 'ConditionalCheckFailedException') {
      throw new Error('Email already exists in waitlist');
    }
    console.error('Error adding to waitlist:', error);
    throw new Error('Failed to add to waitlist');
  }
}

// Get waitlist entry by email
export async function getWaitlistEntry(email: string): Promise<WaitlistEntry | null> {
  try {
    const sanitizedEmail = sanitizeEmail(email);
    
    const command = new GetCommand({
      TableName: WAITLIST_TABLE_NAME,
      Key: {
        email: sanitizedEmail,
      },
    });

    const response = await docClient.send(command);
    return response.Item as WaitlistEntry | null;
  } catch (error) {
    console.error('Error getting waitlist entry:', error);
    throw new Error('Failed to get waitlist entry');
  }
}

// Get all waitlist entries
export async function getAllWaitlistEntries(): Promise<WaitlistEntry[]> {
  try {
    const command = new ScanCommand({
      TableName: WAITLIST_TABLE_NAME,
    });

    const response = await docClient.send(command);
    return (response.Items || []) as WaitlistEntry[];
  } catch (error) {
    console.error('Error getting all waitlist entries:', error);
    throw new Error('Failed to get waitlist entries');
  }
} 