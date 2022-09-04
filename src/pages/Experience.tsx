import React from 'react';
import styled from '@emotion/styled';
import IndeedIcon from '../assets/indeed-icon.jpeg';
import ArsagaIcon from '../assets/arsaga-icon.jpeg';

interface ExperienceComponentProps {
    details: {
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
}

const ExperienceComponent: React.FC<ExperienceComponentProps> = ({ details }) => {
    const { companyIcon, mainDescription, roles, skills } = details;
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
    <ExperienceSection id="experience">
        <SectionTitle>Experience</SectionTitle>
        <Wrapper>
            {experienceList.map((experience) => {
                return (<ExperienceComponent details={experience}/>);
            })}
        </Wrapper>
    </ExperienceSection>
    );
}

const ExperienceSection = styled.section`
    font-family: 'Roboto', sans-serif;
    font-style: normal; 
    height: 100vh;
    z-index: 100;
    padding-left: 19rem;
    padding-right: 20rem;
    padding-top: 5rem;
`;

const SectionTitle = styled.h2`
    font-size: 3rem;
    font-weight: 550;
    margin: 0;
    text-align: center;
    color: white;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
`;

const CompanyIcon = styled.img`
    width: 5rem;
    height: 5rem;
`;

const Card = styled.div`
    margin: 1rem 0;
    border: 3px solid #2F2F2F;
    border-radius: 10px;
    padding: 1.1rem;
    // box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.3);
`;

const CompanyName = styled.a`
    color: #58a6ff;
    cursor: pointer;
    font-weight: 600;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

const PositionName = styled.span`
    color: white;
`;

const ExperienceDate = styled.span`
    color: #B5B5B5;
`;

const MainDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0.3rem 1rem;
    font-size: 1.1rem;
`;

const IconMainDescriptionWrapper = styled.div`
    display: flex;
`;

const RolesWrapper = styled.ul`
    color: white;
    margin-block-start: 0;
    margin-block-end: 0;
    font-size: 1.05rem;
    font-weight: 300;
`;

const Role = styled.li`
    margin: 0.2rem 0;
`;

const DescriptionTitle = styled.span`
    font-size: 1.1rem;
    font-weight: 600;
    margin-top: 1rem;
    margin-bottom: 0.3rem;
`;

const RolesSkillsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    margin-left: 0.5rem;
`;

const SkillsWrapper = styled.div`
    display: inline-block;
`;

const Skill = styled.span`
    display: inline-block;
    background-color: rgba(255, 255, 255, 0.15);
    color: white;
    border-radius: 15px;
    padding: 0.2rem 0.5rem;
    margin: 0.25rem 0.3rem;
    border: 2px solid #949494;
`;