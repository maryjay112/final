import { useState } from "react";
import { GraduationCap, Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { Link, useLocation } from "wouter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigationItems = [
    { label: "Home", href: "/", type: "route" },
    { label: "About", href: "/about", type: "route" },
    { label: "Application Form", href: "/application-form", type: "route" },
    { label: "TETFUND", href: "/tetfund", type: "route" },
    { label: "Programs", href: "programs", type: "scroll" },
    { label: "Events", href: "events", type: "scroll" },
    { label: "Management", href: "management", type: "scroll" },
    { label: "Contact", href: "contact", type: "scroll" }
  ];

  const handleNavClick = (href: string, type: string) => {
    if (type === "scroll") {
      if (location !== "/") {
        window.location.href = "/#" + href;
      } else {
        scrollToSection(href);
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-poly-blue-600 rounded-full flex items-center justify-center">
              <GraduationCap className="text-white text-2xl" />
            </div>
            <div>
              <h1 className="font-inter font-bold text-xl text-gray-800">The Federal Polytechnic Ede</h1>
              <p className="text-sm text-gray-600">Knowledge | Skill | Character

</p>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              item.type === "route" ? (
                <Link key={item.href} href={item.href} className={`text-gray-700 hover:text-polytechnic-blue font-medium transition-colors ${
                  location === item.href ? 'text-polytechnic-blue' : ''
                }`}>
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href, item.type)}
                  className="text-gray-700 hover:text-polytechnic-blue font-medium transition-colors"
                >
                  {item.label}
                </button>
              )
            ))}
            
            {/* Research Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-gray-700 hover:text-polytechnic-blue font-medium">
                  Research
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => window.open("#", "_blank")}>
                  <span>Conference Website</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => window.open("#", "_blank")}>
                  <span>Journal Website</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              {navigationItems.map((item) => (
                item.type === "route" ? (
                  <Link key={item.href} href={item.href} className="text-left text-gray-700 hover:text-polytechnic-blue font-medium transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href, item.type)}
                    className="text-left text-gray-700 hover:text-polytechnic-blue font-medium transition-colors py-2"
                  >
                    {item.label}
                  </button>
                )
              ))}
              
              {/* Mobile Research Menu */}
              <div className="py-2">
                <div className="text-gray-700 font-medium mb-2">Research</div>
                <div className="pl-4 space-y-2">
                  <button 
                    onClick={() => { window.open("#", "_blank"); setIsMobileMenuOpen(false); }}
                    className="block text-sm text-gray-600 hover:text-polytechnic-blue"
                  >
                    Conference Website
                  </button>
                  <button 
                    onClick={() => { window.open("#", "_blank"); setIsMobileMenuOpen(false); }}
                    className="block text-sm text-gray-600 hover:text-polytechnic-blue"
                  >
                    Journal Website
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
