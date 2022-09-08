import YogaImage from './assets/yoga-image.jpg';
import SocialMediaImage from './assets/social-media-image.jpg';
import HomeImage from './assets/home-image.jpg';
import YogaImagePopup from './assets/yoga-image-popup.jpg';
import SocialMediaImagePopup from './assets/social-media-image-popup.jpg';
import HomeImagePopup from './assets/home-image-popup.jpg';

export const myWorkData = [
    {
        id: 1,
        title: "Social Distribution",
        description: "Social networking web application",
        languages: ["Python", "Django", "React", "Javascript"],
        backgroundImage: SocialMediaImage,
        backgroundImagePopup: SocialMediaImagePopup,
        githubLink: "https://github.com/CMPUT404W22-GroupProject/social-distribution"
    },
    {
        id: 2,
        title: "Alpha Apps",
        description: "Habit tracking Android app",
        languages: ["Java", "AndroidStudio"],
        backgroundImage: YogaImage,
        backgroundImagePopup: YogaImagePopup,
        githubLink: "https://github.com/moenuma/Alpha-Apps"
    },
    {
        id: 3,
        title: "Tartan Smarthome",
        description: "IoT software project",
        languages: ["Java", "Docker"],
        backgroundImage: HomeImage,
        backgroundImagePopup: HomeImagePopup,
        githubLink: ""
    }
];

export const sample = {
    id: 1,
    title: "Social Distribution",
    description: "Social networking web application",
    languages: ["Python", "Django", "React", "Javascript"],
    backgroundImage: SocialMediaImage,
    githubLink: "https://github.com/CMPUT404W22-GroupProject/social-distribution"
}