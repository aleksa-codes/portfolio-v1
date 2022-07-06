import styles from '../styles/Nav.module.css';
import Link from 'next/link';
import { useState } from 'react';
import DarkMode from './DarkMode';

const Nav = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <nav className={styles.mainNav}>
        <div className={styles.logo}>
          <Link href='/'>
            <a className={styles.logoA}>
              aleksa.<span className={styles.logoCode}>codes</span>
            </a>
          </Link>
        </div>

        <div className={styles.topLinks}>
          <Link href='/about'>
            <a className={styles.navLink}>About Me</a>
          </Link>

          <Link href='/skills'>
            <a className={styles.navLink}>Skills</a>
          </Link>

          <Link href='/projects'>
            <a className={styles.navLink}>Projects</a>
          </Link>

          <Link href='/contact'>
            <a className={styles.contactBtn}>Contact</a>
          </Link>
          <DarkMode />
        </div>
        <div className={styles.container} onClick={handleToggle}>
          <div
            className={`${styles.bar1} ${isActive ? styles.change1 : ''}`}
          ></div>
          <div
            className={`${styles.bar2} ${isActive ? styles.change2 : ''}`}
          ></div>
          <div
            className={`${styles.bar3} ${isActive ? styles.change3 : ''}`}
          ></div>
        </div>
      </nav>
      <div
        className={`${styles.sideBarHide} ${isActive ? styles.sideBar : ''}`}
      >
        <div
          className={`${isActive ? styles.sideBarDimPart : ''}`}
          onClick={handleToggle}
        ></div>
        <nav className={`${isActive ? styles.sideBarNav : ''}`}>
          <Link href='/about'>
            <a onClick={handleToggle}>About Me</a>
          </Link>

          <Link href='/skills'>
            <a onClick={handleToggle}>Skills</a>
          </Link>

          <Link href='/projects'>
            <a onClick={handleToggle}>Projects</a>
          </Link>

          <Link href='/contact'>
            <a onClick={handleToggle}>Contact</a>
          </Link>
          <DarkMode />
        </nav>
      </div>
      <div className={`${isActive ? styles.sideBarBackDrop : ''}`}></div>
      {/* <div className={styles.sideBar}></div> */}
    </>
  );
};

export default Nav;
