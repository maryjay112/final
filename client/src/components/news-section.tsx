import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { News } from "@shared/schema";

export default function NewsSection() {
  const { data: news, isLoading } = useQuery<News[]>({
    queryKey: ['/api/news/featured']
  });

  if (isLoading) {
    return (
      <section id="news" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl lg:text-5xl text-gray-800 mb-6">
              Latest News & Updates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Loading news...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-4xl lg:text-5xl text-gray-800 mb-6">
            Latest News & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest developments, achievements, and announcements from Federal Polytechnic Ede.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news?.map((newsItem) => {
            const categoryColors: Record<string, string> = {
              'Infrastructure': 'bg-poly-blue-100 text-poly-blue-600',
              'Technology': 'bg-poly-green-100 text-poly-green-600',
              'Innovation': 'bg-purple-100 text-purple-600',
              'Research': 'bg-orange-100 text-orange-600',
              'Accreditation': 'bg-indigo-100 text-indigo-600'
            };
            
            const categoryColor = categoryColors[newsItem.category] || 'bg-gray-100 text-gray-600';
            
            return (
              <Card key={newsItem.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${newsItem.image})` }} />
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={`px-3 py-1 text-sm font-medium ${categoryColor}`}>
                      {newsItem.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="mr-1 h-4 w-4" />
                      <span>{formatDate(newsItem.publishedAt || new Date())}</span>
                    </div>
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-gray-800 mb-3 line-clamp-2">
                    {newsItem.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">{newsItem.summary}</p>
                  <Button variant="ghost" className="text-poly-blue-600 hover:text-poly-blue-500 font-medium p-0">
                    Read Full Story <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-poly-blue-600 hover:bg-poly-blue-500 text-white px-8 py-4 font-semibold">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
}