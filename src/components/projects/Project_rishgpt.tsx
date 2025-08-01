import rishgpt_img from '../../assets/rishgpt-img.png';
// @ts-ignore
import rishgpt_vid from '../../assets/rishgpt-vid.mov';

import './Project.css';

const Project_rishgpt = () => {
    return (
        <div className='project'>
            <div className='project-content'>
                <h2>RishGPT</h2>
                <h3>A Custom ChatGPT UI</h3>
                
                <div className='project-links'>
                    <a href="https://github.com/risharma101/RishGPT" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                </div>
                
                <div className="project-media-container">
                    <img className="project-img" src={rishgpt_img} alt="RishGPT Interface" />
                </div>
                
                <p>RishGPT acts as a clone of OpenAI's ChatGPT but with a custom UI. Currently, the UI is directly replicated from ChatGPT, but the goal is to make it more user friendly and visually aesthetic.</p>
                
                <div className="project-features">
                    <ul>
                        <li>Custom prompt instructions for specialized tasks</li>
                        <li>SQL query generation capabilities</li>
                        <li>Cover letter writing assistance</li>
                        <li>On-premises database storage for privacy</li>
                        <li>Alternative to cloud-based ChatGPT storage</li>
                    </ul>
                </div>
                
                <div className="project-media-container">
                    <video className="project-video" src={rishgpt_vid} controls autoPlay />
                </div>
            </div>
        </div>
    );
};

export default Project_rishgpt;