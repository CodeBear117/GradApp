import React from 'react';
import { useParams } from 'react-router-dom';

function CompanyPage() {
  let { companyId } = useParams(); // This gets the companyId from the URL
  
  // Here you would fetch the company data based on the companyId,
  // including the company's name, logo, webpage link, emails, and notifications

  return (
    <div>
      <h1>Company Name</h1>
      <img src="company_logo_url" alt="Company Logo" />
      <a href="company_webpage_url">Job Details</a>
      {/* Render list of email communications */}
      {/* Render list of notifications */}
    </div>
  );
}

export default CompanyPage;