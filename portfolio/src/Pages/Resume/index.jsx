import React from 'react';
import { Document, Page } from 'react-pdf';
import styles from './Resume.module.scss';
import resume from '../../assets/CV.svg';
import { Link } from 'react-router-dom';

let cv = 'https://drive.google.com/file/d/1LYcc9eR9hGvDXX3j5OjcTH3EptVVRX07/view?usp=sharing';

const Resume = () => {
  return (
   <>
      <div className={styles.wrapper}>
        <div>
        <h1>
            <Link to={cv}>
              <button className={styles.button}>DOWNLOAD</button>
            </Link>
        </h1>
        </div>
        <div className={styles.resume}>
          <img src={resume} />
        </div>
      </div>
   </>
  );
};

export default Resume;
