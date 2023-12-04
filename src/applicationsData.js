// This data will simulated data and will come from a database api call in the future.
const applicationsData = [
    {
      companyId: 1,
      companyName: 'Company X',
      stage: 3,
      totalStages: 4,
      currentStatus: 'inProgress',
      currentStageName: 'Video Interview',
      dueDate: '31 Aug 2023',
      notification: '1 New Notification'
    },
    {
      companyId: 2,
      companyName: 'Company Y',
      stage: 2,
      totalStages: 5,
      currentStatus: 'inProgress',
      currentStageName: 'Online Assessment',
      dueDate: '25 Dec 2023',
      notification: ''
    },
    {
      companyId: 3,
      companyName: 'Company Z',
      stage: 3,
      totalStages: 4,
      currentStatus: 'rejected',
      currentStageName: 'Rejected',
      dueDate: '',
      notification: ''
    }
  ];

  export default applicationsData;