import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Usuários iniciados no templo
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  currentLevel: integer("current_level").default(1),
  initiationDate: timestamp("initiation_date").defaultNow(),
  lastAccess: timestamp("last_access"),
  isActive: boolean("is_active").default(true),
  profileData: jsonb("profile_data"), // Dados extras do perfil
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Os 7 níveis iniciáticos do templo
export const levels = pgTable("levels", {
  id: serial("id").primaryKey(),
  level: integer("level").notNull().unique(),
  name: text("name").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  longDescription: text("long_description"),
  requirements: text("requirements").array(),
  practices: text("practices").array(),
  symbols: text("symbols").array(),
  color: text("color").notNull(),
  isUnlocked: boolean("is_unlocked").default(false),
  orderIndex: integer("order_index").notNull(),
});

// Entidades centrais do panteão
export const entities = pgTable("entities", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  domain: text("domain").notNull(),
  element: text("element").notNull(),
  sigil: text("sigil"),
  color: text("color").notNull(),
  imageUrl: text("image_url"),
  invocation: text("invocation"),
  offerings: text("offerings").array(),
  associatedLevel: integer("associated_level"),
});

// Biblioteca de conhecimentos
export const knowledge = pgTable("knowledge", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(), // "fundamental", "ritual", "advanced", "historia"
  minLevel: integer("min_level").notNull(),
  maxLevel: integer("max_level"),
  content: text("content").notNull(),
  author: text("author"),
  tags: text("tags").array(),
  isPublic: boolean("is_public").default(true),
  viewCount: integer("view_count").default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

// Rituais e práticas
export const rituals = pgTable("rituals", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  instructions: text("instructions").notNull(),
  requiredLevel: integer("required_level").notNull(),
  duration: text("duration"),
  materials: text("materials").array(),
  bestTime: text("best_time"),
  entityId: integer("entity_id"),
  difficulty: text("difficulty"), // "iniciante", "intermediario", "avancado"
  category: text("category").notNull(), // "invocacao", "meditacao", "transformacao"
});

// Progresso dos usuários
export const userProgress = pgTable("user_progress", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  levelId: integer("level_id").notNull(),
  completedAt: timestamp("completed_at"),
  notes: text("notes"),
  ritualsPracticed: integer("rituals_practiced").default(0),
  knowledgeRead: integer("knowledge_read").default(0),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  email: true,
  passwordHash: true,
});

export const insertLevelSchema = createInsertSchema(levels);
export const insertEntitySchema = createInsertSchema(entities);
export const insertKnowledgeSchema = createInsertSchema(knowledge);
export const insertRitualSchema = createInsertSchema(rituals);
export const insertUserProgressSchema = createInsertSchema(userProgress);

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Level = typeof levels.$inferSelect;
export type Entity = typeof entities.$inferSelect;
export type Knowledge = typeof knowledge.$inferSelect;
export type Ritual = typeof rituals.$inferSelect;
export type UserProgress = typeof userProgress.$inferSelect;
