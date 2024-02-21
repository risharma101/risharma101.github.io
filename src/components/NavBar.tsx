import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect, CSSProperties } from 'react';
import { motion } from "framer-motion";

const NavBar: React.FC = () => {
  let navigate = useNavigate();
  let location = useLocation();
  // const [isSticky, setIsSticky] = useState<boolean>(false);

  // useEffect(() => {
  //   // Corrected scroll event listener logic
  //   const handleScroll = () => {
  //     const navbar: HTMLElement | null = document.getElementById('navbar');
  //     const sticky: number = navbar?.offsetTop ?? 0;

  //     if (window.pageYOffset > sticky) {
  //       setIsSticky(true);
  //     } else {
  //       setIsSticky(false);
  //     }
  //   };

  //   // Attach the scroll event listener
  //   window.addEventListener('scroll', handleScroll);

  //   // Cleanup function to remove the event listener
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const navBarStyle: React.CSSProperties = isSticky ? {
  //   // position: 'fixed',
  //   // top: 0,
  //   // zIndex: 1000,
  // } : {};


  const getButtonStyle = (path: string) => ({
    borderRadius: '20px',
    border: 'none',
    // padding: '10px 20px',
    width: '80px',
    height: '30px',
    margin: '0 10px',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    backgroundColor: location.pathname === path ? '#3c3c3c' : '#141414', // Active page has different color
    color: 'white',
  });

  return (
    <div id="navbar" /*style={navBarStyle}*/>
      <motion.button
        style={getButtonStyle("/")}
        onClick={() => navigate("/")}
        whileHover={{ scale: 1.2 }} 
        whileTap={{ scale: 0.8 }}
      >
        Home
      </motion.button>
      <motion.button
        style={getButtonStyle("/portfolio")}
        onClick={() => navigate("/portfolio")}
        whileHover={{ scale: 1.2 }} 
        whileTap={{ scale: 0.8 }}
      >
        Portfolio
      </motion.button>
    </div>
  );
};

export default NavBar;
