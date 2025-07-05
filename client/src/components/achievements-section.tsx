import { useQuery } from "@tanstack/react-query";
import type { Achievement } from "@shared/schema";

export default function AchievementsSection() {
  const { data: achievements, isLoading } = useQuery<Achievement[]>({
    queryKey: ['/api/achievements/featured']
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-poly-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl lg:text-5xl text-white mb-6">
              Academic Achievements
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Loading achievements...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-poly-blue-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-4xl lg:text-5xl text-white mb-6">
            Academic Achievements
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Recognition and awards that demonstrate our commitment to excellence in technical education.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements?.map((achievement) => (
            <div key={achievement.id} className="text-center fade-in-up">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${achievement.icon} text-white text-3xl`} />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-white mb-2">{achievement.title}</h3>
              <p className="text-blue-100">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
