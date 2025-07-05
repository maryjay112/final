import { 
  users, programs, news, events, management, contacts, settings, 
  testimonials, achievements, facilities, alumni, institutionalData,
  type User, type InsertUser, type Program, type InsertProgram,
  type News, type InsertNews, type Event, type InsertEvent,
  type Management, type InsertManagement, type Contact, type InsertContact,
  type Setting, type InsertSetting, type Testimonial, type InsertTestimonial,
  type Achievement, type InsertAchievement, type Facility, type InsertFacility,
  type Alumni, type InsertAlumni, type InstitutionalData, type InsertInstitutionalData
} from "@shared/schema";


export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Programs
  getPrograms(): Promise<Program[]>;
  getFeaturedPrograms(): Promise<Program[]>;
  getProgram(id: number): Promise<Program | undefined>;
  createProgram(program: InsertProgram): Promise<Program>;
  updateProgram(id: number, program: Partial<InsertProgram>): Promise<Program | undefined>;
  deleteProgram(id: number): Promise<boolean>;

  // News
  getNews(): Promise<News[]>;
  getFeaturedNews(): Promise<News[]>;
  getNewsItem(id: number): Promise<News | undefined>;
  createNews(news: InsertNews): Promise<News>;
  updateNews(id: number, news: Partial<InsertNews>): Promise<News | undefined>;
  deleteNews(id: number): Promise<boolean>;

  // Events
  getEvents(): Promise<Event[]>;
  getUpcomingEvents(): Promise<Event[]>;
  getEvent(id: number): Promise<Event | undefined>;
  createEvent(event: InsertEvent): Promise<Event>;

  // Management
  getManagementTeam(): Promise<Management[]>;
  getManagementMember(id: number): Promise<Management | undefined>;
  createManagementMember(member: InsertManagement): Promise<Management>;

  // Contacts
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;

  // Settings
  getSetting(key: string): Promise<Setting | undefined>;
  setSetting(setting: InsertSetting): Promise<Setting>;

  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
  getFeaturedTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;

  // Achievements
  getAchievements(): Promise<Achievement[]>;
  getFeaturedAchievements(): Promise<Achievement[]>;
  createAchievement(achievement: InsertAchievement): Promise<Achievement>;

  // Facilities
  getFacilities(): Promise<Facility[]>;
  getFeaturedFacilities(): Promise<Facility[]>;
  createFacility(facility: InsertFacility): Promise<Facility>;

  // Alumni
  getAlumni(): Promise<Alumni[]>;
  getFeaturedAlumni(): Promise<Alumni[]>;
  createAlumni(alumni: InsertAlumni): Promise<Alumni>;

  // Institutional Data
  getInstitutionalData(): Promise<InstitutionalData[]>;
  getInstitutionalDataByCategory(category: string): Promise<InstitutionalData[]>;
  createInstitutionalData(data: InsertInstitutionalData): Promise<InstitutionalData>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User> = new Map();
  private programs: Map<number, Program> = new Map();
  private news: Map<number, News> = new Map();
  private events: Map<number, Event> = new Map();
  private management: Map<number, Management> = new Map();
  private contacts: Map<number, Contact> = new Map();
  private settings: Map<string, Setting> = new Map();
  private testimonials: Map<number, Testimonial> = new Map();
  private achievements: Map<number, Achievement> = new Map();
  private facilities: Map<number, Facility> = new Map();
  private alumni: Map<number, Alumni> = new Map();
  private institutionalData: Map<number, InstitutionalData> = new Map();
  
  private currentUserId = 1;
  private currentProgramId = 1;
  private currentNewsId = 1;
  private currentEventId = 1;
  private currentManagementId = 1;
  private currentContactId = 1;
  private currentSettingId = 1;
  private currentTestimonialId = 1;
  private currentAchievementId = 1;
  private currentFacilityId = 1;
  private currentAlumniId = 1;
  private currentInstitutionalDataId = 1;

  constructor() {
    this.seedData();
  }

  private seedData() {
    // Seed Programs
    const programsData: InsertProgram[] = [
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

    programsData.forEach(program => this.createProgram(program));

    // Seed Events
    const eventsData: InsertEvent[] = [
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
        featured: false
      },
      {
        title: "Entrepreneurship Bootcamp",
        description: "3-day intensive program on starting and scaling tech businesses. Learn from successful entrepreneurs and industry mentors.",
        date: new Date("2025-01-28"),
        time: "9:00 AM - 5:00 PM",
        location: "Innovation Hub",
        category: "Workshop",
        featured: false
      },
      {
        title: "Annual Cultural Festival",
        description: "Celebrate Nigeria's rich cultural heritage with music, dance, art exhibitions, and traditional cuisine from across the nation.",
        date: new Date("2025-02-05"),
        time: "12:00 PM - 10:00 PM",
        location: "Campus Grounds",
        category: "Cultural",
        featured: false
      },
      {
        title: "Inter-Polytechnic Sports Championship",
        description: "Annual sports competition featuring football, basketball, athletics, and other sporting events with polytechnics across Nigeria.",
        date: new Date("2025-02-12"),
        time: "8:00 AM - 6:00 PM",
        location: "Sports Complex",
        category: "Sports",
        featured: false
      },
      {
        title: "AI & Machine Learning Workshop",
        description: "Hands-on workshop exploring artificial intelligence applications in engineering and business. Open to all students and faculty.",
        date: new Date("2025-02-18"),
        time: "1:00 PM - 5:00 PM",
        location: "Computer Lab A",
        category: "Workshop",
        featured: false
      }
    ];

    eventsData.forEach(event => this.createEvent(event));

    // Seed Management
    const managementData: InsertManagement[] = [
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

    managementData.forEach(member => this.createManagementMember(member));

    // Seed Testimonials
    const testimonialsData: InsertTestimonial[] = [
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

    testimonialsData.forEach(testimonial => this.createTestimonial(testimonial));

    // Seed Achievements
    const achievementsData: InsertAchievement[] = [
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

    achievementsData.forEach(achievement => this.createAchievement(achievement));

    // Seed Facilities
    const facilitiesData: InsertFacility[] = [
      {
        name: "Advanced Computer Labs",
        description: "Modern computing facilities with latest software and high-speed internet connectivity.",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        category: "Technology",
        featured: true
      },
      {
        name: "Engineering Workshops",
        description: "Fully equipped workshops with industrial-grade machinery and tools for hands-on learning.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        category: "Engineering",
        featured: true
      },
      {
        name: "Digital Library",
        description: "Extensive collection of books, journals, and digital resources for research and study.",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        category: "Academic",
        featured: true
      },
      {
        name: "Science Laboratories",
        description: "Well-equipped labs for chemistry, physics, and biology with modern instruments.",
        image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        category: "Science",
        featured: true
      },
      {
        name: "Main Auditorium",
        description: "1,200-capacity auditorium for lectures, seminars, and cultural events.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        category: "Academic",
        featured: true
      },
      {
        name: "Student Housing",
        description: "Modern dormitories providing comfortable accommodation for students from across Nigeria.",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        category: "Accommodation",
        featured: true
      }
    ];

    facilitiesData.forEach(facility => this.createFacility(facility));

    // Seed Alumni
    const alumniData: InsertAlumni[] = [
      {
        name: "Mrs Adedoyin Balogun",
        position: "Alumni President",
        company: "Federal Polytechnic Ede",
        content: "FedPolyEde shaped my  mindset and work ethic, preparing me for leadership roles.",
        image: "/alumnipres.jpg",
        graduationYear: 1995,
        featured: true
      },
      {
        name: "Dr. Adekunle Adewale",
        position: "Director, ICT",
        company: "Federal Polytehnic Ede",
        content: "The technical skills fostered at FedPolyEde gave me the confidence to develop cutting edge solutions for the institution.",
        image: "/musefiu.jpg",
        graduationYear: 1994,
        featured: true
      },
      {
        name: "Engr. Mutiu Agboola",
        position: "Sub-Dean, Student Affairs",
        company: "Federal Polytechnic Ede",
        content: "The  training I received continues to serve me well in cordinating and directing the Student affairs Unit.",
        image: "/mutiu.jpg",
        graduationYear: 2000,
        featured: true
      }
    ];

    alumniData.forEach(alumnus => this.createAlumni(alumnus));

    // Seed News
    const newsData: InsertNews[] = [
      {
        title: "Federal Polytechnic Ede Receives N2.5 Billion Infrastructure Grant",
        content: "The Federal Government has approved a substantial N2.5 billion infrastructure development grant for Federal Polytechnic Ede, aimed at modernizing laboratories, workshops, and campus facilities. This investment will significantly enhance the institution's capacity to deliver world-class technical education and prepare students for Industry 4.0 challenges.",
        summary: "FedPolyEde receives major federal grant for infrastructure development and modernization of learning facilities.",
        category: "Infrastructure",
        featured: true,
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
      },
      {
        title: "New Partnership with Microsoft Nigeria for Digital Skills Training",
        content: "Federal Polytechnic Ede has signed a groundbreaking partnership agreement with Microsoft Nigeria to provide advanced digital skills training for students and faculty. The collaboration includes access to Microsoft Azure cloud services, Office 365 Educational licenses, and specialized certification programs in data science and artificial intelligence.",
        summary: "Strategic partnership with Microsoft Nigeria to enhance digital literacy and cloud computing skills.",
        category: "Technology",
        featured: true,
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
      },
      {
        title: "FedPolyEde Students Win National Innovation Challenge",
        content: "A team of Engineering Technology students from Federal Polytechnic Ede has emerged winners of the 2024 National Innovation Challenge with their revolutionary water purification system designed for rural communities. The solar-powered device can process 500 liters of clean water daily and has attracted interest from international development organizations.",
        summary: "Student innovation team wins national competition with groundbreaking water purification technology.",
        category: "Innovation",
        featured: false,
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
      },
      {
        title: "New Centre for Renewable Energy Technology Launched",
        content: "The Federal Polytechnic Ede has officially launched its Centre for Renewable Energy Technology, a state-of-the-art facility dedicated to research and training in solar, wind, and biomass energy systems. The centre will serve as a hub for sustainable energy research and provide specialized training programs for industry professionals.",
        summary: "Launch of dedicated renewable energy research and training centre on campus.",
        category: "Research",
        featured: false,
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
      },
      {
        title: "International Accreditation for Engineering Programs",
        content: "Federal Polytechnic Ede's Engineering Technology programs have received international accreditation from the International Engineering Alliance (IEA), making graduates eligible for professional recognition in over 20 countries. This achievement positions the institution among the top technical education providers in West Africa.",
        summary: "Engineering programs receive prestigious international accreditation from IEA.",
        category: "Accreditation",
        featured: false,
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
      }
    ];

    newsData.forEach(news => this.createNews(news));

    // Seed Institutional Data 
    const institutionalDataItems: InsertInstitutionalData[] = [
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

    // Will seed institutional data after initialization
    setTimeout(() => {
      institutionalDataItems.forEach(data => this.createInstitutionalData(data));
    }, 100);
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Program methods
  async getPrograms(): Promise<Program[]> {
    return Array.from(this.programs.values());
  }

  async getFeaturedPrograms(): Promise<Program[]> {
    return Array.from(this.programs.values()).filter(program => program.featured);
  }

  async getProgram(id: number): Promise<Program | undefined> {
    return this.programs.get(id);
  }

  async createProgram(insertProgram: InsertProgram): Promise<Program> {
    const id = this.currentProgramId++;
    const program: Program = { 
      ...insertProgram, 
      id, 
      featured: insertProgram.featured ?? false 
    };
    this.programs.set(id, program);
    return program;
  }

  async updateProgram(id: number, updateData: Partial<InsertProgram>): Promise<Program | undefined> {
    const existingProgram = this.programs.get(id);
    if (!existingProgram) return undefined;
    
    const updatedProgram: Program = {
      ...existingProgram,
      ...updateData,
      id,
      featured: updateData.featured ?? existingProgram.featured
    };
    this.programs.set(id, updatedProgram);
    return updatedProgram;
  }

  async deleteProgram(id: number): Promise<boolean> {
    return this.programs.delete(id);
  }

  // News methods
  async getNews(): Promise<News[]> {
    return Array.from(this.news.values());
  }

  async getFeaturedNews(): Promise<News[]> {
    return Array.from(this.news.values()).filter(news => news.featured);
  }

  async getNewsItem(id: number): Promise<News | undefined> {
    return this.news.get(id);
  }

  async createNews(insertNews: InsertNews): Promise<News> {
    const id = this.currentNewsId++;
    const news: News = { 
      ...insertNews, 
      id, 
      publishedAt: new Date(),
      featured: insertNews.featured ?? false 
    };
    this.news.set(id, news);
    return news;
  }

  async updateNews(id: number, updateData: Partial<InsertNews>): Promise<News | undefined> {
    const existingNews = this.news.get(id);
    if (!existingNews) return undefined;
    
    const updatedNews: News = {
      ...existingNews,
      ...updateData,
      id,
      featured: updateData.featured ?? existingNews.featured
    };
    this.news.set(id, updatedNews);
    return updatedNews;
  }

  async deleteNews(id: number): Promise<boolean> {
    return this.news.delete(id);
  }

  // Event methods
  async getEvents(): Promise<Event[]> {
    return Array.from(this.events.values());
  }

  async getUpcomingEvents(): Promise<Event[]> {
    const now = new Date();
    return Array.from(this.events.values())
      .filter(event => event.date > now)
      .sort((a, b) => a.date.getTime() - b.date.getTime());
  }

  async getEvent(id: number): Promise<Event | undefined> {
    return this.events.get(id);
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const id = this.currentEventId++;
    const event: Event = { 
      ...insertEvent, 
      id,
      featured: insertEvent.featured ?? false,
      image: insertEvent.image ?? null
    };
    this.events.set(id, event);
    return event;
  }

  // Management methods
  async getManagementTeam(): Promise<Management[]> {
    return Array.from(this.management.values());
  }

  async getManagementMember(id: number): Promise<Management | undefined> {
    return this.management.get(id);
  }

  async createManagementMember(insertMember: InsertManagement): Promise<Management> {
    const id = this.currentManagementId++;
    const member: Management = { 
      ...insertMember, 
      id,
      email: insertMember.email ?? null,
      linkedin: insertMember.linkedin ?? null,
      socialLinks: insertMember.socialLinks ?? null
    };
    this.management.set(id, member);
    return member;
  }

  // Contact methods
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { ...insertContact, id, createdAt: new Date() };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  // Settings methods
  async getSetting(key: string): Promise<Setting | undefined> {
    return this.settings.get(key);
  }

  async setSetting(insertSetting: InsertSetting): Promise<Setting> {
    const existing = this.settings.get(insertSetting.key);
    if (existing) {
      existing.value = insertSetting.value;
      return existing;
    }
    
    const id = this.currentSettingId++;
    const setting: Setting = { ...insertSetting, id };
    this.settings.set(insertSetting.key, setting);
    return setting;
  }

  // Testimonial methods
  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async getFeaturedTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values()).filter(testimonial => testimonial.featured);
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentTestimonialId++;
    const testimonial: Testimonial = { 
      ...insertTestimonial, 
      id,
      featured: insertTestimonial.featured ?? false,
      rating: insertTestimonial.rating ?? null
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  // Achievement methods
  async getAchievements(): Promise<Achievement[]> {
    return Array.from(this.achievements.values());
  }

  async getFeaturedAchievements(): Promise<Achievement[]> {
    return Array.from(this.achievements.values()).filter(achievement => achievement.featured);
  }

  async createAchievement(insertAchievement: InsertAchievement): Promise<Achievement> {
    const id = this.currentAchievementId++;
    const achievement: Achievement = { 
      ...insertAchievement, 
      id,
      featured: insertAchievement.featured ?? false,
      year: insertAchievement.year ?? null
    };
    this.achievements.set(id, achievement);
    return achievement;
  }

  // Facility methods
  async getFacilities(): Promise<Facility[]> {
    return Array.from(this.facilities.values());
  }

  async getFeaturedFacilities(): Promise<Facility[]> {
    return Array.from(this.facilities.values()).filter(facility => facility.featured);
  }

  async createFacility(insertFacility: InsertFacility): Promise<Facility> {
    const id = this.currentFacilityId++;
    const facility: Facility = { 
      ...insertFacility, 
      id,
      featured: insertFacility.featured ?? false
    };
    this.facilities.set(id, facility);
    return facility;
  }

  // Alumni methods
  async getAlumni(): Promise<Alumni[]> {
    return Array.from(this.alumni.values());
  }

  async getFeaturedAlumni(): Promise<Alumni[]> {
    return Array.from(this.alumni.values()).filter(alumni => alumni.featured);
  }

  async createAlumni(insertAlumni: InsertAlumni): Promise<Alumni> {
    const id = this.currentAlumniId++;
    const alumni: Alumni = { 
      ...insertAlumni, 
      id,
      featured: insertAlumni.featured ?? false,
      graduationYear: insertAlumni.graduationYear ?? null
    };
    this.alumni.set(id, alumni);
    return alumni;
  }

  // Institutional Data methods
  async getInstitutionalData(): Promise<InstitutionalData[]> {
    return Array.from(this.institutionalData.values());
  }

  async getInstitutionalDataByCategory(category: string): Promise<InstitutionalData[]> {
    return Array.from(this.institutionalData.values()).filter(data => data.category === category);
  }

  async createInstitutionalData(insertData: InsertInstitutionalData): Promise<InstitutionalData> {
    const id = this.currentInstitutionalDataId++;
    const data: InstitutionalData = { 
      ...insertData, 
      id, 
      lastUpdated: new Date(),
      description: insertData.description ?? null
    };
    this.institutionalData.set(id, data);
    return data;
  }
}

import { PostgresStorage } from './storage.postgres';

export const storage = process.env.DATABASE_URL ? new PostgresStorage() : new MemStorage();
