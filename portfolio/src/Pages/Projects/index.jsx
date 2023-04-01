import React, { useEffect, useState } from 'react';
import styles from './Projects.module.scss';
import ProjectConteiner from '../../components/ProjectConteiner';
import axios from 'axios';
import Skeleton from '../../components/Skeleton';

const Projects = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.onbeforeunload();
    setIsLoading(true);
    axios.get('https://63e0252459bccf35dabf8fc3.mockapi.io/portfolioBlock').then((response) => {
      setItems(response.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <div className={styles.mainTitle}>
        <h1>
          <span>PROJECTS</span>
        </h1>
      </div>
      <div className={styles.wrapper}>
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <ProjectConteiner key={obj.id} {...obj} />)}
      </div>
    </>
  );
};

export default Projects;
