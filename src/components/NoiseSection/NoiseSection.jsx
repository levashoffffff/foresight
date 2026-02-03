import React from 'react';
import styles from './NoiseSection.module.css';

const NoiseSection = () => {
  return (
    <section className={styles.section}>
      <h2>ЧТОБЫ НАВЕСТИ ПОРЯДОК В ИНФОРМАЦИОННОМ ШУМЕ!</h2>
      <p>Одна платформа объединяет все источники...</p>
      <button>Подробнее найти, что там интересного</button>
    </section>
  );
};

export default NoiseSection;