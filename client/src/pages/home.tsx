import Header from "@/components/header";
import HeroSlider from "@/components/hero-slider";
import StatsSection from "@/components/stats-section";
import WhyChooseUs from "@/components/why-choose-us";
import ProgramsSection from "@/components/programs-section";
import NewsSection from "@/components/news-section";
import VirtualTourSection from "@/components/virtual-tour-section";
import TestimonialsSection from "@/components/testimonials-section";
import AchievementsSection from "@/components/achievements-section";
import ResearchInnovationSection from "@/components/research-innovation-section";
import FacilitiesSection from "@/components/facilities-section";
import EventsSection from "@/components/events-section";
import AlumniSuccess from "@/components/alumni-success";
import StudentPortalPreview from "@/components/student-portal-preview";
import ManagementSection from "@/components/management-section";
import InstitutionalDataSection from "@/components/institutional-data-section";
import InteractiveMapSection from "@/components/interactive-map-section";
import LiveCampusFeed from "@/components/live-campus-feed";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import FloatingMenu from "@/components/floating-menu";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <FloatingMenu />
      <main>
        <HeroSlider />
        <StatsSection />
        <WhyChooseUs />
        <ProgramsSection />
        <NewsSection />
        <VirtualTourSection />
        <TestimonialsSection />
        <AchievementsSection />
        <ResearchInnovationSection />
        <FacilitiesSection />
        <EventsSection />
        <AlumniSuccess />
        <StudentPortalPreview />
        <ManagementSection />
        <InstitutionalDataSection />
        <InteractiveMapSection />
        <LiveCampusFeed />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
