import React from 'react';
import styles from './App.css';
import WelcomeBanner from './components/WelcomeBanner';
import SortFilterBar from './components/SortFilterBar';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CompanyPage from './components/CompanyPage';
import ApplicationList from './components/ApplicationList';
import UserProfile from './components/UserProfile';
//import ApplicationList from './components/ApplicationList/ApplicationList';
//import BottomNavigation from './components/BottomNavigation';

function MainContent( { firstName } ) {
  const location = useLocation();

  // Check if the current path is not the company page
  const showHeaderAndFilter = !location.pathname.startsWith("/company/");

  return (
    <>
      {showHeaderAndFilter && (
        <div>
          <WelcomeBanner firstName={firstName} />
          <SortFilterBar />
        </div>
      )}
      <Routes>
        <Route path="/" element={<ApplicationList />} />
        <Route path="/company/:companyId" element={<CompanyPage />} />
      </Routes>
    </>
  );
}

function App() {
  const user = { // needs to come from a Database
    firstName: 'John', 
    lastName: 'Developer',
    profilePicture: '', // This could be a path to an image or left empty for initials
  };

  const handleSignOut = () => {
    // Implement your sign-out logic here
  };


  return (
    <Router>
      <div className={styles.App}>
        <UserProfile user={user} onSignOut={handleSignOut} />
        <MainContent firstName={user.firstName} />
      </div>
    </Router>
  );
}

export default App;