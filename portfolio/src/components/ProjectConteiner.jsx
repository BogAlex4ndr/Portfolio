import React from 'react';
import styles from '../Pages/Projects/Projects.module.scss';
import { Link } from 'react-router-dom';

const ProjectConteiner = (props) => {
  return (
    <div className={styles.projectConteiner}>
      <div className={styles.image}>
        <img src={props.img} />
      </div>
      <h2 className={styles.title}>{props.title}</h2>
      <p className={styles.text}>{props.text}</p>
      <div className={styles.buttonsConteiner}>
        <Link to={props.demoLink}>
          <button className={styles.button}>Demo</button>
        </Link>
        <Link to={props.githubLink}>
          <button className={styles.button}>GitHub</button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectConteiner;
