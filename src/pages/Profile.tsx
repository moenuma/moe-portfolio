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
      font-size: 1.2rem;
      color: white;
      background: ${color};
      border-radius: 10px;
      padding: 0.5rem 0;
      margin: 0.4rem 0;
  `;
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 15rem;
  `;
  const Title = styled.div`
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
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
    <ProfileSection id="profile">
      <SectionTitle>Profile</SectionTitle>
      <ImageTextsWrapper>
        <MyImage src={ProfileImage} alt="My photo"/>
        <Texts>
          <Text>I am a fourth year student, majoring in computer science at the University of Alberta. </Text><br/>
          <Text>I was born and raised in Japan. But I moved to Malaysia when I was 14 and spent 5 years living there. After high school, I decided to pursue my bachelor's degree in Canada, and here I am! </Text><br/>
          <Text>My inquiring mind never stops me from learning more about software engineering every single day. I am a fast learner and have great adaptability as I have grown up in different parts of the world throughout my life.</Text><br/>
        </Texts>
      </ImageTextsWrapper>
      <SkillListsWrapper>
        <ProfileSkillList title="Backend" skillList={backendSkills} color="#715FA6"/>
        <ProfileSkillList title="Frontend" skillList={frontendSkills} color="#4C77B6"/>
        <ProfileSkillList title="Others" skillList={otherSkills} color="#606060"/>
      </SkillListsWrapper>
    </ProfileSection>
    );
}

const ProfileSection = styled.section`
  height: 100vh;
  z-index: 100;
  padding-left: 19rem;
  padding-right: 20rem;
  padding-top: 5rem;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 550;
  margin: 0;
  text-align: center;
`;

const Text = styled.div`
  display: inline-block;
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Texts = styled.div`
  text-align: center;
  margin-left: 3rem;
`;

const MyImage = styled.img`
  width: 200px;
  // border-radius: 15px;
`;

const ImageTextsWrapper = styled.div`
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
`;

const SkillListsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
`;