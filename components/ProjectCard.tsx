import { FunctionComponent } from 'react';
import styles from '../styles/ProjectCard.module.css';
import Link from 'next/link';

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
      <div className={styles.cardDots}></div>
      <h3 className={styles.cardTitle}>Lorem ipsum dolor sit amet</h3>
      <p className={styles.cardBody}>Lorem ipsum dolor sit amet</p>
      <Link href="#" className="link">
        learn more
      </Link>
    </article>
  );
};

export default ProjectCard;
