import { Home, Book, Calendar, Phone } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

export default function FloatingMenu() {
  const menuItems = [
    { icon: Home, href: "home", color: "bg-poly-blue-600 hover:bg-poly-blue-500" },
    { icon: Book, href: "programs", color: "bg-poly-green-600 hover:bg-poly-green-500" },
    { icon: Calendar, href: "events", color: "bg-poly-red-600 hover:bg-poly-red-500" },
    { icon: Phone, href: "contact", color: "bg-gray-600 hover:bg-gray-500" }
  ];

  return (
    <div className="floating-menu hidden lg:block">
      <div className="bg-white rounded-full shadow-lg p-2 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.href}
            onClick={() => scrollToSection(item.href)}
            className={`block w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors ${item.color}`}
          >
            <item.icon className="h-4 w-4" />
          </button>
        ))}
      </div>
    </div>
  );
}
