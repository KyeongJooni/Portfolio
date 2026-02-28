'use client';

import { useLoader } from '@/contexts/LoaderContext';
import { css } from '@/styled-system/css';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { isLoaded } = useLoader();
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = (resolvedTheme ?? 'dark') === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
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

  // mounted와 isLoaded 둘 다 true일 때만 보이도록 (깜빡임 방지)
  const isReady = mounted && isLoaded;

  return (
    <motion.button
      className={buttonStyles}
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
      initial={{ opacity: 0 }}
      animate={{ opacity: isReady ? 1 : 0 }}
      transition={{ duration: 0.3 }}
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
