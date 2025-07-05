import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  CreditCard, 
  FileText, 
  Users, 
  Award,
  Clock,
  CheckCircle
} from "lucide-react";

const portalFeatures = [
  {
    icon: GraduationCap,
    title: "Academic Records",
    description: "View transcripts, grades, and academic progress",
    color: "text-poly-blue-600",
    bgColor: "bg-poly-blue-100"
  },
  {
    icon: Calendar,
    title: "Course Registration",
    description: "Register for courses and manage your academic schedule",
    color: "text-poly-green-600",
    bgColor: "bg-poly-green-100"
  },
  {
    icon: CreditCard,
    title: "Fee Payment",
    description: "Pay school fees online and view payment history",
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    icon: FileText,
    title: "Digital Documents",
    description: "Access admission letters, certificates, and forms",
    color: "text-orange-600",
    bgColor: "bg-orange-100"
  }
];

const quickStats = [
  { label: "Current Students", value: "15,000", icon: Users },
  { label: "Active Courses", value: "156", icon: BookOpen },
  { label: "Online Services", value: "25+", icon: CheckCircle },
  { label: "Average Response", value: "< 2hrs", icon: Clock }
];

export default function StudentPortalPreview() {
  return (
    <section id="student-portal" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-4xl lg:text-5xl text-gray-800 mb-6">
            Student Portal & Digital Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Access all your academic and administrative services from one secure platform. 
            Experience the convenience of digital-first education management.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-poly-blue-600 hover:bg-poly-blue-500 text-white px-8 py-4 text-lg font-semibold">
              Student Login
            </Button>
            <Button variant="outline" className="border-poly-blue-600 text-poly-blue-600 px-8 py-4 text-lg font-semibold">
              Create Account
            </Button>
          </div>
        </div>

        {/* Portal Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {portalFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="bg-white hover:shadow-lg transition-shadow group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Portal Preview */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <h3 className="font-poppins font-semibold text-xl text-gray-800">
                Student Dashboard Preview
              </h3>
              <p className="text-gray-600">See what students experience in their portal</p>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded border-l-4 border-poly-blue-600">
                  <div>
                    <p className="font-medium text-gray-800">Current Semester: 2024/2025 First Semester</p>
                    <p className="text-sm text-gray-600">8 courses registered</p>
                  </div>
                  <Badge className="bg-poly-green-100 text-poly-green-600">Active</Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-white rounded border-l-4 border-poly-green-600">
                  <div>
                    <p className="font-medium text-gray-800">CGPA: 4.25/5.00</p>
                    <p className="text-sm text-gray-600">Excellent performance</p>
                  </div>
                  <Award className="h-6 w-6 text-poly-green-600" />
                </div>

                <div className="flex items-center justify-between p-3 bg-white rounded border-l-4 border-orange-600">
                  <div>
                    <p className="font-medium text-gray-800">Fee Status: Paid</p>
                    <p className="text-sm text-gray-600">₦175,000 - Full payment</p>
                  </div>
                  <CheckCircle className="h-6 w-6 text-poly-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <h3 className="font-poppins font-semibold text-xl text-gray-800">
                System Statistics
              </h3>
              <p className="text-gray-600">Real-time portal usage and performance metrics</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {quickStats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="text-center p-4 bg-gray-50 rounded-lg">
                      <Icon className="h-8 w-8 text-poly-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-800 mb-1">
                        {stat.value}
                      </div>
                      <p className="text-xs text-gray-600">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mobile App Promotion */}
        <div className="bg-gradient-to-r from-poly-blue-600 to-poly-green-600 rounded-xl p-8 text-white text-center">
          <h3 className="font-poppins font-semibold text-2xl mb-4">
            Take FedPolyEde With You Everywhere
          </h3>
          <p className="text-poly-blue-100 mb-6 max-w-2xl mx-auto">
            Download our mobile app for iOS and Android to access your student portal, 
            receive notifications, and stay connected with campus life on the go.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" className="bg-white text-poly-blue-600 hover:bg-gray-100">
              Download for iOS
            </Button>
            <Button variant="secondary" className="bg-white text-poly-blue-600 hover:bg-gray-100">
              Download for Android
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}