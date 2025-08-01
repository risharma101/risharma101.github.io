import seamcarver_img from '../../assets/seamcarver-img.png';
import chameleon_img from '../../assets/seamcarver-img3.png';
import chameleonshrunk_img from '../../assets/seamcarver-img2.png';

// @ts-ignore
import seamcarver_vid from '../../assets/seamcarver-vid.mov';

import './Project.css';

const Project_seamcarver = () => {
    return (
        <div className='project'>
            <div className='project-content'>
                <h2>Seam Carver</h2>
                <h3>An Image Reduction Application using Seam Carving Techniques</h3>
                
                <div className='project-links'>
                    <a href="https://github.com/risharma101/SeamCarving" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                </div>
                
                <div className="project-media-container">
                    <img className="project-img" src={seamcarver_img} alt="Seam Carver Application Interface" />
                </div>
                
                <p>This project uses Java to implement the innovative Seam Carving algorithm, a content-aware image resizing technique that dynamically adjusts the size of images without distorting the essential features and content. Unlike traditional scaling and cropping methods, our Seam Carving application meticulously analyzes the image to identify and remove seams—paths of least importance—thus preserving the integrity of the image's key elements.</p>
                
                <div className="project-media-container">
                    <video className="project-video" src={seamcarver_vid} controls autoPlay />
                </div>
                
                <div className="project-features">
                    <p><strong>Before & After Comparison:</strong></p>
                </div>
                
                <div className="project-gallery">
                    <div className="project-gallery-item">
                        <p style={{textAlign: 'center', marginBottom: '10px', fontWeight: '600'}}>Original Image (300x600)</p>
                        <img className="project-img" src={chameleon_img} alt="Original chameleon image" />
                    </div>
                    <div className="project-gallery-item">
                        <p style={{textAlign: 'center', marginBottom: '10px', fontWeight: '600'}}>Reduced Image (200x300)</p>
                        <img className="project-img" src={chameleonshrunk_img} alt="Seam carved chameleon image" />
                    </div>
                </div>
                
                <p style={{textAlign: 'center', fontStyle: 'italic', color: '#6b7280'}}>
                    The image was reduced by 100 pixels vertically and 300 pixels horizontally while preserving the chameleon's key features.
                </p>
            </div>
        </div>
    );
};

export default Project_seamcarver;