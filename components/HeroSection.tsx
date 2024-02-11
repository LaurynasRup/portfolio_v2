import styles from '../styles/HeroSection.module.scss';
import DotsGraphic from './DotsGraphic';

export default function HeroSection() {
  const dotsDimensions = {
    width: 732,
    height: window.innerWidth < 720 ? 150 : 470,
  };

  return (
    <section className={styles.heroSection}>
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
        <DotsGraphic
          width={dotsDimensions.width}
          height={dotsDimensions.height}
        />
      </div>
    </section>
  );
}
