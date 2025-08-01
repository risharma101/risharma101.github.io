import automail_img from '../../assets/automail-img.png';
// @ts-ignore
import automail_vid from '../../assets/automail-vid.mov';
import './Project.css';

const Project_automail = () => {
    return (
        <div className='project'>
            <div className='project-content'>
                <h2>Automail</h2>
                <h3>Send personalized emails at scale!</h3>
                
                <div className='project-links'>
                    <a href="https://www.automail.live/" target="_blank" rel="noopener noreferrer">Visit Automail</a>
                </div>
                
                <p>Email outreach is broken. Generic blasts get ignored and individual personalization takes forever. Jayson Tian and I knew there had to be a better way. So we built it.</p>

                <p>Introducing Automail — effortlessly personalize email outreach at scale. Simply upload all your client data and draft a single template. Automail will customize each message and lets you send them all with one click.</p>

                <div className="project-features">
                    <ul>
                        <li>⏰ Save hours of manual work</li>
                        <li>📈 Boost engagement rates</li>
                        <li>🤝 Build real relationships at scale</li>
                    </ul>
                </div>

                <div className="project-media-container">
                    <video className="project-video" src={automail_vid} controls autoPlay />
                </div>
            </div>
        </div>
    );
};

export default Project_automail;