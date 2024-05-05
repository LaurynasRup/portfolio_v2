import styles from '../../../styles/AboutPage.module.scss';
import PersonImage from '../../../components/PersonImage';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Laurynas Rupainis | About me',
};

export default function About() {
  return (
    <main>
      <section className={styles.aboutSection}>
        <PersonImage />
        <div className={styles.aboutSectionText}>
          <h3>Hi, I am Laurynas Rupainis,</h3>
          <p>
            I'm Laurynas Rupainis, an experienced web developer from Kent. Since
            early 2020, I've advanced from a junior to a seasoned professional.
            While I specialize in Drupal development, exploring frontend
            intricacies and backend functionalities, I also embrace various
            technologies to broaden my skill set.
          </p>
          <p>
            Staying updated with the latest advancements is crucial. I utilize
            Next.js in personal projects for enhanced user experiences.
            Currently, I'm exploring Rust for its innovation and learning
            potential.
          </p>
          <p>
            My passion lies in leveraging technologies to create impactful
            projects, continually advancing web development.
          </p>
        </div>
        <Link href="/projects" className="link">
          view my work
        </Link>
      </section>
    </main>
  );
}
