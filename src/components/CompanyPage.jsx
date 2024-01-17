// This component is contains the company page information after the user clicks on the Details button on card item

import { useParams, useNavigate } from 'react-router-dom';
import applicationsData from '../assets/applicationsData'; // Import the mock data
import { Button } from '@mui/material';

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
  
  // Check if companyData exists and access its properties
  // These details would come from a database that is populated by the company and their profile additions
  const companyName = companyData ? companyData.companyName : 'Company Not Found';
  const currentStatus = companyData && companyData.currentStatus !== '' ? companyData.currentStatus : null;
  const currentStageName = companyData ? (companyData.currentStageName === 'Rejected' ? 'Unlikely to progress further' : companyData.currentStageName) : 'Unknown Stage';
  const dueDate = companyData === undefined ? null : companyData.dueDate;
  const notification = companyData === undefined ? null : companyData.notification;

  return (
    <div className="relative">
      <div className="flex justify-between items-center mx-10">
        <h2 className='text-[#2196f3]'>Details</h2>
        <Button variant="contained" onClick={goBack}>Back to Dashboard</Button>
      </div>
      <div  className='ml-10 mb-0'>
        <h1>Your application with {companyName}</h1>
        {notification && <span className='bg-[#9747ff] text-white px-4 py-1 rounded-xl text-sm'>{notification}</span>}
      </div>
      <div>
        <div className='flex flex-row max-h-screen'>
          <div className="flex-grow flex-basis-3 rounded-2xl m-10 px-8 bg-[#e0ecff]">
            {/* Render general stage details */}
            <div className="pb-5">
              <h2 className='text-[#2196f3]'>The Next Step</h2>
              <a href="company_webpage_url" className="...">View original job posting</a>
              {currentStageName === 'Unknown Stage'? <p>Unknown Stage</p> : (currentStatus === 'rejected' ? <p>{currentStageName}</p> : <p>The next stage of your recuitment process with {companyName} is a {currentStageName}. The due date for this stage is {dueDate} </p>)}
              {dueDate && <Button variant="contained" onClick={goBack}>Click here to access {currentStageName}</Button>}
            </div>
            {/* Render list of notifications */}
            <div className="pb-5">
              <h2 className='text-[#2196f3]'>Notifications</h2>
              {currentStatus === 'rejected' || notification === ''
                ? <p>No notifications.</p>
                : notification === null
                  ? <p>This application was added manually. You will not receive notifications for manually added applications.</p>
                  : <p>These are the contents of the notification, it would be imported from an email.</p>
              }
            </div>
            {/* Render applion document details */}
            <div className="flex flex-col pb-5">
              <h2 className='text-[#2196f3]'>Your Original Application</h2>
              <a href="link_to_your_resume" className="mb-2">View applied resume</a>
              <a href="link_to_your_cover_letter" className="...">View applied cover letter</a>
            </div>
            {/* Render help details */}
            <div className="pb-5">
                <h2 className='text-[#2196f3]'>Support</h2>
                <a href="mailto:example@recruiter.com" className="mb-2">Contact Recruiter</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyPage;