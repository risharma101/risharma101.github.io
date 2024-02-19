import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ProjectSlider.css';
import React from 'react';
import Slider from 'react-slick';
import img from '../assets/profilepic.jpg';
import vid from '../assets/percolation-demo-vid.mp4';

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
    centerMode: true,
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
    '../assets/percolation-demo-vid.mp4',
    '../assets/percolation-demo-vid.mp4',
    '../assets/percolation-demo-vid.mp4',
    // Add more video URLs as needed
  ];

  // Image data (replace with your images and captions)

  return (
    <div className='project-section'>
      <div className='project-slider'>
        <Slider {...settings}>
          {videoUrls.map((videoFile, index) => (
            <div key={index} className="slide-container">
              <div className="slide-content">
              <p>{videoFile}</p>
              <video src={vid} autoPlay loop style={{ width: '100%', maxHeight: '100%' }} />
              <img src={img} alt={"Image"} />
                {/* <p>{slide.caption}</p> */}
              </div>

            </div>
          ))}
          
        </Slider>
      </div>
    </div>
  );
};

export default ProjectSliderVid;
