import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ProjectSlider.css';
import React from 'react';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import { motion } from "framer-motion";
import { SlideData } from "../types";

import csco_img from '../assets/csco-img.gif';
import rishgpt_img from '../assets/rishgpt-img.png';
import notefy_img from '../assets/notefy-img.png';
import seamcarver_img from '../assets/seamcarver-img.png';

import Project_csco from "./projects/Project_csco";
import Project_notefy from "./projects/Project_notefy";
import Project_rishgpt from "./projects/Project_rishgpt";
import Project_seamcarver from "./projects/Project_seamcarver";


interface ProjectSliderProps {
  onSlideClick: (slideData: SlideData) => void;
}

const slidesData: SlideData[] = [
  { img: csco_img, title: "CSCO", description: "Your Personal Media Board", component: Project_csco },
  { img: rishgpt_img, title: "RishGPT", description: "A Custom ChatGPT UI", component: Project_rishgpt},
  { img: notefy_img, title: "Notefy", description: "A Chrome Extension to Summarize Webpages!", component: Project_notefy },
  { img: seamcarver_img, title: "SeamCarver", description: "An Image Reduction Application using Seam Carving Techniques", component: Project_seamcarver},
  // Add more slides with titles and descriptions
];


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

const ProjectSlider: React.FC<ProjectSliderProps> = ({ onSlideClick }) => {
  // Slider settings
  const settings = {
    className: "center",
    // centerMode: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    infinite: true,
    centerPadding: '10%',
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

  return (
    <div className='project-section'>
      <div className='project-slider' >
        <Slider {...settings}>
          {slidesData.map((slide, index) => (
            <div key={index} className="slide-container">
              <div className="slide-content" >
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
                <motion.img className="slide-img" src={slide.img} whileHover={{ scale: 0.95, color: '#181818' }}
                  whileTap={{ scale: 0.8 }} onClick={() => onSlideClick(slide)} />
              </div>
            </div>
          ))}

        </Slider>
      </div>
    </div>
  );
};

export default ProjectSlider;
