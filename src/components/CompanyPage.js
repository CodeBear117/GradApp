import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './styles/CompanyPage.module.css';

function CompanyPage() {
  let { companyId } = useParams(); // This gets the companyId from the URL

  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };
  
  // Here you would fetch the company data based on the companyId,
  // including the company's name, logo, webpage link, emails, and notifications

  return (
    <div className={styles.container}>
      <button onClick={goBack}>Back to Main Screen</button>
      <h1 className={styles.header}>Company: {companyId}</h1>
      <img src="company_logo_url" alt="Company Logo" className={styles.logo} />
      <a href="company_webpage_url" className={styles.link}>Job Details</a>
      {/* Render list of email communications */}
      <div className={styles.emails}>Email communications...</div>
      {/* Render list of notifications */}
      <div className={styles.notifications}>Notifications...</div>
    </div>
  );
}

export default CompanyPage;