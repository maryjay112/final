import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import type { Alumni } from "@shared/schema";

export default function AlumniSuccess() {
  const { data: alumni, isLoading } = useQuery<Alumni[]>({
    queryKey: ['/api/alumni/featured']
  });

  if (isLoading) {
    return (
      <section className="relative py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
          }}
        >
          <div className="absolute inset-0 bg-poly-green-600 bg-opacity-85"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl lg:text-5xl text-white mb-6">
              Alumni Success Stories
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Loading alumni stories...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      >
        <div className="absolute inset-0 bg-poly-green-600 bg-opacity-85"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-4xl lg:text-5xl text-white mb-6">
            Alumni Success Stories
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Our graduates are leading innovation and driving progress in companies across Nigeria and internationally.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {alumni?.map((alumnus) => (
            <div key={alumnus.id} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 fade-in-up">
              <div className="text-center mb-6">
                <img 
                  src={alumnus.image} 
                  alt={alumnus.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="font-poppins font-semibold text-xl text-white mb-2">{alumnus.name}</h3>
                <p className="text-green-100 text-sm">{alumnus.position}, {alumnus.company}</p>
              </div>
              <p className="text-green-100 text-center italic">"{alumnus.content}"</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-white text-poly-green-600 px-8 py-4 font-semibold hover:bg-gray-100 transition-colors">
            Join Our Alumni Network
          </Button>
        </div>
      </div>
    </section>
  );
}
