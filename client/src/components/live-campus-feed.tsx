import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Radio, 
  Users, 
  Calendar, 
  BookOpen, 
  Trophy,
  MessageCircle,
  Heart,
  Share2,
  Clock
} from "lucide-react";

const liveFeedItems = [
  {
    id: 1,
    type: "achievement",
    title: "Engineering Students Win National Robotics Competition",
    content: "Team FedPolyEde secured first place at the 2024 Nigerian Inter-Polytechnic Robotics Championship with their innovative agricultural robot prototype.",
    timestamp: "2 hours ago",
    engagement: { likes: 248, comments: 15, shares: 42 },
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    category: "Achievement"
  },
  {
    id: 2,
    type: "event",
    title: "Tech Talk: Industry 4.0 and the Future of Manufacturing",
    content: "Join us for an insightful session with industry experts from Dangote Group and MTN Nigeria. Registration now open for all students.",
    timestamp: "4 hours ago",
    engagement: { likes: 156, comments: 8, shares: 23 },
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    category: "Event"
  },
  {
    id: 3,
    type: "news",
    title: "New Partnership with German Technical Institute",
    content: "Federal Polytechnic Ede signs MoU with Dresden University of Technology for student exchange and joint research programs.",
    timestamp: "6 hours ago",
    engagement: { likes: 312, comments: 28, shares: 67 },
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    category: "Partnership"
  },
  {
    id: 4,
    type: "student_life",
    title: "Campus Cultural Festival Highlights",
    content: "Amazing performances from students showcasing Nigerian culture and traditions. The week-long festival celebrates our diverse heritage.",
    timestamp: "8 hours ago",
    engagement: { likes: 189, comments: 22, shares: 31 },
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    category: "Student Life"
  }
];

const campusStats = [
  { label: "Live Updates Today", value: "24", icon: Radio },
  { label: "Active Students Online", value: "3,247", icon: Users },
  { label: "Upcoming Events", value: "10", icon: Calendar },
  { label: "Library Check-ins", value: "156", icon: BookOpen }
];

export default function LiveCampusFeed() {
  const getCategoryColor = (category: string) => {
    const colorMap: Record<string, string> = {
      'Achievement': 'bg-poly-green-100 text-poly-green-600',
      'Event': 'bg-poly-blue-100 text-poly-blue-600',
      'Partnership': 'bg-purple-100 text-purple-600',
      'Student Life': 'bg-orange-100 text-orange-600'
    };
    return colorMap[category] || 'bg-gray-100 text-gray-600';
  };

  return (
    <section id="live-feed" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-3 h-3 bg-poly-red-600 rounded-full animate-pulse"></div>
            <h2 className="font-inter font-bold text-4xl lg:text-5xl text-gray-800">
              Live Campus Feed
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay connected with real-time updates from across our vibrant campus community. 
            Follow the latest achievements, events, and student life moments as they happen.
          </p>
        </div>

        {/* Live Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {campusStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="bg-white border-l-4 border-poly-blue-600">
                <CardContent className="p-6 text-center">
                  <Icon className="h-8 w-8 text-poly-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-800 mb-1">
                    {stat.value}
                  </div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Live Feed */}
        <div className="grid lg:grid-cols-2 gap-8">
          {liveFeedItems.map((item) => (
            <Card key={item.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-cover bg-center rounded-t-lg" style={{ backgroundImage: `url(${item.image})` }}>
                <div className="h-full bg-black bg-opacity-40 rounded-t-lg flex items-start justify-between p-4">
                  <Badge className={`${getCategoryColor(item.category)} font-medium`}>
                    {item.category}
                  </Badge>
                  <div className="flex items-center text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                    <Clock className="h-3 w-3 mr-1" />
                    {item.timestamp}
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <h3 className="font-poppins font-semibold text-xl text-gray-800 leading-tight">
                  {item.title}
                </h3>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.content}
                </p>
                
                {/* Engagement Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1 hover:text-poly-red-600 cursor-pointer transition-colors">
                      <Heart className="h-4 w-4" />
                      <span>{item.engagement.likes}</span>
                    </div>
                    <div className="flex items-center gap-1 hover:text-poly-blue-600 cursor-pointer transition-colors">
                      <MessageCircle className="h-4 w-4" />
                      <span>{item.engagement.comments}</span>
                    </div>
                    <div className="flex items-center gap-1 hover:text-poly-green-600 cursor-pointer transition-colors">
                      <Share2 className="h-4 w-4" />
                      <span>{item.engagement.shares}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-poly-blue-600 hover:text-poly-blue-500">
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="font-poppins font-semibold text-2xl text-gray-800 mb-4">
              Join Our Campus Community
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Follow our official social media channels and stay updated with all campus activities, 
              achievements, and announcements in real-time.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-poly-blue-600 hover:bg-poly-blue-500 text-white">
                Follow on Instagram
              </Button>
              <Button variant="outline" className="border-poly-blue-600 text-poly-blue-600">
                Join WhatsApp Updates
              </Button>
              <Button variant="outline" className="border-poly-green-600 text-poly-green-600">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}