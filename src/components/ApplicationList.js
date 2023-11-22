import React from 'react';
import ApplicationItem from './ApplicationItem';
import applicationsData from '../applicationsData'; // Import the data

function ApplicationList() {
  return (
    <div>
      {applicationsData.map((application) => (
        <ApplicationItem
          key={application.id}
          companyName={application.companyName}
          stage={application.stage}
          totalStages={application.totalStages}
          currentStatus={application.currentStatus}
          dueDate={application.dueDate}
          notification={application.notification}
        />
      ))}
    </div>
  );
}

export default ApplicationList;