'use client';

import { css } from '@/styled-system/css';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      const dark = savedTheme === 'dark';
      setIsDark(dark);
      document.documentElement.classList.toggle('light', !dark);
    } else {
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    transition: 'all {durations.normal}',
    color: '{colors.text.primary}',
    _hover: {
      backgroundColor: '{colors.background.tertiary}',
      color: '{colors.brand.blue}',
    },
  });

  if (!mounted) return null;

  return (
    <motion.button
      className={buttonStyles}
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 360 }}
        transition={{ duration: 0.3 }}
      >
        <Icon
          icon={isDark ? 'ph:sun-fill' : 'ph:moon-fill'}
          width={20}
          height={20}
        />
      </motion.div>
    </motion.button>
  );
}
