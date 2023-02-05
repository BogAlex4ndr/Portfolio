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
      <div className={styles.text}>
        <p>{props.text}</p>
      </div>
      <div className={styles.buttonsConteiner}>
        <Link to={props.demoLink} target='_blank'>
          <button className={styles.button}>Demo</button>
        </Link>
        <Link to={props.githubLink} target='_blank'>
          <button className={styles.button}>GitHub</button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectConteiner;
