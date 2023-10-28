'use client';
import styles from '../styles/DotsGraphic.module.scss';
import { useState } from 'react';

export default function Dot() {
  const [hoverClass, setHoverClass] = useState('');

  const handleMouse = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setHoverClass(styles.dotItemInnerHover);
    setTimeout(() => {
      setHoverClass('');
    }, 1000);
  };
  return (
    <span className={styles.dotsItem} onMouseOver={handleMouse}>
      <span className={`${styles.dotsItemInner} ${hoverClass}`}></span>
    </span>
  );
}
