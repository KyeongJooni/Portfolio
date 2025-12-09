'use client';

import { cx } from '@/styled-system/css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionTitle } from '@ui/index';
import { awards } from '@/constants/awards.constant';
import { AWARDS_COPY } from '@/constants/awards.copy';
import { awardsCardVariants } from '@/styles/animations/awards.animations';
import {
  sectionStyles,
  containerStyles,
  gridStyles,
  cardStyles,
  iconStyles,
  rankBadgeStyles,
  titleStyles,
  organizationStyles,
  dateStyles,
  descriptionStyles,
} from '@/styles/styles/awards.styles';

export default function Awards() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="awards" className={sectionStyles} ref={ref}>
      <div className={cx('section-container', containerStyles)}>
        <SectionTitle
          title={AWARDS_COPY.section.title}
          subtitle={AWARDS_COPY.section.subtitle}
          align="center"
        />

        <div className={gridStyles}>
          {awards.map((award, index) => (
            <motion.div
              key={index}
              variants={awardsCardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: index * AWARDS_COPY.motion.delayStep }}
            >
              <div className={cardStyles}>
                {award.rank && <span className={rankBadgeStyles}>{award.rank}</span>}
                <div className={iconStyles}>{award.icon}</div>
                <h3 className={titleStyles}>{award.title}</h3>
                <p className={organizationStyles}>{award.organization}</p>
                <p className={dateStyles}>{award.date}</p>
                <p className={descriptionStyles}>{award.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
