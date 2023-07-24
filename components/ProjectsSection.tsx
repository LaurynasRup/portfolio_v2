import styles from '../styles/ProjectsSection.module.css';
import Link from 'next/link';
import ProjectCard from '../components/ProjectCard';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import DotsGraphic from './DotsGraphic';
export default function ProjectsSection() {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });

  const [visClass, setVisClass] = useState(styles.sectionProjectsNoVis);

  useEffect(() => {
    if (inView) {
      setVisClass(styles.sectionProjectsVis);
    }
  }, [inView]);
  return (
    <section
      ref={ref}
      className={`${styles.section} ${styles.sectionProjects} ${visClass}`}
    >
      <h2>
        projects <span>.</span>
      </h2>
      <div className={styles.sectionProjectsCards}>
        {[1, 2, 3].map((card, idx) => (
          <ProjectCard key={idx}></ProjectCard>
        ))}
      </div>
      <div className={styles.sectionProjectsFooter}>
        <DotsGraphic width={732} height={80} />
        <Link className="link" href="/about">
          view more projects
        </Link>
      </div>
    </section>
  );
}