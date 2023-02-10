import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { BsLinkedin, BsGithub, BsFillEnvelopeFill, BsTelegram } from 'react-icons/bs';
import CatProg from '../../assets/catLogo.png';
import { useState } from 'react';
import { RiMenu5Fill, RiCloseLine } from 'react-icons/ri';

const Header = () => {
  const [showHeader, setShowHeader] = useState(window.innerWidth < 768 ? false : true);
  const [isClicked, setClicked] = useState(window.innerWidth < 768 ? false : true);

  const handleClick = () => {
    window.innerWidth < 768 ? setShowHeader(!showHeader) : showHeader;
    setClicked(!isClicked);
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link to='/'>
          <div className={styles.alex}>
            Alex
            <img className={styles.logo} src={CatProg} alt='AB.' /> Bohar
          </div>
        </Link>
        <div className={styles.menuButton} onClick={handleClick}>
          <span>
            {isClicked ? (
              <RiCloseLine className={styles.MobileMenuIcon} />
            ) : (
              <RiMenu5Fill className={styles.MobileMenuIcon} />
            )}
          </span>
        </div>
        <div className={styles.LeftSideHeader} style={{ display: showHeader ? 'flex' : 'none' }}>
          <nav className={styles.navbar}>
            <Link to='/About'>
              <span className={styles.menuLink} onClick={handleClick}>
                About
              </span>
            </Link>
            <Link to='/projects'>
              <span className={styles.menuLink} onClick={handleClick}>
                Projects
              </span>
            </Link>
            <Link to='/Resume'>
              <span className={styles.menuLink} onClick={handleClick}>
                Resume
              </span>
            </Link>
          </nav>
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
      </div>
    </header>
  );
};

export default Header;
