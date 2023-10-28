import Link from 'next/link';
import styles from '../../styles/Contact.module.scss';

export default function NotFound() {
  return (
    <main>
      <section className={styles.contactPageSection}>
        <div className={styles.contactPageSectionInner}>
          <h3 className={styles.notFound}>This page does not exist</h3>
          <Link className="link" href="/">
            go back
          </Link>
        </div>
      </section>
    </main>
  );
}
