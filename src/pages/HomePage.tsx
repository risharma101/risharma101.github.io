import React, { useEffect, useState } from 'react';
import './HomePage.css';
import profilepic from '../assets/profilepic.jpg';
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"
import ProjectSlider from '../components/ProjectSlider';
import { motion } from "framer-motion";
import Popup from '../components/Popup';
import {SlideData} from '../types';


const HomePage = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [currentSlideData, setCurrentSlideData] = useState<SlideData | null>(null);


    useEffect(() => {
        if (isPopupOpen) {
            // When the popup is open, add `overflow: hidden` to the body to disable scrolling
            document.body.style.overflow = 'hidden';
        } else {
            // Remove `overflow: hidden` when the popup is closed to re-enable scrolling
            document.body.style.overflow = '';
        }

        // Cleanup function to ensure we re-enable scrolling when the component unmounts
        return () => {
            document.body.style.overflow = '';
        };
    }, [isPopupOpen]);

    const handleSlideClick = (slideData?: SlideData) => {
        setCurrentSlideData(slideData || null);
        setIsPopupOpen(true);
      };
    return (
        <>
            <div className='title'>
                <h1>Rishabh Sharma</h1>

            </div>
            <div className='about-section'>
                <div className='about-column'>
                    <motion.a href='https://github.com/risharma101' target="_blank" rel="noopener noreferrer" aria-label="GitHub" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                        <FaGithub size={40} />
                    </motion.a>
                    <p className='link-descriptor'>GitHub</p>
                    <motion.a href='https://www.linkedin.com/in/rishabhsharma101/' target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                        <FaLinkedin size={40} />
                    </motion.a>
                    <p className='link-descriptor'>LinkedIn</p>

                    <motion.a href='mailto:rishabhsharma@ucla.edu' target="_blank" rel="noopener noreferrer" aria-label="Mail" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                        <IoMdMail size={40} />
                    </motion.a>
                    <p className='link-descriptor'>rishabhsharma@ucla.edu</p>
                </div>
                <div className='about-img'>
                    <motion.img src={profilepic} alt="Your Name" whileHover={{ scale: 1.1 }} />
                </div>
                <div className='about-column'>
                    <motion.h6 whileHover={{ scale: 1.1 }}>I'm Rishabh!. I'm a CS major at UCLA with interest and experience in Backend & Full-Stack Software Development and AI/ML Technologies.</motion.h6>
                </div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <h2>Featured Projects </h2>
                <ProjectSlider onSlideClick={handleSlideClick} />
                {isPopupOpen && currentSlideData && (
                    <>
                        <div style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            zIndex: 999, // Ensure it's just below the popup
                        }} onClick={() => setIsPopupOpen(false)}></div> {/* This div serves as the overlay */}
                        <Popup onClose={() => setIsPopupOpen(false)} slideData={currentSlideData} />
                    </>
                )}
            </div>
            <footer>
                Designed and built by Rishabh Sharma
            </footer>
        </>
    );
};

export default HomePage;
