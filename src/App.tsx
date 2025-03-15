import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import Particles from './components/Particles';

function App() {
  return (
    <>
      <Particles />
      <Router>
        <div className="nav-bar">
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<ProjectPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;