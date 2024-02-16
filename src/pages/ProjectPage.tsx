import React from 'react';
import './ProjectPage.css';
import FullstackProjects from '../components/FullstackProjects';

const ProjectPage = () => {
  return (
    <div>
      <h2 className='title'>Projects</h2>
      <div className='project-section'>
        <h3>Fullstack Projects</h3>
        <div className='project-slider'>
          <FullstackProjects />
        </div>

      </div>
      <div className='project-section'>
        <h3>AI Projects</h3>
        <div className='project-slider'>
          <FullstackProjects />
        </div>

      </div>
      <div className='project-section'>
        <h3>Data Structures & Algorithms Projects</h3>
        <div className='project-slider'>
          <FullstackProjects />
        </div>

      </div>
    </div>
  );
};

export default ProjectPage;
