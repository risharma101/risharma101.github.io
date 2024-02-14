import React from 'react';
import './HomePage.css';
import profilepic from '../assets/profilepic.jpg';

const HomePage = () => {
    return (
        <>
            <div className='title'>
                <h1>Rishabh Sharma</h1>

            </div>
            <div className='about-section'>
                <div className='about-column'>
                    {/* <a href='https://github.com/risharma101'>Github</a>
                    <a href='https://www.linkedin.com/in/rishabhsharma101/'>LinkedIn</a>
                    <a>rishabhsharma@ucla.edu</a> */}
                    <p>THIS IS PURELY A TEST TO SEE</p>
                </div>
                <div className='about-img'>
                    <img src={profilepic} alt="Your Name" />
                </div>
                <div className='about-column'>
                    <p>I'm Rishabh!. Feel free to expand this section with more information about yourself.</p>
                </div>
            </div>
            <footer style={{ marginTop: 'auto', padding: '20px 0', color: 'white', width: '100%', textAlign: 'center' }}>
                Designed and built by Rishabh Sharma
            </footer>
        </>
    );
};

export default HomePage;
