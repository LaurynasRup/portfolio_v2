import styles from './page.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <section className={styles.section}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.pageTitle}>Modern Web Development Solutions</h1>
          <p className={styles.pageSubtitle}>by Laurynas Rupainis</p>
        </div>
        <div className={styles.imageWrapper}>
          <Image src="/dot-square.svg" alt="dots" width="740" height="430" />
        </div>
      </section>
      <section className={`${styles.section} ${styles.sectionAbout}`}>
        <h2>
          about <span>.</span>
        </h2>
        <div className={styles.sectionAboutMain}>
          <div className={styles.imageWrapperNarrow}>
            <Image
              src="/dot-square-2.svg"
              alt="dots"
              width="740"
              height="190"
            />
          </div>
          <div className={styles.sectionAboutContent}>
            <h3>
              Aliquam lobortis. Nam adipiscing. Donec vitae sapien ut libero
              venenatis faucibus. Curabitur vestibulum aliquam leo.{' '}
            </h3>
            <div className={styles.imageWrapperLine}>
              <Image src="/line.svg" alt="dots" width="630" height="3" />
            </div>
            <p>
              Cras ultricies mi eu turpis hendrerit fringilla. Nullam accumsan
              lorem in dui. Sed mollis, eros et ultrices tempus, mauris ipsum.
            </p>
            <p>
              Aliquam libero, non adipiscing dolor urna a orci. Etiam ut purus
              mattis mauris sodales aliquam. Praesent metus tellus, elementum
              eu, semper a, adipiscing nec, purus.
            </p>
            <p>
              Phasellus accumsan cursus velit.. Sed cursus turpis vitae tortor.
              Curabitur turpis. Morbi ac felis.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <p>Section 3</p>
      </section>
    </main>
  );
}
