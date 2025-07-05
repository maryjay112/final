import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";
import type { Management } from "@shared/schema";

export default function ManagementSection() {
  const { data: management, isLoading } = useQuery<Management[]>({
    queryKey: ['/api/management']
  });

  if (isLoading) {
    return (
      <section id="management" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl lg:text-5xl text-gray-800 mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Loading management team...
            </p>
          </div>
        </div>
      </section>
    );
  }

  const getPositionColor = (position: string) => {
    if (position.includes('Rector')) return 'text-poly-blue-600';
    if (position.includes('Deputy')) return 'text-poly-green-600';
    if (position.includes('Registrar')) return 'text-poly-red-600';
    return 'text-gray-600';
  };

  const getSocialColor = (position: string) => {
    if (position.includes('Rector')) return 'text-poly-blue-600 hover:text-poly-blue-500';
    if (position.includes('Deputy')) return 'text-poly-green-600 hover:text-poly-green-500';
    if (position.includes('Registrar')) return 'text-poly-red-600 hover:text-poly-red-500';
    return 'text-gray-600 hover:text-gray-500';
  };

  return (
    <section id="management" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-4xl lg:text-5xl text-gray-800 mb-6">
            Management Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated leaders who guide our institution towards excellence in technical education.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {management?.map((member) => (
            <Card key={member.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${member.image})` }} />
              <CardHeader>
                <h3 className="font-poppins font-semibold text-xl text-gray-800 mb-2">{member.name}</h3>
                <p className={`font-medium mb-3 ${getPositionColor(member.position)}`}>{member.position}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  {member.socialLinks?.linkedin && (
                    <a href={member.socialLinks.linkedin} className={getSocialColor(member.position)}>
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {member.socialLinks?.email && (
                    <a href={`mailto:${member.socialLinks.email}`} className={getSocialColor(member.position)}>
                      <Mail className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
