'use client';
import { useParams, notFound } from 'next/navigation';
import data from '../../data';
import styles from '../../../../styles/SingleProject.module.scss';
import Link from 'next/link';
import DotsGraphic from '../../../../components/DotsGraphic';
import ImageSwiper from '../../../../components/ImageSwiper';

export default function page() {
  const { projectName } = useParams();

  const project = data.find(el => el.link === projectName);

  if (!project) {
    notFound();
  }
  return (
    <main>
      <section className={styles.wrapper}>
        <div className={styles.textWrapper}>
          {project && <h1>Project: {project.title}</h1>}
          <ul className={`${styles.projectTechList} techList`}>
            {project.tech.map(item => (
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
            {project.body.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

        {project.img && <ImageSwiper img={project.img} />}
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
