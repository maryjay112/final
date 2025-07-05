import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, MapPin, Clock, Users } from "lucide-react";

const virtualTourSpots = [
  {
    id: 1,
    title: "Engineering Workshop Complex",
    description: "State-of-the-art workshops equipped with modern machinery and tools for hands-on learning",
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    duration: "5 mins",
    highlights: ["CNC Machines", "3D Printing Lab", "Welding Stations"]
  },
  {
    id: 2,
    title: "Computer Science Laboratory",
    description: "Advanced computing facilities with latest software and hardware for programming and research",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    duration: "4 mins",
    highlights: ["High-Performance Computers", "Server Room", "AI Research Lab"]
  },
  {
    id: 3,
    title: "Central Library & Digital Hub",
    description: "Modern library with extensive digital resources and collaborative study spaces",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    duration: "3 mins",
    highlights: ["Digital Archives", "Study Pods", "Research Center"]
  },
  {
    id: 4,
    title: "Student Life & Recreation",
    description: "Vibrant campus life with recreational facilities and student activity centers",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    duration: "6 mins",
    highlights: ["Sports Complex", "Student Union", "Cafeteria"]
  }
];

export default function VirtualTourSection() {
  return (
    <section id="virtual-tour" className="py-20 bg-gradient-to-br from-poly-blue-100 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-4xl lg:text-5xl text-gray-800 mb-6">
            Virtual Campus Tour
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Experience our world-class facilities from anywhere in the world. Take an immersive 360° tour 
            of our campus and discover why Federal Polytechnic Ede is the premier choice for technical education.
          </p>
          <Button className="bg-poly-blue-600 hover:bg-poly-blue-500 text-white px-8 py-4 text-lg font-semibold">
            <Play className="mr-2 h-5 w-5" />
            Start Full Virtual Tour
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {virtualTourSpots.map((spot) => (
            <Card key={spot.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer">
              <div className="relative">
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${spot.image})` }}>
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                    <div className="bg-white bg-opacity-90 rounded-full p-4 group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-poly-blue-600" />
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-poly-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <Clock className="mr-1 h-3 w-3" />
                  {spot.duration}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-poppins font-semibold text-xl text-gray-800 mb-3">
                  {spot.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {spot.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {spot.highlights.map((highlight, index) => (
                    <span key={index} className="bg-poly-green-100 text-poly-green-600 px-2 py-1 rounded text-xs font-medium">
                      {highlight}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" className="text-poly-blue-600 hover:text-poly-blue-500 font-medium p-0">
                  <MapPin className="mr-1 h-4 w-4" />
                  Explore This Area
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-poly-blue-600 mb-2">360°</div>
              <p className="text-gray-600">Immersive Experience</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-poly-green-600 mb-2">15+</div>
              <p className="text-gray-600">Campus Locations</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-poly-red-600 mb-2">4K</div>
              <p className="text-gray-600">High Definition Quality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}