import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <span>Дата: 02.02.2026</span>
        <span>События: 480</span>
      </div>
      <div className={styles.mainHeader}>
        <div className={styles.logo}>foresight</div>
        <nav className={styles.nav}>
          <a href="#">Business Maps</a>
          <a href="#">Experts</a>
          <a href="#">Move in the Future</a>
        </nav>
        <button>Войти</button>
      </div>
      <nav className={styles.subNav}>
        <a href="#">Business Maps</a>
        <a href="#">Experts</a>
        <a href="#">Move in the Future</a>
        <a href="#">Business Maps</a>
        <a href="#">Experts</a>
      </nav>
    </header>
  );
};

export default Header;