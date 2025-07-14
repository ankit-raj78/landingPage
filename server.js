const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
// 尝试加载 .env.local 或 .env 文件
require('dotenv').config({ path: '.env.local' });
if (!process.env.SMTP_USER) {
  require('dotenv').config({ path: '.env' });
}

// Import DynamoDB functions
const { checkEmailExists, addToWaitlist, getWaitlistStats } = require('./dynamodb');

const app = express();
const PORT = process.env.PORT || 3001;

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // 服务静态文件

// DynamoDB is now used for data storage
// Local file storage code has been replaced with DynamoDB functions

// 创建邮件传输器
function createTransporter() {
  return nodemailer.createTransport({
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

// Waitlist API端点
app.post('/api/waitlist', async (req, res) => {
  try {
    const { email, role } = req.body;
    
    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Please enter a valid email address'
      });
    }

    // 验证角色是否有效
    const validRoles = ['Music Producer', 'Singer/Songwriter', 'Beat Maker', 'Indie Artist', 'Music Student', 'Content Creator', 'Hobbyist', 'Other'];
    if (!role || !validRoles.includes(role)) {
      return res.status(400).json({
        error: 'Please select a valid role'
      });
    }

    // 检查邮箱是否已存在
    try {
      const emailExists = await checkEmailExists(email);
      if (emailExists) {
        return res.status(409).json({
          error: "You're already on our waitlist!"
        });
      }
    } catch (dbError) {
      console.error('Database check error:', dbError);
      return res.status(500).json({
        error: 'Database error, please try again later'
      });
    }

    // 添加到waitlist
    try {
      await addToWaitlist(email, role);
      console.log('✅ New user added to waitlist:', { email, role });
    } catch (dbError) {
      console.error('Database save error:', dbError);
      if (dbError.message === 'Email already exists in waitlist') {
        return res.status(409).json({
          error: "You're already on our waitlist!"
        });
      }
      return res.status(500).json({
        error: 'Failed to save to database, please try again later'
      });
    }

    // 发送欢迎邮件
    try {
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        console.log('📧 开始发送邮件...');
        console.log('📧 收件人:', email);
        console.log('📧 SMTP配置:', {
          host: process.env.SMTP_HOST,
          port: process.env.SMTP_PORT,
          user: process.env.SMTP_USER
        });
        
        const transporter = createTransporter();
        
        // 验证SMTP连接
        console.log('📧 验证SMTP连接...');
        await transporter.verify();
        console.log('✅ SMTP连接验证成功');
        
        const emailContent = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; text-align: center; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to SyncTown!</h1>
            </div>
            
            <div style="padding: 40px; background: #f8f9fa; border-radius: 0 0 10px 10px;">
              <h2 style="color: #333; margin-bottom: 20px;">Thank you for joining the waitlist!</h2>
              
              <p style="color: #666; font-size: 16px; line-height: 1.6;">
                Dear ${email},
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

        console.log('📧 发送邮件中...');
        await transporter.sendMail({
          from: '"SyncTown Team" <hello@synctown.ai>',
          to: email,
          subject: '🎵 Welcome to SyncTown Waitlist!',
          html: emailContent,
        });
        
        console.log('✅ Welcome email sent to:', email);
      } else {
        console.log('⚠️ 邮件配置不完整，跳过发送邮件');
      }
    } catch (emailError) {
      console.error('❌ Email sending failed:', emailError.message);
      console.error('❌ 详细错误:', emailError);
      // 不要因为邮件发送失败而让整个请求失败
    }
    
    res.json({
      message: 'Thank you for joining the waitlist!',
      success: true
    });
    
  } catch (error) {
    console.error('Waitlist API error:', error);
    res.status(500).json({
      error: 'Server error, please try again later'
    });
  }
});

// 获取waitlist统计信息（可选）
app.get('/api/waitlist/stats', async (req, res) => {
  try {
    const stats = await getWaitlistStats();
    res.json(stats);
  } catch (error) {
    console.error('Error getting stats:', error);
    res.status(500).json({
      error: 'Failed to get statistics'
    });
  }
});

// 服务前端文件
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 启动服务器
app.listen(PORT, async () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📧 Email service: ${process.env.SMTP_USER ? 'Enabled' : 'Disabled (set SMTP_USER and SMTP_PASS)'}`);
  console.log(`🗄️ Database: ${process.env.AWS_ACCESS_KEY_ID ? 'DynamoDB' : 'Local file (set AWS credentials for DynamoDB)'}`);
  
  // Get current waitlist size from DynamoDB
  try {
    const stats = await getWaitlistStats();
    console.log(`📊 Current waitlist size: ${stats.total}`);
  } catch (error) {
    console.log(`📊 Current waitlist size: Unable to fetch (${error.message})`);
  }
});

// 优雅关闭
process.on('SIGINT', () => {
  console.log('\n👋 Shutting down server...');
  process.exit(0);
}); 
