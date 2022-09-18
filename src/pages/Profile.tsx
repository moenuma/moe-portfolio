import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from '@emotion/styled';
import {
  fadeInUp,
  fadeInRight,
  fadeInLeft,
  animationContainer
} from "../animations/variants";
import {
  backendSkills,
  frontendSkills,
  otherSkills
} from '../data';

interface ProfileSkillListProps {
  title: string;
  skillList: string[];
  color: string;
}

const ProfileSkillList: React.FC<ProfileSkillListProps> = ({ title, skillList, color }) => {
  const Item = styled.div`
    font-weight: 300;
    font-size: 1.2vw;
    color: black;
    border-radius: 10px;
    padding: 0.5vw 0;
    margin: 0.4vw 0;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0.5vw 2vw 0 rgba(0, 0, 0, 0.1);
    border-radius: 1.5vw;
    border: 1.5px solid hsl(${color}, 90%, 80%);
  `;
  const Wrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 16vw;
    background-color: hsl(${color}, 70%, 80%);
    padding: 1vw;
    border-radius: 1.5vw;
    box-shadow: 0 0.75vw 2vw 0 hsl(${color}, 50%, 70%);
  `;
  const Title = styled.div`
    font-size: 1.25vw;
    font-weight: 700;
    font-style: italic;
    margin-bottom: 0.5vw;
    color: var(--primary-text-color);
  `;

  return (
  <Wrapper variants={fadeInUp}>
      <Title>{title}</Title>
      {skillList.map((obj) => {
          return <Item>{obj}</Item>
      })}
  </Wrapper>
  );
}

export const Profile: React.FC = () => {
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
      id="profile"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animationContainer}
    >
      <SectionTitle variants={fadeInRight}>Profile</SectionTitle>
        <Texts variants={fadeInLeft}>
          <Text>I am a fourth year student, majoring in computer science at the University of Alberta. </Text><br/>
          <Text>I was born and raised in Japan. But I moved to Malaysia when I was 14 and spent 5 years living there. After high school, I decided to pursue my bachelor's degree in Canada, and here I am! </Text><br/>
          <Text>My inquiring mind never stops me from learning more about software engineering every single day. I am a fast learner and have great adaptability as I have grown up in different parts of the world throughout my life.</Text><br/>
        </Texts>
      <SkillListsWrapper>
        <ProfileSkillList title="Backend" skillList={backendSkills} color="var(--hue)"/>
        <ProfileSkillList title="Frontend" skillList={frontendSkills} color="var(--hue-complimentary1)"/>
        <ProfileSkillList title="Others" skillList={otherSkills} color="var(--hue-complimentary2)"/>
      </SkillListsWrapper>
    </Section>
    );
}

export const Section = styled(motion.section)`
  z-index: 100;
  padding-left: 17vw;
  padding-right: 17vw;
  padding-bottom: 13vw;
  padding-top: 2vw;
`;

export const SectionTitle = styled(motion.h2)`
  font-size: 3vw;
  font-weight: 700;
  margin: 0;
  letter-spacing: 0.5vw;
  text-align: center;
`;

const Text = styled.div`
  display: inline-block;
  font-size: 1.15vw;
  font-weight: 400;
  margin: 0;
  margin-top: 0.5vw;
  margin-bottom: 0.5vw;
`;

const Texts = styled(motion.div)`
  text-align: center;
  margin: 0;
  margin-left: 1vw;
  margin-top: 2vw;
  padding: 0vw 2vw;
`;

const SkillListsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4vw;
`;

const Bold = styled.span`
  font-weight: 600;
`;