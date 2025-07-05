import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Microscope, 
  Lightbulb, 
  TrendingUp, 
  Users, 
  Award,
  ExternalLink,
  Download,
  Calendar
} from "lucide-react";

const researchProjects = [
  {
    id: 1,
    title: "Sustainable Energy Solutions for Rural Communities",
    description: "Developing cost-effective solar-wind hybrid systems for off-grid electricity generation",
    category: "Renewable Energy",
    status: "Active",
    funding: "₦15.2M",
    team: "12 researchers",
    completion: 75,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  },
  {
    id: 2,
    title: "AI-Powered Agricultural Monitoring System",
    description: "IoT sensors and machine learning for precision farming and crop yield optimization",
    category: "AgriTech",
    status: "Pilot Phase",
    funding: "₦8.7M",
    team: "8 researchers",
    completion: 60,
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  },
  {
    id: 3,
    title: "Water Purification Using Local Materials",
    description: "Innovative filtration systems using locally sourced clay and activated charcoal",
    category: "Environmental",
    status: "Commercialization",
    funding: "₦12.1M",
    team: "15 researchers",
    completion: 90,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  }
];

const innovationCenters = [
  {
    name: "Center for Renewable Energy Technology",
    description: "Leading research in solar, wind, and biomass energy systems",
    established: "2021",
    projects: 8,
    publications: 25
  },
  {
    name: "Digital Innovation Hub",
    description: "AI, IoT, and software development for industry solutions",
    established: "2020",
    projects: 12,
    publications: 18
  },
  {
    name: "Materials Science Laboratory",
    description: "Advanced materials research and nanotechnology applications",
    established: "2019",
    projects: 6,
    publications: 22
  }
];

export default function ResearchInnovationSection() {
  return (
    <section id="research-innovation" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-4xl lg:text-5xl text-gray-800 mb-6">
            Research & Innovation Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driving technological advancement through cutting-edge research and innovation. 
            Our faculty and students collaborate on projects that solve real-world challenges.
          </p>
        </div>

        {/* Research Projects */}
        <div className="mb-16">
          <h3 className="font-poppins font-semibold text-2xl text-gray-800 mb-8 text-center">
            Current Research Projects
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {researchProjects.map((project) => (
              <Card key={project.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 bg-cover bg-center rounded-t-lg" style={{ backgroundImage: `url(${project.image})` }}>
                  <div className="h-full bg-black bg-opacity-40 rounded-t-lg flex items-end p-4">
                    <Badge className="bg-white text-gray-800 font-medium">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-lg text-gray-800 leading-tight">
                      {project.title}
                    </h4>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        project.status === 'Active' ? 'border-poly-green-600 text-poly-green-600' :
                        project.status === 'Pilot Phase' ? 'border-poly-blue-600 text-poly-blue-600' :
                        'border-orange-600 text-orange-600'
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Funding:</span>
                      <span className="font-medium text-gray-800">{project.funding}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Team Size:</span>
                      <span className="font-medium text-gray-800">{project.team}</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Progress:</span>
                        <span className="font-medium text-gray-800">{project.completion}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-poly-green-600 h-2 rounded-full transition-all"
                          style={{ width: `${project.completion}%` }}
                        ></div>
                      </div>
                    </div>
                    <Button variant="ghost" className="text-poly-blue-600 hover:text-poly-blue-500 font-medium p-0 mt-4">
                      View Project Details <ExternalLink className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Innovation Centers */}
        <div className="mb-16">
          <h3 className="font-poppins font-semibold text-2xl text-gray-800 mb-8 text-center">
            Innovation Centers & Laboratories
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {innovationCenters.map((center, index) => (
              <Card key={index} className="bg-gray-50 border-l-4 border-poly-blue-600 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="bg-poly-blue-600 text-white rounded-full p-2">
                      <Microscope className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-2">{center.name}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{center.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center text-sm">
                    <div>
                      <div className="font-bold text-poly-blue-600">{center.established}</div>
                      <div className="text-gray-600">Established</div>
                    </div>
                    <div>
                      <div className="font-bold text-poly-green-600">{center.projects}</div>
                      <div className="text-gray-600">Projects</div>
                    </div>
                    <div>
                      <div className="font-bold text-orange-600">{center.publications}</div>
                      <div className="text-gray-600">Publications</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Research Impact */}
        <div className="bg-gradient-to-r from-poly-blue-600 to-poly-green-600 rounded-xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="font-poppins font-semibold text-2xl mb-4">
              Research Impact & Achievements
            </h3>
            <p className="text-poly-blue-100 max-w-3xl mx-auto">
              Our research initiatives contribute to Nigeria's technological advancement and sustainable development goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <Award className="h-8 w-8 mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">15</div>
              <div className="text-sm text-poly-blue-100">Patents Filed</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <TrendingUp className="h-8 w-8 mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">₦45M</div>
              <div className="text-sm text-poly-blue-100">Research Funding</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <Users className="h-8 w-8 mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">85</div>
              <div className="text-sm text-poly-blue-100">Research Staff</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <Lightbulb className="h-8 w-8 mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">120+</div>
              <div className="text-sm text-poly-blue-100">Publications</div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button variant="secondary" className="bg-white text-poly-blue-600 hover:bg-gray-100 mr-4">
              <Download className="mr-2 h-4 w-4" />
              Research Report 2024
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-poly-blue-600">
              <Calendar className="mr-2 h-4 w-4" />
              Research Calendar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}