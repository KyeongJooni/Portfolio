import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';

export const metadata: Metadata = {
  title: 'KyeongJooni Portfolio',
  description: '사용자 경험과 구조적 설계에 집중하는 개발자 이경준 포트폴리오',
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
    description:
      '사용자 경험과 구조적 설계에 집중하는 개발자 이경준 포트폴리오',
    siteName: 'KyeongJooni Portfolio',
    images: [
      {
        url: 'https://www.kyeongjooni.site/portfolio.png',
        width: 1200,
        height: 630,
        alt: 'KyeongJooni Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KyeongJooni Portfolio',
    description:
      '사용자 경험과 구조적 설계에 집중하는 개발자 이경준 포트폴리오',
    images: ['https://www.kyeongjooni.site/portfolio.png'],
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
    <html lang="ko" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
