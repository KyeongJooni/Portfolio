import { EducationItem } from '@/types/education';

export const educations: EducationItem[] = [
  {
    school: '가천대학교',
    degree: '학사',
    major: '컴퓨터공학과',
    period: '2020.03 - 2026.02 (졸업예정)',
    description:
      '컴퓨터공학 전반에 대한 이론과 실무를 학습하며 웹 개발에 대한 흥미를 발견했습니다.',
    activities: [
      '알고리즘, 데이터베이스,  웹 애플리케이션 개발 LAB 등 전공 강의 수강 및 A+ 성적 획득',
      '가천대학교 P-실무프로젝트 장려상 수상',
    ],
  },
  {
    school: '카카오엔터프라이즈 SW 아카데미 6기',
    degree: '소프트웨어 인재 Micro degree',
    major: '프론트엔드 개발',
    period: '2025.03 - 2025.08',
    description: '과학기술정보통신부, 가천대학교, 기업협력형 SW 아카데미',
    activities: [
      '총 656시간 풀타임 집중 교육 과정 수료',
      'IT기업 연계형 인공지능 & 클라우드 역량 강화 교육 과정 수료',
      '현장미러형 프로젝트 및 기업실무 프로젝트 참여',
    ],
    certificateUrl: '/certification.png',
  },
];

