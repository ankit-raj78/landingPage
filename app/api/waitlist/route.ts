// 删除这行导入
// import 'dotenv/config'
export const runtime = 'nodejs'
console.log('Process release:', process.release.name) // 应该是 'node'

console.log('TEST_VAR =>', process.env.TEST_VAR)

import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { checkEmailExists, addToWaitlist } from '@/lib/aws/dynamodb'

export async function POST(request: NextRequest) {
  try {
    const { email, role } = await request.json()
    
    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // 验证角色是否有效
    const validRoles = ['Music Producer', 'Singer/Songwriter', 'Beat Maker', 'Indie Artist', 'Music Student', 'Content Creator', 'Hobbyist', 'Other'];
    if (!role || !validRoles.includes(role)) {
      return NextResponse.json(
        { error: 'Please select a valid role' },
        { status: 400 }
      )
    }

    // 检查邮箱是否已存在于数据库中
    try {
      const emailExists = await checkEmailExists(email);
      if (emailExists) {
        return NextResponse.json(
          { error: "You're in our waitlist already!" },
          { status: 409 } // Conflict status code
        )
      }
    } catch (dbError) {
      console.error('Database check error:', dbError);
      // 如果数据库检查失败，继续处理但记录错误
    }

    // 添加到数据库
    try {
      await addToWaitlist(email, role);
      console.log('✅ Successfully added to DynamoDB:', email);
    } catch (dbError: any) {
      console.error('Database save error:', dbError);
      if (dbError.message === 'Email already exists in waitlist') {
        return NextResponse.json(
          { error: "You're in our waitlist already!" },
          { status: 409 }
        )
      }
      // 如果数据库保存失败，继续发送邮件但记录错误
    }

    // 检查环境变量
    console.log('🔍 Environment variable check:')
    console.log('SMTP_HOST:', process.env.SMTP_HOST)
    console.log('SMTP_PORT:', process.env.SMTP_PORT)
    console.log('SMTP_USER:', process.env.SMTP_USER ? 'Set' : 'Not set')
    console.log('SMTP_PASS:', process.env.SMTP_PASS ? 'Set' : 'Not Set')

    // 验证必要的环境变量
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('❌ Environment variables missing')
      return NextResponse.json({
        message: 'Thank you for joining the waitlist!',
        success: true
      })
    }

    // 创建邮件传输器 - 针对Zoho Mail优化
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.zoho.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // false for 587, true for 465
      requireTLS: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // Zoho Mail 特殊配置
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false
      }
    })

    // 邮件内容
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
    `

    try {
      // 发送邮件
      await transporter.sendMail({
        from: '"SyncTown Team" <hello@synctown.ai>',
        to: email,
        subject: '🎵 Welcome to SyncTown Waitlist!',
        html: emailContent,
      })
      
      console.log('✅ Email sent successfully:', email)
    } catch (error) {
      console.error('❌ Email sending failed:', error)
      // 即使邮件发送失败，也不要让用户看到错误，因为可能是配置问题
    }

    // 这里可以添加数据库存储逻辑
    // 例如：存储到数据库、发送到Google Sheets等
    console.log('New user joined the waitlist:', { email, role, timestamp: new Date().toISOString() })
    
    return NextResponse.json({
      message: 'Thank you for joining the waitlist!',
      success: true
    })
    
  } catch (error) {
    console.error('Waitlist API error:', error)
    return NextResponse.json(
      { error: 'Server error, please try again later' },
      { status: 500 }
    )
  }
}