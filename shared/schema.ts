import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  currentLevel: integer("current_level").default(1),
  initiationDate: text("initiation_date"),
});

export const levels = pgTable("levels", {
  id: serial("id").primaryKey(),
  level: integer("level").notNull().unique(),
  name: text("name").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  requirements: text("requirements").array(),
  practices: text("practices").array(),
  symbols: text("symbols").array(),
});

export const entities = pgTable("entities", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  domain: text("domain").notNull(),
  element: text("element").notNull(),
  sigil: text("sigil"),
  color: text("color").notNull(),
});

export const knowledge = pgTable("knowledge", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(), // "fundamental", "ritual", "advanced"
  minLevel: integer("min_level").notNull(),
  maxLevel: integer("max_level").notNull(),
  content: text("content").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertLevelSchema = createInsertSchema(levels);
export const insertEntitySchema = createInsertSchema(entities);
export const insertKnowledgeSchema = createInsertSchema(knowledge);

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Level = typeof levels.$inferSelect;
export type Entity = typeof entities.$inferSelect;
export type Knowledge = typeof knowledge.$inferSelect;
