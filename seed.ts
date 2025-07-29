import 'dotenv/config';

// seed.ts
import { PostgresStorage } from './server/storage.postgres';
import {
  type InsertProgram, type InsertEvent, type InsertManagement,
  type InsertTestimonial, type InsertAchievement, type InsertFacility,
  type InsertAlumni, type InsertNews, type InsertInstitutionalData
} from '@shared/schema';

const storage = new PostgresStorage();

async function seed() {
  console.log("🚀 Starting seeding...");

   

   const events: InsertEvent[] = [
  {
    title: "Annual Technology Innovation Summit",
    description: "Join industry leaders and students for a day of innovation, networking, and technology showcase featuring the latest trends in engineering and computer science.",
    date: new Date("2025-12-15"),
    time: "2:00 PM - 6:00 PM",
    location: "Main Auditorium",
    category: "Technology",
    featured: true,
    image: "https://source.unsplash.com/600x300/?technology,conference"
  },
  {
    title: "Career Fair & Job Placement Drive",
    description: "Meet with top employers from various industries. Excellent opportunity for final year students and recent graduates to explore career opportunities.",
    date: new Date("2025-12-22"),
    time: "10:00 AM - 4:00 PM",
    location: "Sports Complex",
    category: "Career",
    featured: true,
    image: "https://source.unsplash.com/600x300/?career,fair,job"
  },
  {
    title: "Entrepreneurship Bootcamp",
    description: "3-day intensive program on starting and scaling tech businesses. Learn from successful entrepreneurs and industry mentors.",
    date: new Date("2025-12-28"),
    time: "9:00 AM - 5:00 PM",
    location: "Innovation Hub",
    category: "Workshop",
    featured: true,
    image: "https://source.unsplash.com/600x300/?startup,bootcamp,business"
  },
  {
    title: "Annual Cultural Festival",
    description: "Celebrate Nigeria's rich cultural heritage with music, dance, art exhibitions, and traditional cuisine from across the nation.",
    date: new Date("2026-01-05"),
    time: "12:00 PM - 10:00 PM",
    location: "Campus Grounds",
    category: "Cultural",
    featured: true,
    image: "https://source.unsplash.com/600x300/?culture,festival,nigeria"
  },
  {
    title: "Inter-Polytechnic Sports Championship",
    description: "Annual sports competition featuring football, basketball, athletics, and other sporting events with polytechnics across Nigeria.",
    date: new Date("2026-01-12"),
    time: "8:00 AM - 6:00 PM",
    location: "Sports Complex",
    category: "Sports",
    featured: true,
    image: "https://source.unsplash.com/600x300/?sports,football,athletics"
  },
  {
    title: "AI & Machine Learning Workshop",
    description: "Hands-on workshop exploring artificial intelligence applications in engineering and business. Open to all students and faculty.",
    date: new Date("2026-01-18"),
    time: "1:00 PM - 5:00 PM",
    location: "Computer Lab A",
    category: "Workshop",
    featured: true,
    image: "https://source.unsplash.com/600x300/?ai,machinelearning,tech"
  }
];
for (const e of events) {
  await storage.createEvent(e);
  console.log("Seeded event:", e.title);
}



  
   



   

   
  
  console.log("✅ Seeding complete.");
}

seed().catch(err => {
  console.error("❌ Seeding failed:", err);
});
