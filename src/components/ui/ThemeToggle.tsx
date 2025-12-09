'use client';

import { css } from '@/styled-system/css';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false); // 기본을 라이트로 시작
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      const dark = savedTheme === 'dark';
      setIsDark(dark);
      document.documentElement.classList.toggle('light', !dark);
    } else {
      // 저장된 값이 없으면 라이트 모드로 시작
      setIsDark(false);
      document.documentElement.classList.add('light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('light', !newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const buttonStyles = css({
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    backgroundColor: '{colors.background.tertiary}',
    border: '1px solid {colors.border.primary}',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    transition: 'all {durations.normal}',
    zIndex: 1000,
    _hover: {
      transform: 'scale(1.1)',
      boxShadow: '0 8px 20px rgba(59, 130, 246, 0.3)',
      borderColor: '{colors.brand.blue}',
    },
  });

  const iconStyles = css({
    fontSize: '{fontSizes.2xl}',
  });

  if (!mounted) return null;

  return (
    <motion.button
      className={buttonStyles}
      onClick={toggleTheme}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      aria-label="Toggle theme"
    >
      <motion.span
        className={iconStyles}
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? '☀️' : '🌙'}
      </motion.span>
    </motion.button>
  );
}
