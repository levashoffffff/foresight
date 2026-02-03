import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>OOO "Foresight" ИНН 1234567890</div>
      <div>+7 495 123 45 67</div>
      <div>info@foresight.com</div>
      <div className={styles.logo}>foresight.</div>
      <nav>
        <a href="#">Карта сайта</a>
        <a href="#">Контакты</a>
        <a href="#">Согласие</a>
      </nav>
    </footer>
  );
};

export default Footer;