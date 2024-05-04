'use client';

import AboutSection from '../../components/AboutSection';
import ProjectsSection from '../../components/ProjectsSection';
import HeroSection from '../../components/HeroSection';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.body.classList.remove('no-scroll');
  }, []);
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  );
}
