import csco_img1 from '../../assets/csco-img.gif';
import csco_img2 from '../../assets/csco-img2.png';
import csco_img3 from '../../assets/csco-img3.gif';

import './Project.css';

const Project_csco = () => {
    return (
        <div className='project'>
            <div className='project-content'>
                <h2>CSCO</h2>
                <h3>Your Personal Media Board</h3>
                
                <div className='project-links'>
                    <a href="https://github.com/cs35l-group/csco" target="_blank" rel="noopener noreferrer">Frontend Repo</a>
                    <a href="https://github.com/Jaysontian/csco-api" target="_blank" rel="noopener noreferrer">Backend Repo</a>
                </div>
                
                <div className="project-media-container">
                    <img className="project-img" src={csco_img1} alt="CSCO Interface Demo" />
                </div>
                
                <p>CSCO is a social media web application built with the MERN tech stack. Users can create authenticated accounts and post images (either through URL or file upload) onto their profile. Users can search for posts by searching for other users or by searching by image "vibe".</p>
                
                <div className="project-gallery">
                    <div className="project-gallery-item">
                        <img className="project-img" src={csco_img3} alt="CSCO Search Feature" />
                    </div>
                    <div className="project-gallery-item">
                        <img className="project-img" src={csco_img2} alt="CSCO Profile View" />
                    </div>
                </div>
                
                <div className="project-features">
                    <p><strong>AI-Powered Features:</strong> Using OpenAI's GPT 4 Vision Preview API, CSCO automatically generates "vibe" words for each image, enabling intuitive content discovery.</p>
                </div>
            </div>
        </div>
    );
};

export default Project_csco;
