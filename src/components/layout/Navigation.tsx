'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { navigation, hamburgerLine } from '@/styled-system/recipes';
import {
  containerStyles,
  logoStyles,
  navLinksStyles,
  linkStyles,
  hamburgerStyles,
  mobileMenuStyles,
  mobileLinkStyles,
} from '@/styles/styles/navigation.styles';
import { navItems, NAVIGATION_CONFIG } from '@/constants/navigation.constant';
import { navigationAnimations } from '@/styles/animations/navigation.animations';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > NAVIGATION_CONFIG.scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={navigation({ scrolled: isScrolled })}>
      <div className={containerStyles}>
        <Link href="/" className={logoStyles}>
          KyeongJoon
        </Link>

        {/* 데스크톱 네비게이션 */}
        <div className={navLinksStyles}>
          {navItems.map(item => (
            <Link key={item.label} href={item.href} className={linkStyles}>
              {item.label}
            </Link>
          ))}
        </div>

        {/* 모바일 햄버거 메뉴 */}
        <div
          className={hamburgerStyles}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={hamburgerLine({ open: isMobileMenuOpen, position: 'top' })} />
          <div className={hamburgerLine({ open: isMobileMenuOpen, position: 'middle' })} />
          <div className={hamburgerLine({ open: isMobileMenuOpen, position: 'bottom' })} />
        </div>
      </div>

      {/* 모바일 메뉴 */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={mobileMenuStyles}
            initial={{ opacity: 0, y: navigationAnimations.menu.initialY }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: navigationAnimations.menu.initialY }}
            transition={{ duration: navigationAnimations.menu.duration }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: navigationAnimations.link.initialX }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * navigationAnimations.link.delayMultiplier,
                  duration: navigationAnimations.link.duration,
                }}
              >
                <Link
                  href={item.href}
                  className={mobileLinkStyles}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
