'use client';
import { useEffect, useState } from 'react';
import styles from '../styles/DotsGraphic.module.scss';
import Dot from './Dot';

interface DotsProps {
  width: number;
  height: number;
  mobileWidth: number;
  mobileHeight: number;
}

export default function DotsGraphic({
  width,
  height,
  mobileWidth,
  mobileHeight,
}: DotsProps) {
  const [componentDiementions, setComponentDiementions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (window.innerWidth < 720) {
      setComponentDiementions({ width: mobileWidth, height: mobileHeight });
    } else {
      setComponentDiementions({ width, height });
    }
  }, []);

  // calculate how many dots can fit withing container
  function calcNumDots() {
    const largeArea = componentDiementions.width * componentDiementions.height;
    const smallArea = 16 * 16;
    const numSqaures = Math.floor(largeArea / smallArea);
    const result = new Array(numSqaures).fill(true).map((e, i) => i + 1);
    return result;
  }

  calcNumDots();

  return (
    <div
      className={styles.dotsContainer}
      style={{
        width: `${componentDiementions.width / 10}rem`,
        height: `${componentDiementions.height / 10}rem`,
      }}
    >
      {calcNumDots().map((el, idx) => (
        <Dot key={idx} />
      ))}
    </div>
  );
}
