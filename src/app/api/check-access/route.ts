import { and, eq } from 'drizzle-orm'
import { type NextRequest, NextResponse } from 'next/server'
import { db } from '@/db'
import { waitlist } from '@/db/schema'

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get('email')

  if (!email) {
    return NextResponse.json(
      { status: 'error', message: 'Email is required' },
      { status: 400 },
    )
  }

  const [emailExists] = await db
    .select()
    .from(waitlist)
    .where(and(eq(waitlist.email, email), eq(waitlist.status, 'authorized')))
    .limit(1)

  if (!emailExists) {
    return NextResponse.json(
      { status: 'error', message: 'Unauthorized' },
      { status: 404 },
    )
  }

  return NextResponse.json(
    { status: 'success', message: 'Authorized' },
    { status: 200 },
  )
}
