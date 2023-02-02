import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { BsLinkedin, BsGithub, BsFillEnvelopeFill, BsTelegram } from 'react-icons/bs';
import CatProg from '../../assets/catLogo.png';
import { useState } from 'react';
import { RiMenu5Fill, RiCloseLine } from 'react-icons/ri';
import { useEffect } from 'react';

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [isClicked, setClicked] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  }, []);

  const handleClick = () => {
    setShowHeader(!showHeader);
    setClicked(!isClicked);
  };
  return (
    <div className={styles.header}>
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
              <RiCloseLine className={styles.showHide} />
            ) : (
              <RiMenu5Fill className={styles.showHide} />
            )}
          </span>
        </div>
        <div className={styles.LeftSideHeader} style={{ display: showHeader ? 'flex' : 'none' }}>
          <nav className={styles.navbar}>
            <Link to='/About'>
              <span className={styles.menuLink} onClick={window.innerWidth < 768 ? handleClick : ''}>
                About
              </span>
            </Link>
            <Link to='/projects'>
              <span
                className={styles.menuLink}
                onClick={window.innerWidth < 768 ? handleClick : ''}>
                Projects
              </span>
            </Link>
            <Link to='/Resume'>
              <span
                className={styles.menuLink}
                onClick={window.innerWidth < 768 ? handleClick : ''}>
                Resume
              </span>
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
