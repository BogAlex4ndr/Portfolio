import React from 'react';
import { Link } from 'react-router-dom';
import About from '../../Pages/About';
import MainPage from '../../Pages/MainPage';
import styles from './Header.module.scss';
import { BsLinkedin, BsGithub, BsFillEnvelopeFill, BsTelegram } from 'react-icons/bs';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Link to='/'>
        <h2 className={styles.alex}>AB.</h2>
      </Link>
      <nav className={styles.navbar}>
        <Link to='/About'>About</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/Resume'>Resume</Link>
      </nav>
      <ul>
        <li>
          <Link to='https://www.linkedin.com/in/alexandr-bohar-33045b182/'>
            <span className={styles.contacts}>
              <BsLinkedin />
            </span>
          </Link>
        </li>
        <li>
          <Link to='https://github.com/BogAlex4ndr'>
            <span className={styles.contacts}>
              {' '}
              <BsGithub />
            </span>
          </Link>
        </li>
        <li>
          <Link to='https://t.me/ALEX_B0G'>
            <span className={styles.contacts}>
              <BsTelegram />
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
