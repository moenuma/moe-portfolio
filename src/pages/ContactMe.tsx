import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Section, SectionTitle } from './Profile';
import {
    fadeInUp,
    fadeInRight,
    animationContainer
} from "../animations/variants";
import styled from '@emotion/styled';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export const ContactMe: React.FC = () => {
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
            id="contactMe"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={animationContainer}
        >
            <SectionTitle variants={fadeInRight}>Contact Me</SectionTitle>
            <Text variants={fadeInUp}>I'm looking for an internship position starting winter 2023. Please contact me if you have any positions available for me. Thank you in advance and I'm excited to have a chat with you soon!</Text>
            <Platforms>
                <Platform variants={fadeInUp}><LinkedInIcon /><PlatformName>LinkedIn</PlatformName><Link href='https://www.linkedin.com/in/moe-numasawa/'>https://www.linkedin.com/in/moe-numasawa/</Link></Platform>
                <Platform variants={fadeInUp}><GitHubIcon /><PlatformName>GitHub</PlatformName><Link href='https://github.com/moenuma'>https://github.com/moenuma</Link></Platform>
                <Platform variants={fadeInUp}><EmailIcon /><PlatformName>Email</PlatformName><Email>moenumasawa@gmail.com</Email></Platform>
            </Platforms>
        </Section>
    );
}

const Text = styled(motion.div)`
    font-size: 1.1vw;
    font-weight: 400;
    letter-spacing: 0.1vw;
    line-height: 1.5vw;
    text-align: center;
    margin: 1vw 2.5vw;
    margin-top: 2.5vw;
`;

const Platform = styled(motion.div)`
    font-size: 1.1vw;
    letter-spacing: 0.1vw;
    display: flex;
    margin: 1vw auto;
    align-items: center;
`;

const PlatformName = styled.div`
    font-weight: 500;
    width: 6vw;
`;

const Link = styled.a`
    color: black;
    cursor: pointer;
    text-decoration: underline;
    &:visited {
        color: black;
    }
    &:hover {
        text-decoration: none;
    }
`;

const Email = styled.span``;

const Platforms = styled.div`
    margin-left: 25%;
    margin-top: 4vw;
    margin-bottom: 6vw;
`;