'use client';

import { useBodyScrollLock, useEscapeKey } from '@/hooks';
import { css } from '@/styled-system/css';
import {
  closeButtonStyles,
  contentStyles,
  descriptionStyles,
  headerStyles,
  imageContainerStyles,
  linkGroupStyles,
  listItemStyles,
  listStyles,
  modalStyles,
  nestedListItemStyles,
  overlayStyles,
  sectionStyles,
  sectionTitleStyles,
  titleStyles,
} from '@/styles/styles/projectmodal.styles';
import { tagContainerStyles, tagStyles } from '@/styles/styles/projects.styles';
import { tagIconMap } from '@/utils/tag-icons';
import { Button } from '@ui/index';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
  image: string;
  title: string;
  description: string;
  tags: string[];
  links: {
    demo: string;
    github: string;
  };
  detailedDescription?: string;
  features?: string[];
  contributions?: string[];
  results?: string[];
  reflections?: string[];
  contributionRate?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  useBodyScrollLock(isOpen);
  useEscapeKey(onClose, isOpen);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={overlayStyles}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={modalStyles}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={closeButtonStyles} onClick={onClose}>
              <span
                className={css({
                  fontSize: '{fontSizes.xl}',
                  color: '{colors.text.primary}',
                })}
              >
                ✕
              </span>
            </button>

            <div className={contentStyles}>
              <div className={imageContainerStyles}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(min-width: 1024px) 800px, 100vw"
                  priority
                />
              </div>

              <div className={headerStyles}>
                <h2 className={titleStyles}>{project.title}</h2>
                <div className={tagContainerStyles}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className={tagStyles}>
                      {(() => {
                        const Icon = tagIconMap[tag];
                        return Icon ? (
                          <Icon.Icon size={16} color={Icon.color} title={tag} />
                        ) : null;
                      })()}
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className={sectionStyles}>
                <h3 className={sectionTitleStyles}>프로젝트 소개</h3>
                <p className={descriptionStyles}>
                  {project.detailedDescription || project.description}
                </p>
              </div>

              {project.features && project.features.length > 0 && (
                <div className={sectionStyles}>
                  <h3 className={sectionTitleStyles}>주요 기능</h3>
                  <ul className={listStyles}>
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className={
                          feature.trim().startsWith('└')
                            ? nestedListItemStyles
                            : listItemStyles
                        }
                      >
                        {feature.replace(/^└\s?/, '').trim()}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.contributions && project.contributions.length > 0 && (
                <div className={sectionStyles}>
                  <h3 className={sectionTitleStyles}>
                    {project.contributionRate
                      ? `나의 기여 (${project.contributionRate})`
                      : '나의 기여'}
                  </h3>
                  <ul className={listStyles}>
                    {project.contributions.map((challenge, i) => (
                      <li key={i} className={listItemStyles}>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.reflections && project.reflections.length > 0 && (
                <div className={sectionStyles}>
                  <h3 className={sectionTitleStyles}>마무리</h3>
                  <ul className={listStyles}>
                    {project.reflections.map((item, i) => (
                      <li key={i} className={listItemStyles}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className={linkGroupStyles}>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => window.open(project.links.demo, '_blank')}
                >
                  Demo
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open(project.links.github, '_blank')}
                >
                  GitHub
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
