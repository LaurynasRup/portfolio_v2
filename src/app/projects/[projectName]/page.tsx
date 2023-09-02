'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import data from '../../data';
import styles from '../../../../styles/SingleProject.module.css';

export default function page() {
  interface pr {
    title: string;
    body: string;
    link: string;
    tech: Array<string>;
    type: string;
  }

  const { projectName } = useParams();
  const [currentProject, setCurentProject] = useState<pr | null>(null);

  useEffect(() => {
    const project = data.find(el => el.link === projectName);
    if (project) {
      setCurentProject(project);
    }
  }, []);
  return (
    <main>
      <section className={styles.wrapper}>
        {currentProject && <h1>Project: {currentProject.title}</h1>}
        {!currentProject && <h1>Project: {projectName} Does not exist</h1>}
      </section>
    </main>
  );
}
