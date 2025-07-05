import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Building, Award, Globe, BookOpen, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import type { InstitutionalData } from "@shared/schema";

const getCategoryIcon = (category: string) => {
  const iconMap: Record<string, any> = {
    'Student Statistics': Users,
    'Academic Performance': TrendingUp,
    'Career Outcomes': Award,
    'Human Resources': Users,
    'Academic Offerings': BookOpen,
    'Research & Innovation': Building,
    'Global Engagement': Globe,
    'Industry Relations': Building,
    'Infrastructure': Building,
    'Digital Resources': BookOpen
  };
  
  return iconMap[category] || TrendingUp;
};

const getCategoryColor = (category: string) => {
  const colorMap: Record<string, string> = {
    'Student Statistics': 'bg-poly-blue-100 text-poly-blue-600 border-poly-blue-200',
    'Academic Performance': 'bg-poly-green-100 text-poly-green-600 border-poly-green-200',
    'Career Outcomes': 'bg-yellow-100 text-yellow-600 border-yellow-200',
    'Human Resources': 'bg-purple-100 text-purple-600 border-purple-200',
    'Academic Offerings': 'bg-indigo-100 text-indigo-600 border-indigo-200',
    'Research & Innovation': 'bg-orange-100 text-orange-600 border-orange-200',
    'Global Engagement': 'bg-cyan-100 text-cyan-600 border-cyan-200',
    'Industry Relations': 'bg-teal-100 text-teal-600 border-teal-200',
    'Infrastructure': 'bg-gray-100 text-gray-600 border-gray-200',
    'Digital Resources': 'bg-pink-100 text-pink-600 border-pink-200'
  };
  
  return colorMap[category] || 'bg-gray-100 text-gray-600 border-gray-200';
};

export default function InstitutionalDataSection() {
  const { data: institutionalData, isLoading } = useQuery<InstitutionalData[]>({
    queryKey: ['/api/institutional-data']
  });

  if (isLoading) {
    return (
      <section id="institutional-data" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl lg:text-5xl text-gray-800 mb-6">
              Institutional Key Performance Indicators
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Loading institutional data...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="institutional-data" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-4xl lg:text-5xl text-gray-800 mb-6">
            Institutional Key Performance Indicators
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive data overview showcasing our institutional excellence and performance metrics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {institutionalData?.map((dataItem) => {
            const Icon = getCategoryIcon(dataItem.category);
            const colorClasses = getCategoryColor(dataItem.category);
            
            return (
              <Card key={dataItem.id} className={`border-2 hover:shadow-lg transition-shadow ${colorClasses}`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${colorClasses}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                      {dataItem.category}
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <div className="text-3xl font-bold text-gray-800 mb-1">
                      {dataItem.value}
                    </div>
                    <h3 className="font-semibold text-gray-700 text-sm leading-tight">
                      {dataItem.title}
                    </h3>
                  </div>
                  
                  {dataItem.description && (
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {dataItem.description}
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="font-poppins font-semibold text-2xl text-gray-800 mb-4">
              Minister's Excellence Initiative
            </h3>
            <p className="text-gray-600 max-w-4xl mx-auto">
              These performance indicators reflect Federal Polytechnic Ede's commitment to the educational excellence 
              framework established by the Honorable Minister of Education, Mr. Tunji Alausa. Our institution 
              continues to set benchmarks in technical education, research innovation, and graduate employability 
              across Nigeria and the West African region.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-2xl font-bold text-poly-blue-600 mb-2">2024</div>
              <p className="text-sm text-gray-600">Assessment Year</p>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-poly-green-600 mb-2">Top 5</div>
              <p className="text-sm text-gray-600">Nigerian Polytechnics</p>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-poly-red-600 mb-2">NSQ </div>
              <p className="text-sm text-gray-600">Quality Certified</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/institutional-data">
              <Button className="bg-polytechnic-blue hover:bg-polytechnic-green transition-colors">
                View Detailed Performance Report
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}