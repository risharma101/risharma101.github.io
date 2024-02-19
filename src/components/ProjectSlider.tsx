import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ProjectSlider.css';
import React from 'react';
import Slider from 'react-slick';

export interface Slide {
  video?: string;
  img: string;
  caption: string;
  // Add more fields here as needed, e.g., id, description, etc.
}

// Props interface
interface ProjectSliderProps {
  slides: Slide[]; // Array of Slide objects
}

const ProjectSlider: React.FC<ProjectSliderProps> = ({ slides }) => {
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

  // Image data (replace with your images and captions)

  return (
    <div className='project-section'>
      <div className='project-slider'>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="slide-container">
              <div className="slide-content">
                <img /*style={{ width: '200px' }}*/ src={slide.img} alt={`Slide ${index + 1}`} />
                <p>{slide.caption}</p>
              </div>

            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProjectSlider;
