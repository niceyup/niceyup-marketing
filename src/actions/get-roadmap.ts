'use server'

import { asc, desc } from 'drizzle-orm'
import { features } from '@/db/schema'
import { db } from '../db'

export const getRoadmap = async () => {
  try {
    return await db
      .select()
      .from(features)
      .orderBy(desc(features.status), asc(features.createdAt))
  } catch (error) {
    console.error('Error getting roadmap:', error)
  }
}
