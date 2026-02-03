import React from 'react';
import styles from './Registration.module.css';

const Registration = () => {
  return (
    <section className={styles.section}>
      <h2>Регистрация</h2>
      <p>Присоединяйтесь к нам...</p>
      <button>Зарегистрироваться</button>
    </section>
  );
};

export default Registration;