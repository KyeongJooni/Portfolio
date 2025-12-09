'use client';

import { motion } from 'framer-motion';
import { SectionTitle, IconCard } from '@ui/index';
import { useScrollAnimation } from '@/hooks';
import { sectionStyles, gridStyles } from '@/styles/styles/about.styles';
import { aboutCards } from '@/constants/about.constant';
import { aboutCardVariants, aboutContainerVariants } from '@/styles/animations/about.animations';

export default function About() {
  const [ref, inView] = useScrollAnimation();

  return (
    <section id="about" className={sectionStyles} ref={ref}>
      <div className="section-container">
        <SectionTitle
          title="About Me"
          subtitle="저는 실사용자를 위한 경험 중심의 프론트엔드 개발자입니다."
          align="center"
        />

        <motion.div
          className={gridStyles}
          variants={aboutContainerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {aboutCards.map((card, index) => (
            <motion.div key={index} variants={aboutCardVariants}>
              <IconCard
                number={index + 1}
                title={card.title}
                description={card.description}
                variant="default"
                hoverable
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
