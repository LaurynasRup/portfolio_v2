import DotsGraphic from '../../../components/DotsGraphic';
import styles from '../../../styles/AboutPage.module.css';
import Link from 'next/link';
import DotsGraphics from '../../../components/DotsGraphic';
import Image from 'next/image';

export default function About() {
  return (
    <main>
      <section className={styles.aboutSection}>
        <div className={styles.aboutSectionGraphics}>
          <DotsGraphics width={450} height={495} />
          <Image
            src="/profile-cutout.png"
            width={290}
            height={405}
            alt="Laurynas Rup"
          />
        </div>
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
