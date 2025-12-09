export interface Project {
  image: string;
  title: string;
  description: string;
  tags: string[];
  links: {
    demo: string;
    github: string;
  };
  teamSize: string;
  period: string;
  detailedDescription?: string;
  features?: string[];
  contributions?: string[];
  results?: string[];
  contributionRate?: string; // e.g., '60% (Frontend)'
  reflections?: string[];
}

