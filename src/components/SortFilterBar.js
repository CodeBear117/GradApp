//import React from 'react';
import React, { useState } from 'react';
import styles from './styles/SortFilterBar.module.css';

function SortFilterBar({ onSort, onFilter }) {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedSort, setSelectedSort] = useState("All");

  // Function to handle sorting button click
  const handleSortChange = (event) => {
    const sortValue = event.target.value;
    onSort(sortValue); 
    setSelectedSort(sortValue);
  }

  // Function to handle filtering button click
  const handleFilterChange = (event) => {
    const filterValue = event.target.value;
    onFilter(filterValue);
    setSelectedFilter(filterValue);
  };

  return (
    <div className={styles.sortFilterBar}>
      <select id="sortby" className={`${styles.button} ${styles.secondary}`} onChange={handleSortChange}>
        <option value="">{selectedSort ? `Sort by: ${selectedSort.charAt(0).toUpperCase() + selectedSort.slice(1)}` : 'Sort By...'}</option>
        <option value="dueDate">Due Date</option>
        <option value="companyName">Company Name</option>
        <option value="progress">Progress</option>
      </select>

      <select id="filterby" className={`${styles.button} ${styles.secondary}`} onChange={handleFilterChange}>
        <option value="">{selectedFilter ? `Filter by: ${selectedFilter.charAt(0).toUpperCase() + selectedFilter.slice(1)}` : 'Filter By...'}</option>
        <option value="all">All</option>
        <option value="inProgress">In Progress</option>
        <option value="rejected">Rejected</option>
      </select>
    </div>
  );
}

export default SortFilterBar;