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
    // If the field being changed is dueDate, handle the conversion
    if (e.target.name === 'dueDate') {
      // Assuming the input will be in the format YYYY-MM-DD and needs to be converted to DD-MM-YYYY
      const [year, month, day] = e.target.value.split('-');
      setFormData({ ...formData, dueDate: `${day}-${month}-${year}` });
    } else {
      // Handle other inputs normally
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addApplication({
        ...formData,
        currentStatus: 'inProgress' // Set the status programmatically
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
                    className={styles.inputField}
                    onChange={handleChange}
                    required
                />

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

                <label className={styles.label} htmlFor="stage">Current Stage Number</label>
                <input
                    type="text"
                    id="stage"
                    name="stage"
                    value={formData.stage}
                    className={styles.inputField}
                    onChange={handleChange}
                />

                <label className={styles.label} htmlFor="totalStages">Total Stages</label>
                <input
                    type="text"
                    id="totalStages"
                    name="totalStages"
                    value={formData.totalStages}
                    className={styles.inputField}
                    onChange={handleChange}
                />

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