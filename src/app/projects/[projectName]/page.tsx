import styles from '../../../../styles/SingleProject.module.scss';
import IndividualProjectGrid from '../../../../components/IndividualProjectGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Laurynas Rupainis | Project',
};

export default function page({ params }: { params: { projectName: string } }) {
  return (
    <main>
      <section className={styles.wrapper}>
        <IndividualProjectGrid projectName={params.projectName} />
      </section>
    </main>
  );
}
