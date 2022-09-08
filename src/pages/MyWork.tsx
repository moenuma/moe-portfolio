import React from 'react';
import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useAnimation } from "framer-motion";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { myWorkData } from '../data';
import { motion } from "framer-motion";
import GitHubIcon from '@mui/icons-material/GitHub';

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
        margin-top: 1vw;
    `;
    const Content = styled.div`
        align-self: flex-end;
        margin-bottom: 0.25vw;
        position: absolute;
        padding: 1vw;
        width: 100%;
        display: flex;
        flex-direction: column;
    `;
    const GithubButton = styled.button`
        all: unset;
        width: 5vw;
        margin-top: 0.8vw;
        font-size: 1vw;
        display: flex;
        justify-content: space-between;
        border: 0.05vw solid white;
        padding: 0.4vw;
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
    return (
    <MyWorkSection id="myWork">
        <SectionTitle>My Work</SectionTitle>
        <Flex>
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

const Flex = styled.div`
    display: flex;
    align-items: center;
`;

const MyWorkSection = styled.section`
    position: relative;
    padding-bottom: 10vw;
    padding-top: 2vw;
`;

const SectionTitle = styled.h2`
    font-size: 3vw;
    font-weight: 700;
    margin: 0;
    margin-left: 15.5vw;
    margin-bottom: 2.5vw;
`;

const Title = styled.h3`
    margin: 0;
    font-size: 2.7vw;
    line-height: 2.5vw;
`;

const Description = styled.div`
    margin-top: 0.5vw;
    font-weight: 600;
    font-size: 1vw;
    margin-bottom: 0.2vw;
`;

const Language = styled.span`
    margin-right: 0.5vw;
    display: inline-block;
    font-weight: 500;
    font-size: 1vw;
    &:before {
        content: "#";
    }
`;
