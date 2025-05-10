import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/AboutSection.module.scss';
import DotsGraphic from './DotsGraphic';

export default function AboutSection() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const [headingClass, setHeadingClass] = useState(styles.sectionAboutNoVis);

  useEffect(() => {
    if (inView) {
      setHeadingClass(styles.sectionAboutVis);
    }
  }, [inView]);
  return (
    <section
      ref={ref}
      className={`${styles.section} ${styles.sectionAbout} ${headingClass}`}
    >
      <h2 className="section-heading">about</h2>
      <div className={styles.sectionAboutMain}>
        <div className={styles.imageWrapperNarrow}>
          <DotsGraphic
            width={1008}
            height={160}
            mobileWidth={1008}
            mobileHeight={160}
          />
        </div>
        <div className={styles.sectionAboutContent}>
          <h3>Hi there!</h3>
          <div className={styles.imageWrapperLine}>
            <DotsGraphic
              width={1000}
              height={10}
              mobileWidth={1000}
              mobileHeight={10}
            />
          </div>
          <p>
            My name is Laurynas Rupainis, and I am a Web Developer based in
            Garden of England (Kent).
          </p>
          <p>
            I've been building various websites and web apps since 2020, when I
            first fell in love with the world of code and problem solving.
          </p>
          <p>
            Professionaly, my focus is mainly around Drupal and its environment,
            however I keep myself up to date and enjoy building various personal
            projects using more popular technologies be it React, NodeJS or
            anything else that meets project requirements and is fun to use!
          </p>
          <Link className="link" href="/about">
            more about me
          </Link>
        </div>
      </div>
    </section>
  );
}
