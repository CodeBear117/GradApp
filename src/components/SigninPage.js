import React, { useState } from 'react';
import { authenticate } from './AuthSign';
import styles from './styles/SigninPage.module.css';

function SignIn({ onSignIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        <div className={styles.mockCredentials}>
          "user@example.com" - "password"
        </div>
      </div>
    </div>
  );
}

export default SignIn;