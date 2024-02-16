import React from 'react';
import './HomePage.css';
import profilepic from '../assets/profilepic.jpg';
import FullstackProjects from '../components/FullstackProjects';
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"



const HomePage = () => {
    return (
        <>
            <div className='title'>
                <h2>Rishabh Sharma</h2>

            </div>
            <div className='about-section'>
                <div className='about-column'>
                    <a href='https://github.com/risharma101' target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub size={40} />
                    </a>
                    <p className='link-descriptor'>GitHub</p>
                    <a href='https://www.linkedin.com/in/rishabhsharma101/' target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin size={40} />
                    </a>
                    <p className='link-descriptor'>LinkedIn</p>

                    <a href='mailto:rishabhsharma@ucla.edu' target="_blank" rel="noopener noreferrer" aria-label="Mail">
                        <IoMdMail size={40} />
                    </a>
                    <p className='link-descriptor'>rishabhsharma@ucla.edu</p>
                </div>
                <div className='about-img'>
                    <img src={profilepic} alt="Your Name" />
                </div>
                <div className='about-column'>
                    <h6>I'm Rishabh!. I'm a CS major at UCLA with interest and experience in Backend & Full-Stack Software Development and AI/ML Technologies.</h6>
                </div>
            </div>
            {/* <div className="skills-section">
                <h2>Skills</h2>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '20px', // Adjusts the space between logos
                }}>
                    <div>
                        <SkillButton svg={JavaLogo} label="Java" />
                    </div>
                    <div>
                        <SkillButton svg={CPPLogo} label="C++" />
                    </div>
                    <div>
                        <SkillButton svg={JavaLogo} label="Java" />
                    </div>
                    <div>
                        <SkillButton svg={JavaLogo} label="Java" />
                    </div>
                    <div>
                        <SkillButton svg={JavaLogo} label="Java" />
                    </div>
                    <div>
                        <SkillButton svg={JavaLogo} label="Java" />
                    </div>
                </div>
            </div> */}

            <div className='project-section'>
                <h3>Current Projects</h3>
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
            <footer>
                Designed and built by Rishabh Sharma
            </footer>
        </>
    );
};

export default HomePage;
