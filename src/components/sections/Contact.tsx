'use client';

import { contactMethods } from '@/constants/contact.constant';
import { CONTACT_COPY } from '@/constants/contact.copy';
import { useScrollAnimation } from '@/hooks';
import { cx } from '@/styled-system/css';
import {
  contactCardVariants,
  contactCtaVariants,
} from '@/styles/animations/contact.animations';
import {
  cardWrapperStyles,
  contactCardStyles,
  contactGridStyles,
  containerStyles,
  ctaStyles,
  ctaTextStyles,
  gradientHeadingStyles,
  iconStyles,
  labelStyles,
  linkStyles,
  sectionStyles,
  valueStyles,
} from '@/styles/styles/contact.styles';
import { contactIconMap } from '@/utils/contact-icons';
import { Icon } from '@iconify/react';
import { Card, GradientText, SectionTitle } from '@ui/index';
import { motion } from 'framer-motion';

export default function Contact() {
  const [ref, inView] = useScrollAnimation();

  return (
    <section id="contact" className={sectionStyles} ref={ref}>
      <div className={cx('section-container', containerStyles)}>
        <SectionTitle
          title={CONTACT_COPY.section.title}
          subtitle={CONTACT_COPY.section.subtitle}
          align="center"
        />

        <motion.div
          className={contactGridStyles}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              className={cardWrapperStyles}
              variants={contactCardVariants}
              transition={{ delay: index * CONTACT_COPY.motion.delayStep }}
            >
              <Card variant="default" hoverable className={cardWrapperStyles}>
                <a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkStyles}
                >
                  <div className={contactCardStyles}>
                    {contactIconMap[method.icon] ? (
                      <Icon
                        icon={contactIconMap[method.icon].icon}
                        color={contactIconMap[method.icon].color}
                        className={iconStyles}
                        width="48"
                        height="48"
                      />
                    ) : (
                      <span className={iconStyles}>{method.icon}</span>
                    )}
                    <p className={labelStyles}>{method.label}</p>
                    <p className={valueStyles}>{method.value}</p>
                  </div>
                </a>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {CONTACT_COPY.cta && (
          <motion.div
            className={ctaStyles}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={contactCtaVariants}
            transition={{
              delay: CONTACT_COPY.motion.ctaDelay,
              duration: CONTACT_COPY.motion.ctaDuration,
            }}
          >
            <p className={ctaTextStyles}>{CONTACT_COPY.cta.text}</p>
            <GradientText as="h3" animate className={gradientHeadingStyles}>
              {CONTACT_COPY.cta.heading}
            </GradientText>
          </motion.div>
        )}
      </div>
    </section>
  );
}
