// This data would normally come from an API call or your application's state
const applicationsData = [
    {
      id: 1,
      companyName: 'Company X',
      stage: 3,
      totalStages: 4,
      currentStatus: 'interview',
      currentStageName: 'Video Interview',
      dueDate: '31 Aug 2023',
      notification: '1 New Notification'
    },
    {
      id: 2,
      companyName: 'Company Y',
      stage: 2,
      totalStages: 5,
      currentStatus: 'Assessment',
      currentStageName: 'Online Assessment',
      dueDate: '25 Dec 2023',
      notification: ''
    },
    {
      id: 3,
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