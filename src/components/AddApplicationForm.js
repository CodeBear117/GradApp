import React, { useState } from 'react';
import styles from './styles/AddApplicationForm.module.css'; // This should be the path to your CSS module

function AddApplicationForm({ addApplication, closeForm }) {
  const [formData, setFormData] = useState({
    companyName: '',
    stage: '',
    totalStages: '',
    currentStageName: '',
    dueDate: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addApplication({
        ...formData,
        currentStatus: 'In Progress' // Set the status programmatically
      });

    closeForm(); // Call a function to close the form
  };

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <h1>Add Manually</h1>
        <button className={styles.closeButton} onClick={closeForm}>&times;</button>
        <form onSubmit={handleSubmit}>
            <div className={styles.formField}>
                <label className={styles.label} htmlFor="companyName">Company Name</label>
                <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                />

                <label className={styles.label} htmlFor="currentStageName">Current Stage Name</label>
                <input
                    type="text"
                    id="currentStageName"
                    name="currentStageName"
                    value={formData.currentStageName}
                    onChange={handleChange}
                    required
                />

                <label className={styles.label} htmlFor="stage">Current Stage Number</label>
                <input
                    type="text"
                    id="stage"
                    name="stage"
                    value={formData.stage}
                    onChange={handleChange}
                />

                <label className={styles.label} htmlFor="totalStages">Total Stages</label>
                <input
                    type="text"
                    id="totalStages"
                    name="totalStages"
                    value={formData.totalStages}
                    onChange={handleChange}
                />

                <label className={styles.label} htmlFor="dueDate">Due Date</label>
                <input
                    type="date"
                    id="dueDate"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleChange}
                    required
                />
            </div>

          <div className={styles.formField}>
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