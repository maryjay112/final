import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { eq, desc, and, lte, gte } from 'drizzle-orm';
import type { IStorage } from './storage';
import {
  users, programs, news, events, management, contacts, settings,
  testimonials, achievements, facilities, alumni, institutionalData,
  type User, type InsertUser,
  type Program, type InsertProgram,
  type News, type InsertNews,
  type Event, type InsertEvent,
  type Management, type InsertManagement,
  type Contact, type InsertContact,
  type Setting, type InsertSetting,
  type Testimonial, type InsertTestimonial,
  type Achievement, type InsertAchievement,
  type Facility, type InsertFacility,
  type Alumni, type InsertAlumni,
  type InstitutionalData, type InsertInstitutionalData
} from '../shared/schema';

export class PostgresStorage implements IStorage {
  private db;

  constructor() {
    const sql = neon(process.env.DATABASE_URL!);
    this.db = drizzle(sql);
  }

  // Users
  async getUser(id: number): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(user: InsertUser): Promise<User> {
    const result = await this.db.insert(users).values(user).returning();
    return result[0];
  }

  // Programs
  async getPrograms(): Promise<Program[]> {
    return await this.db.select().from(programs).orderBy(desc(programs.id));
  }

  async getFeaturedPrograms(): Promise<Program[]> {
    return await this.db.select().from(programs).where(eq(programs.featured, true)).orderBy(desc(programs.id));
  }

  async getProgram(id: number): Promise<Program | undefined> {
    const result = await this.db.select().from(programs).where(eq(programs.id, id));
    return result[0];
  }

  async createProgram(program: InsertProgram): Promise<Program> {
    const result = await this.db.insert(programs).values(program).returning();
    return result[0];
  }

  async updateProgram(id: number, updateData: Partial<InsertProgram>): Promise<Program | undefined> {
    const result = await this.db.update(programs)
      .set(updateData)
      .where(eq(programs.id, id))
      .returning();
    return result[0];
  }

  async deleteProgram(id: number): Promise<boolean> {
    const result = await this.db.delete(programs).where(eq(programs.id, id)).returning();
    return result.length > 0;
  }

  // News
  async getNews(): Promise<News[]> {
    return await this.db.select().from(news).orderBy(desc(news.publishedAt));
  }

  async getFeaturedNews(): Promise<News[]> {
    return await this.db.select().from(news).where(eq(news.featured, true)).orderBy(desc(news.publishedAt));
  }

  async getNewsItem(id: number): Promise<News | undefined> {
    const result = await this.db.select().from(news).where(eq(news.id, id));
    return result[0];
  }

  async createNews(newsItem: InsertNews): Promise<News> {
    const result = await this.db.insert(news).values({
      ...newsItem,
      publishedAt: new Date()
    }).returning();
    return result[0];
  }

  async updateNews(id: number, updateData: Partial<InsertNews>): Promise<News | undefined> {
    const result = await this.db.update(news)
      .set(updateData)
      .where(eq(news.id, id))
      .returning();
    return result[0];
  }

  async deleteNews(id: number): Promise<boolean> {
    const result = await this.db.delete(news).where(eq(news.id, id)).returning();
    return result.length > 0;
  }

  // Events
  async getEvents(): Promise<Event[]> {
    return await this.db.select().from(events).orderBy(desc(events.date));
  }

  async getUpcomingEvents(): Promise<Event[]> {
    const now = new Date();
    return await this.db.select().from(events)
      .where(gte(events.date, now))
      .orderBy(events.date);
  }

  async getEvent(id: number): Promise<Event | undefined> {
    const result = await this.db.select().from(events).where(eq(events.id, id));
    return result[0];
  }

  async createEvent(event: InsertEvent): Promise<Event> {
    const result = await this.db.insert(events).values(event).returning();
    return result[0];
  }

  // Management
  async getManagementTeam(): Promise<Management[]> {
    return await this.db.select().from(management).orderBy(management.id);
  }

  async getManagementMember(id: number): Promise<Management | undefined> {
    const result = await this.db.select().from(management).where(eq(management.id, id));
    return result[0];
  }

  async createManagementMember(member: InsertManagement): Promise<Management> {
    const result = await this.db.insert(management).values(member).returning();
    return result[0];
  }

  // Contacts
  async createContact(contact: InsertContact): Promise<Contact> {
    const result = await this.db.insert(contacts).values({
      ...contact,
      createdAt: new Date()
    }).returning();
    return result[0];
  }

  async getContacts(): Promise<Contact[]> {
    return await this.db.select().from(contacts).orderBy(desc(contacts.createdAt));
  }

  // Settings
  async getSetting(key: string): Promise<Setting | undefined> {
    const result = await this.db.select().from(settings).where(eq(settings.key, key));
    return result[0];
  }

  async setSetting(setting: InsertSetting): Promise<Setting> {
    const existing = await this.getSetting(setting.key);
    if (existing) {
      const result = await this.db.update(settings)
        .set({ value: setting.value })
        .where(eq(settings.key, setting.key))
        .returning();
      return result[0];
    } else {
      const result = await this.db.insert(settings).values(setting).returning();
      return result[0];
    }
  }

  // Testimonials
  async getTestimonials(): Promise<Testimonial[]> {
    return await this.db.select().from(testimonials).orderBy(desc(testimonials.id));
  }

  async getFeaturedTestimonials(): Promise<Testimonial[]> {
    return await this.db.select().from(testimonials).where(eq(testimonials.featured, true)).orderBy(desc(testimonials.id));
  }

  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const result = await this.db.insert(testimonials).values(testimonial).returning();
    return result[0];
  }

  // Achievements
  async getAchievements(): Promise<Achievement[]> {
    return await this.db.select().from(achievements).orderBy(desc(achievements.id));
  }

  async getFeaturedAchievements(): Promise<Achievement[]> {
    return await this.db.select().from(achievements).where(eq(achievements.featured, true)).orderBy(desc(achievements.id));
  }

  async createAchievement(achievement: InsertAchievement): Promise<Achievement> {
    const result = await this.db.insert(achievements).values(achievement).returning();
    return result[0];
  }

  // Facilities
  async getFacilities(): Promise<Facility[]> {
    return await this.db.select().from(facilities).orderBy(desc(facilities.id));
  }

  async getFeaturedFacilities(): Promise<Facility[]> {
    return await this.db.select().from(facilities).where(eq(facilities.featured, true)).orderBy(desc(facilities.id));
  }

  async createFacility(facility: InsertFacility): Promise<Facility> {
    const result = await this.db.insert(facilities).values(facility).returning();
    return result[0];
  }

  // Alumni
  async getAlumni(): Promise<Alumni[]> {
    return await this.db.select().from(alumni).orderBy(desc(alumni.id));
  }

  async getFeaturedAlumni(): Promise<Alumni[]> {
    return await this.db.select().from(alumni).where(eq(alumni.featured, true)).orderBy(desc(alumni.id));
  }

  async createAlumni(alumniData: InsertAlumni): Promise<Alumni> {
    const result = await this.db.insert(alumni).values(alumniData).returning();
    return result[0];
  }

  // Institutional Data
  async getInstitutionalData(): Promise<InstitutionalData[]> {
    return await this.db.select().from(institutionalData).orderBy(desc(institutionalData.lastUpdated));
  }

  async getInstitutionalDataByCategory(category: string): Promise<InstitutionalData[]> {
    return await this.db.select().from(institutionalData)
      .where(eq(institutionalData.category, category))
      .orderBy(desc(institutionalData.lastUpdated));
  }

  async createInstitutionalData(data: InsertInstitutionalData): Promise<InstitutionalData> {
    const result = await this.db.insert(institutionalData).values({
      ...data,
      lastUpdated: new Date()
    }).returning();
    return result[0];
  }
}