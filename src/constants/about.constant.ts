// About 카드 데이터
export interface AboutCard {
  title: string;
  description: string;
}

export const aboutCards: AboutCard[] = [
  {
    title: 'Human-Centered',
    description: '복잡한 도메인이라도 사용자가 자연스럽게 이해하고 행동할 수 있는 흐름을 가장 먼저 고민합니다.',
  },
  {
    title: 'Architecture',
    description: '기업실무형 프로젝트에서 FrontEnd PL을 맡아 초기 개발 환경 세팅부터 전체 프론트엔드 아키텍처를 주도적으로 설계한 경험이 있습니다.',
  },
  {
    title: 'Collaboration',
    description: '사용자 관점에서 화면 흐름과 인터페이스를 정리해 효율적인 협업과 더 나은 경험을 이끌었습니다.',
  },
  {
    title: 'Testing',
    description: 'Jest를 활용한 테스트 환경을 구축하여 기능 단위의 안정적인 테스트 및 유지보수 가능한 구조를 만들고 있습니다.',
  },
  {
    title: 'Maintainability',
    description: '재사용성과 확장성을 중심으로 컴포넌트를 설계하며 새로운 요구사항이 추가되더라도 기존 구조를 해치지 않는 구조를 지향합니다.',
  },
  {
    title: 'Modern Frontend',
    description: 'Next.js, React Query, Zustand, TailwindCSS 등 프로덕션 중심 기술과 패턴을 빠르게 학습해 도입합니다.',
  },
];

