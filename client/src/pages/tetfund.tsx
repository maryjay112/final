import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Building, Users, BookOpen, Award, Target, CheckCircle } from "lucide-react";

export default function TETFund() {
  const projects = [
    {
      title: "Infrastructure Development",
      description: "Modern laboratory and workshop facilities to enhance practical learning",
      status: "Completed",
      year: "2023",
      impact: "Improved hands-on training for 2,500+ students"
    },
    {
      title: "Academic Staff Development",
      description: "Professional development programs and advanced degree sponsorship",
      status: "Ongoing",
      year: "2024",
      impact: "25 staff members pursuing higher qualifications"
    },
    {
      title: "Research Grant Initiative",
      description: "Funding for applied research projects and innovation programs",
      status: "Active",
      year: "2024",
      impact: "15 active research projects across departments"
    },
    {
      title: "Digital Library Enhancement",
      description: "Expansion of digital resources and e-learning platforms",
      status: "Completed",
      year: "2023",
      impact: "24/7 access to 50,000+ digital resources"
    }
  ];

  const achievements = [
    {
      title: "₦2.5 Billion",
      description: "Total TETFUND allocation received (2020-2024)"
    },
    {
      title: "45+",
      description: "Infrastructure projects completed"
    },
    {
      title: "150+",
      description: "Staff beneficiaries of development programs"
    },
    {
      title: "8,000+",
      description: "Students benefiting from improved facilities"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-polytechnic-blue mb-4">
            TETFUND Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tertiary Education Trust Fund (TETFUND) initiatives at Federal Polytechnic Ede, 
            driving excellence in technical education through strategic investments in infrastructure, 
            staff development, and research advancement.
          </p>
        </div>

        {/* Overview Section */}
        <Card className="mb-8 border-polytechnic-blue/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-polytechnic-blue">
              <Target className="h-6 w-6" />
              About TETFUND at Federal Polytechnic Ede
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-gray max-w-none">
              <p>
                The Tertiary Education Trust Fund (TETFUND) is a Federal Government intervention 
                fund established to provide supplementary support to all levels of public tertiary 
                education in Nigeria. At Federal Polytechnic Ede, TETFUND resources have been 
                strategically utilized to enhance our infrastructure, develop our academic staff, 
                and promote research activities.
              </p>
              <p>
                Through TETFUND support, we have transformed our institution into a modern 
                technical education hub, equipped with state-of-the-art facilities and supported 
                by highly qualified staff committed to excellence in teaching and research.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-polytechnic-blue mb-2">
                  {achievement.title}
                </div>
                <div className="text-sm text-muted-foreground">
                  {achievement.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Current Projects */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-polytechnic-blue mb-6 text-center">
            Key TETFUND Projects & Initiatives
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg text-polytechnic-blue">
                      {project.title}
                    </CardTitle>
                    <Badge 
                      variant={project.status === 'Completed' ? 'default' : 'secondary'}
                      className={
                        project.status === 'Completed' 
                          ? 'bg-polytechnic-green' 
                          : project.status === 'Ongoing'
                          ? 'bg-polytechnic-blue'
                          : 'bg-polytechnic-red'
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription>
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">Year:</span>
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="font-medium">Impact:</span>
                      <span className="text-muted-foreground">{project.impact}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Focus Areas */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-polytechnic-blue mb-6 text-center">
            TETFUND Focus Areas
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <Building className="h-12 w-12 text-polytechnic-blue mx-auto mb-2" />
                <CardTitle className="text-polytechnic-blue">Infrastructure Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Construction and renovation of laboratories, workshops, lecture halls, 
                  and administrative buildings to create conducive learning environments.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-polytechnic-green mx-auto mb-2" />
                <CardTitle className="text-polytechnic-green">Staff Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Training programs, conference attendance, and postgraduate study 
                  opportunities to enhance academic and technical staff capabilities.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-polytechnic-red mx-auto mb-2" />
                <CardTitle className="text-polytechnic-red">Research & Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Funding for research projects, procurement of research equipment, 
                  and establishment of innovation centers and incubation hubs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Impact Statement */}
        <Card className="bg-gradient-to-r from-polytechnic-blue/5 to-polytechnic-green/5 border-polytechnic-blue/20">
          <CardHeader>
            <CardTitle className="text-center text-polytechnic-blue flex items-center justify-center gap-2">
              <Award className="h-6 w-6" />
              TETFUND Impact on Federal Polytechnic Ede
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-polytechnic-blue mb-3">Academic Excellence</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-polytechnic-green" />
                    Enhanced practical training facilities
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-polytechnic-green" />
                    Improved staff-to-student ratios
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-polytechnic-green" />
                    Modern equipment and technology
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-polytechnic-green" />
                    Enhanced research capabilities
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-polytechnic-blue mb-3">Institutional Growth</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-polytechnic-green" />
                    Increased enrollment capacity
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-polytechnic-green" />
                    Improved accreditation status
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-polytechnic-green" />
                    Enhanced industry partnerships
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-polytechnic-green" />
                    Better graduate employability
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}