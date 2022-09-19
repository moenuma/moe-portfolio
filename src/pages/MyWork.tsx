import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
    fadeInUp,
    fadeInRight,
    animationContainer,
    hoverUpAnimation
} from "../animations/variants";
import styled from '@emotion/styled';
import GitHubIcon from '@mui/icons-material/GitHub';
import { myWorkData } from '../data';
import { Section, SectionTitle } from './Profile';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface WorkComponentProps {
    title: string;
    description: string;
    languages: string[];
    backgroundImage: string;
    githubLink?: string;
}

const WorkComponent: React.FC<WorkComponentProps> = ({
    title,
    description,
    languages,
    backgroundImage,
    githubLink
}) => {
    const Item = styled(motion.div)`
        display: flex;
        border-radius: 15px;
        background-image: 
            linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(1, 1, 1, 0.4)), url(${backgroundImage});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        cursor: pointer;
        width: 100%;
        height: 300px;
        box-shadow: 0 0.75vw 2vw 0 rgba(0, 0, 0, 0.1);
        color: white;
    `;
    const Content = styled.div`
        align-self: flex-end;
        margin-bottom: 3.6px;
        padding: 16px;
        width: 100%;
        display: flex;
        flex-direction: column;
        letter-spacing: 1px;
    `;
    const Title = styled.h3`
        margin: 0;
        font-size: 38px;
        line-height: 38px;
    `;
    const Description = styled.div`
        margin-top: 9px;
        font-weight: 600;
        font-size: 14px;
        margin-bottom: 3px;
        display: inline-block;
    `;
    const Language = styled.span`
        margin-right: 7px;
        display: inline-block;
        font-weight: 500;
        font-size: 14px;
        &:before {
            content: "#";
        }
    `;
    const GithubButton = styled.button`
        all: unset;
        width: 90px;
        margin-top: 11px;
        font-size: 14.5px;
        display: flex;
        justify-content: space-between;
        border: 1px solid white;
        padding-top: 3px;
        padding-bottom: 3px;
        padding-left: 8px;
        padding-right: 0;
        border-radius: 10px;
        display: flex;
        align-items: center;
        transition: 0.3s ease-in-out;
        &:hover {
            transition: 0.3s ease-in-out;
            background: rgba(0, 0, 0, 0.2);
        }
        &:active {
            background: rgba(0, 0, 0, 0.3);
        }
    `;
    const Languages = styled.div``;

    const hoverAnimationControls = useAnimation();
    return (
        <Wrapper variants={fadeInUp}>
            <Item
                animate={hoverAnimationControls}
                onHoverStart={() => {hoverAnimationControls.start(hoverUpAnimation.anim)}}
                onHoverEnd={() => {hoverAnimationControls.start(hoverUpAnimation.init)}}
            >
                <Content>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                    <Languages>
                        {languages.map((language) => {
                            return (<Language>{language}</Language>);
                        })}
                    </Languages>
                    {githubLink &&
                        <GithubButton
                            onClick={() => {window.open(githubLink, "_blank")}}
                        >
                            Github
                            <GitHubIcon/>
                        </GithubButton>
                    }
                </Content>
            </Item>
        </Wrapper>
    );
}

const MoreToCome: React.FC = () => {
    const Item = styled(motion.div)`
        display: flex;
        border-radius: 15px;
        background: rgba(255, 255, 255, 0.3);
        cursor: pointer;
        height: 300px;
        box-shadow: 0 0.75vw 2vw 0 rgba(0, 0, 0, 0.1);
        color: black;
        align-items: center;
        justify-content: center;
    `;
    const Text = styled.div`
        font-size: 20px;
        font-weight: 300;
        letter-spacing: 1px;
    `;

    const hoverAnimationControls = useAnimation();
    return (
        <Wrapper variants={fadeInUp}>
            <Item
                animate={hoverAnimationControls}
                onHoverStart={() => {hoverAnimationControls.start(hoverUpAnimation.anim)}}
                onHoverEnd={() => {hoverAnimationControls.start(hoverUpAnimation.init)}}
            >
                <Text>More to come...👀</Text>
            </Item>
        </Wrapper>
    );
}

export const MyWork: React.FC = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: [0.25],
        triggerOnce: true
    });
    useEffect(() => {
        if (inView) {
        controls.start("visible");
        } else {
        controls.start("hidden");
        }
    }, [controls, inView]);
    return (
        <Section
            id="myWork"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={animationContainer}
        >
            <SectionTitle variants={fadeInRight}>My Work</SectionTitle>
            <Grid>
                {myWorkData.map((work) => {
                    return (
                        <WorkComponent {...work}/>
                    );
                })}
                {myWorkData.length % 2 === 1 &&
                    <MoreToCome />
                }
            </Grid>
        </Section>
    );
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    margin-top: 30px;
    @media (max-width: 850px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const Wrapper = styled(motion.div)``;