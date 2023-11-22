import React from 'react';
import styles from './App.css';
import WelcomeBanner from './components/WelcomeBanner';
import SortFilterBar from './components/SortFilterBar';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CompanyPage from './components/CompanyPage';
import ApplicationList from './components/ApplicationList';
//import ApplicationList from './components/ApplicationList/ApplicationList';
//import BottomNavigation from './components/BottomNavigation';

function MainContent() {
  const location = useLocation();

  // Check if the current path is not the company page
  const showHeaderAndFilter = !location.pathname.startsWith("/company/");

  return (
    <>
      {showHeaderAndFilter && (
        <div>
          <WelcomeBanner />
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
  return (
    <Router>
      <div className={styles.App}>
        <MainContent />
      </div>
    </Router>
  );
}

export default App;