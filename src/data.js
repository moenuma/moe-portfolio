import YogaImage from './assets/yoga-image.jpg';
import SocialMediaImage from './assets/social-media-image.jpg';
import HomeImage from './assets/home-image.jpg';
import IndeedIcon from './assets/indeed-icon.jpeg';
import ArsagaIcon from './assets/arsaga-icon.jpeg';

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

export const indeedDetails = {
    companyIcon: {
        src: IndeedIcon,
        alt: "Indeed icon"
    },
    mainDescription: {
        companyName: "Indeed.com",
        companyLink: "https://indeed.com/",
        positionName: "Software Engineer Intern",
        experienceDate: "June 2022 - August 2022"
    },
    roles: [
        "Developed a web application to override taxonomy that is extracted from job postings by the metadata team",
        "Used Java with Spring Boot to build backend and REST APIs, and Typescript and React to build frontend UI",
        "Investigated how code is organized and managed internally, and deployed to QA and production"
    ],
    skills: [
        "Java",
        "Spring Boot",
        "Typescript",
        "React",
        "RESTful API",
        "UI/UX design",
        "Communication",
        "Project Management"
    ]
};

export const arsagaDetails = {
    companyIcon: {
        src: ArsagaIcon,
        alt: "Arsaga icon"
    },
    mainDescription: {
        companyName: "Arsaga Partners, Inc.",
        companyLink: "https://www.arsaga.jp/",
        positionName: "Quality Assurance Tester",
        experienceDate: "July 2021 - May 2022"
    },
    roles: [
        "Developed test cases from the user's perspective and perform unit, system, and regression testing",
        "Identified, documented, and reported bugs, errors, and security issues within web applications developed",
        "Worked collaboratively as a part of an Agile team to improve the quality of products for their releases"
    ],
    skills: [
        "Unit testing",
        "System testing",
        "Regression testing",
        "Agile development"
    ]
};