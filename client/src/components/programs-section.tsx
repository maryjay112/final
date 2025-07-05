import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import type { Program } from "@shared/schema";

export default function ProgramsSection() {
  const { data: programs, isLoading } = useQuery<Program[]>({
    queryKey: ['/api/programs']
  });

  if (isLoading) {
    return (
      <section id="programs" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl lg:text-5xl text-gray-800 mb-6">
              Academic Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Loading programs...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-4xl lg:text-5xl text-gray-800 mb-6">
            Academic Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technical education programs designed to prepare students for successful careers in their chosen fields.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs?.map((program) => (
            <Card key={program.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${program.image})` }} />
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge 
                    className={`px-3 py-1 text-sm font-medium ${
                      program.featured 
                        ? `bg-${program.color}-100 text-${program.color}-600`
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {program.featured ? 'Featured Program' : program.category}
                  </Badge>
                  <i className={`${program.icon} text-${program.color}-600 text-xl`} />
                </div>
                <h3 className="font-poppins font-semibold text-xl text-gray-800 mb-3">{program.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Duration: {program.duration}</span>
                  <Button variant="ghost" className={`text-${program.color}-600 hover:text-${program.color}-500 font-medium p-0`}>
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-poly-blue-600 hover:bg-poly-blue-500 text-white px-8 py-4 font-semibold">
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
}
