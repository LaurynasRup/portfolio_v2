'use client';

import { Major_Mono_Display } from 'next/font/google';
import styles from '../styles/Nav.module.scss';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const major_mono_display = Major_Mono_Display({
  weight: '400',
  subsets: ['latin'],
});

const links = [
  {
    link: '/',
    text: 'home',
  },
  {
    link: '/about',
    text: 'about',
  },
  {
    link: '/projects',
    text: 'projects',
  },
  {
    link: '/contact',
    text: 'contact',
  },
];

export default function Nav() {
  const [wWidth, setWwidth] = useState(0);

  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (window.innerWidth >= 720) {
      setWwidth(721);
    } else {
      setWwidth(1);
    }
  }, []);
  const handleBtnClick = function (e: React.MouseEvent<HTMLElement>) {
    if (wWidth < 720) {
      (e.target as Element).classList.toggle(styles.navVisible);
      document.body.classList.add('no-scroll');
    }
  };
  const handleMouseEnter = function (e: React.MouseEvent<HTMLElement>) {
    if (wWidth > 720) {
      (e.target as Element).classList.add(styles.navVisible);
    }
  };

  const handleMouseLeave = function (e: React.MouseEvent<HTMLElement>) {
    if (wWidth > 720) {
      (e.target as Element).classList.remove(styles.navVisible);
    }
  };

  const handleLinkClick = function (e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();

    const link = (e.target as HTMLAnchorElement).href;

    window.location.href = link;

    if (ref.current && ref.current.classList.contains(styles.navVisible)) {
      ref.current.classList.remove(styles.navVisible);
    }
  };

  const handleActiveLink = function (link: string) {
    const currentLink = window.location.pathname;
    
    if (currentLink === link) {
      return true;
    }
  }

  return (
    <nav className={styles.nav}>
      <Link
        href="/"
        className={`${major_mono_display.className} ${styles.navLogo}`}
        onClick={handleLinkClick}
      >
        LR<span>.</span>
      </Link>
      <div className={styles.navMenu}>
        <button
          className={styles.navTrigger}
          onClick={handleBtnClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={ref}
        >
          menu
        </button>
        <ul className={styles.navList}>
          <div className={styles.navTopPadding}></div>
          {links.map((link, idx) => (
            <li data-delay={idx + 1} key={idx} className={handleActiveLink(link.link) ? styles.navActiveLink : ''}>
              <Link href={link.link} onClick={handleLinkClick}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
