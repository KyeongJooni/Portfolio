export interface EducationItem {
  school: string;
  degree: string;
  major?: string;
  period: string;
  description: string;
  gpa?: string;
  activities?: string[];
  certificateUrl?: string; // public 경로 또는 외부 URL
}

