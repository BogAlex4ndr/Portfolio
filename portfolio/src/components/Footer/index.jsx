import React from 'react';
import { BsGithub, BsLinkedin, BsTelegram } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.conteiner}>
        <div>Designed & developed by Alexandr Bohar</div>
        <ul className={styles.contactsWrapper}>
          <li>
            <Link to='https://www.linkedin.com/in/alexandr-bohar-33045b182/' target='_blank'>
              <span>
                <BsLinkedin className={styles.contacts} />
              </span>
            </Link>
          </li>
          <li>
            <Link to='https://github.com/BogAlex4ndr' target='_blank'>
              <span>
                <BsGithub className={styles.contactsCircle} />
              </span>
            </Link>
          </li>
          <li>
            <Link to='https://t.me/ALEX_B0G' target='_blank'>
              <span>
                <BsTelegram className={styles.contactsCircle} />
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
