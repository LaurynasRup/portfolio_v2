'use client';

import AboutSection from '../../components/AboutSection';
import ProjectsSection from '../../components/ProjectsSection';
import HeroSection from '../../components/HeroSection';
import DotsGraphic from '../../components/DotsGraphic';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  );
}
