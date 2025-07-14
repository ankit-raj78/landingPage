// 测试环境变量加载
require('dotenv').config({ path: '.env.local' });
if (!process.env.SMTP_USER) {
  require('dotenv').config({ path: '.env' });
}

console.log('环境变量检查:');
console.log('SMTP_HOST:', process.env.SMTP_HOST);
console.log('SMTP_PORT:', process.env.SMTP_PORT);
console.log('SMTP_USER:', process.env.SMTP_USER ? '已设置' : '未设置');
console.log('SMTP_PASS:', process.env.SMTP_PASS ? '已设置' : '未设置');

// 测试 nodemailer
const nodemailer = require('nodemailer');
console.log('\nNodemailer 测试:');
console.log('createTransport 方法存在:', typeof nodemailer.createTransport === 'function');

if (process.env.SMTP_USER && process.env.SMTP_PASS) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    console.log('✅ 邮件传输器创建成功');
  } catch (error) {
    console.log('❌ 邮件传输器创建失败:', error.message);
  }
} else {
  console.log('⚠️ 邮件配置不完整');
} 