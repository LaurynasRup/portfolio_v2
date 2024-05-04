import styles from '../../../styles/AboutPage.module.scss';
import PersonImage from '../../../components/PersonImage';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Laurynas Rupainis | About me',
};

export default function About() {
  return (
    <main>
      <section className={styles.aboutSection}>
        <PersonImage />
        <div className={styles.aboutSectionText}>
          <h3>
            Aliquam lobortis. Nam adipiscing. Donec vitae sapien ut libero.
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            expedita iste neque ipsum ducimus maxime, id labore nisi. Odit, ab
            sequi! Natus quae distinctio harum voluptas voluptates adipisci aut
            optio maiores rerum architecto voluptatum, iure modi reprehenderit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            obcaecati molestias aliquam accusamus sequi. Facilis ea suscipit
            magni distinctio maxime sed accusamus est corrupti dolores, dicta
            mollitia sapiente alias quam animi consequatur voluptatibus!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            deleniti, sunt similique dolor eaque rerum asperiores recusandae
            reiciendis molestiae quia est quam voluptas, quis libero optio
            veritatis ducimus debitis corporis?
          </p>
        </div>
        <Link href="/projects" className="link">
          view my work
        </Link>
      </section>
    </main>
  );
}
