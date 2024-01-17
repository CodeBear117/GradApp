// This component is a single card on the list of application items

import { useNavigate } from 'react-router-dom';
import styles from './styles/ApplicationItem.module.css';

function ApplicationItem({ companyId, companyName, stage, totalStages, currentStatus, currentStageName, dueDate, notification }) {

  // Navigate to a selected company details page
  const navigate = useNavigate();
  const navigateToCompanyPage = () => {
    navigate(`/company/${companyId}`);
  };

  //testing
  console.log(`This is the company name: ${companyName}`)
  console.log(`This is the company id: ${companyId}`)

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
  };

  return (
    <div className={styles.applicationItem}>
      <div className={styles.header}>
        {/* Render company name */}
        <span className={styles.companyName}>{companyName}</span>
        {/* Render notification */}
        {notification && <span className={styles.notification}>{notification}</span>}
      </div>
      <div className={styles.stageInfo}>
        {/* Render stage progress */}
        {stage && totalStages ? `Stage ${stage} of ${totalStages}: ${currentStageName}` : currentStatus }
      </div>
      {/* Render due date*/}
      {dueDate && <div className={styles.dueDate}>Complete by {dueDate}</div>}
      <div className={styles.progress}>
        {/* Render stage progress cicles */}
        {progressCircles}
      </div>
      {/* Render details button */}
      <button className={styles.detailsButton} onClick={navigateToCompanyPage}>details</button>
    </div>
  );
}

export default ApplicationItem;