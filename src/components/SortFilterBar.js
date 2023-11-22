import React from 'react';
import styles from './styles/SortFilterBar.module.css';

function SortFilterBar() {
  return (
    <div className={styles.sortFilterBar}>
      <button className={`${styles.button} ${styles.secondary}`}>Sort By</button>
      <button className={styles.button}>Filter By</button>
    </div>
  );
}

export default SortFilterBar;