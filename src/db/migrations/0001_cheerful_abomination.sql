CREATE TYPE "public"."occupation" AS ENUM('developer', 'entrepreneur', 'other');--> statement-breakpoint
ALTER TABLE "waitlist" ADD COLUMN "occupation" "occupation" DEFAULT 'other' NOT NULL;