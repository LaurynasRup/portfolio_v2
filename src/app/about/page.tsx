import DotsGraphic from '../../../components/DotsGraphic';
import styles from '../../../styles/AboutPage.module.css';

export default function About() {
  return (
    <main>
      <section className={styles.aboutSection}>
        <DotsGraphic width={600} height={296} />
      </section>
    </main>
  );
}
