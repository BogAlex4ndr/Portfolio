import React from 'react';
import styles from './About.module.scss';
import CatProg from '../../assets/catLogo.png';
import Skeleton from '../../components/Skeleton';

const About = () => {
  return (
    <>
      <div className={styles.info}><h1>somethin about me</h1>
      </div>
      <Skeleton/>
    </>
  );
};

export default About;
