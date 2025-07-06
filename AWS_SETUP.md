# AWS DynamoDB Setup for SyncTown Waitlist

## Overview
This document explains how to set up AWS DynamoDB for the SyncTown waitlist feature with security best practices.

## Prerequisites
- AWS Account
- AWS CLI installed (optional but recommended)
- Node.js environment

## Step 1: Create DynamoDB Table

### Using AWS Console:
1. Go to AWS DynamoDB Console
2. Click "Create table"
3. Configure the table:
   - Table name: `synctown-waitlist`
   - Partition key: `email` (String)
   - Table settings: Use default settings (On-demand billing)
4. Click "Create table"

### Using AWS CLI:
```bash
aws dynamodb create-table \
    --table-name synctown-waitlist \
    --attribute-definitions \
        AttributeName=email,AttributeType=S \
    --key-schema \
        AttributeName=email,KeyType=HASH \
    --billing-mode PAY_PER_REQUEST \
    --region us-east-1
```

## Step 2: Create IAM User for Application

### Security Best Practices:
1. Create a dedicated IAM user for the application
2. Apply the principle of least privilege
3. Never use root account credentials
4. Rotate access keys regularly

### Create IAM Policy:
Create a policy with minimal required permissions:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "dynamodb:PutItem",
                "dynamodb:GetItem",
                "dynamodb:Query"
            ],
            "Resource": "arn:aws:dynamodb:us-east-1:YOUR_ACCOUNT_ID:table/synctown-waitlist"
        }
    ]
}
```

### Steps:
1. Go to IAM Console
2. Create a new policy with the above JSON
3. Create a new IAM user
4. Attach the policy to the user
5. Generate access keys for programmatic access

## Step 3: Configure Environment Variables

Add these to your `.env.local` file (never commit this file):

```env
# AWS DynamoDB Configuration
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your-access-key-id
AWS_SECRET_ACCESS_KEY=your-secret-access-key
AWS_DYNAMODB_WAITLIST_TABLE=synctown-waitlist
```

## Step 4: Security Considerations

### 1. Environment Variables
- Never commit `.env.local` or any file containing credentials
- Use environment variables or AWS Secrets Manager in production
- Consider using AWS IAM roles if hosting on AWS infrastructure

### 2. Input Validation
The application includes:
- Email format validation
- Input sanitization to prevent injection attacks
- Role validation against a whitelist

### 3. DynamoDB Security
- The table uses email as the primary key
- Conditional expressions prevent overwriting existing entries
- All inputs are sanitized before database operations

### 4. Error Handling
- Database errors are logged but not exposed to users
- Specific error for duplicate emails: "You're in our waitlist already!"
- Generic errors for other failures to prevent information leakage

## Step 5: Testing

Test the implementation:
1. Try adding a new email - should succeed
2. Try adding the same email again - should show "You're in our waitlist already!"
3. Try invalid email formats - should be rejected
4. Check AWS DynamoDB console to verify data is stored

## Production Recommendations

1. **Use AWS IAM Roles**: If hosting on AWS (EC2, ECS, Lambda), use IAM roles instead of access keys
2. **Enable DynamoDB Backups**: Configure point-in-time recovery or on-demand backups
3. **Set up CloudWatch Alarms**: Monitor for unusual activity or errors
4. **Use AWS Secrets Manager**: Store credentials securely in production
5. **Enable AWS CloudTrail**: Audit all API calls to your DynamoDB table
6. **Consider VPC Endpoints**: For enhanced security, use VPC endpoints for DynamoDB access

## Troubleshooting

### Common Issues:
1. **"Failed to add to waitlist"**: Check AWS credentials and permissions
2. **"Email already exists"**: This is expected behavior for duplicate emails
3. **Network errors**: Verify AWS region and network connectivity

### Debug Steps:
1. Check CloudWatch logs for detailed error messages
2. Verify IAM permissions are correctly configured
3. Test AWS credentials using AWS CLI
4. Check DynamoDB table exists in the correct region 