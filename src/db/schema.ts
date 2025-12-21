import { randomUUID } from 'node:crypto'
import { pgEnum, pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core'

export const generateId = (): string => randomUUID()

export const id = {
  id: text('id').primaryKey().$defaultFn(generateId),
}

export const occupation = pgEnum('occupation', [
  'developer',
  'entrepreneur',
  'other',
])

export const waitlistStatus = pgEnum('waitlist_status', [
  'pending',
  'authorized',
  'rejected',
])

export const waitlist = pgTable('waitlist', {
  ...id,
  name: varchar('name', { length: 256 }).notNull(),
  email: varchar('email', { length: 256 }).notNull().unique(),
  message: text('message'),
  occupation: occupation('occupation').notNull().default('other'),
  status: waitlistStatus('status').notNull().default('pending'),
  createdAt: timestamp('created_at')
    .notNull()
    .$defaultFn(() => new Date()),
})

export const featureStatus = pgEnum('feature_status', [
  'not-started',
  'in-progress',
  'done',
])

export const features = pgTable('features', {
  ...id,
  title: varchar('title', { length: 256 }).notNull(),
  description: text('description').notNull(),
  status: featureStatus('status').notNull().default('not-started'),
  createdAt: timestamp('created_at')
    .notNull()
    .$defaultFn(() => new Date()),
})
