import { NextRequest, NextResponse } from 'next/server'
import { getAllWaitlistEntries } from '@/lib/aws/dynamodb'

export async function GET(request: NextRequest) {
  try {
    // 获取所有waitlist条目
    const entries = await getAllWaitlistEntries()
    
    // 返回数量
    return NextResponse.json({
      count: entries.length,
      success: true
    })
  } catch (error) {
    console.error('Error getting waitlist count:', error)
    
    // 如果出错，返回一个默认值
    return NextResponse.json({
      count: 50, // 默认显示50+
      success: false,
      error: 'Failed to get waitlist count'
    })
  }
} 