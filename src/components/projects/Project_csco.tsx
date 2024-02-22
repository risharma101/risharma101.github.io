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
                <a href="https://github.com/cs35l-group/csco">Frontend Repo</a>
                <a href="https://github.com/Jaysontian/csco-api">Backend Repo</a>
                <img className="project-img" src={csco_img1} />
                <p>CSCO is a social media web application built with the MERN tech stack. Users can create authenticated accounts and post images (either through URL or file upload) onto their profile. Users can search for posts by searching for other users or by searching by image “vibe”.</p>
                <img className="project-img" src={csco_img3} />
                <p>Using OpenAI’s GPT 4 Vision Preview API, CSCO automatically generates “vibe” words for each image.</p>
                <img className="project-img" src={csco_img2} />

            </div>

        </div>
    );
};

export default Project_csco;
