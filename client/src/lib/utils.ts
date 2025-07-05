import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function formatTime(time: string): string {
  return time;
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    'Engineering': 'poly-blue',
    'Technology': 'poly-green',
    'Business': 'poly-red',
    'Career': 'poly-green',
    'Workshop': 'poly-red',
    'Cultural': 'purple',
    'Sports': 'yellow',
    'Seminar': 'indigo'
  };
  
  return colors[category] || 'gray';
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
