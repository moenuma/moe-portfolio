import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
    fadeInUp,
    fadeInRight,
    animationContainer
} from "../animations/variants";
import styled from '@emotion/styled';
import GitHubIcon from '@mui/icons-material/GitHub';
import { myWorkData } from '../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface WorkComponentProps {
    id: number;
    title: string;
    description: string;
    languages: string[];
    backgroundImage: string;
    githubLink?: string;
}

const WorkComponent: React.FC<WorkComponentProps> = ({
    id,
    title,
    description,
    languages,
    backgroundImage,
    githubLink
}) => {
    const Item = styled(motion.div)`
        display: flex;
        border-radius: 10px;
        background-image: 
            linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(1, 1, 1, 0.35)), url(${backgroundImage});
        background-size: 160% 100%;
        background-position: center;
        cursor: pointer;
        aspect-ratio: 1/1.6;
        box-shadow: 0 0.75vw 2vw 0 rgba(0, 0, 0, 0.1);
        color: white;
        margin-top: 14.5px;
    `;
    const Content = styled.div`
        align-self: flex-end;
        margin-bottom: 3.6px;
        position: absolute;
        padding: 14px;
        width: 100%;
        display: flex;
        flex-direction: column;
    `;
    const GithubButton = styled.button`
        all: unset;
        width: 80px;
        margin-top: 11px;
        font-size: 14.5px;
        display: flex;
        justify-content: space-between;
        border: 0.8px solid white;
        padding-top: 3px;
        padding-bottom: 3px;
        padding-left: 5px;
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
    const hoverAnimation = {
        init: {
          y: 0,
        },
        anim: {
          y: -10,
        },
    };
    return (
        <Item
            animate={hoverAnimationControls}
            onHoverStart={() => {hoverAnimationControls.start(hoverAnimation.anim)}}
            onHoverEnd={() => {hoverAnimationControls.start(hoverAnimation.init)}}
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
    <MyWorkSection
        id="myWork"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={animationContainer}
    >
        <SectionTitle variants={fadeInRight}>My Work</SectionTitle>
        <Flex variants={fadeInUp}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={25}
                slidesPerView={3}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                {myWorkData.map((work) => {
                    return (
                    <SwiperSlide>
                        <WorkComponent {...work}/>
                    </SwiperSlide>)
                })}
            </Swiper>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div> 
        </Flex>
    </MyWorkSection>
    );
}

const MyWorkSection = styled(motion.section)`
    position: relative;
    padding-bottom: 188px;
    padding-top: 30px;
`;

const SectionTitle = styled(motion.h2)`
    margin: 0;
    text-align: center;
    margin-bottom: 1.5vw;
    font-size: 44px;
    font-weight: 700;
    letter-spacing: 7px;
`;

const Flex = styled(motion.div)`
    display: flex;
    align-items: center;
`;

const Title = styled.h3`
    margin: 0;
    font-size: 38px;
    line-height: 36px;
`;

const Description = styled.div`
    margin-top: 7px;
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 3px;
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
