import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ProjectSlider.css';
import React from 'react';
import Slider from 'react-slick';
import csco_gif from '../assets/csco-gif.gif';
import rishgpt_img from '../assets/rishgpt-img.png';
// @ts-ignore
import rishgpt_vid from '../assets/rishgpt-vid.mov';
import notefy_img from '../assets/notefy-img.png';
import notefy_img2 from '../assets/notefy-img2.png';
// @ts-ignore
import notefy_vid from '../assets/notefy-vid.mov';
import seamcarver_img from '../assets/seamcarver-img.png';
// @ts-ignore
import seamcarver_vid from '../assets/seamcarver-vid.mov';

import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import { motion } from "framer-motion";

// export interface Slide {
//   video: string;
//   caption: string;
//   // Add more fields here as needed, e.g., id, description, etc.
// }

// Props interface
// interface ProjectSliderProps {
//   slides: Slide[]; // Array of Slide objects
// }
interface ProjectSliderProps {
  onSlideClick: () => void;
}

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const NextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => (
  <motion.div
    className={className}
    onClick={onClick}
    whileHover={{ scale: 1.4 }}
    whileTap={{ scale: 0.8 }}
  >
    <FaArrowRight size={20} style={{ ...style, display: 'block' }} color="white" />
  </motion.div>
);

const PrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => (
  <motion.div
    className={className}
    onClick={onClick}
    whileHover={{ scale: 1.4 }}
    whileTap={{ scale: 0.8 }}
  >
    <FaArrowLeft size={20} style={{ ...style, display: 'block' }} color="white" />
  </motion.div>
);

const ProjectSliderVid: React.FC<ProjectSliderProps> = ({onSlideClick }) => {
  // Slider settings
  const settings = {
    className: "center",
    // centerMode: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    infinite: true,
    centerPadding: '15%',
    slidesToShow: 1,
    speed: 500,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768, // Example breakpoint for tablets
        settings: {
          centerPadding: '10%', // Less padding for smaller screens
        }
      },
      {
        breakpoint: 480, // Example breakpoint for mobile devices
        settings: {
          centerPadding: '5%', // Even less padding for very small screens
        }
      }
    ]
  };

  const videoUrls = [
    csco_gif,
    rishgpt_img,
    notefy_img,
    seamcarver_img
    // Add more video URLs as needed
  ];

  // Image data (replace with your images and captions)

  return (
    <div className='project-section'>
      <div className='project-slider' style={{ cursor: 'grab' }} >
        <Slider {...settings}>
          {videoUrls.map((videoFile, index) => (
            <div key={index} className="slide-container">
              <motion.div className="slide-content" whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 0.8 }} onClick={onSlideClick}>
                {videoFile.substring(videoFile.length - 3) == "mov" && (<video src={videoFile} controls loop style={{ width: '100%', maxHeight: '500px' }} />)}
                {videoFile.substring(videoFile.length - 3) != "mov" && (<img src={videoFile} style={{ height: '500px', maxHeight: '500px' }} />)}
              </motion.div>
            </div>
          ))}

        </Slider>
      </div>
    </div>
  );
};

export default ProjectSliderVid;
