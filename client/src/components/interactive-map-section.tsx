import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Navigation, Car, Bus } from "lucide-react";

const campusLocations = [
  {
    id: 1,
    name: "Main Campus Gate",
    description: "Primary entrance with security checkpoint",
    coordinates: "7.7319° N, 4.4516° E",
    facilities: ["Security Post", "Visitor Registration", "Parking"]
  },
  {
    id: 2,
    name: "Administrative Block",
    description: "Rector's office, registrar, and main administration",
    coordinates: "7.7325° N, 4.4520° E",
    facilities: ["Rector's Office", "Registrar", "Admission Office"]
  },
  {
    id: 3,
    name: "Engineering Complex",
    description: "All engineering departments and workshops",
    coordinates: "7.7330° N, 4.4525° E",
    facilities: ["Workshops", "Laboratories", "Design Studios"]
  },
  {
    id: 4,
    name: "Student Services Center",
    description: "Student affairs, accommodation, and welfare services",
    coordinates: "7.7320° N, 4.4530° E",
    facilities: ["Student Affairs", "Hostel Office", "Medical Center"]
  }
];

export default function InteractiveMapSection() {
  return (
    <section id="campus-map" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-4xl lg:text-5xl text-gray-800 mb-6">
            Interactive Campus Map
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Navigate our expansive campus with ease. Find buildings, facilities, and services 
            using our comprehensive digital map system.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Interactive Map Placeholder */}
          <div className="lg:col-span-2">
            <Card className="h-96 overflow-hidden shadow-lg">
              <div className="relative w-full h-full bg-gradient-to-br from-poly-blue-100 to-poly-green-100">
                {/* Map Simulation */}
                <div className="absolute inset-4 bg-white rounded-lg shadow-inner p-6">
                  <div className="text-center h-full flex flex-col justify-center">
                    <Navigation className="h-16 w-16 text-poly-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-xl text-gray-800 mb-2">
                      Interactive Campus Map
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Click and drag to explore our 50-acre campus
                    </p>
                    <Button className="bg-poly-blue-600 hover:bg-poly-blue-500 text-white">
                      Launch Full Screen Map
                    </Button>
                  </div>
                </div>
                
                {/* Map Points */}
                {campusLocations.map((location, index) => (
                  <div
                    key={location.id}
                    className="absolute bg-poly-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold cursor-pointer hover:scale-110 transition-transform shadow-lg"
                    style={{
                      left: `${20 + index * 15}%`,
                      top: `${30 + index * 10}%`
                    }}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Location List */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-xl text-gray-800 mb-4">
              Key Locations
            </h3>
            {campusLocations.map((location, index) => (
              <Card key={location.id} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader className="pb-2">
                  <div className="flex items-start gap-3">
                    <div className="bg-poly-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800">{location.name}</h4>
                      <p className="text-sm text-gray-600">{location.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center text-xs text-gray-500 mb-2">
                    <MapPin className="h-3 w-3 mr-1" />
                    {location.coordinates}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {location.facilities.map((facility, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        {facility}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Getting Here Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="bg-poly-blue-50 border-poly-blue-200">
            <CardContent className="p-6 text-center">
              <Car className="h-12 w-12 text-poly-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-gray-800 mb-2">By Car</h3>
              <p className="text-gray-600 text-sm mb-3">
                Free parking available on campus. Double entry gates for easy access.
              </p>
              <Button variant="outline" size="sm" className="border-poly-blue-600 text-poly-blue-600">
                Get Directions
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-poly-green-50 border-poly-green-200">
            <CardContent className="p-6 text-center">
              <Bus className="h-12 w-12 text-poly-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Campus Shuttle</h3>
              <p className="text-gray-600 text-sm mb-3">
                Regular bus services from Ede North Campus to South Campus. School shuttle available.
              </p>
              <Button variant="outline" size="sm" className="border-poly-green-600 text-poly-green-600">
                Bus Schedule
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6 text-center">
              <Phone className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Need Help?</h3>
              <p className="text-gray-600 text-sm mb-3">
                Campus security available 24/7 for directions and assistance.
              </p>
              <Button variant="outline" size="sm" className="border-orange-600 text-orange-600">
                Contact Security
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}