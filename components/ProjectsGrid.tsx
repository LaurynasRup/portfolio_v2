'use client';

import styles from '../styles/ProjectsPage.module.scss';
import projects from '../data';
import { useState, ChangeEvent, useEffect } from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectsGrid() {
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

  return (
    <>
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
            img={card.img[0]}
            title={card.title}
            body={card.body_short}
            link={card.link}
            tech={card.tech}
            type={card.type}
          ></ProjectCard>
        ))}
      </div>
    </>
  );
}
