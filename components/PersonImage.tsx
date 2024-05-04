'use client';

import styles from '../styles/AboutPage.module.scss';
import DotsGraphics from './DotsGraphic';
import Image from 'next/image';
import { useState, useRef } from 'react';

export default function PersonImage() {
  interface ICoords {
    x: number;
    y: number;
  }
  const [mouseCoords, setMouseCoords] = useState<ICoords>({ y: 0, x: 0 });

  const refCont = useRef<HTMLDivElement>(null);

  const mouseMoveHandler = (event: MouseEvent): void => {
    if (refCont.current) {
      const img = refCont.current.querySelector('img');

      if (img) {
        img.style.transition = 'none';
      }

      const rect = refCont.current.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      const elHeight = rect.height;
      const elWidth = rect.width;
      const xPos = (mouseX - elWidth / 2) / (elWidth / 2);
      const yPos = (mouseY - elHeight / 2) / (elHeight / 2);

      setMouseCoords({ y: yPos, x: xPos });
    }
  };

  const mouseLeaveHandler = () => {
    if (refCont.current) {
      const img = refCont.current.querySelector('img');

      if (img) {
        img.style.transition = 'all 0.5s ease';
      }
    }
    setMouseCoords({ y: 0, x: 0 });
  };
  return (
    <div
      className={styles.aboutSectionGraphics}
      onMouseMove={() => mouseMoveHandler(event as MouseEvent)}
      onMouseLeave={mouseLeaveHandler}
      ref={refCont}
    >
      <DotsGraphics
        width={448}
        height={496}
        mobileWidth={448}
        mobileHeight={496}
      />
      <Image
        src="/profile-cutout-tiny.png"
        width={290}
        height={405}
        alt="Laurynas Rup"
        style={{
          transform: `rotateY(${mouseCoords.x * -7.5}deg) rotateX(${
            mouseCoords.y * 7.5
          }deg)`,
        }}
      />
    </div>
  );
}
