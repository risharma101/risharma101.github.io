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
      <div className='researchskills-section'>
        <div className='researchskills-column'>
          <h3>Research</h3>
          <p>
          </p>

        </div>
        <div className='researchskills-column'>
          <h3>Skills</h3>
          <p>
            <b>Languages:</b> C++, C,  Python, Java, JavaScript, SQL<br />
            <b>UI Frameworks:</b> React, Express, Django, Flask, Flutter <br />
            <b>AI Frameworks:</b>OpenCV, PyTorch, TensorFlow<br />
            <b>Cloud/Containers:</b> Docker, Kubernetes, Google Cloud<br />
            <b>General Tools:</b> Git, Bash, VSCode, Xcode, IntelliJ
          </p>

        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
