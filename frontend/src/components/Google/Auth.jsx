
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from "./CreateEvent.module.css";

const Auth = () => {
  const handleAuth = () => {
    window.location.href = `${import.meta.env.VITE_Backend_URL}/auth`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
      <h3>First Authorize with google calendar and schedule meets conveniently</h3>
      <button onClick={handleAuth}>Authenticate with Google</button>
      <button><Link to='/CreateEvent'>Schedule Event</Link></button>
    </div>
    </div>
  );
};

export default Auth;