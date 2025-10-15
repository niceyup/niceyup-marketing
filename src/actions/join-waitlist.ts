'use server'

import { eq } from 'drizzle-orm'
import { waitlist } from '@/db/schema'
import { db } from '../db'

type JoinWaitlistParams = {
  name: string
  email: string
  message: string
  occupation: 'developer' | 'entrepreneur' | 'other'
}

export const joinWaitlist = async (params: JoinWaitlistParams) => {
  try {
    const [alreadyInWaitlist] = await db
      .select()
      .from(waitlist)
      .where(eq(waitlist.email, params.email))
      .limit(1)

    if (alreadyInWaitlist)
      return {
        status: 'error' as const,
        message: 'Email is already in the waitlist',
      }

    await db.insert(waitlist).values(params)

    return {
      status: 'success' as const,
      message: 'Successfully joined the waitlist',
    }
  } catch (error) {
    console.error('Error joining waitlist:', error)

    return {
      status: 'error' as const,
      message: 'An unexpected error occurred. Please try again later.',
    }
  }
}
