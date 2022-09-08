import React from 'react';
import styled from '@emotion/styled';
import IndeedIcon from '../assets/indeed-icon.jpeg';
import ArsagaIcon from '../assets/arsaga-icon.jpeg';
import { Section, SectionTitle } from './Profile';

interface ExperienceComponentProps {
    companyIcon: {
        src: string;
        alt: string;
    }
    mainDescription: {
        companyName: string;
        companyLink: string;
        positionName: string;
        experienceDate: string;
    }
    roles: string[];
    skills: string[];
}

const ExperienceComponent: React.FC<ExperienceComponentProps> = ({ companyIcon, mainDescription, roles, skills }) => {
    return (
    <Card>
        <IconMainDescriptionWrapper>
            <CompanyIcon src={companyIcon.src} alt={companyIcon.alt} />
            <MainDescription>
                <CompanyName
                    target="_blank"
                    rel="noopener noreferrer"
                    href={mainDescription.companyLink}
                >
                    {mainDescription.companyName}
                </CompanyName>
                <PositionName>{mainDescription.positionName}</PositionName>
                <ExperienceDate>{mainDescription.experienceDate}</ExperienceDate>
            </MainDescription>
        </IconMainDescriptionWrapper>
        <RolesSkillsWrapper>
            <DescriptionTitle>Roles:</DescriptionTitle>
            <RolesWrapper>
                {roles.map((role) => {
                    return (<Role>{role}</Role>);
                })}
            </RolesWrapper>
            <DescriptionTitle>Skills:</DescriptionTitle>
            <SkillsWrapper>
                {skills.map((skill) => {
                    return (<Skill>{skill}</Skill>);
                })}
            </SkillsWrapper>
        </RolesSkillsWrapper>
    </Card>
    );
}

const indeedDetails = {
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

const arsagaDetails = {
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

export const Experience: React.FC = () => {
    const experienceList = [indeedDetails, arsagaDetails];
    return (
    <Section id="experience">
        <SectionTitle>Experience</SectionTitle>
        <Wrapper>
            {experienceList.map((experience) => {
                return (<ExperienceComponent {...experience}/>);
            })}
        </Wrapper>
    </Section>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1vw;
`;

const CompanyIcon = styled.img`
    width: 5vw;
    height: 5vw;
`;

const Card = styled.div`
    margin: 0.8vw 0;
    padding: 1.5vw;
    background: rgba(255, 255, 255, 0.4);
    box-shadow: 0 0.75vw 2vw 0 rgba(0, 0, 0, 0.1);
    border-radius: 1.5vw;
    border: 1px solid rgba(255, 255, 255, 0.125);
`;

const CompanyName = styled.a`
    color: var(--primary-blue);
    cursor: pointer;
    font-weight: 700;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

const PositionName = styled.span``;

const ExperienceDate = styled.span`
    color: var(--dark-gray-text-color);
    font-size: 0.9vw;
    font-weight: 600;
`;

const MainDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0.3vw 1vw;
    font-size: 1.1vw;
`;

const IconMainDescriptionWrapper = styled.div`
    display: flex;
`;

const RolesWrapper = styled.ul`
    margin-block-start: 0;
    margin-block-end: 0;
    font-size: 1.05vw;
    font-weight: 300;
`;

const Role = styled.li`
    margin: 0.2vw 0;
`;

const DescriptionTitle = styled.span`
    font-size: 1.1vw;
    font-weight: 600;
    margin-top: 0.8vw;
    margin-bottom: 0.3vw;
`;

const RolesSkillsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 0.5vw;
`;

const SkillsWrapper = styled.div`
    display: inline-block;
`;

const Skill = styled.span`
    display: inline-block;
    background-color: rgba(255, 255, 255, 0.5);
    font-size: 1vw;
    border-radius: 15px;
    padding: 0.2vw 0.5vw;
    margin: 0.25vw 0.3vw;
    margin-bottom: 0;
    border: 1px solid var(--dark-gray-text-color);
`;