import { Project } from '@/types/projects';

export const projects: Project[] = [
  {
    image: '/dtalks.png',
    title: 'DTalks',
    description:
      'RAG 기반 AI Chatbot을 활용한 사내문서 관리 시스템',
    tags: ['React', 'TypeScript', 'Styled-Components', 'React Query', 'Zustand', 'React Hook Form', 'Yup', 'Vite', 'KakaoCloud'],
    links: {
      demo: 'https://youtu.be/FJiiPrAlXc8',
      github: 'https://github.com/DTaIks',
    },
    teamSize: '10명',
    period: '2025.07 - 2025.08',
    contributionRate: '60%',
    detailedDescription:
      '사내 문서를 쉽고 효율적으로 활용할 수 있도록 돕는 RAG 기반 챗봇 및 데이터 관리 시스템입니다.',
    features: [
      'Auth: 이메일 기반 회원가입 및 로그인 기능',
      'AI Chatbot (RAG 기반)',
      '└ 다중 계층 필터링을 활용한 가드레일 기능',
      '└ 프롬프트 기반 주제별 질의응답 기능',
      '└ 사용자 피드백 기반 실시간 응답 품질 개선 기능',
      '└ FAQ / 용어사전 / 정책 문서 등 사내 자료를 활용한 RAG 응답 기능',
      '└ 다국어 지원 및 스몰톡 기능',
      '└ 문맥 유지 / 응답 캐싱 기능',
      'Admin Page',
      '└ 프롬프트 템플릿별 사용 통계 시각화',
      '└ 사용자 검색 및 권한 관리 기능',
      '└ 카테고리별 사내 문서 관리 (용어사전, 정책, 보고서 양식 등)',
      '└ 문서별 버전 관리 및 히스토리 조회',
      '└ 버전 간 수정사항 비교 기능',
      '└ 부서별 미디어 파일(문서, 이미지, 음성) 업로드 및 관리',
      '└ FAQ 카테고리 및 문서 등록/편집/삭제 기능',

    ],
    contributions: [
      'React+TS 기반 프론트엔드 설계와 공통 UI(Button/Modal 등) 모듈화',
      '라우팅/레이아웃: React Router v6 Outlet 기반 레이아웃 구성, 인증/일반 라우트 분리',
      '서버 상태 관리: React Query 캐싱·리페치 전략 설계, 데이터 패칭 로직 정리',
      '전역 UI 상태: Zustand로 검색/카테고리/모달 등 클라이언트 상태 모듈화',
      '파일/버전 관리: VersionHistoryModal 등 문서 비교·복원/보관 UX 구현',
      '폼/검증: React Hook Form + Yup으로 입력 검증과 즉시 피드백 설계',
      'UX 보강: 디바운스 검색/필터, 예외 시나리오 UI 대응(권한 부족, 빈 결과 등)',
      '협업/품질: FE 컨벤션(ESLint/Prettier), GitHub Flow·리뷰 프로세스 정립',
      '배포/운영: Kakao Cloud Object Storage+CDN 정적 배포 협업, CI/CD 구축 지원',
    ],
    reflections: [
      '화면보다 업무 흐름을 먼저 설계해 UX를 더 직관적으로 만들었습니다.',
      '서버/클라이언트 상태를 분리해 구조를 단순화하고 확장성을 높였습니다.',
      '폼 검증을 흐름 안내 중심으로 설계해 신뢰도를 높였습니다.',
      '예외 시나리오까지 대비해 끊기지 않는 경험을 제공했습니다.',
      '협업 구조를 열어 모두가 참여할 수 있게 해 생산성을 높였습니다.',
    ],
  },
  {
    image: '/alog.jpg',
    title: 'Alog',
    description:
      'AI를 이용한 개발자 친화적 블로그 서비스 Alog',
    tags: ['React', 'JavaScript', 'Figma', 'Framer Motion', 'React Quill', 'Zustand', 'WebSocket', 'SSE', 'Vite', 'Three.js'],
    links: {
      demo: 'https://youtu.be/ZYel_wNa28c?si=P61EYzMuTr9aQ7Aq',
      github: 'https://github.com/Gachon-Univ-Creative-Code-Innovation',
    },
    teamSize: '8명',
    period: '2025.03 - 2025.06',
    contributionRate: '50%',
    detailedDescription:
      'Alog는 개발자들이 자신의 역량을 효과적으로 표현하고, 협업과 커뮤니티 활동을 통해 함께 성장할 수 있도록 지원하는 MSA 와 AI 기반 커리어 매칭 플랫폼',
    features: [
      '회원가입 / 로그인: 일반 가입 및 카카오, 구글 기반 소셜 로그인 기능 제공',
      '블로그 글쓰기 / AI 요약: 사용자가 작성한 글을 기반으로 AI가 자동 요약 및 태그 추출',
      'README 자동 생성: 깃허브 정보와 기술 태그를 활용해 README 초안을 자동 구성',
      '개발자 매칭 기능: 기술 태그 유사도 기반으로 유저 매칭 및 프로필 열람 기능 지원',
      '포트폴리오 자동 완성: 글/태그/깃허브 기반으로 포트폴리오 초안 자동 생성 기능 제공',
      '채팅: 실시간 WebSocket 기반의 쪽지/채팅 기능 지원',
      '알림: 댓글/팔로우/쪽지 등 실시간 알림 실시간 수신 가능',
      '로드맵 추천: 유저의 기술 태그와 관심사 기반으로 커리어 로드맵 추천 기능 제공',

    ],
    contributions: [
      'React+JS 설계와 공통 UI 컴포넌트화, Three.js/R3F·Framer Motion 인터랙션 구현',
      'UX 흐름 최적화: 행동 흐름 기반 반응형 화면, 상황별 피드백, 전환 애니메이션 구성',
      'API·인증·보안: 카카오/구글 OAuth + JWT, Axios 인터셉터 토큰 전송/에러 처리, DOMPurify로 XSS 대응',
      '클라우드 업로드: S3 Presigned URL 이미지 업로드, ReactQuill 첨부 후처리, 미리보기·게시 흐름 개선',
      '실시간 인터랙션: WebSocket/SSE로 채팅·알림 수신, 재연결 로직 포함',
      '상태 관리: Context+Zustand 분리, 구독 범위/메모이제이션으로 렌더 범위 최적화',
      'AI/문서 흐름: README 자동 생성, 로드맵 추천, 요약/태그 추출 등 AI 기반 콘텐츠 흐름 설계',
    ],
    reflections: [
      '사용자 여정 단위로 사고하며 화면이 아닌 흐름 전체를 설계하는 습관을 갖게 됐습니다.',
      'MSA 환경에서 서비스 간 데이터 흐름 설계가 프론트엔드의 중요한 역할임을 깨달았습니다.',
      '지연/비정상 응답 상황에서도 UI 흐름이 끊기지 않도록 설계하는 것이 진짜 UX임을 알게 됐습니다.',
      'Zustand 기반 전역 상태 관리로 페이지 전환 후에도 데이터 맥락을 유지하는 구조의 가치를 배웠습니다.',
      '짧은 일정에서도 우선순위 판단과 집중을 통해 제한된 리소스 내에서 완성도를 높이는 역량을 키웠습니다.',
    ],
  },
  {
    image: '/portfolio.png',
    title: 'Portfolio Website',
    description:
      '클린 아키텍처와 디자인 시스템 기반의 확장 가능한 포트폴리오 웹사이트입니다. Panda CSS의 제로 런타임 CSS-in-JS와 체계적인 컴포넌트 구조로 성능과 유지보수성을 극대화했습니다.',
    tags: ['Next.js', 'TypeScript', 'Panda CSS', 'Framer Motion', 'Iconify React'],
    links: {
      demo: '#',
      github: 'https://github.com/KyeongJooni/Portfolio',
    },
    teamSize: '1명',
    period: '2024.12 - 진행중',
    contributionRate: '100% (Solo)',
    detailedDescription:
      '성능과 확장성을 모두 고려한 현대적인 포트폴리오 웹사이트입니다. Panda CSS의 제로 런타임 특성으로 CSS-in-JS의 성능 문제를 해결하고, Recipe 시스템으로 컴포넌트 변형을 타입 안전하게 관리합니다. 스타일과 로직의 완전한 분리, 토큰 기반 디자인 시스템으로 일관성 있는 UI를 구축했습니다.',
    features: [
      'Panda CSS 제로 런타임 & Recipe 시스템으로 성능과 타입 안전성 확보',
      '토큰 기반 디자인 시스템(colors, spacing, typography)으로 일관된 UI 구현',
      '스타일/로직 완전 분리 아키텍처로 유지보수성 극대화',
      'Framer Motion 스크롤 애니메이션과 인터랙션 최적화',
      '반응형 디자인 & 다크/라이트 모드 완벽 지원',
      'Next.js App Router, Dynamic Import로 코드 스플리팅 및 초기 로딩 최적화',
    ],
    contributions: [
      '전역 styles/ 폴더 구조로 Recipe와 정적 스타일 체계화, 재사용성과 확장성 확보',
      'Navigation, Skills Tab 등 반복 패턴을 Recipe로 추상화하여 변형 관리 간소화',
      'CSS 변수 활용으로 동적 스타일(레벨바 width 등) 성능 최적화',
      '인라인 스타일 제거 및 스타일 파일 분리로 관심사 분리 달성',
      'Panda CSS staticCss 설정으로 동적 variant CSS 사전 생성, 런타임 오버헤드 제거',
      'Iconify React로 아이콘 시스템 통합, 일관된 비주얼 언어 구축',
      'constants/ 폴더로 데이터 중앙화, 컴포넌트와 데이터 의존성 최소화',
    ],
    reflections: [
      'Recipe 시스템으로 variant를 타입 안전하게 관리해 개발 경험과 코드 품질을 동시에 높였습니다.',
      '스타일과 로직을 완전히 분리해 관심사 분리를 실현하고 유지보수성을 극대화했습니다.',
      '토큰 기반 디자인 시스템을 중앙화해 일관성 있는 UI를 구축했습니다.',
      'CSS 변수를 활용해 동적 스타일을 선언적으로 표현하고 성능을 개선했습니다.',
      '제로 런타임 CSS-in-JS로 개발 편의성과 성능 최적화를 모두 달성했습니다.',
      '체계적인 폴더 구조로 스타일 관리의 확장성을 높였습니다.',
    ],
  },
];

