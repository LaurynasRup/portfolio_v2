import styles from '../../../../styles/SingleProject.module.scss';
import IndividualProjectGrid from '../../../../components/IndividualProjectGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Laurynas Rupainis | Project',
};

export default async function page({
  params,
}: {
  params: { projectName: string };
}) {
  const { projectName } = await params;
  return (
    <main>
      <section className={styles.wrapper}>
        <IndividualProjectGrid projectName={projectName} />
      </section>
    </main>
  );
}
