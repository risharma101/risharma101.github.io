import React from 'react';
import './HomePage.css';
import profilepic from '../assets/profilepic.jpg';

const HomePage = () => {
    return (
        <>
            <div className='title'>
                <h1>Rishabh Sharma</h1>

            </div>
            <div className='about-me' style={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>
                <div className='about-section' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px 0' }}>
                    <a href='https://github.com/risharma101'>Github</a>
                    <a href='https://www.linkedin.com/in/rishabhsharma101/'>LinkedIn</a>
                    <a>rishabhsharma@ucla.edu</a>
                </div>
                <div className='about-section'><img src={profilepic} alt="Your Name" style={{ width: '200px', borderRadius: '5%', marginRight: '20px' }} /></div>
                <div className='about-section'><p>I'm Rishabh!. Feel free to expand this section with more information about yourself.</p></div>
            </div>
            <footer style={{ marginTop: 'auto', padding: '20px 0', color: 'white', width: '100%', textAlign: 'center' }}>
                Designed and built by Rishabh Sharma
            </footer>
        </>
    );
};

export default HomePage;
