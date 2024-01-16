// This component contains the header of the app

import styles from './styles/WelcomeBanner.module.css';

function WelcomeBanner( {firstName} ) {
  return (
    <div className={styles.welcomeBanner}>
      <h1 className={styles.appTitle}>GradApp</h1>
      {/* Render dynamic welcome message based on user's first name */}
      <h1>Welcome, {firstName}</h1>
    </div>
  );
}

export default WelcomeBanner;