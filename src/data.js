import YogaImage from './assets/yoga-image.jpg';
import SocialMediaImage from './assets/social-media-image.jpg';
import HomeImage from './assets/home-image.jpg';

export const myWorkData = [
    {
        id: 1,
        title: "Social Distribution",
        description: "Social networking web application",
        languages: ["Python", "Django", "React", "Javascript"],
        backgroundImage: SocialMediaImage,
        githubLink: "https://github.com/CMPUT404W22-GroupProject/social-distribution"
    },
    {
        id: 2,
        title: "Alpha Apps",
        description: "Habit tracking Android app",
        languages: ["Java", "AndroidStudio"],
        backgroundImage: YogaImage,
        githubLink: "https://github.com/moenuma/Alpha-Apps"
    },
    {
        id: 3,
        title: "Tartan Smarthome",
        description: "IoT software project",
        languages: ["Java", "Docker"],
        backgroundImage: HomeImage
    }
];

export const backendSkills = ['Python (+ Django)', 'Java (+ Spring Boot)', 'C', 'SQL', 'MongoDB'];
export const frontendSkills = ['HTML', 'CSS', 'Javascript', 'Typescript', 'React'];
export const otherSkills = ['Figma', 'Agile Development', 'Git / GitHub', 'TDD', 'UML'];