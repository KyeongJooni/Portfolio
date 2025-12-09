'use client';

import { cx } from '@/styled-system/css';
import { skillTab } from '@/styled-system/recipes';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { SectionTitle } from '@ui/index';
import { skillCategories } from '@/constants/skills.constant';
import { SKILLS_COPY } from '@/constants/skills.copy';
import {
  sectionStyles,
  containerStyles,
  skillCategoriesStyles,
  tabsWrapperStyles,
  categoryStyles,
  categoryTitleStyles,
  skillsGridStyles,
  skillCardStyles,
  skillIconStyles,
  skillNameStyles,
  skillLevelStyles,
  levelBarWrapperStyles,
  levelTrackStyles,
  levelFillStyles,
} from '@/styles/styles/skills.styles';
import { skillsContainerVariants, skillCategoryVariants } from '@/styles/animations/skills.animations';
import { Icon } from '@iconify/react';
import { skillIconMap } from '@/utils/skill-icons';

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [activeCategory, setActiveCategory] =
    useState<(typeof SKILLS_COPY.categories)[number]>(SKILLS_COPY.categories[0]);

  const getLevelPercent = (level: string) => {
    const mapping: Record<string, number> = {
      Beginner: 25,
      Intermediate: 50,
      Advanced: 75,
      Expert: 100,
      초급: 25,
      중급: 50,
      상급: 75,
      전문가: 100,
    };
    return mapping[level] ?? 50;
  };

  return (
    <section id="skills" className={sectionStyles} ref={ref}>
      <div className={cx('section-container', containerStyles)}>
        <SectionTitle
            title={SKILLS_COPY.section.title}
            subtitle={SKILLS_COPY.section.subtitle}
          align="center"
        />

          <div className={tabsWrapperStyles}>
            {SKILLS_COPY.categories.map(category => (
              <button
                key={category}
                className={skillTab({ active: activeCategory === category })}
                onClick={() => setActiveCategory(category)}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>

        <motion.div
          className={skillCategoriesStyles}
          variants={skillsContainerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {skillCategories
            .filter(category => category.title === activeCategory)
            .map((category, index) => (
            <motion.div key={index} variants={skillCategoryVariants} className={categoryStyles}>
              <h3 className={categoryTitleStyles}>{category.title}</h3>
              <div className={skillsGridStyles}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className={skillCardStyles}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className={skillIconStyles}>
                      {(() => {
                        const entry = skillIconMap[skill.name];
                        return entry ? (
                          <Icon
                            icon={entry.icon}
                            width={22}
                            height={22}
                            color={entry.color}
                          />
                        ) : (
                          skill.icon ?? null
                        );
                      })()}
                    </span>
                    <p className={skillNameStyles}>{skill.name}</p>
                    <div className={levelBarWrapperStyles}>
                      <div className={skillLevelStyles}>{skill.level}</div>
                      <div className={levelTrackStyles}>
                        <div
                          className={levelFillStyles}
                          style={{ '--level-width': `${getLevelPercent(skill.level)}%` } as React.CSSProperties}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
