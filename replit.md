# Federal Polytechnic Ede Website

## Overview

This is a full-stack web application for Federal Polytechnic Ede, a technical education institution in Nigeria. The application serves as the official institutional website featuring comprehensive information about academic programs, news, events, management team, and facilities. Built with modern web technologies, it provides an engaging user experience with responsive design and interactive components.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system and CSS variables
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible components
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation schemas
- **Fonts**: Google Fonts integration (Inter, Open Sans, Poppins)

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful API with consistent error handling
- **Session Management**: Express sessions with PostgreSQL store using connect-pg-simple

### Development Environment
- **Monorepo Structure**: Shared schema and types between client and server in `/shared` directory
- **Hot Reloading**: Vite middleware integration with Express for seamless development
- **Error Handling**: Runtime error overlay for development debugging
- **TypeScript**: Strict mode enabled with comprehensive type checking

## Key Components

### Database Schema
Located in `shared/schema.ts`, the database includes these main entities:
- **Users**: Authentication and user management system
- **Programs**: Academic programs with categories, duration, and featured status
- **News**: News articles with categories, summaries, and publication dates
- **Events**: Institutional events with dates, locations, and categories
- **Management**: Leadership team profiles with positions and social links
- **Contacts**: Contact form submissions storage
- **Settings**: Application configuration key-value store
- **Testimonials**: Student success stories and feedback
- **Achievements**: Academic and institutional achievements
- **Facilities**: Campus facilities with descriptions and images
- **Alumni**: Alumni success stories and profiles

### API Structure
RESTful endpoints following consistent patterns:
- `/api/programs` - Program listings with featured programs endpoint
- `/api/news` - News articles with featured news endpoint
- `/api/events` - Event listings with upcoming events endpoint
- `/api/management` - Leadership team information
- `/api/contacts` - Contact form submission handling
- `/api/settings` - Application settings management
- `/api/testimonials` - Student testimonials
- `/api/achievements` - Institutional achievements
- `/api/facilities` - Campus facilities
- `/api/alumni` - Alumni success stories

### UI Component Library
Custom design system built on shadcn/ui with:
- Consistent color scheme with polytechnic brand colors (blue, green, red)
- Responsive breakpoints and mobile-first design
- Accessible components following ARIA standards
- Form components with validation states
- Interactive elements with smooth animations

## Data Flow

1. **Client Requests**: Frontend components use TanStack Query hooks to fetch data from API endpoints
2. **API Layer**: Express routes handle requests, validate input, and interact with storage layer
3. **Database Operations**: Drizzle ORM provides type-safe database queries to PostgreSQL
4. **Response Caching**: TanStack Query caches responses and manages background updates
5. **State Updates**: React components re-render automatically when data changes

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database driver
- **drizzle-orm**: Type-safe database ORM with PostgreSQL dialect
- **@tanstack/react-query**: Server state management and caching
- **react-hook-form**: Form handling with validation
- **zod**: Schema validation library
- **tailwindcss**: Utility-first CSS framework

### UI Dependencies
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **class-variance-authority**: Utility for creating variant-based component APIs
- **lucide-react**: Icon library with consistent design
- **embla-carousel-react**: Carousel component for testimonials

### Development Dependencies
- **tsx**: TypeScript execution for Node.js
- **vite**: Fast build tool and development server
- **esbuild**: Fast JavaScript bundler for production builds

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds optimized React application to `dist/public`
- **Backend**: esbuild bundles Node.js server to `dist/index.js`
- **Database**: Drizzle migrations in `migrations/` directory

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment setting (development/production)
- **REPL_ID**: Replit-specific configuration for development features

### Production Considerations
- Server serves static frontend assets in production
- Database migrations applied via `db:push` command
- Error handling prevents sensitive information exposure
- Session management with PostgreSQL store for scalability

## Recent Enhancements (June 29, 2025)

### Major Feature Additions
- **Virtual Campus Tour Section**: Interactive 360° campus exploration with key location highlights and tour duration information
- **Student Portal Preview**: Comprehensive digital services showcase including academic records, course registration, fee payment, and mobile app promotion
- **Research & Innovation Excellence**: Detailed research projects display with funding information, progress tracking, and innovation centers
- **Interactive Campus Map**: Live navigation system with GPS coordinates, facility listings, and transportation options
- **Live Campus Feed**: Real-time social media style updates with engagement metrics and community interaction features

### Enhanced Data & Content
- **Expanded Management Team**: Added Deputy Rector Administration, Bursar, and Polytechnic Librarian positions
- **Comprehensive News Section**: Real news articles about infrastructure grants, Microsoft partnerships, and student achievements
- **Institutional Data Dashboard**: Performance indicators specifically requested by Minister Tunji Alausa with key metrics and statistics

### Technical Improvements
- **Enhanced Branding**: Integrated polytechnic brand colors (blue, green, red) throughout all components
- **Improved CSS Structure**: Reorganized CSS imports and added custom polytechnic color utilities
- **API Expansion**: Added institutional data endpoints and enhanced news API with featured content
- **Component Architecture**: Modular design with consistent styling and responsive layouts

## Changelog

```
Changelog:
- June 29, 2025. Initial setup with comprehensive component library
- June 29, 2025. Added major enhancements: Virtual tour, Student portal, Research section, Interactive map, Live campus feed
- June 29, 2025. Enhanced management team, news section, and institutional data for Minister's requirements
- July 2, 2025. MAJOR MILESTONE: Successfully migrated to PostgreSQL and deployed comprehensive CMS
- July 2, 2025. Added admin authentication system and advanced content management dashboard
- July 2, 2025. Implemented scroll-to-top functionality and institutional performance indicators page
- July 2, 2025. COMPREHENSIVE CMS ENHANCEMENT: Implemented full TODO checklist including new pages (About, Application Form, TETFUND), enhanced navigation with Research dropdown, full CRUD API endpoints, authentication middleware with rate limiting, reusable admin components, and institutional data button
```

## Project Enhancement Roadmap

### 🎯 **Immediate Next Steps (High Impact)**
1. **Advanced Analytics Dashboard** - Real-time website metrics and user engagement
2. **SEO & Performance Optimization** - Search engine optimization and loading speed improvements  
3. **Mobile App Integration** - Progressive Web App (PWA) capabilities
4. **Advanced Security** - Two-factor authentication and role-based access control
5. **Content Scheduling** - Automated publishing and content calendar

### 🚀 **Advanced Features for Excellence**
1. **AI-Powered Content Suggestions** - Smart content recommendations for administrators
2. **Multi-language Support** - English/Nigerian languages for broader accessibility
3. **Advanced Search & Filtering** - Powerful search across all content
4. **Email Newsletter System** - Automated notifications for news and events
5. **Student Application Portal** - Online admissions and document management

### 📊 **Business Intelligence Features**
1. **Advanced Reporting** - Custom reports for institutional performance
2. **Financial Dashboard** - Budget tracking and expense management
3. **Student Analytics** - Enrollment trends and academic performance insights
4. **Social Media Integration** - Auto-posting to institutional social accounts
5. **API Endpoints** - Integration with external systems and data sources

## User Preferences

Preferred communication style: Simple, everyday language.