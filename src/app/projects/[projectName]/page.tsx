'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import data from '../../data';
import styles from '../../../../styles/SingleProject.module.css';
import Link from 'next/link';
import DotsGraphic from '../../../../components/DotsGraphic';

export default function page() {
  interface pr {
    title: string;
    body: string[];
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
      console.log(currentProject);
    }
  }, []);

  if (currentProject) {
    return (
      <main>
        <section className={styles.wrapper}>
          {currentProject && <h1>Project: {currentProject.title}</h1>}

          <ul className={`${styles.projectTechList} techList`}>
            {currentProject.tech.map(item => (
              <li
                key={item}
                className="techItem"
                style={{ backgroundImage: `url('/${item}.svg')` }}
              >
                {item}
              </li>
            ))}
          </ul>
          <div className={styles.projectBody}>
            {currentProject.body.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
          <div className={styles.projectImgWrapper}></div>
          <div className={styles.projectFooter}>
            <div className={styles.projectFooterDots}>
              <DotsGraphic width={800} height={80} />
            </div>
            <Link className="link" href="/projects">
              all projects
            </Link>
          </div>
        </section>
      </main>
    );
  }
}
