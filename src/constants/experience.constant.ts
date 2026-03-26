import { ExperienceItem } from '@/types/experience';

export const experiences: ExperienceItem[] = [
  {
    company: 'Pixelro',
    position: '프론트엔드 개발 인턴',
    period: '2025.09 - 2025.12',
    description:
      'AI 헬스케어 디바이스 프론트엔드 및 블루투스 연동 기능 개발·운영',
    achievements: [
      '1. Recharts/Nivo 기반 낙상 위험도 대시보드 구현 (좌우 시력 차이 분석 그래프, PID별 결과 요약표)',
      '2. Next.js 관리자 페이지에서 통계·미디어 보관함 UI 및 상태 관리 구조 설계',
      '3. Android(Kotlin) BLE 디바이스 연동 로직 개발 및 연결 안정성 개선',
      '4. AWS RDS MySQL Blue/Green 무중단 버전 업그레이드 수행',
      '5. AWS EC2 Nginx 환경 SSL 인증서 수동 갱신 및 HTTPS 정상화',
    ],
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'SCSS',
      'Zustand',
      'Chart.js',
      'Recharts',
      'Nivo',
      'Ant Design',
      'React-Bootstrap',
      'Android',
      'Kotlin',
    ],
  },
];
