'use client';

import { useSmoothScroll } from '@hooks/index';
import Navigation from '@layout/Navigation';
import { PageLoader, ScrollProgress } from '@ui/index';
import dynamic from 'next/dynamic';

// Code splitting: Lazy load sections
const Hero = dynamic(() => import('@sections/Hero'), {
  loading: () => null,
});

const About = dynamic(() => import('@sections/About'), {
  loading: () => null,
});

const Skills = dynamic(() => import('@sections/Skills'), {
  loading: () => null,
});

const Experience = dynamic(() => import('@sections/Experience'), {
  loading: () => null,
});

const Education = dynamic(() => import('@sections/Education'), {
  loading: () => null,
});

const Activities = dynamic(() => import('@sections/Activities'), {
  loading: () => null,
});

const Projects = dynamic(() => import('@sections/Projects'), {
  loading: () => null,
});

const Contact = dynamic(() => import('@sections/Contact'), {
  loading: () => null,
});

const Footer = dynamic(() => import('@layout/Footer'), {
  loading: () => null,
});

export default function Home() {
  useSmoothScroll();

  return (
    <PageLoader>
      <ScrollProgress />
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Activities />
      <Contact />
      <Footer />
    </PageLoader>
  );
}
