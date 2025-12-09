import { ExperienceItem } from '@/types/experience';

export const experiences: ExperienceItem[] = [
  {
    company: 'Pixelro',
    position: '프론트엔드 개발 인턴',
    period: '2025.09 - 2025.12',
    description: 'AI 헬스케어 디바이스 프론트엔드 및 블루투스 연동 기능 개발·운영',
    achievements: [
      '관리자 웹 페이지(Next.js) 내 통계·보관함·업로드 등 미디어 관리 UI 구현 및 상태 관리 구조 설계',
      'Android, Kotlin 환경에서 혈압계 등 BLE(블루투스) 디바이스 연동 로직 개발 및 오류 수정',
      '전시회 현장 운영 지원 및 설치 환경 세팅·디버깅 보조',
    ],
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'SCSS',
      'Zustand',
      'Chart.js',
      'Ant Design',
      'React-Bootstrap',
      'Android',
      'Kotlin',
    ],
  },
];

