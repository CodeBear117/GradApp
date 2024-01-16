// This component is contains the company page information after the user clicks on the Details button on card item

import { useParams, useNavigate } from 'react-router-dom';
import styles from './styles/CompanyPage.module.css';
import applicationsData from '../assets/applicationsData'; // Import the mock data

function CompanyPage() {

  // Extract companyId from URL
  const { companyId } = useParams(); 

  // Navigate back to root
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/');
  };
  
  // Fetch the company data based on the companyId,
  const companyData = applicationsData.find(company => company.companyId === parseInt(companyId));
  // must add a case for if the company is added manually

  // Check if companyData exists and access its properties
  const companyName = companyData ? companyData.companyName : 'Company Not Found';
  //const companyLogoUrl = companyData ? companyData.logoUrl : '#';
  //const companyWebpageUrl = companyData ? companyData.webpageUrl : '#';
  // These details would come from a database that is populated by the company and their profile additions

  return (
    <div className={styles.container}>
      <button onClick={goBack}>Back to Main Screen</button>
      <h1 className={styles.header}>Company: {companyName}</h1>
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