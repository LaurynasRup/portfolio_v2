import { FunctionComponent } from 'react';
import styles from '../styles/ProjectCard.module.css';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  img?: string;
  title?: string;
  body?: string;
  link?: string;
}

const ProjectCard: FunctionComponent<Props> = ({ img, title, body, link }) => {
  return (
    <article className={styles.card}>
      <div className={styles.cardImage}></div>
      <div className={styles.cardDots}>
        {' '}
        <Image src="/line.svg" alt="dots" width="335" height="3" />
      </div>
      <h3 className={styles.cardTitle}>Lorem ipsum dolor sit amet</h3>
      <p className={styles.cardBody}>
        Sagittis neque odio nec vivamus posuere malesuada commodo nostra,
        curabitur pharetra lobortis potenti accumsan lacus diam, gravida cursus
        lectus integer egestas felis suspendisse.{' '}
      </p>
      <Link href="#" className="link">
        learn more
      </Link>
    </article>
  );
};

export default ProjectCard;
