import { useEffect, useState } from 'react';
import styles from '../styles/HeroSection.module.scss';
import DotsGraphic from './DotsGraphic';

export default function HeroSection() {
  const [dotsDimensions, setDotsDimensions] = useState({
    width: 736,
    height: 464, // Default height
  });

  useEffect(() => {
    const handleResize = () => {
      setDotsDimensions({
        width: 736,
        height: window.innerWidth < 720 ? 144 : 464,
      });
    };

    if (typeof window !== 'undefined') {
      // Add event listener for window resize
      window.addEventListener('resize', handleResize);

      // Initial set based on window width
      handleResize();

      // Remove event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

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
