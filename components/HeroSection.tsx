import { useEffect, useState } from 'react';
import styles from '../styles/HeroSection.module.scss';
import DotsGraphic from './DotsGraphic';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.pageTitle}>
          {['Bringing', 'web', 'ideas', 'to', 'life'].map((word, idx) => (
            <span key={idx} className={styles.pageTitleSpanOuter}>
              <span className={styles.pageTitleSpanInner}>{word}&nbsp;</span>
            </span>
          ))}
        </h1>
        <p className={styles.pageSubtitle}>by Laurynas Rupainis</p>
      </div>
      <div className={styles.imageWrapper}>
        <DotsGraphic
          width={736}
          height={464}
          mobileWidth={736}
          mobileHeight={144}
        />
      </div>
    </section>
  );
}
