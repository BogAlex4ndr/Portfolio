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
            I specialize in creating visually appealing and user-friendly Front-end designs for
            Websites and Web Applications. Take a look at some of my latest projects in the Projects
            section. Although I don't have professional work experience yet, I am eager and ready to
            work. Connect with me or follow me on LinkedIn if you'd like to stay in touch.
            <br /> I am open to new job opportunities where I can further my skills, learn and
            contribute to the team. If you have a job opening that aligns with my expertise, please
            feel free to reach out to me.
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
