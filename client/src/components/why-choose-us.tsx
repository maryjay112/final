import { Factory, Settings, Handshake, Medal, GraduationCap, Rocket } from "lucide-react";

const features = [
  {
    icon: Factory,
    title: "Industry-Relevant Curriculum",
    description: "Our programs are designed with industry partners to ensure graduates are job-ready with current market skills."
  },
  {
    icon: Settings,
    title: "State-of-the-Art Facilities",
    description: "Modern laboratories, workshops, and equipment that mirror real-world working environments."
  },
  {
    icon: Handshake,
    title: "Industry Partnerships",
    description: "Strong connections with leading companies for internships, job placements, and collaborative projects."
  },
  {
    icon: Medal,
    title: "Accredited Excellence",
    description: "Fully accredited programs recognized nationally and internationally for quality education standards."
  },
  {
    icon: GraduationCap,
    title: "Experienced Faculty",
    description: "Learn from industry experts and accomplished academics who bring real-world experience to the classroom."
  },
  {
    icon: Rocket,
    title: "Innovation Hub",
    description: "Fostering entrepreneurship and innovation through our tech incubators and entrepreneurship center."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-20">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      >
        <div className="absolute inset-0 bg-poly-blue-600 bg-opacity-90"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-4xl lg:text-5xl text-white mb-6">
            Why Choose Federal Polytechnic Ede?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We stand as Nigeria's leading technical education institution, committed to excellence, innovation, and practical learning.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 fade-in-up">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="text-white text-2xl" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-white mb-4">{feature.title}</h3>
              <p className="text-blue-100">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
