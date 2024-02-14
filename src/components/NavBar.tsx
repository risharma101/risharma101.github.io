import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NavBar = () => {
  let navigate = useNavigate();
  let location = useLocation();

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
    backgroundColor: location.pathname === path ? '#1D1D1D' : '#141414', // Active page has different color
    color: 'white',
  });

  return (
    <div>
      <button
        style={getButtonStyle("/")}
        onClick={() => navigate("/")}
      >
        Home
      </button>
      <button
        style={getButtonStyle("/projects")}
        onClick={() => navigate("/projects")}
      >
        Projects
      </button>
    </div>
  );
};

export default NavBar;
