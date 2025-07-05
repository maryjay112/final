import { Button } from "@/components/ui/button";
import { Play, Calendar } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

export default function HeroSlider() {
  return (
    <section id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative z-10 flex items-center h-full">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="font-inter font-bold text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Shaping the Future Through <span className="text-poly-blue-300">Technical Excellence</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Empowering students with practical skills and knowledge for the modern workforce. Join Nigeria's premier polytechnic institution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-poly-blue-600 hover:bg-poly-blue-500 text-white px-8 py-4 font-semibold"
                onClick={() => scrollToSection("programs")}
              >
                <Play className="mr-2 h-5 w-5" />
                Explore Programs
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 font-semibold"
                onClick={() => scrollToSection("events")}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Upcoming Events
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
