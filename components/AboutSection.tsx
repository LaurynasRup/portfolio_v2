import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/AboutSection.module.css';
import DotsGraphic from './DotsGraphic';

export default function AboutSection() {
  const { ref, inView, entry } = useInView({
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
      <h2>
        about <span>.</span>
      </h2>
      <div className={styles.sectionAboutMain}>
        <div className={styles.imageWrapperNarrow}>
          <DotsGraphic width={760} height={160} />
        </div>
        <div className={styles.sectionAboutContent}>
          <h3>
            Aliquam lobortis. Nam adipiscing. Donec vitae sapien ut libero
            venenatis faucibus. Curabitur vestibulum aliquam leo.{' '}
          </h3>
          <div className={styles.imageWrapperLine}>
            <DotsGraphic width={1000} height={10} />
          </div>
          <p>
            Cras ultricies mi eu turpis hendrerit fringilla. Nullam accumsan
            lorem in dui. Sed mollis, eros et ultrices tempus, mauris ipsum.
          </p>
          <p>
            Aliquam libero, non adipiscing dolor urna a orci. Etiam ut purus
            mattis mauris sodales aliquam. Praesent metus tellus, elementum eu,
            semper a, adipiscing nec, purus.
          </p>
          <p>
            Phasellus accumsan cursus velit.. Sed cursus turpis vitae tortor.
            Curabitur turpis. Morbi ac felis.
          </p>
          <Link className="link" href="/about">
            more about me
          </Link>
        </div>
      </div>
    </section>
  );
}
