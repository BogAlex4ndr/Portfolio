import React from 'react';
import styles from './Projects.module.scss';

const Projects = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.projectConteiner}>Projects1</div>
      <div className={styles.projectConteiner}>Projects2</div>
      <div className={styles.projectConteiner}>Projects3</div>
    </div>
  );
};

export default Projects;
