'use client';

// import Image from 'next/image'; // 사진 사용 시 주석 해제
import { motion } from 'framer-motion';
import { Button, GradientText } from '@ui/index';
import { cx } from '@/styled-system/css';
import {
  sectionStyles,
  layoutStyles,
  // imageContainerStyles, // 사진 사용 시 주석 해제
  // imagePlaceholderStyles, // 사진 사용 시 주석 해제
  contentStyles,
  titleStyles,
  introBlocksStyles,
  introBlockStyles,
  introHeadingStyles,
  introDescStyles,
  buttonGroupStyles,
  floatingElementStyles,
  firstFloatingStyles,
  secondFloatingStyles,
} from '@/styles/styles/hero.styles';
import { HERO_CONTENT } from '@/constants/hero.constant';
import { heroAnimations } from '@/styles/animations/hero.animations';
import { useLoader } from '@/contexts/LoaderContext';

export default function Hero() {
  const { isLoaded } = useLoader();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={sectionStyles}>
      {/* 배경 플로팅 요소 */}
      <div className={cx(floatingElementStyles, firstFloatingStyles)} />
      <div className={cx(floatingElementStyles, secondFloatingStyles)} />

      {/* 메인 레이아웃 (사진 + 텍스트) */}
      <div className={cx('section-container', layoutStyles)}>
        {/* 텍스트 콘텐츠 - isLoaded일 때만 애니메이션 */}
        <motion.div
          className={contentStyles}
          initial={{ opacity: 0, y: heroAnimations.content.initialY }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: heroAnimations.content.initialY }}
          transition={{ duration: heroAnimations.content.duration }}
        >
          {/* 메인 제목 */}
          <GradientText as="h1" className={titleStyles}>
            {HERO_CONTENT.title}
          </GradientText>

          {/* 소개 블록들 */}
          <div className={introBlocksStyles}>
            {HERO_CONTENT.introBlocks.map((block, index) => (
              <motion.div
                key={index}
                className={introBlockStyles}
                initial={{
                  opacity: 0,
                  y: heroAnimations.block.initialY,
                }}
                animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: heroAnimations.block.initialY }}
                transition={{
                  delay: isLoaded ? heroAnimations.block.delays[index] : 0,
                  duration: heroAnimations.block.duration,
                }}
              >
                <h2 className={introHeadingStyles}>{block.heading}</h2>
                <p className={introDescStyles}>{block.description}</p>
              </motion.div>
            ))}
          </div>

          {/* 버튼 그룹 */}
          <motion.div
            className={buttonGroupStyles}
            initial={{
              opacity: 0,
              y: heroAnimations.block.initialY,
            }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: heroAnimations.block.initialY }}
            transition={{
              delay: isLoaded ? heroAnimations.block.delays[2] : 0,
              duration: heroAnimations.block.duration,
            }}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('projects')}
            >
              {HERO_CONTENT.buttons.primary}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              {HERO_CONTENT.buttons.secondary}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
