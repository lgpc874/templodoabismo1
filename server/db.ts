import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from '@shared/schema';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is required');
}

// Connection for migrations and admin operations
const migrationClient = postgres(process.env.DATABASE_URL, { max: 1 });

// Main database connection
const queryClient = postgres(process.env.DATABASE_URL);
export const db = drizzle(queryClient, { schema });

// Export types and schema
export * from '@shared/schema';
export type Database = typeof db;