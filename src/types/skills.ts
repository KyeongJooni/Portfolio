export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export type SkillItem = {
  name: string;
  level: SkillLevel;
  icon?: string;
};

export type SkillCategory = {
  title: string;
  skills: SkillItem[];
};

