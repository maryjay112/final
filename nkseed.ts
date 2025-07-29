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

  const programs: InsertProgram[] = [
    {
      title: "Engineering Technology",
      description: "Comprehensive program covering mechanical, electrical, and civil engineering principles with hands-on laboratory experience.",
      duration: "2-3 Years",
      category: "Engineering",
      featured: true,
      icon: "fas fa-cogs",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      color: "poly-blue"
    },
    {
      title: "Computing Technology",
      description: "Modern computing curriculum including Artificial intelligence, networking, cybersecurity, and software development.",
      duration: "2-3 Years",
      category: "Technology",
      featured: true,
      icon: "fas fa-laptop-code",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      color: "poly-green"
    },
    {
      title: "Business Administration",
      description: "Comprehensive business education covering management, marketing, finance, and entrepreneurship skills.",
      duration: "2-3 Years",
      category: "Business",
      featured: true,
      icon: "fas fa-chart-line",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      color: "poly-red"
    }
  ];
  for (const p of programs) await storage.createProgram(p);

  const events: InsertEvent[] = [
    {
      title: "Annual Technology Innovation Summit",
      description: "Join industry leaders and students for a day of innovation, networking, and technology showcase featuring the latest trends in engineering and computer science.",
      date: new Date("2025-01-15"),
      time: "2:00 PM - 6:00 PM",
      location: "Main Auditorium",
      category: "Technology",
      featured: true
    },
    {
      title: "Career Fair & Job Placement Drive",
      description: "Meet with top employers from various industries. Excellent opportunity for final year students and recent graduates to explore career opportunities.",
      date: new Date("2025-01-22"),
      time: "10:00 AM - 4:00 PM",
      location: "Sports Complex",
      category: "Career",
      featured: true
    },
    {
      title: "Entrepreneurship Bootcamp",
      description: "3-day intensive program on starting and scaling tech businesses. Learn from successful entrepreneurs and industry mentors.",
      date: new Date("2025-01-28"),
      time: "9:00 AM - 5:00 PM",
      location: "Innovation Hub",
      category: "Workshop",
      featured: true
    },
    {
      title: "Annual Cultural Festival",
      description: "Celebrate Nigeria's rich cultural heritage with music, dance, art exhibitions, and traditional cuisine from across the nation.",
      date: new Date("2025-02-05"),
      time: "12:00 PM - 10:00 PM",
      location: "Campus Grounds",
      category: "Cultural",
      featured: true
    },
    {
      title: "Inter-Polytechnic Sports Championship",
      description: "Annual sports competition featuring football, basketball, athletics, and other sporting events with polytechnics across Nigeria.",
      date: new Date("2025-02-12"),
      time: "8:00 AM - 6:00 PM",
      location: "Sports Complex",
      category: "Sports",
      featured: true
    },
    {
      title: "AI & Machine Learning Workshop",
      description: "Hands-on workshop exploring artificial intelligence applications in engineering and business. Open to all students and faculty.",
      date: new Date("2025-02-18"),
      time: "1:00 PM - 5:00 PM",
      location: "Computer Lab A",
      category: "Workshop",
      featured: true
    }
  ];
  for (const e of events) await storage.createEvent(e);

 const management: InsertManagement[] = [
      {
        name: "Dr. Sani ManYahya",
        position: "Rector",
        bio: "Distinguished academic leader with over 25 years of experience in technical education and institutional management.",
        image: "/rector.jpg",
        email: "rector@fedpolyede.edu.ng",
        socialLinks: { linkedin: "#", email: "rector@fedpolyede.edu.ng" }
      },
      {
        name: "Alh Lawal  Isiaka A.",
        position: "Deputy Rector (Academic)",
        bio: "Expert in curriculum development and academic excellence with a focus on innovative teaching methodologies.",
        image: "/dracad.jpg",
        email: "deputyrector@fedpolyede.edu.ng",
        socialLinks: { linkedin: "#", email: "deputyrector@fedpolyede.edu.ng" }
      },
      {
        name: "Dr Ileladewa A. A",
        position: "Deputy Rector (Administration)",
        bio: "Computer Science professional with extensive experience in administrative leadership and institutional development.",
        image: "/dr_admin.jpg",
        email: "deputyrectoradmin@fedpolyede.edu.ng",
        socialLinks: { linkedin: "#", email: "deputyrectoradmin@fedpolyede.edu.ng" }
      },
      {
        name: "Ms. Margareth Oyedoyin R.",
        position: "Ag. Registrar",
        bio: "Seasoned administrator ensuring smooth operations and maintaining the highest standards of institutional governance.",
        image: "/registrar.jpg",
        email: "registrar@fedpolyede.edu.ng",
        socialLinks: { linkedin: "#", email: "registrar@fedpolyede.edu.ng" }
      },
      {
        name: "Mr Titus Olagunju",
        position: "Ag. Bursar",
        bio: "Financial management expert overseeing the polytechnic's fiscal operations and ensuring transparent financial governance.",
        image: "/bursar.jpg",
        email: "bursar@fedpolyede.edu.ng",
        socialLinks: { linkedin: "#", email: "bursar@fedpolyede.edu.ng" }
      },
      {
        name: "Dr. Akorede Muftau",
        position: "Polytechnic Librarian",
        bio: "Information science specialist leading the development of digital learning resources and knowledge management systems.",
        image: "/librarian.jpg",
        email: "librarian@fedpolyede.edu.ng",
        socialLinks: { linkedin: "#", email: "librarian@fedpolyede.edu.ng" }
      }
    ];
  for (const m of management) await storage.createManagementMember(m);

   



  const testimonials: InsertTestimonial[] = [
    {
      name: "Agbeniga Musefiu",
      position: "CTO",
      company: "AidaPay",
      content: "Federal Polytechnic Ede gave me the technical foundation and practical skills I needed to excel in the tech industry. The hands-on learning approach enabled me to launch my startup.",
      image: "/musefiu.jpg",
      rating: 5,
      featured: true
    },
    {
      name: "Castro",
      position: "Programmer",
      company: "Interswitch",
      content: "The entrepreneurship program at FedPolyEde was instrumental in launching my leather goods startup. The mentorship and business incubation support were invaluable.",
      image: "/castro.jpg",
      rating: 5,
      featured: true
    },
    {
      name: "Ms Kafayat Shittu",
      position: "MidFielder",
      company: "Giresun Sanayispor FC- Turkey.",
      content: "In addition to the intense and engaging scholarship we receive at FedPolyEde, the academic calendar is never concluded without sporting competition- we learn , we play! This has really helped shaped my career in football.",
      image: "/kafayat.jpg",
      rating: 5,
      featured: true
    }
  ];
  for (const t of testimonials) await storage.createTestimonial(t);

  const achievements: InsertAchievement[] = [
    {
      title: "National Excellence Award",
      description: "Best Polytechnic in Technical Education 2023",
      icon: "fas fa-award",
      year: 2023,
      featured: true
    },
    {
      title: "NSQ Certification",
      description: "Quality Management System Certified",
      icon: "fas fa-certificate",
      year: 2022,
      featured: true
    },
    {
      title: "International Partnership",
      description: "Collaborations with 15+ Global Universities",
      icon: "fas fa-globe",
      year: 2024,
      featured: true
    },
    {
      title: "Innovation Hub",
      description: "5+ Patent Applications Filed",
      icon: "fas fa-lightbulb",
      year: 2024,
      featured: true
    }
  ];
  for (const a of achievements) await storage.createAchievement(a);

  const institutionalData: InsertInstitutionalData[] = [
    {
      dataType: "enrollment",
      title: "Total Student Enrollment",
      value: "15,000",
      description: "Current academic session total enrollment across all programs",
      category: "Student Statistics"
    },
    {
      dataType: "graduation_rate",
      title: "Graduate Success Rate",
      value: "97.8%",
      description: "Percentage of students who successfully complete their programs",
      category: "Academic Performance"
    },
    {
      dataType: "employment_rate",
      title: "Graduate Employment Rate",
      value: "87.5%",
      description: "Percentage of graduates employed within 6 months of graduation",
      category: "Career Outcomes"
    },
    {
      dataType: "faculty_count",
      title: "Total Faculty Members",
      value: "400",
      description: "Number of full-time academic staff across all departments",
      category: "Human Resources"
    },
    {
      dataType: "programs_offered",
      title: "Academic Programs",
      value: "40",
      description: "Total number of accredited programs offered across all schools",
      category: "Academic Offerings"
    },
    {
      dataType: "research_grants",
      title: "Active Research Grants",
      value: "₦850M",
      description: "Total value of current research grants and funding",
      category: "Research & Innovation"
    },
    {
      dataType: "international_partnerships",
      title: "International Partnerships",
      value: "10",
      description: "Number of active partnerships with international institutions",
      category: "Global Engagement"
    },
    {
      dataType: "industry_collaborations",
      title: "Industry Collaborations",
      value: "50",
      description: "Number of active partnerships with industry organizations",
      category: "Industry Relations"
    },
    {
      dataType: "infrastructure_investment",
      title: "Infrastructure Investment (2024)",
      value: "₦4.2B",
      description: "Total investment in infrastructure development this year",
      category: "Infrastructure"
    },
    {
      dataType: "digital_resources",
      title: "Digital Library Resources",
      value: "75,000+",
      description: "Number of digital books, journals, and research materials",
      category: "Digital Resources"
    }
  ];
  for (const i of institutionalData) await storage.createInstitutionalData(i);

  console.log("✅ Seeding complete.");
}

seed().catch(err => {
  console.error("❌ Seeding failed:", err);
});
