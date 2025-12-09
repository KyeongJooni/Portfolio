import type { IconifyIcon } from '@iconify/react';

export type ContactIconEntry = {
  icon: IconifyIcon | string;
  color?: string;
};

export const contactIconMap: Record<string, ContactIconEntry> = {
  'simple-icons:naver': { icon: 'simple-icons:naver', color: '#03C75A' },
  // GitHub 기본 블랙은 다크 배경에서 묻히므로 밝은 톤으로 조정
  'simple-icons:github': { icon: 'simple-icons:github', color: '#B3B3B3' },
  'simple-icons:linkedin': { icon: 'simple-icons:linkedin', color: '#0A66C2' },
  'simple-icons:tistory': { icon: 'simple-icons:tistory', color: '#EC4A00' },
};

