import styles from '../styles/ProjectsSection.module.css';
import Link from 'next/link';
import Image from 'next/image';
import ProjectCard from '../components/ProjectCard';
export default function ProjectsSection() {
  return (
    <section className={`${styles.section} ${styles.sectionProjects}`}>
      <h2>
        projects <span>.</span>
      </h2>
      <div className={styles.sectionProjectsCards}>
        {[1, 2, 3].map((card, idx) => (
          <ProjectCard key={idx}></ProjectCard>
        ))}
      </div>
      <div className={styles.sectionProjectsFooter}>
        <Image src="/dot-square-3.svg" alt="dots" width="740" height="80" />
        <Link className="link" href="/about">
          view more projects
        </Link>
      </div>
    </section>
  );
}
