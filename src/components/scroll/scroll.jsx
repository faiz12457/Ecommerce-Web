import React, { useState, useEffect } from 'react';
import styles from './ScrollToTop.module.css'; 
import { IoIosArrowUp } from "react-icons/io";
export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <div className={styles.scrollToTop} onClick={scrollToTop}>
        <IoIosArrowUp size={35} />

        </div>
      )}
    </>
  );
};

export default ScrollToTop;
