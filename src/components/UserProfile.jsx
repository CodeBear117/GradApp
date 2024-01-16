// This component contains the code for the user's profile image and details in the header

import styles from './styles/UserProfile.module.css';

function UserProfile({ user, onSignOut }) {

  // State used to set current user details based on login
  const { firstName, lastName, profilePicture } = user;

  // Helper function to get initials
  const getInitials = (firstName, lastName) => {
    return `${firstName[0]}${lastName[0]}`;
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profilePicContainer}>
        {/* Render dynamic profile picture based on user's initials if no profile picture is available */}
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