import React, { useState } from 'react';
import styles from './App.css';
import WelcomeBanner from './components/WelcomeBanner';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CompanyPage from './components/CompanyPage';
import ApplicationList from './components/ApplicationList';
import UserProfile from './components/UserProfile';
import SignIn from './components/SigninPage'; 
//import BottomNavigation from './components/BottomNavigation';

function MainContent( { user, onSignOut } ) {
  const location = useLocation();

  // Check if the current path is not the company page
  const showHeaderAndFilter = !location.pathname.startsWith("/company/");

  //const user = { // needs to come from a Database
  //  firstName: 'Sahil', 
  //  lastName: 'Developer',
  //  profilePicture: '',
  //};
  return (
    <>
      {showHeaderAndFilter && (
        <div>
          <UserProfile user={user} onSignOut={onSignOut} />
          <WelcomeBanner firstName={user.firstName} />
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
  const [user, setUser] = useState(null); // State to track user authentication
  const handleSignIn = (userData) => {
    setUser(userData); // Set the user data upon successful sign-in
  };
  const handleSignOut = () => {
    setUser(null); // Clear the user data upon sign-out
  };

  return (
    <Router>
      <div className={styles.App}>
      {user ? (
          // If user is signed in, render the MainContent
          <MainContent user={user} onSignOut={handleSignOut} />
        ) : (
          // If no user is signed in, render the SignIn component
          <SignIn onSignIn={handleSignIn} />
        )}
      </div>
    </Router>
  );
}

export default App;