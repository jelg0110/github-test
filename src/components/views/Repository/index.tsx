import React from 'react';
import logo from '../../../assets/images/logo.svg';
import styles from './Repository.module.scss';

function Repository() {
  return (
    <div className={styles.Repository}>
      <header className={styles.Repository__header}>
        <img src={logo} className={styles.Repository__logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={styles.Repository__link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Repository;
