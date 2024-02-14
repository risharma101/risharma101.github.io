import React from 'react';
import './HomePage.css';
import profilepic from '../assets/profilepic.jpg';
import SkillButton from '../components/SkillButton';
import {ReactComponent as CPPLogo} from '../assets/c-plus-plus-svgrepo-com.svg'; // Example path to a React logo SVG
import {ReactComponent as JavaLogo} from '../assets/java-logo-svgrepo-com.svg';

const HomePage = () => {
    return (
        <>
            <div className='title'>
                <h1>Rishabh Sharma</h1>

            </div>
            <div className='about-section'>
                <div className='about-column'>
                    <a href='https://github.com/risharma101'>Github</a>
                    <a href='https://www.linkedin.com/in/rishabhsharma101/'>LinkedIn</a>
                    <a>rishabhsharma@ucla.edu</a>

                    {/* <p>THIS IS PURELY A TEST TO SEE</p> */}
                </div>
                <div className='about-img'>
                    <img src={profilepic} alt="Your Name" />
                </div>
                <div className='about-column'>
                    <p>I'm Rishabh!. Feel free to expand this section with more information about yoursel.</p>
                </div>
            </div>
            <div className="skills-section">
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

                    {/* Another Skill Item */}

                    {/* Add more skill items here */}
                </div>
            </div>
            <footer>
                Designed and built by Rishabh Sharma
            </footer>
        </>
    );
};

export default HomePage;
