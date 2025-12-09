'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionTitle } from '@ui/index';
import { experiences } from '@/constants/experience.constant';
import {
  sectionStyles,
  timelineStyles,
  timelineItemStyles,
  cardStyles,
  headerStyles,
  companyStyles,
  positionStyles,
  periodStyles,
  descriptionStyles,
  achievementsStyles,
  achievementItemStyles,
  tagsContainerStyles,
  tagStyles,
} from '@/styles/styles/experience.styles';
import { experienceItemVariants } from '@/styles/animations/experience.animations';

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const itemVariants = experienceItemVariants;

  return (
    <section id="experience" className={sectionStyles} ref={ref}>
      <div className="section-container">
        <SectionTitle
          title="Experience"
          subtitle=""
          align="center"
        />

        <div className={timelineStyles}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={timelineItemStyles}
              variants={itemVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: index * 0.2 }}
            >
              <div className={cardStyles}>
                <div className={headerStyles}>
                  <div>
                    <h3 className={companyStyles}>{exp.company}</h3>
                    <p className={positionStyles}>{exp.position}</p>
                  </div>
                  <span className={periodStyles}>{exp.period}</span>
                </div>

                <p className={descriptionStyles}>{exp.description}</p>

                <div className={achievementsStyles}>
                  {exp.achievements.map((achievement, i) => (
                    <p key={i} className={achievementItemStyles}>
                      {achievement}
                    </p>
                  ))}
                </div>

                <div className={tagsContainerStyles}>
                  {exp.tags.map((tag, i) => (
                    <span key={i} className={tagStyles}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
