import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { createServer } from "vite";
import { registerRoutes } from "./routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Register API routes first
registerRoutes(app);

async function startServer() {
  if (process.env.NODE_ENV === "development") {
    // Development: use Vite dev server
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: "spa",
      root: join(__dirname, "../client"),
      configFile: join(__dirname, "../vite.config.ts"),
    });
    app.use(vite.ssrFixStacktrace);
    app.use(vite.middlewares);
  } else {
    // Production: serve static files
    app.use(express.static(join(__dirname, "../dist/public")));
    
    // Handle SPA routes
    app.get("*", (req, res) => {
      res.sendFile(join(__dirname, "../dist/public/index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();