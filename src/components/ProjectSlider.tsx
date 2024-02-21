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
import { SlideData } from "../types";

import Project_csco from "./projects/Project_csco";


interface ProjectSliderProps {
  onSlideClick: (slideData: SlideData) => void;
}

const slidesData: SlideData[] = [
  { img: csco_gif, title: "CSCO", description: "A Social Gallery", component: Project_csco },
  { img: rishgpt_img, title: "RishGPT", description: "Custom ChatGPT UI", },
  { img: notefy_img, title: "Notefy", description: "Chrome Extension to Summarize Webpages", },
  { img: seamcarver_img, title: "SeamCarver", description: "An Image-size Reducer using Seam Carving Techniques", },
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
      <div className='project-slider' style={{ cursor: 'grab' }} >
        <Slider {...settings}>
          {slidesData.map((slide, index) => (
            <div key={index} className="slide-container" onClick={() => onSlideClick(slide)}>
              <div className="slide-content" >
                <h3 style={{ padding: '5px 0px 0px' }}>{slide.title}</h3>
                <p style={{ padding: '5px' }}>{slide.description}</p>
                <motion.img src={slide.img} style={{ height: '500px', maxHeight: '500px' }} whileHover={{ scale: 0.95 }}
                  whileTap={{ scale: 0.8 }} onClick={() => onSlideClick(slidesData[index])} />
              </div>
            </div>
          ))}

        </Slider>
      </div>
    </div>
  );
};

export default ProjectSlider;
