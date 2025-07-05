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
            I'm an experienced web developer currently residing in Kent, UK. I
            switched my career to development in early 2020, and it was the best
            decision I ever made. I thoroughly enjoy being able to bring value
            by solving problems, building real projects that people use, and
            challenging myself to evolve in line with the ever-changing tech
            world.
          </p>
          <p>
            At my current job, I am usually responsible for building the
            front-end in line with the design, however, I might occasionally
            tackle the full scope of the project. I also participate in
            discussions with back-end developers, designers, project managers,
            and clients to keep everyone on the same page throughout the
            project.
          </p>
          <p>
            Outside of work, you would usually find me in the gym, taking on
            some DIY projects, or enjoying the beautiful surroundings of Kent
            with my dog Hugo!
          </p>
        </div>
        <Link href="/projects" className="link">
          view my work
        </Link>
      </section>
    </main>
  );
}
