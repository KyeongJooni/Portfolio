import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Portfolio | Creative Frontend Developer',
  description:
    '사용자 경험을 최우선으로 생각하며, 아름답고 인터랙티브한 웹을 만드는 프론트엔드 개발자의 포트폴리오입니다.',
  keywords: [
    'Frontend Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Portfolio',
    'Web Developer',
    '프론트엔드 개발자',
  ],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://yourwebsite.com',
    title: 'Portfolio | Creative Frontend Developer',
    description: '사용자 경험을 최우선으로 생각하는 프론트엔드 개발자',
    siteName: 'Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Creative Frontend Developer',
    description: '사용자 경험을 최우선으로 생각하는 프론트엔드 개발자',
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
