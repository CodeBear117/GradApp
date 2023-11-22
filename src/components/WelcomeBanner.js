import React from 'react';
import styles from './styles/WelcomeBanner.module.css';

function WelcomeBanner() {
  return (
    <div className={styles.welcomeBanner}>
      <h1>GradApp</h1>
      <h1>Welcome, Sam</h1>
    </div>
  );
}

export default WelcomeBanner;