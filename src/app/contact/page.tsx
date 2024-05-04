import styles from '../../../styles/Contact.module.scss';
import DotsGraphic from '../../../components/DotsGraphic';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Laurynas Rupainis | Contact',
};

export default function Contact() {
  return (
    <main>
      <section className={styles.contactPageSection}>
        <div className={styles.contactPageSectionInner}>
          <ul className={styles.contactItems}>
            {[
              { name: 'email', link: 'mailto:rupainis.laurynas@gmail.com' },
              { name: 'xcorp', link: 'https://twitter.com/LaurynasRup' },
              {
                name: 'linkedin',
                link: 'https://www.linkedin.com/in/laurynas-rupainis-620334125/',
              },
              { name: 'github', link: 'https://github.com/LaurynasRup' },
            ].map(el => (
              <li key={el.name}>
                <a
                  className={`${styles.contactItemLink} ${styles[el.name]}`}
                  href={el.link}
                >
                  {el.name}
                </a>
              </li>
            ))}
          </ul>
          <DotsGraphic
            width={560}
            height={48}
            mobileWidth={280}
            mobileHeight={48}
          />
        </div>
      </section>
    </main>
  );
}
