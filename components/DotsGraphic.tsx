'use client';
import styles from '../styles/DotsGraphic.module.css';
import Dot from './Dot';

interface DotsProps {
  width: number;
  height: number;
}

export default function DotsGraphic({ width, height }: DotsProps) {
  // calculate how many dots can fit withing container
  function calcNumDots() {
    const largeArea = width * height;
    const smallArea = 16 * 16;
    const numSqaures = Math.ceil(largeArea / smallArea);
    const result = new Array(numSqaures).fill(true).map((e, i) => i + 1);
    return result;
  }

  calcNumDots();

  return (
    <div
      className={styles.dotsContainer}
      style={{ width: `${width / 10}rem`, height: `${height / 10}rem` }}
    >
      {calcNumDots().map((el, idx) => (
        <Dot key={idx} />
      ))}
    </div>
  );
}
