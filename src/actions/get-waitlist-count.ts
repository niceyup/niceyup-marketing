'use server'

import { waitlist } from '@/db/schema'
import { db } from '../db'

export const getWaitlistCount = async () => {
  try {
    return await db.$count(db.select().from(waitlist))
  } catch (error) {
    console.error('Error getting waitlist count:', error)
  }
}
