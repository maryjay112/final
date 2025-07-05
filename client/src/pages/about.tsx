import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Target, Eye, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-polytechnic-blue mb-4">
            About Federal Polytechnic Ede
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Learn about our rich history, guiding philosophy, and commitment to excellence in technical education.
          </p>
        </div>

        <Tabs defaultValue="history" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="philosophy">Philosophy</TabsTrigger>
            <TabsTrigger value="mission">Mission</TabsTrigger>
            <TabsTrigger value="objectives">Objectives</TabsTrigger>
          </TabsList>

          <TabsContent value="history" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-polytechnic-blue">
                  <GraduationCap className="h-6 w-6" />
                  Our History
                </CardTitle>
                <CardDescription>
                  The journey of Federal Polytechnic Ede
                </CardDescription>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Federal Polytechnic Ede was established as a premier institution for technical and vocational education in Nigeria. 
                  Located in the ancient town of Ede, Osun State, the polytechnic has grown from humble beginnings to become 
                  one of the leading technical institutions in the country.
                </p>
                <p>
                  Since its inception, the institution has remained committed to providing quality technical education that meets 
                  international standards while addressing the technological needs of Nigeria and the African continent. 
                  Our campus has evolved to accommodate thousands of students pursuing various programs in engineering, 
                  applied sciences, and management studies.
                </p>
                <p>
                  Throughout the years, Federal Polytechnic Ede has produced thousands of graduates who have made significant 
                  contributions to Nigeria's industrial and technological development. Our alumni occupy key positions in 
                  government, private sector, and have established successful enterprises across various sectors.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="philosophy" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-polytechnic-green">
                  <Heart className="h-6 w-6" />
                  Our Philosophy
                </CardTitle>
                <CardDescription>
                  The values that guide our institution
                </CardDescription>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Our educational philosophy is built on the foundation of practical learning, innovation, and character development. 
                  We believe that technical education should not only equip students with professional skills but also develop 
                  their critical thinking abilities and ethical values.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-polytechnic-blue mb-2">Excellence</h4>
                    <p className="text-sm">
                      We strive for excellence in all our endeavors, from teaching and research to community service.
                    </p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-polytechnic-green mb-2">Innovation</h4>
                    <p className="text-sm">
                      We encourage creative thinking and innovative solutions to technological challenges.
                    </p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-polytechnic-red mb-2">Integrity</h4>
                    <p className="text-sm">
                      We uphold the highest standards of honesty, transparency, and ethical conduct.
                    </p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-polytechnic-blue mb-2">Service</h4>
                    <p className="text-sm">
                      We are committed to serving our community and contributing to national development.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mission" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-polytechnic-red">
                  <Target className="h-6 w-6" />
                  Mission & Vision
                </CardTitle>
                <CardDescription>
                  Our purpose and long-term aspirations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-polytechnic-blue mb-4">Our Mission</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To provide world-class technical and vocational education that produces competent middle-level 
                      manpower for Nigeria's industrial and economic development, while fostering innovation, 
                      entrepreneurship, and sustainable development practices.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-polytechnic-green mb-4 flex items-center gap-2">
                      <Eye className="h-5 w-5" />
                      Our Vision
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To be a leading polytechnic in Africa, recognized for excellence in technical education, 
                      research, and innovation, producing graduates who are globally competitive and committed 
                      to national development.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="objectives" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-polytechnic-blue">
                  <Target className="h-6 w-6" />
                  Our Objectives
                </CardTitle>
                <CardDescription>
                  Key goals that drive our institution forward
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {[
                    "Provide quality technical and vocational education at National Diploma (ND) and Higher National Diploma (HND) levels",
                    "Develop skilled middle-level manpower for Nigeria's industrial and technological advancement",
                    "Foster innovation, entrepreneurship, and creativity among students and staff",
                    "Conduct applied research that addresses real-world problems and contributes to knowledge",
                    "Establish strong partnerships with industry to ensure curriculum relevance and graduate employability",
                    "Promote sustainable development practices and environmental consciousness",
                    "Provide continuing education and professional development opportunities for the community",
                    "Maintain state-of-the-art facilities and modern teaching equipment"
                  ].map((objective, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                      <div className="w-6 h-6 bg-polytechnic-blue text-white rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-sm leading-relaxed">{objective}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
}