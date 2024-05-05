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
          <h3>Hi I am Laurynas Rupainis,</h3>
          <div className={styles.imageWrapperLine}>
            <DotsGraphic
              width={1000}
              height={10}
              mobileWidth={1000}
              mobileHeight={10}
            />
          </div>
          <p>
            Hey there, I'm Laurynas Rupainis, a web developer based in Kent.
            Since 2020, I've been deeply involved in web development, advancing
            steadily from junior to seasoned professional. While I specialize in
            Drupal development, I also leverage Next.js to elevate user
            experiences.
          </p>
          <p>
            Currently, I'm exploring Rust, captivated by its potential for
            innovation across different domains, driving my curiosity and
            passion for continual learning.
          </p>
          <Link className="link" href="/about">
            more about me
          </Link>
        </div>
      </div>
    </section>
  );
}
