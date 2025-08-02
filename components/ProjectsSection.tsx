'use client';
import styles from '../styles/ProjectsSection.module.scss';
import Link from 'next/link';
import ProjectCard from '../components/ProjectCard';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import DotsGraphic from './DotsGraphic';
import projects from '../data';

export default function ProjectsSection() {
  const [th, setTh] = useState(0);

  useEffect(() => {
    if (window.innerWidth > 720) {
      setTh(0.5);
    } else {
      setTh(0.2);
    }
  }, []);

  const { ref, inView } = useInView({
    threshold: th,
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
      <h2 className="section-heading">projects</h2>
      <div className={styles.sectionProjectsCards}>
        {projects
          .filter(el => el.promoted)
          .map(card => (
            <ProjectCard
              key={card.id}
              img={card.img[0]}
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
          width={736}
          height={80}
          mobileWidth={304}
          mobileHeight={64}
        />
        <Link className="link" href="/projects">
          view more projects
        </Link>
      </div>
    </section>
  );
}
