import React, { useEffect, useState } from "react";
import "./HomePage.css";
import profilepic from "../assets/profilepic.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import ProjectSlider from "../components/ProjectSlider";
import { motion } from "framer-motion";
import Popup from "../components/Popup";
import { SlideData } from "../types";
import BuildingBlocks from "../components/BuildingBlocks";

const HomePage = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [currentSlideData, setCurrentSlideData] = useState<SlideData | null>(
        null
    );

    useEffect(() => {
        if (isPopupOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isPopupOpen]);

    const handleSlideClick = (slideData?: SlideData) => {
        setCurrentSlideData(slideData || null);
        setIsPopupOpen(true);
    };

    const titleVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
            },
        },
    };

    const letterVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <div className="home-page">
            {/* Profile Picture */}
            <div className="profile-icon-container">
                <motion.div
                    className="profile-circle"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    whileHover={{
                        scale: 1.1,
                        boxShadow: "0px 0px 12px rgba(255,255,255,0.3)",
                    }}
                >
                    <img src={profilepic} alt="Rishabh Sharma" />
                </motion.div>
            </div>

            {/* Title */}
            <motion.div
                className="title"
                variants={titleVariants}
                initial="hidden"
                animate="visible"
            >
                <h1>
                    {Array.from("Hi, I'm Rishabh!").map((letter, i) => (
                        <motion.span key={i} variants={letterVariants}>
                            {letter === " " ? "\u00A0" : letter}
                        </motion.span>
                    ))}
                </h1>
            </motion.div>

            {/* Bio Section */}
            <div className="bio-section">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    I'm a Computer Science major at UCLA who loves building! I like working on full-stack projects, especially those involving AI/ML!
                </motion.p>
            </div>

            {/* Links Section */}
            <div className="links-section">
                <motion.a
                    href="https://www.linkedin.com/in/rishabhsharma101/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                >
                    <FaLinkedin size={40} />
                </motion.a>
                <motion.a
                    href="https://github.com/risharma101"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                >
                    <FaGithub size={40} />
                </motion.a>
                <motion.a
                    href="mailto:rishabhsharma@ucla.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Mail"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                >
                    <IoMdMail size={40} />
                </motion.a>
            </div>

            {/* Building Blocks */}
            <BuildingBlocks />

            {/* Featured Projects */}
            <div className="projects-section" style={{ textAlign: "center" }}>
                <h2>Some of My Projects</h2>
                <ProjectSlider onSlideClick={handleSlideClick} />
                {isPopupOpen && currentSlideData && (
                    <>
                        <div
                            style={{
                                position: "fixed",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                backgroundColor: "rgba(0, 0, 0, 0.8)",
                                zIndex: 999,
                            }}
                            onClick={() => setIsPopupOpen(false)}
                        ></div>
                        <Popup
                            onClose={() => setIsPopupOpen(false)}
                            slideData={currentSlideData}
                        />
                    </>
                )}
            </div>

            {/* Footer */}
            <footer>Designed and built by Rishabh Sharma</footer>
        </div>
    );
};

export default HomePage;
