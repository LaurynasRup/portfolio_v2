'use client';

import styles from '../styles/CustomCursor.module.scss';
import { useState, useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // Update cursor position on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const cursorX = e.clientX + window.scrollX; // Add scroll position to x
      const cursorY = e.clientY + window.scrollY; // Add scroll position to y

      // Update cursor position directly in the DOM
      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorX}px`;
        cursorRef.current.style.top = `${cursorY}px`;
      }
    };

    // Track all links in the document
    const links = document.querySelectorAll('a');

    // Add event listener to track mouse movement
    document.addEventListener('mousemove', handleMouseMove);

    // Clean up event listener on component unmount
    return () => {
      links.forEach(link => {});
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return <div ref={cursorRef} className={`${styles.customCursor}`}></div>;
};

export default CustomCursor;
