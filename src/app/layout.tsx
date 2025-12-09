import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'KyeongJooni Portfolio',
  description:
    '사용자 경험과 구조적 설계에 집중하는 개발자 이경준 포트폴리오',
  keywords: [
    'Frontend Developer',
    'Frontend Engineer',
    'React',
    'Next.js',
    'TypeScript',
    'Portfolio',
    'Web Developer',
    '프론트엔드 개발자',
    '이경준',
  ],
  authors: [{ name: 'KyeongJoon Lee' }],
  creator: 'KyeongJoon Lee',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://www.kyeongjooni.site/',
    title: 'KyeongJooni Portfolio',
    description: '사용자 경험과 구조적 설계에 집중하는 개발자 이경준 포트폴리오',
    siteName: 'KyeongJooni Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KyeongJooni Portfolio',
    description: '사용자 경험과 구조적 설계에 집중하는 개발자 이경준 포트폴리오',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
