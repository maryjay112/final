import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Programs API
  app.get("/api/programs", async (req, res) => {
    try {
      const programs = await storage.getPrograms();
      res.json(programs);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch programs" });
    }
  });

  app.get("/api/programs/featured", async (req, res) => {
    try {
      const programs = await storage.getFeaturedPrograms();
      res.json(programs);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured programs" });
    }
  });
  app.get("/api/programs/:id", async (req, res) => {
    try {
      const program = await storage.getProgram(parseInt(req.params.id));
      if (!program) {
        return res.status(404).json({ message: "Program not found" });
      }
      res.json(program);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch program" });
    }
  });

  app.post("/api/programs", async (req, res) => {
    try {
      const program = await storage.createProgram(req.body);
      res.status(201).json(program);
    } catch (error) {
      res.status(500).json({ message: "Failed to create program" });
    }
  });

  app.put("/api/programs/:id", async (req, res) => {
    try {
      const program = await storage.updateProgram(parseInt(req.params.id), req.body);
      if (!program) {
        return res.status(404).json({ message: "Program not found" });
      }
      res.json(program);
    } catch (error) {
      res.status(500).json({ message: "Failed to update program" });
    }
  });

  app.delete("/api/programs/:id", async (req, res) => {
    try {
      const success = await storage.deleteProgram(parseInt(req.params.id));
      if (!success) {
        return res.status(404).json({ message: "Program not found" });
      }
      res.json({ message: "Program deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete program" });
    }
  });

  // News API
  app.get("/api/news", async (req, res) => {
    try {
      const news = await storage.getNews();
      res.json(news);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch news" });
    }
  });

  app.get("/api/news/featured", async (req, res) => {
    try {
      const news = await storage.getFeaturedNews();
      res.json(news);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured news" });
    }
  });

  app.get("/api/news/:id", async (req, res) => {
    try {
      const newsItem = await storage.getNewsItem(parseInt(req.params.id));
      if (!newsItem) {
        return res.status(404).json({ message: "News article not found" });
      }
      res.json(newsItem);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch news article" });
    }
  });

  app.post("/api/news", async (req, res) => {
    try {
      const newsItem = await storage.createNews(req.body);
      res.status(201).json(newsItem);
    } catch (error) {
      res.status(500).json({ message: "Failed to create news article" });
    }
  });

  app.put("/api/news/:id", async (req, res) => {
    try {
      const newsItem = await storage.updateNews(parseInt(req.params.id), req.body);
      if (!newsItem) {
        return res.status(404).json({ message: "News article not found" });
      }
      res.json(newsItem);
    } catch (error) {
      res.status(500).json({ message: "Failed to update news article" });
    }
  });

  app.delete("/api/news/:id", async (req, res) => {
    try {
      const success = await storage.deleteNews(parseInt(req.params.id));
      if (!success) {
        return res.status(404).json({ message: "News article not found" });
      }
      res.json({ message: "News article deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete news article" });
    }
  });

  // Events API
  app.get("/api/events", async (req, res) => {
    try {
      const events = await storage.getEvents();
      res.json(events);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch events" });
    }
  });

  app.get("/api/events/upcoming", async (req, res) => {
    try {
      const events = await storage.getUpcomingEvents();
      res.json(events);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch upcoming events" });
    }
  });

  // Management API
  app.get("/api/management", async (req, res) => {
    try {
      const management = await storage.getManagementTeam();
      res.json(management);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch management team" });
    }
  });

  // Contacts API
  app.post("/api/contacts", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      res.status(201).json(contact);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid contact data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create contact" });
      }
    }
  });

  // Settings API
  app.get("/api/settings/:key", async (req, res) => {
    try {
      const setting = await storage.getSetting(req.params.key);
      if (!setting) {
        res.status(404).json({ message: "Setting not found" });
        return;
      }
      res.json(setting);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch setting" });
    }
  });

  // Testimonials API
  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch testimonials" });
    }
  });

  app.get("/api/testimonials/featured", async (req, res) => {
    try {
      const testimonials = await storage.getFeaturedTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured testimonials" });
    }
  });

  // Achievements API
  app.get("/api/achievements", async (req, res) => {
    try {
      const achievements = await storage.getAchievements();
      res.json(achievements);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch achievements" });
    }
  });

  app.get("/api/achievements/featured", async (req, res) => {
    try {
      const achievements = await storage.getFeaturedAchievements();
      res.json(achievements);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured achievements" });
    }
  });

  // Facilities API
  app.get("/api/facilities", async (req, res) => {
    try {
      const facilities = await storage.getFacilities();
      res.json(facilities);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch facilities" });
    }
  });

  app.get("/api/facilities/featured", async (req, res) => {
    try {
      const facilities = await storage.getFeaturedFacilities();
      res.json(facilities);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured facilities" });
    }
  });

  // Alumni API
  app.get("/api/alumni", async (req, res) => {
    try {
      const alumni = await storage.getAlumni();
      res.json(alumni);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch alumni" });
    }
  });

  app.get("/api/alumni/featured", async (req, res) => {
    try {
      const alumni = await storage.getFeaturedAlumni();
      res.json(alumni);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured alumni" });
    }
  });

  // Institutional Data API
  app.get("/api/institutional-data", async (req, res) => {
    try {
      const data = await storage.getInstitutionalData();
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch institutional data" });
    }
  });

  app.get("/api/institutional-data/:category", async (req, res) => {
    try {
      const data = await storage.getInstitutionalDataByCategory(req.params.category);
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch institutional data by category" });
    }
  });

  // Authentication API
  app.post("/api/auth/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      
      // Simple authentication - in production, use proper password hashing
      if (username === "admin" && password === "admin123") {
        res.json({ 
          success: true, 
          message: "Login successful",
          user: { id: 1, username: "admin", role: "admin" }
        });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    } catch (error) {
      res.status(500).json({ message: "Authentication failed" });
    }
  });

  app.post("/api/auth/logout", async (req, res) => {
    try {
      res.json({ success: true, message: "Logout successful" });
    } catch (error) {
      res.status(500).json({ message: "Logout failed" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
