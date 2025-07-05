import type { Request, Response, NextFunction } from "express";
import type { User } from "@shared/schema";

// Extend Express Request type to include user
declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

// Rate limiting configuration
const loginAttempts = new Map<string, { count: number; lastAttempt: Date }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const MAX_ATTEMPTS = 5;

export function rateLimitLogin(req: Request, res: Response, next: NextFunction) {
  const ip = req.ip || req.connection.remoteAddress || 'unknown';
  const now = new Date();
  
  const attempts = loginAttempts.get(ip);
  
  if (attempts) {
    // Reset if window has expired
    if (now.getTime() - attempts.lastAttempt.getTime() > RATE_LIMIT_WINDOW) {
      loginAttempts.delete(ip);
    } else if (attempts.count >= MAX_ATTEMPTS) {
      return res.status(429).json({ 
        message: "Too many login attempts. Please try again later.",
        retryAfter: RATE_LIMIT_WINDOW / 1000
      });
    }
  }
  
  next();
}

export function recordLoginAttempt(req: Request, success: boolean) {
  const ip = req.ip || req.connection.remoteAddress || 'unknown';
  const now = new Date();
  
  if (success) {
    // Clear rate limit on successful login
    loginAttempts.delete(ip);
  } else {
    // Increment failed attempts
    const current = loginAttempts.get(ip) || { count: 0, lastAttempt: now };
    loginAttempts.set(ip, {
      count: current.count + 1,
      lastAttempt: now
    });
  }
}

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (!req.session?.user) {
    return res.status(401).json({ message: "Authentication required" });
  }
  
  req.user = req.session.user;
  next();
}

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  if (!req.session?.user) {
    return res.status(401).json({ message: "Authentication required" });
  }
  
  // For now, any authenticated user is considered admin
  // In the future, you can add role-based access control
  req.user = req.session.user;
  next();
}

// Input sanitization middleware
export function sanitizeInput(req: Request, res: Response, next: NextFunction) {
  if (req.body) {
    // Basic sanitization - remove potential XSS attempts
    const sanitize = (obj: any): any => {
      if (typeof obj === 'string') {
        return obj
          .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
          .replace(/javascript:/gi, '')
          .replace(/on\w+\s*=/gi, '')
          .trim();
      } else if (Array.isArray(obj)) {
        return obj.map(sanitize);
      } else if (obj && typeof obj === 'object') {
        const sanitized: any = {};
        for (const [key, value] of Object.entries(obj)) {
          sanitized[key] = sanitize(value);
        }
        return sanitized;
      }
      return obj;
    };
    
    req.body = sanitize(req.body);
  }
  
  next();
}