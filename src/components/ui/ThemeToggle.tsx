'use client';

import { css } from '@/styled-system/css';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLoader } from '@/contexts/LoaderContext';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true); // 다크모드 
  const [mounted, setMounted] = useState(false);
  const { isLoaded } = useLoader();

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      const dark = savedTheme === 'dark';
      setIsDark(dark);
      document.documentElement.classList.toggle('light', !dark);
    } else {
      // 다크 모드로 시작
      setIsDark(true);
      document.documentElement.classList.remove('light');
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

  const textStyles = css({
    fontSize: '{fontSizes.lg}',
    fontWeight: '700',
    color: '{colors.text.primary}',
  });

  if (!mounted) return null;

  return (
    <motion.button
      className={buttonStyles}
      onClick={toggleTheme}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={isLoaded ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      aria-label="Toggle theme"
    >
      <motion.span
        className={textStyles}
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? 'L' : 'D'}
      </motion.span>
    </motion.button>
  );
}
