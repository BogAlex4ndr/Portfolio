import React from 'react';
import { Document, Page } from 'react-pdf';
import styles from './Resume.module.scss';
import resume from '../../assets/FrontEndCV.jpg';
import { Link } from 'react-router-dom';
import CatWriter from '../../components/CatWriter';

const cv = 'https://drive.google.com/file/d/1WOeJ-2c_HrStiBiFX7MsXXkgTtk57CqM/view?usp=sharing';

const Resume = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div>
          <h1>
            <Link to={cv} target='_blank'>
              <button className={styles.button}>DOWNLOAD</button>
            </Link>
          </h1>
        </div>
        <div className={styles.resume}>
          <img src={resume} />
        </div>
      </div>
      <CatWriter/>
    </>
  );
};

export default Resume;
