import React from 'react';
import styled from '@emotion/styled';
import ProfileImage from '../assets/profile-image.jpg';

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
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 15vw;
    background-color: rgba(255, 255, 255, 0.375);
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
  <Wrapper>
      <Title>{title}</Title>
      {skillList.map((obj) => {
          return <Item>{obj}</Item>
      })}
  </Wrapper>
  );
}

export const Profile: React.FC = () => {
  const backendSkills = ['Python (+ Django)', 'Java (+ Spring Boot)', 'C', 'SQL', 'MongoDB'];
  const frontendSkills = ['HTML', 'CSS', 'Javascript', 'Typescript', 'React'];
  const otherSkills = ['Figma', 'Agile Development', 'Git / GitHub', 'TDD', 'UML'];
    return (
    <Section id="profile">
      <SectionTitle>Profile</SectionTitle>
      <ImageTextsWrapper>
        <MyImage src={ProfileImage} alt="My photo"/>
        <Texts>
          <Text>I am a fourth year student, majoring in computer science at the <Bold>University of Alberta</Bold>. </Text><br/>
          <Text>I was born and raised in <Bold>Japan</Bold>. But I moved to <Bold>Malaysia</Bold> when I was 14 and spent 5 years living there. After high school, I decided to pursue my bachelor's degree in <Bold>Canada</Bold>, and here I am! </Text><br/>
          <Text>My inquiring mind never stops me from learning more about software engineering every single day. I am a fast learner and have great adaptability as I have grown up in different parts of the world throughout my life.</Text><br/>
        </Texts>
      </ImageTextsWrapper>
      <SkillListsWrapper>
        <ProfileSkillList title="Backend" skillList={backendSkills} color="var(--hue)"/>
        <ProfileSkillList title="Frontend" skillList={frontendSkills} color="var(--hue-complimentary1)"/>
        <ProfileSkillList title="Others" skillList={otherSkills} color="var(--hue-complimentary2)"/>
      </SkillListsWrapper>
    </Section>
    );
}

export const Section = styled.section`
  z-index: 100;
  padding-left: 15vw;
  padding-right: 20vw;
  padding-bottom: 13vw;
  padding-top: 2vw;
`;

export const SectionTitle = styled.h2`
  font-size: 3vw;
  font-weight: 700;
  margin: 0;
  margin-left: 0.5vw;
`;

const Text = styled.div`
  display: inline-block;
  font-size: 1.15vw;
  font-weight: 400;
  margin: 0;
  margin-top: 0.5vw;
  margin-bottom: 0.5vw;
`;

const Texts = styled.div`
  text-align: center;
  margin: 0;
  margin-left: 1vw;
  padding: 0vw 2vw;
`;

const MyImage = styled.img`
  width: 13vw;
  border-radius: 1.5vw;
`;

const ImageTextsWrapper = styled.div`
  margin-top: 1.5vw;
  display: flex;
  align-items: center;
`;

const SkillListsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4vw;
`;

const Bold = styled.span`
  font-weight: 600;
`;