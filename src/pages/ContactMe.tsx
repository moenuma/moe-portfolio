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
            <PlatformsWrapper>
                <Platforms>
                    <Platform variants={fadeInUp}><LinkedInIcon /><PlatformName>LinkedIn</PlatformName><Link href='https://www.linkedin.com/in/moe-numasawa/'>https://www.linkedin.com/in/moe-numasawa/</Link></Platform>
                    <Platform variants={fadeInUp}><GitHubIcon /><PlatformName>GitHub</PlatformName><Link href='https://github.com/moenuma'>https://github.com/moenuma</Link></Platform>
                    <Platform variants={fadeInUp}><EmailIcon /><PlatformName>Email</PlatformName><Email>moenumasawa@gmail.com</Email></Platform>
                </Platforms>
            </PlatformsWrapper>
        </Section>
    );
}

const Text = styled(motion.div)`
    font-size: 15.5px;
    font-weight: 400;
    letter-spacing: 1.5px;
    line-height: 22px;
    text-align: center;
    margin: 14.5px 36px;
    margin-top: 36.5px;
`;

const Platform = styled(motion.div)`
    font-size: 15.5px;
    letter-spacing: 1.5px;
    display: flex;
    margin: 14.5px auto;
    align-items: center;
`;

const PlatformName = styled.div`
    font-weight: 500;
    width: 87px;
`;

const Link = styled.a`
    font-size: 14.5px;
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

const PlatformsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Email = styled.span`
    font-size: 14.5px;
`;

const Platforms = styled.div`
    display: inline-block;
    margin-top: 58px;
    margin-bottom: 87px;
`;