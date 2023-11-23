import React from 'react';
import styles from './styles/UserProfile.module.css'; // Make sure to create this module

function UserProfile({ user, onSignOut }) {
  const { firstName, lastName, profilePicture } = user;

  // Helper function to get initials
  const getInitials = (firstName, lastName) => {
    return `${firstName[0]}${lastName[0]}`;
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profilePicContainer}>
        {profilePicture ? (
          <img src={profilePicture} alt="Profile" className={styles.profilePic} />
        ) : (
          <div className={styles.initials}>{getInitials(firstName, lastName)}</div>
        )}
      </div>
      <div className={styles.userInfo}>
        <span className={styles.userName}>{firstName} {lastName}</span>
        <button onClick={onSignOut} className={styles.signOutButton}>Sign Out</button>
      </div>
    </div>
  );
}

export default UserProfile;