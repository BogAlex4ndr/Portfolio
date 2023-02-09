import React from 'react';
import styles from './About.module.scss';
import CatProg from '../../assets/catLogo.png';
import Skeleton from '../../components/Skeleton';
import { IoLogoSass, IoLogoHtml5, IoLogoCss3, IoLogoNodejs, IoLogoNpm } from 'react-icons/io';
import { RiReactjsLine } from 'react-icons/ri';
import { SiTypescript, SiJavascript, SiFigma, SiRedux } from 'react-icons/si';
import { DiGit } from 'react-icons/di';
import CatWriter from '../../components/CatWriter';

const About = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.infoText}>
          <h1>
            Get to <span>know me</span>
          </h1>
          <p>
            I'm a Frontend Web Developer building the Front-end of Websites and Web Applications.
            Check out some of my work in the Projects section. I don't have work expirience yet, but
            I redy to work. Feel free to Connect or Follow me on my Linkedin.
            <br />
              I'm open to Job opportunities where I can contribute, learn and grow. If you have a good
            opportunity that matches my skills then don't hesitate to contact me.
          </p>
        </div>
        <h1 className={styles.titleTechnology}>
          hard <span>skills</span>
        </h1>
        <div className={styles.technologyBlock}>
          <div className={styles.itemConteiner}>
            <IoLogoHtml5 className={styles.technologyItem} />
          </div>
          <div className={styles.itemConteiner}>
            <IoLogoCss3 className={styles.technologyItem} />
          </div>
          <div className={styles.itemConteiner}>
            <IoLogoSass className={styles.technologyItem} />
          </div>
          <div className={styles.itemConteiner}>
            <SiJavascript className={styles.technologyItem} />
          </div>
          <div className={styles.itemConteiner}>
            <SiTypescript className={styles.technologyItem} />
          </div>
          <div className={styles.itemConteiner}>
            <RiReactjsLine className={styles.technologyItem} />
          </div>
          <div className={styles.itemConteiner}>
            <SiRedux className={styles.technologyItem} />
          </div>
          <div className={styles.itemConteiner}>
            <IoLogoNodejs className={styles.technologyItem} />
          </div>
          <div className={styles.itemConteiner}>
            <SiFigma className={styles.technologyItem} />
          </div>
          <div className={styles.itemConteiner}>
            <DiGit className={styles.technologyItem} />
          </div>
        
        </div>
        <div className={styles.softSkills}></div>
      </div>
    </>
  );
};

export default About;
