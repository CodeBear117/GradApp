import React from 'react';
import styles from './styles/WelcomeBanner.module.css';

function WelcomeBanner( {firstName} ) {
  return (
    <div className={styles.welcomeBanner}>
      <h1 className={styles.appTitle}>GradApp</h1>
      <h1>Welcome, {firstName}</h1>
    </div>
  );
}

export default WelcomeBanner;