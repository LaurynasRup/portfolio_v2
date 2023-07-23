'use client';

import AboutSection from '../../components/AboutSection';
import ProjectsSection from '../../components/ProjectsSection';
import styles from '../../styles/Page.module.css';
import DotsGraphic from '../../components/DotsGraphic';

export default function Home() {
  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <main>
      <section className={styles.section}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.pageTitle}>
            {['Modern', 'Web', 'Development', 'Solutions'].map((word, idx) => (
              <span key={idx} className={styles.pageTitleSpanOuter}>
                <span className={styles.pageTitleSpanInner}>{word}&nbsp;</span>
              </span>
            ))}
          </h1>
          <p className={styles.pageSubtitle}>by Laurynas Rupainis</p>
        </div>
        <div className={styles.imageWrapper}>
          <DotsGraphic width={732} height={465} />
        </div>
      </section>
      <AboutSection />
      <ProjectsSection />

      <footer className={styles.pageFooter}>
        <p>&copy; {getYear()} Laurynas Rupainis</p>
        <div className={styles.pageFooterLinks}>
          <a
            href="https://www.linkedin.com/in/laurynas-rupainis-620334125/"
            className={`${styles.pageFooterLink} ${styles.pageFooterLinkLI}`}
          >
            LinkedIn
          </a>
          <a
            href="mailto:rupainis.laurynas@gmail.com"
            className={`${styles.pageFooterLink} ${styles.pageFooterLinkEmail}`}
          >
            Email me
          </a>
          <a
            href="https://github.com/LaurynasRup"
            className={`${styles.pageFooterLink} ${styles.pageFooterLinkGH}`}
          >
            GitHub
          </a>
        </div>
      </footer>
    </main>
  );
}
