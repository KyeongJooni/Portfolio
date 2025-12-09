'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cx } from '@/styled-system/css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionTitle, Card } from '@ui/index';
import { educations } from '@/constants/education.constant';
import { EDUCATION_COPY } from '@/constants/education.copy';
import { educationCardVariants } from '@/styles/animations/education.animations';
import {
  sectionStyles,
  containerStyles,
  gridStyles,
  cardWrapperStyles,
  cardShellStyles,
  cardContentStyles,
  schoolStyles,
  degreeStyles,
  majorStyles,
  periodStyles,
  descriptionStyles,
  gpaStyles,
  activitiesStyles,
  activityItemStyles,
  certificateButtonStyles,
  certificateButtonWrapperStyles,
  modalOverlayStyles,
  modalContentStyles,
  modalImageWrapperStyles,
  modalCloseButtonStyles,
} from '@/styles/styles/education.styles';

export default function Education() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className={sectionStyles} ref={ref}>
      <div className={cx('section-container', containerStyles)}>
        <SectionTitle
          title={EDUCATION_COPY.section.title}
          subtitle={EDUCATION_COPY.section.subtitle}
          align="center"
        />

        <div className={gridStyles}>
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              variants={educationCardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: index * EDUCATION_COPY.motion.delayStep }}
            >
              <div className={cardWrapperStyles}>
                <Card variant="default" hoverable={false} className={cardShellStyles}>
                <div className={cardContentStyles}>
                  <h3 className={schoolStyles}>{edu.school}</h3>
                  <p className={degreeStyles}>{edu.degree}</p>
                    {edu.major && <p className={majorStyles}>{edu.major}</p>}
                  <span className={periodStyles}>{edu.period}</span>
                  <p className={descriptionStyles}>{edu.description}</p>
                  {edu.gpa && <p className={gpaStyles}>GPA: {edu.gpa}</p>}
                  {edu.activities && edu.activities.length > 0 && (
                    <div className={activitiesStyles}>
                      {edu.activities.map((activity, i) => (
                        <p key={i} className={activityItemStyles}>
                          {activity}
                        </p>
                      ))}
                    </div>
                  )}
                    {edu.certificateUrl && (
                      <div className={certificateButtonWrapperStyles}>
                        <button
                          type="button"
                          className={certificateButtonStyles}
                          onClick={() => setSelectedCertificate(edu.certificateUrl!)}
                        >
                          {EDUCATION_COPY.labels.certificateButton}
                        </button>
                      </div>
                    )}
                </div>
              </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedCertificate && (
        <div className={modalOverlayStyles} onClick={() => setSelectedCertificate(null)}>
          <div className={modalContentStyles} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={modalCloseButtonStyles}
              aria-label="Close certificate"
              onClick={() => setSelectedCertificate(null)}
            >
              ×
            </button>
            <div className={modalImageWrapperStyles}>
              <Image
                src={selectedCertificate}
                alt="Certificate"
                fill
                sizes={EDUCATION_COPY.media.certificateSizes}
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
