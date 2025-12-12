import type { NavItem } from '@/types/navigation';

// 네비게이션 설정 상수
export const NAVIGATION_CONFIG = {
  scrollThreshold: 50,
} as const;

// 네비게이션 메뉴 항목
export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Activities', href: '#activities' },
  { label: 'Contact', href: '#contact' },
];
