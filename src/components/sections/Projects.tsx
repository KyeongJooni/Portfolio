'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import Image from 'next/image';
import { cx } from '@/styled-system/css';
import { SectionTitle, Card, Button, ProjectModal } from '@ui/index';
import { Project } from '@/types/projects';
import { projects } from '@/constants/projects.constant';
import { projectsCardVariants } from '@/styles/animations/projects.animations';
import { tagIconMap } from '@/utils/tag-icons';
import { PROJECTS_COPY } from '@/constants/projects.copy';
import {
  sectionStyles,
  containerStyles,
  projectsListStyles,
  projectCardStyles,
  imageContainerStyles,
  imagePlaceholderStyles,
  contentStyles,
  metaGroupStyles,
  tagContainerStyles,
  tagStyles,
  titleStyles,
  descStyles,
  linkGroupStyles,
} from '@/styles/styles/projects.styles';

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="projects" className={sectionStyles} ref={ref}>
        <div className={cx('section-container', containerStyles)}>
          <SectionTitle
            title={PROJECTS_COPY.section.title}
            subtitle={PROJECTS_COPY.section.subtitle}
            align="center"
          />

          <div className={projectsListStyles}>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={projectsCardVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                transition={{ delay: index * PROJECTS_COPY.motion.cardDelayStep }}
              >
                <Card variant="default" hoverable>
                  <div className={projectCardStyles}>
                    <div
                      className={imageContainerStyles}
                      onClick={() => handleProjectClick(project)}
                  >
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        style={{ objectFit: 'cover' }}
                          sizes={PROJECTS_COPY.media.imageSizes}
                      />
                    ) : (
                        <span className={imagePlaceholderStyles}>
                          {PROJECTS_COPY.labels.imagePlaceholder}
                        </span>
                    )}
                  </div>
                    <div className={contentStyles}>
                      <h3 className={titleStyles}>{project.title}</h3>
                      <p className={descStyles}>{project.description}</p>
                      <div className={metaGroupStyles}>
                        <span>
                          {PROJECTS_COPY.labels.headcount} {project.teamSize}
                        </span>
                        <span>
                          {PROJECTS_COPY.labels.period} {project.period}
                        </span>
                      </div>
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
                      <div className={linkGroupStyles}>
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => handleProjectClick(project)}
                        >
                          {PROJECTS_COPY.labels.viewMore}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(project.links.github, '_blank')}
                        >
                          {PROJECTS_COPY.labels.github}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(project.links.demo, '_blank')}
                        >
                          {PROJECTS_COPY.labels.demo}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
