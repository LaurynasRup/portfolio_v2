import { FunctionComponent } from 'react';
import styles from '../styles/ProjectCard.module.css';
import Link from 'next/link';
import DotsGraphic from './DotsGraphic';
import Image from 'next/image';

interface Props {
  img: string;
  title: string;
  body: string;
  link: string;
  tech: Array<string>;
  type: string;
}

const ProjectCard: FunctionComponent<Props> = ({
  img,
  title,
  body,
  link,
  tech,
  type,
}) => {
  return (
    <article className={styles.card}>
      <div className={styles.cardMainBody}>
        <div className={styles.cardImage}>
          {/* <Image src={img} width={400} height={300} alt="project img" /> */}
        </div>
        <div className={styles.cardDots}>
          <DotsGraphic width={540} height={10} />
        </div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardBody}>{body}</p>
        <Link href={`/projects/${link}`}>learn more</Link>
      </div>
      <ul className="techList">
        {tech.map(item => (
          <li
            key={item}
            className="techItem"
            style={{ backgroundImage: `url('/${item}.svg')` }}
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ProjectCard;
