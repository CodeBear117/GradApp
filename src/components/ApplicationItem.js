import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles/ApplicationItem.module.css';

function ApplicationItem({ companyName, stage, totalStages, currentStatus, dueDate, notification, companyId, history }) {
  const navigate = useNavigate();

  const navigateToCompanyPage = () => {
    navigate(`/company/${companyId}`);
  };
  // Generates the progress circles based on the stage and totalStages
  const progressCircles = [];
  for (let i = 1; i <= totalStages; i++) {
    progressCircles.push(
      <span
        key={i}
        className={`${styles.circle} ${i < stage ? styles.completed : ''} 
                    ${i === stage ? styles.current : ''} 
                    ${currentStatus === 'rejected' && i === stage ? styles.rejected : ''}`}
      ></span>
    );
  }

  return (
    <div className={styles.applicationItem}>
      <div className={styles.header}>
        <span className={styles.companyName}>{companyName}</span>
        {notification && <span className={styles.notification}>{notification}</span>}
      </div>
      <div className={styles.stageInfo}>
        {stage && totalStages ? `Stage ${stage} of ${totalStages}:` : currentStatus}
      </div>
      {dueDate && <div className={styles.dueDate}>Complete by {dueDate}</div>}
      <div className={styles.progress}>
        {progressCircles}
      </div>
      <button className={styles.detailsButton} onClick={navigateToCompanyPage}>details</button>
    </div>
  );
}

export default ApplicationItem;