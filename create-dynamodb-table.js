const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { CreateTableCommand, DescribeTableCommand } = require('@aws-sdk/client-dynamodb');

// 加载环境变量
require('dotenv').config({ path: '.env.local' });
if (!process.env.AWS_ACCESS_KEY_ID) {
  require('dotenv').config({ path: '.env' });
}

const client = new DynamoDBClient({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const tableName = process.env.AWS_DYNAMODB_WAITLIST_TABLE || 'synctown-waitlist';

async function createTable() {
  try {
    // 首先检查表是否已存在
    try {
      const describeCommand = new DescribeTableCommand({ TableName: tableName });
      const result = await client.send(describeCommand);
      console.log(`✅ Table '${tableName}' already exists with status: ${result.Table.TableStatus}`);
      return;
    } catch (error) {
      if (error.name !== 'ResourceNotFoundException') {
        throw error;
      }
      // 表不存在，继续创建
    }

    console.log(`🔄 Creating DynamoDB table: ${tableName}`);
    
    const createCommand = new CreateTableCommand({
      TableName: tableName,
      KeySchema: [
        {
          AttributeName: 'email',
          KeyType: 'HASH' // 主键
        }
      ],
      AttributeDefinitions: [
        {
          AttributeName: 'email',
          AttributeType: 'S' // String
        }
      ],
      BillingMode: 'PAY_PER_REQUEST', // 按需付费，适合小型应用
      Tags: [
        {
          Key: 'Project',
          Value: 'SyncTown'
        },
        {
          Key: 'Environment',
          Value: 'Production'
        }
      ]
    });

    const result = await client.send(createCommand);
    console.log('✅ Table created successfully!');
    console.log('📋 Table details:', {
      TableName: result.TableDescription.TableName,
      TableStatus: result.TableDescription.TableStatus,
      CreationDateTime: result.TableDescription.CreationDateTime
    });
    
    console.log('\n🔧 Configuration:');
    console.log(`   Region: ${process.env.AWS_REGION || 'us-east-1'}`);
    console.log(`   Table Name: ${tableName}`);
    console.log('\n⏳ Note: Table may take a few minutes to become fully active.');
    
  } catch (error) {
    console.error('❌ Error creating table:', error);
    
    if (error.name === 'UnrecognizedClientException') {
      console.log('\n💡 Troubleshooting:');
      console.log('   - Check your AWS credentials in .env.local file');
      console.log('   - Ensure AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY are correct');
    } else if (error.name === 'AccessDeniedException') {
      console.log('\n💡 Troubleshooting:');
      console.log('   - Your AWS credentials don\'t have DynamoDB permissions');
      console.log('   - Required permissions: dynamodb:CreateTable, dynamodb:DescribeTable');
    }
  }
}

// 运行脚本
createTable(); 