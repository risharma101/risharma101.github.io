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
                <a href="https://github.com/risharma101/SeamCarving">Repo</a>
                <img className="project-img" src={seamcarver_img} />
                <p>This project uses Java to implement the innovative Seam Carving algorithm, a content-aware image resizing technique that dynamically adjusts the size of images without distorting the essential features and content. Unlike traditional scaling and cropping methods, our Seam Carving application meticulously analyzes the image to identify and remove seams—paths of least importance—thus preserving the integrity of the image's key elements.</p>
                <video className="project-img" src={seamcarver_vid} controls autoPlay />
                <p>Original Image (300x600):</p>
                <img className="project-img" style={{width: '40vw'}} src={chameleon_img} />
                <p>Reduced by 100 pixels vertically and 300 pixels horizontally (200x300):</p>
                <img className="project-img" style={{width: '27vw'}} src={chameleonshrunk_img} />
            </div>

        </div>
    );
};

export default Project_seamcarver;