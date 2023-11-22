import './App.css';

// App.js
import React from 'react';
import styles from './App.css';
import WelcomeBanner from './components/WelcomeBanner';
import SortFilterBar from './components/SortFilterBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CompanyPage from './components/CompanyPage';
//import ApplicationItem from './components/ApplicationItem/ApplicationItem';
import ApplicationList from './components/ApplicationList';
//import ApplicationList from './components/ApplicationList/ApplicationList';
//import BottomNavigation from './components/BottomNavigation';

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <WelcomeBanner />
        <SortFilterBar />

        {/* Define your routes within Routes */}
        <Routes>
          {/* Home route showing ApplicationList */}
          <Route path="/" element={<ApplicationList />} />

          {/* Dynamic route for individual Company Pages */}
          <Route path="/company/:companyId" element={<CompanyPage />} />

          {/* Additional routes can be added here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;