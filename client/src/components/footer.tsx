import { GraduationCap, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

export default function Footer() {
  const quickLinks = [
    { label: "About Us", href: "about" },
    { label: "Academic Programs", href: "programs" },
    { label: "Events", href: "events" },
    { label: "Management", href: "management" },
    { label: "Contact", href: "contact" }
  ];

  const studentResources = [
    { label: "Student Portal", href: "#" },
    { label: "Library", href: "#" },
    { label: "Career Services", href: "#" },
    { label: "Campus Life", href: "#" },
    { label: "Alumni Network", href: "#" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-poly-blue-600 rounded-full flex items-center justify-center">
                <GraduationCap className="text-white h-6 w-6" />
              </div>
              <div>
                <h3 className="font-inter font-bold text-lg"> The Federal Polytechnic Ede</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6">Knowledge | Skill | Character</p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-poly-blue-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-6">Student Resources</h4>
            <ul className="space-y-3">
              {studentResources.map((resource) => (
                <li key={resource.label}>
                  <a href={resource.href} className="text-gray-300 hover:text-white transition-colors">
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Info</h4>
            <div className="space-y-3">
              <p className="text-gray-300 flex items-start">
                <span className="mr-2 mt-1">📍</span>
                P.M.B. 231, Ede, Osun State
              </p>
              <p className="text-gray-300 flex items-center">
                <span className="mr-2">📞</span>
                +234 (0) 35 2310 234
              </p>
              <p className="text-gray-300 flex items-center">
                <span className="mr-2">✉️</span>
                info@fedpolyede.edu.ng
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">&copy; 2025 Federal Polytechnic Ede. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
