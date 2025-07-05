import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, GraduationCap, Clock, Calendar } from "lucide-react";

export default function ApplicationForm() {
  const applicationTypes = [
    {
      id: 1,
      code: "ND FT",
      title: "National Diploma - Full Time",
      description: "Comprehensive full-time program with practical and theoretical components",
      fee: "₦15,000",
      duration: "2 Years",
      schedule: "Monday - Friday (8:00 AM - 4:00 PM)",
      features: ["Laboratory Sessions", "Workshop Training", "Industrial Training", "Project Work"]
    },
    {
      id: 2,
      code: "ND PT (Evening)",
      title: "National Diploma - Evening Class",
      description: "Flexible evening program for working professionals",
      fee: "₦15,000",
      duration: "2.5 Years",
      schedule: "Monday - Friday (5:00 PM - 8:00 PM)",
      features: ["Flexible Schedule", "Working Professional Focus", "Weekend Practicals", "Career Advancement"]
    },
    {
      id: 3,
      code: "ND PT (Weekend)",
      title: "National Diploma - Weekend Class",
      description: "Weekend-focused program for maximum flexibility",
      fee: "₦15,000",
      duration: "3 Years",
      schedule: "Saturdays & Sundays (8:00 AM - 5:00 PM)",
      features: ["Weekend Only", "Self-Paced Learning", "Intensive Sessions", "Career Flexibility"]
    },
    {
      id: 4,
      code: "HND FT",
      title: "Higher National Diploma - Full Time",
      description: "Advanced program building on ND qualification",
      fee: "Contact Admissions",
      duration: "2 Years",
      schedule: "Monday - Friday (8:00 AM - 4:00 PM)",
      features: ["Advanced Curriculum", "Research Projects", "Industry Partnerships", "Management Focus"]
    }
  ];

  const handleApplyNow = () => {
    window.open("https://eportal.federalpolyede.edu.ng/apply/login.php", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-polytechnic-blue mb-4">
            Application Forms
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Begin your journey with Federal Polytechnic Ede. Choose the program that best fits your schedule and career goals.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
          {applicationTypes.map((program) => (
            <Card key={program.id} className="relative group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="outline" className="mb-2 text-polytechnic-blue border-polytechnic-blue">
                      {program.code}
                    </Badge>
                    <CardTitle className="text-xl text-polytechnic-blue group-hover:text-polytechnic-green transition-colors">
                      {program.title}
                    </CardTitle>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-polytechnic-green">
                      {program.fee}
                    </div>
                    <div className="text-sm text-muted-foreground">Application Fee</div>
                  </div>
                </div>
                <CardDescription className="text-base">
                  {program.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-polytechnic-blue" />
                    <span className="font-medium">Duration:</span>
                    <span>{program.duration}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-polytechnic-green" />
                    <span className="font-medium">Schedule:</span>
                    <span>{program.schedule}</span>
                  </div>

                  <div className="pt-3">
                    <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-polytechnic-red" />
                      Program Features:
                    </h4>
                    <div className="grid grid-cols-2 gap-1">
                      {program.features.map((feature, index) => (
                        <div key={index} className="text-xs text-muted-foreground flex items-center gap-1">
                          <div className="w-1 h-1 bg-polytechnic-blue rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    onClick={handleApplyNow}
                    className="w-full mt-4 bg-polytechnic-blue hover:bg-polytechnic-green transition-colors"
                  >
                    Apply Now
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="border-polytechnic-blue/20">
            <CardHeader>
              <CardTitle className="text-center text-polytechnic-blue">
                Application Process Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-12 h-12 bg-polytechnic-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-polytechnic-blue font-bold">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Choose Program</h3>
                  <p className="text-sm text-muted-foreground">
                    Select the program that matches your career goals and schedule preferences.
                  </p>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-polytechnic-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-polytechnic-green font-bold">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Complete Application</h3>
                  <p className="text-sm text-muted-foreground">
                    Fill out the online application form with your personal and academic information.
                  </p>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-polytechnic-red/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-polytechnic-red font-bold">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Submit & Pay</h3>
                  <p className="text-sm text-muted-foreground">
                    Submit your application and pay the application fee to complete the process.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold text-polytechnic-blue mb-2">Important Notes:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Application fees are non-refundable</li>
                  <li>• All required documents must be uploaded during application</li>
                  <li>• HND programs require prior ND qualification or equivalent</li>
                  <li>• Contact admissions for specific program requirements</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}