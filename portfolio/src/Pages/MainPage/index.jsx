import React from 'react';
import styles from './MainPage.module.scss';
import Typewriter from 'typewriter-effect';
import CatGif from '../../assets/catGif.gif';

const MainPage = () => {
  return (
    <>
      <div className={styles.main}>
          <div className={styles.wrapper}>
            <h1>Hi, I am Alexandr Bohar, self-tought Front-end developer</h1>
            <p className={styles.mainText}>I am 28 years old, from Odessa <span className={styles.coloredText}>UA</span></p>
            <div className={styles.catBlock}>
              <img src={CatGif} alt='' />
              <h4>
                <Typewriter
                  options={{
                    strings: [`- I love code`, '- I love Knock things over and over again', '- I love sleep till noon'],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 50,
                    skipAddStyles: true,
                  }}
                />
              </h4>
            </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
