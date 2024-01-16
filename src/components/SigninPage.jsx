// This component contains the code for the sign in page

import React, { useState } from 'react';
import { authenticate } from '../assets/AuthSign'; // mock authentication/db data for signin
import styles from './styles/SigninPage.module.css';

function SignIn({ onSignIn }) {

  // State to handle email input
  const [email, setEmail] = useState('');

  // State to handle password input
  const [password, setPassword] = useState('');

  // (Extremely) basic user authentication
  const handleSignIn = () => {
    if (authenticate(email, password)) {
      onSignIn({ firstName: 'John', lastName: 'Doe' }); // Mock user data
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Sign in</h1>
        <h1 className={styles.appTitle}>GradApp</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className={styles.inputField}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className={styles.inputField}
        />
        <button onClick={handleSignIn} className={styles.button}>Sign In</button>
        {/* Mock data for the tester */}
        <p className={styles.mockCredentials}>Use the following:</p>
        <p className={styles.mockCredentials}>user@example.com</p>
        <p className={styles.mockCredentials}>password</p>
      </div>
    </div>
  );
}

export default SignIn;