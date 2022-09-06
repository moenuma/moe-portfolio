import React from 'react';
import styled from '@emotion/styled';
import YogaImage from '../assets/yoga-image.jpg';
import SocialMediaImage from '../assets/social-media-image.jpg';
import HomeImage from '../assets/home-image.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface WorkComponentProps {
    title: string;
    description: string;
    languages: string[];
    backgroundImage: string;
}

const WorkComponent: React.FC<WorkComponentProps> = ({ title, description, languages, backgroundImage }) => {
    const Item = styled.div`
        display: flex;
        border-radius: 10px;
        background-image: 
            linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(1, 1, 1, 0.35)), url(${backgroundImage});
        background-size: 160% 100%;
        background-position: center;
        cursor: pointer;
        aspect-ratio: 1/1.6;
        padding: 1rem;
        box-shadow: 0 0.75rem 2rem 0 rgba(0, 0, 0, 0.1);
        color: white;
    `;
    return (
    <Item>
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
                {workList.map((work) => {
                    return (
                    <SwiperSlide>
                        <WorkComponent
                            title={work.title}
                            description={work.description}
                            languages={work.languages}
                            backgroundImage={work.backgroundImage}
                        />
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
  height: 100vh;
`;

const SectionTitle = styled.h2`
    font-size: 3rem;
    font-weight: 700;
    margin: 0;
    margin-left: 15.5rem;
    margin-bottom: 2.5rem;
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
    display: inline-block;
    &:before {
        content: "#";
    }
`;