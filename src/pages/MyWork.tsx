import React, { useState, Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { AnimatePresence } from "framer-motion";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { myWorkData } from '../data';
import { motion } from "framer-motion";
import CloseIcon from '@mui/icons-material/Close';

interface WorkComponentProps {
    id: number;
    title: string;
    description: string;
    languages: string[];
    backgroundImage: string;
    setSelectedId: Dispatch<SetStateAction<number | null>>;
}

const WorkComponent: React.FC<WorkComponentProps> = ({
    id,
    title,
    description,
    languages,
    backgroundImage,
    setSelectedId
}) => {
    const Item = styled(motion.div)`
        border-radius: 10px;
        background-image: 
            linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(1, 1, 1, 0.35));
        background-size: 160% 100%;
        background-position: center;
        cursor: pointer;
        aspect-ratio: 1/1.6;
        box-shadow: 0 0.75vw 2vw 0 rgba(0, 0, 0, 0.1);
        color: white;
    `;
    const BlackLayer = styled.div`
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 10px;
        background-image: 
        linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(1, 1, 1, 0.2));
    `;
    const Image = styled(motion.img)`
        position: absolute;
        object-fit: cover;
        width: 100%;
        aspect-ratio: 1/1.6;
        border-radius: 10px;
    `;
    const Container = styled(motion.div)`
        display: flex;
        height: 100%;
    `;
    const Content = styled(motion.div)`
        align-self: flex-end;
        margin-bottom: 0.25vw;
        position: absolute;
        padding: 1vw;
    `;
    return (
        <Item layoutId={'popup'+id} onClick={() => {setSelectedId(id);}}>
            <Container layoutId={'container'+id}>
                <Image src={backgroundImage} layoutId={'image'+id}/>
                <BlackLayer />
                <Content layoutId={'content'+id}>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                    {languages.map((language) => {
                        return (<Language>{language}</Language>);
                    })}
                </Content>
            </Container>
        </Item>
    );
}

interface PopupProps {
    id: number;
    title: string;
    description: string;
    languages: string[];
    backgroundImagePopup: string;
    githubLink: string;
    setSelectedId: Dispatch<SetStateAction<number | null>>;
}

const Popup: React.FC<PopupProps> = ({
    id,
    title,
    description,
    languages,
    backgroundImagePopup,
    githubLink,
    setSelectedId
}) => {
    const PopupWrapper = styled(motion.div)`
        margin-left: 18vw;
        margin-right: 23vw;
        border-radius: 20px;
        color: white;
        background: white;
        position: relative;
        width: 40vw;
    `;
    const PopupImage = styled(motion.img)`
        width: 100%;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        position: absolute;
        height: 13vw;
        object-fit: cover;
    `;
    const PopupContent = styled(motion.div)`
        position: absolute;
        padding: 2vw;
        width: 100%;
        margin-top: 4vw;
    `;
    const PopupContainer = styled(motion.div)`
        position: relative;
        height: 30vw;
    `;
    const BlackLayer = styled.div`
        width: 100%;
        height: 13vw;
        position: absolute;
        background-image: 
        linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(1, 1, 1, 0.4));
    `;
    return (
        <PopupBackground>
            <PopupWrapper layoutId={'popup'+id} id="myWorkPopup">
                <PopupContainer layoutId={'container'+id}>
                    <PopupImage src={backgroundImagePopup} layoutId={'image'+id}/>
                    <BlackLayer />
                    <PopupContent layoutId={'content'+id}>
                        <Title>{title}</Title>
                        <Description>{description}</Description>
                        {languages.map((language) => {
                            return (<Language>{language}</Language>);
                        })}
                    </PopupContent>
                </PopupContainer>
                <CloseButton onClick={() => setSelectedId(null)}><CloseIcon fontSize='large'/></CloseButton>
            </PopupWrapper>
        </PopupBackground>
    );
}

export const MyWork: React.FC = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);
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
                        <WorkComponent {...work} setSelectedId={setSelectedId}/>
                    </SwiperSlide>)
                })}
            </Swiper>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div> 
        </Flex>
        <AnimatePresence>
        {selectedId && (
            <Popup {...myWorkData[selectedId-1]} setSelectedId={setSelectedId}/>
        )}
        </AnimatePresence>
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

const Title = styled(motion.h3)`
    margin: 0;
    font-size: 2.7vw;
    line-height: 2.5vw;
`;

const Description = styled.div`
    margin-top: 0.5vw;
    font-weight: 600;
    margin-bottom: 0.2vw;
`;

const Language = styled.span`
    margin-right: 0.5vw;
    display: inline-block;
    &:before {
        content: "#";
    }
`;

const PopupBackground = styled(motion.div)`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    width: 100%;
    height: 90%;
    z-index: 200;
`;

const CloseButton = styled(motion.button)`
    all: unset;
    border-radius: 20px;
    padding: 0.2vw;
    padding-bottom: 0.1vw;
    top: 1vw;
    right: 1vw;
    cursor: pointer;
    position: absolute;
    color: black;
    transition:all .2s ease;
    &:hover {
        color: rgba(1, 1, 1, 0.5);
    }
`;
