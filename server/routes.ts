import { Express } from "express";
import { storage } from "./storage.js";

export function registerRoutes(app: Express) {
  // Health check route
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Get all levels
  app.get("/api/levels", async (req, res) => {
    try {
      const levels = await storage.getLevels();
      res.json(levels);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch levels" });
    }
  });

  // Get all entities
  app.get("/api/entities", async (req, res) => {
    try {
      const entities = await storage.getEntities();
      res.json(entities);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch entities" });
    }
  });

  // Get all knowledge
  app.get("/api/knowledge", async (req, res) => {
    try {
      const knowledge = await storage.getKnowledge();
      res.json(knowledge);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch knowledge" });
    }
  });
}