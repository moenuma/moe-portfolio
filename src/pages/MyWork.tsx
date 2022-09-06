import React from 'react';
import styled from '@emotion/styled';
import { Section, SectionTitle } from './Profile';
import YogaImage from '../assets/yoga-image.jpg';
import SocialMediaImage from '../assets/social-media-image.jpg';
import HomeImage from '../assets/home-image.jpg';

interface WorkComponentProps {
    title: string;
    description: string;
    languages: string[];
    backgroundImage: string;
}

const WorkComponent: React.FC<WorkComponentProps> = ({ title, description, languages, backgroundImage }) => {
    const Item = styled.div`
        display: flex;
        margin: 0.5rem;
        border-radius: 10px;
        background-image: 
            linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(1, 1, 1, 0.35)), url(${backgroundImage});
        background-size: 150% 100%;
        background-position: center;
        cursor: pointer;
        aspect-ratio: 1/1.5;
        padding: 1rem;
        box-shadow: 0 0.75rem 2rem 0 rgba(0, 0, 0, 0.1);
        color: white;
    `;
    return (
    <Item id="workItem">
        <Content>
            <Title>{title}</Title>
            <Description>{description}</Description>
            {languages.map((language) => {
                return (<Language>{language}</Language>);
            })}
        </Content>
    </Item>
    );
}

function workComponentPropsFactory (
    title: string,
    description: string,
    languages: string[],
    backgroundImage: string
) {
    return {
        title: title,
        description: description,
        languages: languages,
        backgroundImage: backgroundImage
    };
}

export const MyWork: React.FC = () => {
    const socialDetails = workComponentPropsFactory(
        "Social Distribution",
        "Social networking web application",
        ["Python", "Django", "React", "Javascript"],
        SocialMediaImage
    );
    const alphaDetails = workComponentPropsFactory(
        "Alpha Apps",
        "Habit tracking Android app",
        ["Java", "AndroidStudio"],
        YogaImage
    );
    const tartanDetails = workComponentPropsFactory(
        "Tartan Smarthome",
        "IoT software project",
        ["Java", "Docker"],
        HomeImage
    );
    const workList = [socialDetails, alphaDetails, tartanDetails];
    return (
    <Section id="myWork">
        <SectionTitle>My Work</SectionTitle>
        <Grid>
            {workList.map((work) => {
                return (
                <WorkComponent
                    title={work.title}
                    description={work.description}
                    languages={work.languages}
                    backgroundImage={work.backgroundImage}
                />)
            })}
        </Grid>
    </Section>
    );
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 3rem;
`;

const Title = styled.h3`
    margin: 0;
    font-size: 2.7rem;
    line-height: 2.5rem;
`;

const Description = styled.div`
    margin-top: 0.5rem;
    font-weight: 600;
    margin-bottom: 0.2rem;
    color: var(--light-gray-text-color);
`;

const Content = styled.div`
    align-self: flex-end;
    margin-bottom: 0.25rem;
`;

const Language = styled.span`
    margin-right: 0.5rem;
    color: var(--light-gray-text-color);
    &:before {
        content: "#";
    }
`;