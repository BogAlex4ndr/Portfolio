import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { BsLinkedin, BsGithub, BsFillEnvelopeFill, BsTelegram } from 'react-icons/bs';
import CatProg from '../../assets/catLogo.png'

const Header = () => {
  return (
   <div className={styles.header}>
      <div className={styles.wrapper}>
        <Link to='/'>
          <div className={styles.alex}>Alex<img className={styles.logo} src={CatProg} alt="AB." /> Bohar</div>
        </Link>
       <div className={styles.LeftSideHeader}>
          <nav className={styles.navbar}>
            <Link to='/About'>
              <span className={styles.menuLink}>About</span>
            </Link>
            <Link to='/projects'>
              <span className={styles.menuLink}>Projects</span>
            </Link>
            <Link to='/Resume'>
              <span className={styles.menuLink}>Resume</span>
            </Link>
          </nav>
          <ul className={styles.contactsWrapper}>
            <li>
              <Link to='https://www.linkedin.com/in/alexandr-bohar-33045b182/'>
                <span>
                  <BsLinkedin className={styles.contacts} />
                </span>
              </Link>
            </li>
            <li>
              <Link to='https://github.com/BogAlex4ndr'>
                <span>
                  <BsGithub className={styles.contactsCircle} />
                </span>
              </Link>
            </li>
            <li>
              <Link to='https://t.me/ALEX_B0G'>
                <span>
                  <BsTelegram className={styles.contactsCircle} />
                </span>
              </Link>
            </li>
          </ul>
       </div>
      </div>
   </div>
  );
};

export default Header;
