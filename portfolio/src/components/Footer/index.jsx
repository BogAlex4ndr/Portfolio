import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.conteiner} >
        <div >Designed and developed by Alexandr Bohar</div>
        <div>Copyright 2023</div>
      </div>
    </div>
  );
};

export default Footer;
