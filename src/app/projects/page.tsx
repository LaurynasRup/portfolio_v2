import styles from '../../../styles/ProjectsPage.module.scss';
import ProjectsGrid from '../../../components/ProjectsGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Laurynas Rupainis | My work',
};
export default function page() {
  return (
    <main>
      <section className={styles.projectsSection}>
        <ProjectsGrid />
      </section>
    </main>
  );
}
