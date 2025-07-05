import { useEffect, useRef, useState } from "react";
import { Users, Book, Presentation, Trophy } from "lucide-react";

const stats = [
  {
    icon: Users,
    count: 15000,
    label: "Active Students",
    color: "bg-poly-blue-100 text-poly-blue-600"
  },
  {
    icon: Book,
    count: 40,
    label: "Academic Programs",
    color: "bg-poly-green-100 text-poly-green-600"
  },
  {
    icon: Presentation,
    count: 400,
    label: "Expert Faculty",
    color: "bg-poly-red-100 text-poly-red-600"
  },
  {
    icon: Trophy,
    count: 98,
    label: "% Graduate Success",
    color: "bg-yellow-100 text-yellow-600"
  }
];

function CounterBox({ icon: Icon, count, label, color }: {
  icon: any;
  count: number;
  label: string;
  color: string;
}) {
  const [currentCount, setCurrentCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          const increment = count / 50;
          let current = 0;
          
          const updateCounter = () => {
            if (current < count) {
              current += increment;
              setCurrentCount(Math.round(current));
              requestAnimationFrame(updateCounter);
            } else {
              setCurrentCount(count);
            }
          };
          
          updateCounter();
        }
      },
      { threshold: 0.5, rootMargin: '0px 0px -100px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [count, isVisible]);

  return (
    <div ref={ref} className="text-center fade-in-up">
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${color}`}>
        <Icon className="text-2xl" />
      </div>
      <div className="text-4xl font-bold text-gray-800 mb-2">{currentCount}</div>
      <p className="text-gray-600 font-medium">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <CounterBox key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
