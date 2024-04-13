import styles from '../styles/ProjectsSection.module.scss';
import Link from 'next/link';
import ProjectCard from '../components/ProjectCard';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import DotsGraphic from './DotsGraphic';
import projects from '../src/app/data';

export default function ProjectsSection() {
  const { ref, inView } = useInView({
    threshold: window.innerWidth < 720 ? 0.2 : 0.5,
  });

  const dotsDimensions = {
    width: window.innerWidth < 720 ? 304 : 736,
    height: window.innerWidth < 720 ? 64 : 80,
  };

  const [visClass, setVisClass] = useState(styles.sectionProjectsNoVis);

  useEffect(() => {
    if (inView) {
      setVisClass(styles.sectionProjectsVis);
    }
  }, [inView]);

  function getRandNum() {
    const rndInt = Math.floor(Math.random() * 3) + 1;
    return rndInt;
  }

  return (
    <section
      ref={ref}
      className={`${styles.section} ${styles.sectionProjects} ${visClass}`}
    >
      <h2 className="section-heading">projects</h2>
      <div className={styles.sectionProjectsCards}>
        {projects
          .filter(el => el.promoted)
          .map(card => (
            <ProjectCard
              key={card.id}
              img={`/img${getRandNum()}.jpg`}
              title={card.title}
              body={card.body_short}
              link={card.link}
              tech={card.tech}
              type={card.type}
            ></ProjectCard>
          ))}
      </div>
      <div className={styles.sectionProjectsFooter}>
        <DotsGraphic
          width={dotsDimensions.width}
          height={dotsDimensions.height}
        />
        <Link className="link" href="/projects">
          view more projects
        </Link>
      </div>
    </section>
  );
}
