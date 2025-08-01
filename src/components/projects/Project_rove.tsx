import './Project.css';

const Project_rove = () => {
    return (
        <div className='project'>
            <div className='project-content'>
                <h2>Rove</h2>
                <h3>Coming soon...!</h3>
                
                <div className='project-links'>
                    <a href="https://rove-landing-page.vercel.app/" target="_blank" rel="noopener noreferrer">Landing Page</a>
                </div>
                
                <div className="project-features">
                    <p>🚀 An exciting new project in development! Stay tuned for updates as we work on bringing you something amazing.</p>
                    
                    <ul>
                        <li>Innovation in progress</li>
                        <li>Coming soon with exciting features</li>
                        <li>Built with cutting-edge technology</li>
                    </ul>
                </div>
                
                <p style={{textAlign: 'center', fontStyle: 'italic', color: '#6b7280', marginTop: '40px'}}>
                    More details will be revealed soon. Follow the development on the landing page!
                </p>
            </div>
        </div>
    );
};

export default Project_rove;