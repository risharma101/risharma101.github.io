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
                <a href="https://github.com/risharma101/RishGPT">Repo</a>
                <img className="project-img" src={rishgpt_img} />
                <p>RishGPT acts as a clone of OpenAI's ChatGPT but with a custom UI. Currently, the UI is directly replicated from ChatGPT, but the goal is to make it more user friendly and visually aesthetic. Users can also enter customized prompt instructions such as for generating SQL queries or writing cover letters. Additionally, users can store interactions in SQL databases on-prem instead of in the cloud as traditional ChatGPT does.</p>
                <video className="project-img" src={rishgpt_vid} controls autoPlay />
            </div>

        </div>
    );
};

export default Project_rishgpt;