import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin } from "lucide-react";
import { formatDate, getCategoryColor } from "@/lib/utils";
import type { Event } from "@shared/schema";

export default function EventsSection() {
  const { data: events, isLoading } = useQuery<Event[]>({
    queryKey: ['/api/events/upcoming']
  });

  if (isLoading) {
    return (
      <section id="events" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl lg:text-5xl text-gray-800 mb-6">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Loading events...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-4xl lg:text-5xl text-gray-800 mb-6">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest events, seminars, and activities happening at our institution.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events?.map((event) => {
            const eventDate = new Date(event.date);
            const color = getCategoryColor(event.category);
            
            return (
              <Card key={event.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge 
                      className={`px-3 py-1 text-sm font-medium ${
                        event.featured 
                          ? 'bg-poly-blue-100 text-poly-blue-600'
                          : `bg-${color}-100 text-${color}-600`
                      }`}
                    >
                      {event.featured ? 'Featured Event' : event.category}
                    </Badge>
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${
                        event.featured 
                          ? 'text-poly-blue-600'
                          : `text-${color}-600`
                      }`}>
                        {eventDate.getDate()}
                      </div>
                      <div className="text-sm text-gray-600">
                        {eventDate.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="font-poppins font-semibold text-xl text-gray-800 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="mr-2 h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="mr-2 h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <Button 
                      className={`w-full py-2 px-4 font-medium transition-colors ${
                        event.featured
                          ? 'bg-poly-blue-600 hover:bg-poly-blue-500 text-white'
                          : `bg-${color}-600 hover:bg-${color}-500 text-white`
                      }`}
                    >
                      {event.category === 'Workshop' ? 'Register' : 
                       event.category === 'Cultural' ? 'Get Tickets' :
                       event.category === 'Sports' ? 'View Schedule' :
                       'Register Now'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-poly-blue-600 hover:bg-poly-blue-500 text-white px-8 py-4 font-semibold">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
}
