import React from 'react';
import styles from './Footer.module.css';
import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa'; // Import icons from react-icons

 export const Footer = () => {
  return (
    <footer className={styles.footer}>
     <div className={styles.footContainer}>
      <div className={styles.footerContent}>
        <div className={styles.logo}>The Shopping</div>
        <p className={styles.footerText}>© 2024 The Shopping. All rights reserved.</p>
      </div>
      <div className={styles.socialIcons}>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaInstagram />
        </a>
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaWhatsapp />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaFacebook />
        </a>
      </div>
      </div>
    </footer>
  );
};

