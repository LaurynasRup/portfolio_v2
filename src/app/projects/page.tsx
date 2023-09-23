'use client';
import styles from '../../../styles/ProjectsPage.module.css';
import projects from '../data';
import ProjectCard from '../../../components/ProjectCard';
import { useState, ChangeEvent, useEffect } from 'react';

export default function page() {
  const [filterVal, setFilterVal] = useState('all');
  const [fileteredProjects, setFilteredProjects] = useState(projects);
  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilterVal(event.target.value);
  };

  useEffect(() => {
    switch (filterVal) {
      case 'all':
        setFilteredProjects(projects);
        break;
      case 'personal':
        setFilteredProjects(projects.filter(el => el.type === 'personal'));
        break;
      case 'work':
        setFilteredProjects(projects.filter(el => el.type === 'work'));
        break;
      default:
        setFilteredProjects(projects);
    }
  }, [filterVal]);

  function getRandNum() {
    const rndInt = Math.floor(Math.random() * 3) + 1;
    return rndInt;
  }

  getRandNum();
  return (
    <main>
      <section className={styles.projectsSection}>
        <div className={styles.projectFilterWrapper}>
          <select
            className={styles.projectFilter}
            value={filterVal}
            onChange={e => handleSelect(e)}
          >
            <option value="all">all</option>
            <option value="personal">personal</option>
            <option value="work">work</option>
          </select>
        </div>
        <div className={styles.projectsGridx}>
          {fileteredProjects.map(card => (
            <ProjectCard
              key={card.id}
              img={`/img${getRandNum()}.jpg`}
              title={card.title}
              body={card.body_short}
              link={card.link}
              tech={card.tech}
              type={card.type}
            ></ProjectCard>
          ))}
        </div>
      </section>
    </main>
  );
}
