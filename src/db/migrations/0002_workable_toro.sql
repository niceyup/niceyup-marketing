CREATE TYPE "public"."waitlist_status" AS ENUM('pending', 'authorized', 'rejected');--> statement-breakpoint
ALTER TABLE "waitlist" ADD COLUMN "status" "waitlist_status" DEFAULT 'pending' NOT NULL;