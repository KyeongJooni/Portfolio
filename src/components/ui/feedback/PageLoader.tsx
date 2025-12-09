'use client';

import { css } from '@/styled-system/css';
import { motion } from 'framer-motion';
import { useState, useEffect, ReactNode } from 'react';
import { LoaderProvider } from '@/contexts/LoaderContext';

interface PageLoaderProps {
  children?: ReactNode;
}

const VISITED_KEY = 'portfolio_visited';

export default function PageLoader({ children }: PageLoaderProps) {
  const [phase, setPhase] = useState<'loading' | 'turning' | 'done' | 'skip'>('loading');
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    // 이미 방문한 세션이면 로더 스킵
    if (typeof window !== 'undefined' && sessionStorage.getItem(VISITED_KEY)) {
      setPhase('skip');
      return;
    }

    // 첫 방문이면 로더 표시 후 플래그 설정
    const turnTimer = setTimeout(() => {
      setPhase('turning');
    }, 1800);

    return () => clearTimeout(turnTimer);
  }, [phase]);

  useEffect(() => {
    if (phase === 'turning') {
      let start: number | null = null;
      const duration = 1200;

      const animate = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const eased = progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        setRotation(eased * -90);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setPhase('done');
          // 로더 완료 후 방문 플래그 설정
          if (typeof window !== 'undefined') {
            sessionStorage.setItem(VISITED_KEY, 'true');
          }
        }
      };

      requestAnimationFrame(animate);
    }
  }, [phase]);

  const wrapperStyles = css({
    position: 'fixed',
    inset: 0,
    perspective: '2000px',
    overflow: 'hidden',
    zIndex: phase === 'done' || phase === 'skip' ? -1 : 9999,
    pointerEvents: phase === 'done' || phase === 'skip' ? 'none' : 'auto',
  });

  const cubeStyles = css({
    width: '100%',
    height: '100%',
    position: 'relative',
    transformStyle: 'preserve-3d',
  });

  const faceStyles = css({
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    overflow: 'hidden',
  });

  const loaderFaceStyles = css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0a0a0f',
  });

  const logoStyles = css({
    fontSize: '4rem',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #5F8BFF, #A855F7)',
    backgroundClip: 'text',
    color: 'transparent',
    textAlign: 'center',
  });

  const cubeDepth = 'calc(50vw)';

  // 새로고침 시 스킵 또는 로더 완료
  if (phase === 'skip' || phase === 'done') {
    return (
      <LoaderProvider isLoaded={true}>
        {children}
      </LoaderProvider>
    );
  }

  return (
    <LoaderProvider isLoaded={false}>
      <div className={wrapperStyles}>
        <div
          className={cubeStyles}
          style={{
            transform: `translateZ(-50vw) rotateY(${rotation}deg)`,
          }}
        >
          {/* 로더 화면 - 정면 */}
          <div
            className={`${faceStyles} ${loaderFaceStyles}`}
            style={{
              transform: `rotateY(0deg) translateZ(${cubeDepth})`,
            }}
          >
            <motion.h1
              className={logoStyles}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Portfolio
            </motion.h1>
          </div>

          {/* 실제 페이지 - 오른쪽 90도 */}
          <div
            className={faceStyles}
            style={{
              transform: `rotateY(90deg) translateZ(${cubeDepth})`,
            }}
          >
            {children}
          </div>
        </div>
      </div>

      {/* 미리 렌더링 (hydration) */}
      <div style={{ visibility: 'hidden', position: 'fixed', inset: 0, zIndex: -1 }}>
        {children}
      </div>
    </LoaderProvider>
  );
}
