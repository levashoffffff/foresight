import React from 'react';
import styles from './ProposalForm.module.css';

const ProposalForm = () => {
  return (
    <section className={styles.section}>
      <h2>Есть предложение?</h2>
      <form>
        <input type="email" placeholder="Ваш email" />
        <textarea placeholder="Ваше сообщение"></textarea>
        <button type="submit">Отправить</button>
      </form>
    </section>
  );
};

export default ProposalForm;