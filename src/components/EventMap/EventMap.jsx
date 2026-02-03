import React from 'react';
import styles from './EventMap.module.css';

const EventMap = () => {
  return (
    <section className={styles.section}>
      <h2>КАРТА СОБЫТИЙ</h2>
      <p>Мы собираем данные из открытых источников...</p>
      {/* Здесь flowchart - можно использовать SVG или библиотеку как react-flow, но для простоты текст */}
      <div className={styles.flowchart}>
        <div>Сбор данных</div>
        <div>-></div>
        <div>Обработка</div>
        <div>-></div>
        <div>Анализ</div>
        {/* Добавь больше по скриншоту */}
      </div>
    </section>
  );
};

export default EventMap;