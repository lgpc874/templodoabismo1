CREATE TABLE "entities" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"domain" text NOT NULL,
	"element" text NOT NULL,
	"sigil" text,
	"color" text NOT NULL,
	"image_url" text,
	"invocation" text,
	"offerings" text[],
	"associated_level" integer
);
--> statement-breakpoint
CREATE TABLE "knowledge" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"category" text NOT NULL,
	"min_level" integer NOT NULL,
	"max_level" integer,
	"content" text NOT NULL,
	"author" text,
	"tags" text[],
	"is_public" boolean DEFAULT true,
	"view_count" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "levels" (
	"id" serial PRIMARY KEY NOT NULL,
	"level" integer NOT NULL,
	"name" text NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"long_description" text,
	"requirements" text[],
	"practices" text[],
	"symbols" text[],
	"color" text NOT NULL,
	"is_unlocked" boolean DEFAULT false,
	"order_index" integer NOT NULL,
	CONSTRAINT "levels_level_unique" UNIQUE("level")
);
--> statement-breakpoint
CREATE TABLE "rituals" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"instructions" text NOT NULL,
	"required_level" integer NOT NULL,
	"duration" text,
	"materials" text[],
	"best_time" text,
	"entity_id" integer,
	"difficulty" text,
	"category" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user_progress" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"level_id" integer NOT NULL,
	"completed_at" timestamp,
	"notes" text,
	"rituals_practiced" integer DEFAULT 0,
	"knowledge_read" integer DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"email" text NOT NULL,
	"password_hash" text NOT NULL,
	"current_level" integer DEFAULT 1,
	"initiation_date" timestamp DEFAULT now(),
	"last_access" timestamp,
	"is_active" boolean DEFAULT true,
	"profile_data" jsonb,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "users_username_unique" UNIQUE("username"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
