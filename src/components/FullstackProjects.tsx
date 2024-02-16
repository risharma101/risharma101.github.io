import ProjectSlider, { Slide } from '../components/ProjectSlider';
import cscodemo from '../assets/csco-demo.png';
import chatclonedemo from '../assets/chatclone-demo.png';
import notefydemo from '../assets/notefy-demo.png';


const FullstackProjects = () => {
    const mySlides: Slide[] = [
        { img: cscodemo, caption: 'CSCO' },
        { img: chatclonedemo, caption: 'RishGPT - A ChatGPT Clone' },
        { img: notefydemo, caption: 'Notefy! - Chrome Extension' },
    ];

    return (
        <ProjectSlider slides={mySlides} />
    );
};

export default FullstackProjects;
