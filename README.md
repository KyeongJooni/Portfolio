<div align="center">

<h1>Portfolio Website</h1>

<p><em>클린 아키텍처와 디자인 시스템 기반의 포트폴리오 웹사이트</em></p>

<p>
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Panda%20CSS-FEE259?style=for-the-badge&logo=css3&logoColor=black" alt="Panda CSS"/>
  <img src="https://img.shields.io/badge/Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion"/>
  <img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" />
  <img src="https://img.shields.io/badge/prettier-%23F7B93E.svg?style=for-the-badge&logo=prettier&logoColor=black" />

  <br>
  
  <img src="https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220" />
  <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" />
</p>

<p>
  <img src="https://img.shields.io/badge/개발기간-2025.09~진행중-7D57C1?style=for-the-badge&logo=github&logoColor=white" alt="개발기간"/>
</p>

</div>

<br>

## 🛠️ 기술 스택

### Core

- **Next.js 15** - App Router, Server Components
- **TypeScript** - 타입 안전성
- **Panda CSS** - 제로 런타임 CSS-in-JS, Recipe 시스템

### Styling & Animation

- **Panda CSS Recipe** - 타입 안전한 컴포넌트 variant 시스템
- **Framer Motion** - 스크롤 애니메이션 & 인터랙션
- **Iconify React** - 통합 아이콘 시스템

### Design System

- **토큰 기반 디자인 시스템** - colors, spacing, typography
- **Recipe 기반 컴포넌트** - Button, Card, Navigation, SkillTab
- **CSS 변수** - 동적 스타일링

<br>

## 📁 프로젝트 구조

```
src/
├── app/                        # Next.js App Router
├── components/
│   ├── sections/               # 섹션 컴포넌트
│   ├── ui/                     # 공통 UI 컴포넌트
│   └── layout/                 # 레이아웃 컴포넌트
├── styles/
│   ├── recipes/                # Panda CSS Recipe 정의
│   ├── styles/                 # 정적 스타일
│   └── animations/             # Framer Motion variants
├── constants/                  # 데이터 상수
├── contexts/                   # React Context
├── hooks/                      # 커스텀 Hook
├── types/                      # TypeScript 타입
└── utils/                      # 유틸리티
```

<br>

## ✨ 주요 특징

### 아키텍처

- **스타일/로직 완전 분리** - 유지보수성 극대화
- **Recipe 시스템** - 타입 안전한 variant 관리
- **토큰 기반 디자인 시스템** - 일관된 UI 구축

### 성능 최적화

- **Panda CSS 제로 런타임** - CSS-in-JS 런타임 오버헤드 제거
- **staticCss 설정** - 동적 variant CSS 사전 생성
- **Dynamic Import** - 코드 스플리팅

### 개발 경험

- **타입 안전성** - Recipe variant 자동 완성
- **체계적인 구조** - recipes/, styles/, animations/ 분리
- **재사용성** - 중앙화된 디자인 토큰 & 컴포넌트
