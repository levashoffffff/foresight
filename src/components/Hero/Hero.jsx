import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.globe}></div> {/* Замени на img src="/globe.png" */}
      <h1>foresight. Мы помогаем компаниям строить карты будущего</h1>
      <p>Оценка рисков. Поиск возможностей. Прогнозирование трендов.</p>
    </section>
  );
};

export default Hero;