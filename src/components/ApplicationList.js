import React, { useState } from 'react';
import ApplicationItem from './ApplicationItem';
import AddApplicationForm from './AddApplicationForm';
import applicationsData from '../applicationsData'; // Import the data
import styles from './styles/ApplicationList.module.css';

function ApplicationList() {
  const [applications, setApplications] = useState(applicationsData); // State to manage application data
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility

  const addApplication = (newAppData) => {
    // Function to add a new application
    const newId = applications.length > 0 ? applications[applications.length - 1].id + 1 : 1;
    setApplications([...applications, { ...newAppData, id: newId }]);
    setShowForm(false); // Hide form after adding
  };

  const toggleForm = () => {
    // Function to toggle the form's visibility
    setShowForm(!showForm);
  };

  return (
    <div>
      {applications.map((application) => (
        <ApplicationItem
          key={application.id}
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
        <button onClick={toggleForm} className={styles.addButton}>
          {showForm ? <span className={styles.closeIcon}>&times;</span> : <span className={styles.plusIcon}>+</span>}
        </button>
      </div>
      
      {showForm && <AddApplicationForm addApplication={addApplication} closeForm={toggleForm}/>}

    </div>

    
  );
}

export default ApplicationList;