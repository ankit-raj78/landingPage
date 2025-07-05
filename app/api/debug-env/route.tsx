import { NextResponse } from 'next/server'

export const runtime = 'nodejs'       // 确保不是 Edge

export async function GET() {
  return NextResponse.json({
    node: process.release.name,      // 应该是 'node'
    env: {
      TEST_VAR: process.env.TEST_VAR,
      SMTP_HOST: process.env.SMTP_HOST,
      SMTP_USER: process.env.SMTP_USER ? 'set' : 'unset',
      SMTP_PASS: process.env.SMTP_PASS ? 'set' : 'unset',
    },
  })
}