import React, { useState } from 'react';
import styles from './MainPage.module.scss';
import Typewriter from 'typewriter-effect';
import CatGif from '../../assets/catGif.gif';
import Quotes from '../../components/Quotes';
import ProgrammerImage from '../../assets/racoon.png';
import CatWriter from '../../components/CatWriter';

const MainPage = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.wrapper}>
          <h1>
            Hey, I'm <span>Alexander Bohar</span>
            <br /> Front-end developer
          </h1>

          <p className={styles.mainText}>
            
          </p>
          {/* <div className={styles.BigImage}>
            <img src={ProgrammerImage} alt='' />
          </div> */}
        </div>
        <CatWriter />
      </div>
    </>
  );
};

export default MainPage;
