import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ProjectSlider.css';
import React from 'react';
import Slider from 'react-slick';
import cscodemo from '../assets/csco-demo.png';
import chatclonedemo from '../assets/chatclone-demo.png';
// @ts-ignore
import percolation_vid from '../assets/percolation-demo-vid.mov';
// @ts-ignore
import seamcarving_vid from '../assets/seamcarving-demo-vid.mov';
// @ts-ignore
import peachparty_vid from '../assets/peachparty-demo-vid.mov';
// @ts-ignore
import notefy_vid from '../assets/notefy-demo-vid.mov';

// export interface Slide {
//   video: string;
//   caption: string;
//   // Add more fields here as needed, e.g., id, description, etc.
// }

// Props interface
// interface ProjectSliderProps {
//   slides: Slide[]; // Array of Slide objects
// }



const ProjectSliderVid: React.FC = ({ }) => {
  // Slider settings
  const settings = {
    className: "center",
    // centerMode: true,
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
    percolation_vid,
    peachparty_vid,
    seamcarving_vid,
    notefy_vid,
    cscodemo,
    chatclonedemo,
    // Add more video URLs as needed
  ];

  // Image data (replace with your images and captions)

  return (
    <div className='project-section'>
      <div className='project-slider' style={{cursor: 'grab'}}>
        <Slider {...settings}>
          {videoUrls.map((videoFile, index) => (
            <div key={index} className="slide-container">
              <div className="slide-content">
              {videoFile.substring(videoFile.length-3) == "mov" && (<video src={videoFile} autoPlay loop style={{ width: '100%', maxHeight: '500px' }} />)}
              {videoFile.substring(videoFile.length-3) != "mov" && (<img src={videoFile} style={{ height: '500px', maxHeight: '500px' }}/>)}
              </div>
            </div>
          ))}
          
        </Slider>
      </div>
    </div>
  );
};

export default ProjectSliderVid;
