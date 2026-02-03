import React from 'react';
import styles from './NewsSection.module.css';

const newsItems = [
  { title: 'Заголовок новости 1', description: 'Описание...', image: '/news1.png' },
  { title: 'Заголовок новости 2', description: 'Описание...', image: '/news2.png' },
  { title: 'Заголовок новости 3', description: 'Описание...', image: '/news3.png' },
];

const NewsSection = () => {
  return (
    <section className={styles.section}>
      {newsItems.map((item, index) => (
        <div key={index} className={styles.card}>
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
};

export default NewsSection;