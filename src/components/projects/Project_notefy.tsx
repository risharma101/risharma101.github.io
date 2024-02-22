import notefy_img from '../../assets/notefy-img2.png';
// @ts-ignore
import notefy_vid from '../../assets/notefy-vid.mov';

const Project_notefy = () => {
    return (
        <div className='project'>
            <div className='project-content'>
                <h2>Notefy</h2>
                <h3>A Chrome Extension to Summarize Webpages!</h3>
                <a href="https://github.com/risharma101/Notefy">Repo</a>
                <p></p>
                <img className="project-img-small" src={notefy_img} />
                <p>Notefy is a Chrome Extension built with Manifest v3. It is available on the Chrome Web Store. Notefy uses OpenAI's Chat Completions API to summarize the text on any webpage within seconds. The motivation behind this extension was for users who didn't want to spend time reading a full news article or blog and just wanted a quick summary.</p>
                <video className="project-img" src={notefy_vid} controls autoPlay />
                <p>Navigate to any website of your choosing and then just click on the Notefy extension. It will open up a small pop-up and in a few seconds, it will display a summary of the text!</p>
            </div>

        </div>
    );
};

export default Project_notefy;