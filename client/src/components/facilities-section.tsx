import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Facility } from "@shared/schema";

export default function FacilitiesSection() {
  const { data: facilities, isLoading } = useQuery<Facility[]>({
    queryKey: ['/api/facilities/featured']
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl lg:text-5xl text-gray-800 mb-6">
              World-Class Campus Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Loading facilities...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-4xl lg:text-5xl text-gray-800 mb-6">
            World-Class Campus Facilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            State-of-the-art facilities designed to provide the best learning environment for our students.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities?.map((facility) => (
            <Card key={facility.id} className="bg-white rounded-xl shadow-lg overflow-hidden fade-in-up">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${facility.image})` }} />
              <CardHeader>
                <h3 className="font-poppins font-semibold text-xl text-gray-800 mb-3">{facility.name}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{facility.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
