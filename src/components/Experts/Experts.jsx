import React from 'react';
import styles from './Experts.module.css';

const experts = [
  { name: 'Борис Андреев', description: 'Описание...', image: '/expert1.png', rating: 5 },
  // Добавь еще 3 по скриншоту
];

const Experts = () => {
  return (
    <section className={styles.section}>
      <h2>Лучшие эксперты</h2>
      <div className={styles.cards}>
        {experts.map((expert, index) => (
          <div key={index} className={styles.card}>
            <img src={expert.image} alt={expert.name} />
            <h3>{expert.name}</h3>
            <p>{expert.description}</p>
            <div>★★★★★</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experts;