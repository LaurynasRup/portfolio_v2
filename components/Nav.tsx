import { Major_Mono_Display } from 'next/font/google';
import styles from '../styles/Nav.module.css';
import Link from 'next/link';

const major_mono_display = Major_Mono_Display({
  weight: '400',
  subsets: ['latin'],
});

const links = [
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
  return (
    <nav className={styles.nav}>
      <Link
        href="/"
        className={`${major_mono_display.className} ${styles.nav__logo}`}
      >
        LR<span>.</span>
      </Link>
      <div className={styles.nav__menu}>
        <button className={styles.nav__trigger}>menu</button>
        <ul className={styles.nav__list}>
          {links.map((link, idx) => (
            <li data-delay={idx + 1}>
              <Link href={link.link}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
