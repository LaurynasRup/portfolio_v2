import styles from '../../../styles/Contact.module.scss';
import DotsGraphic from '../../../components/DotsGraphic';

export default function contact() {
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
              <li>
                <a
                  className={`${styles.contactItemLink} ${styles[el.name]}`}
                  href={el.link}
                >
                  {el.name}
                </a>
              </li>
            ))}
          </ul>
          <DotsGraphic width={555} height={50} />
        </div>
      </section>
    </main>
  );
}
