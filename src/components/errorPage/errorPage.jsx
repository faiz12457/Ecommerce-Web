import React from 'react';
import styles from './error.module.css';
import { useNavigate } from 'react-router-dom';

export function ErrorPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className={styles.errorPage}>
      <h1 className={styles.errorMessage}>404</h1>
      <p className={styles.errorDescription}>Page Not Found</p>
      <button className={styles.goBackButton} onClick={handleGoBack}>
        Go Back
      </button>
    </div>
  );
}
