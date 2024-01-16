// This component contains the list of applications.

import React, { useState } from 'react';
import ApplicationItem from './ApplicationItem';
import SortFilterBar from './SortFilterBar';
import AddApplicationForm from './AddApplicationForm';
import applicationsData from '../assets/applicationsData'; // Import the mock data
import styles from './styles/ApplicationList.module.css';

function ApplicationList() {

  // State to manage application data
  const [applications, setApplications] = useState(applicationsData);

  // State to toggle form visibility
  const [showForm, setShowForm] = useState(false);

  // Function to sort list of applications
  const sortApplications = (criteria) => {
    let sortedApps = [...applications];
    if (criteria === 'dueDate') {
      sortedApps.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    } else if (criteria === 'companyName') {
      sortedApps.sort((a, b) => a.companyName.localeCompare(b.companyName));
    } else if (criteria === 'progress') {
      sortedApps.sort((a, b) => (a.stage / a.totalStages) - (b.stage / b.totalStages));
    }
    setApplications(sortedApps);
  };

  // Function to filter list of applications
  const filterApplications = (criteria) => {
    let filteredApps;
    switch(criteria) {
      case 'all':
        filteredApps = applicationsData;
        break;
      case 'inProgress':
        filteredApps = applicationsData.filter(app => app.currentStatus === 'inProgress');
        break;
      case 'rejected':
        filteredApps = applicationsData.filter(app => app.currentStatus === 'rejected');
        break;
      default:
        filteredApps = applicationsData;
    }
    setApplications(filteredApps);
  };

  // Function to add application manually
  const addApplication = (newAppData) => {
    
    // Create a new id for this application
    const newId = applications.length > 0 ? applications[applications.length - 1].id + 1 : 1;
    
    // Add new card to the list
    setApplications([...applications, { ...newAppData, id: newId }]);
    
    // Hide form after adding
    setShowForm(false);
  };

  // Function to toggle the form's visibility
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className={styles.mainContent}>
      {/* Render Sort and Filter dropdowns */}
      <SortFilterBar onSort={sortApplications} onFilter={filterApplications}/>
      {/* Render all application cards */}
      {applications.map((application) => (
        <ApplicationItem
          companyId={application.companyId}
          companyName={application.companyName}
          stage={application.stage}
          totalStages={application.totalStages}
          currentStatus={application.currentStatus}
          currentStageName={application.currentStageName}
          dueDate={application.dueDate}
          notification={application.notification}
        />
      ))}
       
      <div className={styles.addButtonContainer}>
        {/* render button to add form manually */}
        <button onClick={toggleForm} className={styles.addButton}>
          {showForm ? <span className={styles.closeIcon}>&times;</span> : <span className={styles.plusIcon}>+</span>}
        </button>
      </div>
      {/* Render form if toggled */}
      {showForm && <AddApplicationForm addApplication={addApplication} closeForm={toggleForm}/>}
    </div>
  );
}

export default ApplicationList;