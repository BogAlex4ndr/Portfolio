import React, { useState } from 'react';
import styles from './MainPage.module.scss';
import CatWriter from '../../components/CatWriter';
import About from '../About';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.wrapper}>
          <h1>
            Hey, I'm <span>Alexandr Bohar</span>
            <br /> Front-end developer
          </h1>

          <p className={styles.mainText}>
            
          </p>
          {/* <div className={styles.BigImage}>
            <img src={ProgrammerImage} alt='' />
          </div> */}
        </div>
        <nav className={styles.navbar}>
            <Link to='/About'>
              <span className={styles.menuLink}>
                About
              </span>
            </Link>
            <Link to='/projects'>
              <span className={styles.menuLink} >
                Projects
              </span>
            </Link>
            <Link to='/Resume'>
              <span className={styles.menuLink}>
                Resume
              </span>
            </Link>
          </nav>
      </div>
    </>
  );
};

export default MainPage;
