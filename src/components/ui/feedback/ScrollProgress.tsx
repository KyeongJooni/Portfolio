'use client';

import { css } from '@/styled-system/css';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 550,
    damping: 60,
    restDelta: 0.0005,
  });

  useEffect(() => {
    // 마운트 완료 후 렌더 (초기 스크롤 위치 계산 대기)
    setMounted(true);
  }, []);

  const progressBarStyles = css({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, {colors.brand.blue}, {colors.brand.purple})',
    transformOrigin: '0%',
    zIndex: 9999,
  });

  // 마운트 전에는 숨김 (초기 스크롤 위치 문제 방지)
  if (!mounted) {
    return null;
  }

  return <motion.div className={progressBarStyles} style={{ scaleX }} />;
}
