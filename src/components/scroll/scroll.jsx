import React, { useState, useEffect, useContext } from 'react';
import styles from './ScrollToTop.module.css'; 
import { IoIosArrowUp } from "react-icons/io";
import { Shop } from '../../contextpi';
export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {mode}=useContext(Shop);

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
        <div className={styles.scrollToTop} onClick={scrollToTop} style={{backgroundColor:mode?"#fff":"#374151"}}>
        <IoIosArrowUp size={35}  style={{fill:mode?"black":"white"}}/>

        </div>
      )}
    </>
  );
};

export default ScrollToTop;
