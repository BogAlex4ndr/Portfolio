import React, { useEffect, useState } from 'react';
import styles from './Projects.module.scss';
import ProjectConteiner from '../../components/ProjectConteiner';
import axios from 'axios';

const Projects = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios.get('../src/assets/projects.json').then((response) => {
      setItems(response.data);
      setIsLoading(false);
    });
  }, []);

  return (
  <div>
    <h1 className={styles.mainTitle}>There's my <span>Pet Projects</span></h1>
      <div className={styles.wrapper}>
        {isLoading ? 'Loading...' : items.map((obj) => <ProjectConteiner key={obj.id} {...obj} />)}
  
      </div>
  </div>
  );
};

export default Projects;
