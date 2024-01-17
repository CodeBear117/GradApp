// This component function is used to manually add a card to the list of applications

import React, { useState } from 'react';
import styles from './styles/AddApplicationForm.module.css';

function AddApplicationForm({ addApplication, closeForm }) {
  
  // State to control form database data
  const [formData, setFormData] = useState({
    companyName: '',
    stage: '',
    totalStages: '',
    currentStatus: '',
    currentStageName: '',
    dueDate: '',
    notification:''
  });

  // set the default company ID to 1000 to ensure it does not conflict with current applications
  const [nextId, setNextId] = useState(1000);

  // Handle inputs to the form
  const handleChange = (e) => {
    // If the field being changed is dueDate, handle the conversion to date format
    if (e.target.name === 'dueDate') {
      // Assuming the input will be in the format YYYY-MM-DD and needs to be converted to DD-MM-YYYY
      const [year, month, day] = e.target.value.split('-');
      setFormData({ ...formData, dueDate: `${day}-${month}-${year}` });
    } else {
      // Handle other inputs normally
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    const newCompanyId = nextId;
    setNextId(prevId => prevId + 1);
    e.preventDefault();
    addApplication({
        ...formData,
        companyId: newCompanyId,
        currentStatus: 'inProgress', // Set the status programmatically
        notification: `manually added application; you won't receive notifications for this application` // Set notification status programmatically
      });
    // close form after submission
    closeForm();
  };

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <h1>Add Manually</h1>
        {/* Render close form button */}
        <button className={styles.closeButton} onClick={closeForm}>&times;</button>
        <form onSubmit={handleSubmit}>
            <div className={styles.formField}>

                {/* Render field to input company name*/}
                <label className={styles.label} htmlFor="companyName">Company Name</label>
                <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    className={styles.inputField}
                    onChange={handleChange}
                    required
                />
                
                {/* Render field to input current stage NAME */}
                <label className={styles.label} htmlFor="currentStageName">Current Stage Name</label>
                <input
                    type="text"
                    id="currentStageName"
                    name="currentStageName"
                    value={formData.currentStageName}
                    className={styles.inputField}
                    onChange={handleChange}
                    required
                />

                {/* Render field to input current stage NUMBER */}
                <label className={styles.label} htmlFor="stage">Current Stage Number</label>
                <input
                    type="text"
                    id="stage"
                    name="stage"
                    value={formData.stage}
                    className={styles.inputField}
                    onChange={handleChange}
                />

                {/* Render field to input total stages */}
                <label className={styles.label} htmlFor="totalStages">Total Stages</label>
                <input
                    type="text"
                    id="totalStages"
                    name="totalStages"
                    value={formData.totalStages}
                    className={styles.inputField}
                    onChange={handleChange}
                />

                {/* Render field to input due date */}
                <label className={styles.label} htmlFor="dueDate">Due Date</label>
                <input
                    type="date"
                    id="dueDate"
                    name="dueDate"
                    value={formData.dueDate.split('-').reverse().join('-')}
                    className={styles.inputField}
                    onChange={handleChange}
                    required
                />
            </div>
          <div className={styles.formField}>
            {/* Render submit button */}
            <button className={styles.button} type="submit">
              Add
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default AddApplicationForm;