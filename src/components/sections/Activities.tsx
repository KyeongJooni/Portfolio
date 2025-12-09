'use client';

import { cx } from '@/styled-system/css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionTitle } from '@ui/index';
import { activities } from '@/constants/activities.constant';
import {
  sectionStyles,
  containerStyles,
  gridStyles,
  cardStyles,
  headerStyles,
  periodStyles,
  titleStyles,
  listStyles,
  itemStyles,
} from '@/styles/styles/activities.styles';
import {
  activitiesContainerVariants,
  activityCardVariants,
} from '@/styles/animations/activities.animations';

export default function Activities() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sortedActivities = [...activities].sort((a, b) => {
    const pa = a.period ?? '';
    const pb = b.period ?? '';
    return pb.localeCompare(pa);
  });

  return (
    <section id="activities" className={sectionStyles} ref={ref}>
      <div className={cx('section-container', containerStyles)}>
        <SectionTitle title="Activities" subtitle="" align="center" />

        <motion.div
          className={gridStyles}
          variants={activitiesContainerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {sortedActivities.map((activity, index) => (
            <motion.div key={index} variants={activityCardVariants} className={cardStyles}>
              <div className={headerStyles}>
                <h3 className={titleStyles}>{activity.title}</h3>
                {activity.period && <span className={periodStyles}>{activity.period}</span>}
              </div>
              <div className={listStyles}>
                {activity.items.map((item, i) => (
                  <p key={i} className={itemStyles}>
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

