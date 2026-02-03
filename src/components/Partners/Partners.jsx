import React from 'react';
import styles from './Partners.module.css';

const partners = ['myChess', 'T', 'Юридическая', 'VK', 'Сбер', 'Альфа Банк']; // Логотипы

const Partners = () => {
  return (
    <section className={styles.section}>
      {partners.map((partner, index) => (
        <img key={index} src={`/partners/${partner}.png`} alt={partner} />
      ))}
    </section>
  );
};

export default Partners;