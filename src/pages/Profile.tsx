import React from 'react';
import styled from '@emotion/styled';
import ProfileImage from '../assets/profile-image.jpg';
import { ProfileSkillList } from '../components/ProfileSkillList';

export const Profile: React.FC = () => {
  const backendSkills = ['Python (+ Django)', 'Java (+ Spring Boot)', 'C', 'SQL', 'MongoDB'];
  const frontendSkills = ['HTML', 'CSS', 'Javascript', 'Typescript', 'React'];
  const otherSkills = ['Figma', 'Agile Development', 'Git / GitHub', 'TDD', 'UML'];
    return (
    <ProfileSection id="profile">
      <Component>
        <SubTitle>Profile</SubTitle>
        <Wrapper>
          <MyImage src={ProfileImage}/>
          <Texts>
            <Text>I am a fourth year student, majoring in computer science at the University of Alberta. </Text><br/>
            <Text>I was born and raised in Japan. But I moved to Malaysia when I was 14 and spent 5 years living there. After high school, I decided to pursue my bachelor's degree in Canada, and here I am! </Text><br/>
            <Text>My inquiring mind never stops me from learning more about software engineering every single day. I am a fast learner and have great adaptability as I have grown up in different parts of the world throughout my life.</Text><br/>
          </Texts>
        </Wrapper>
        <SkillListsWrapper>
          <ProfileSkillList title="Backend" skillList={backendSkills} color="#715FA6"/>
          <ProfileSkillList title="Frontend" skillList={frontendSkills} color="#4C77B6"/>
          <ProfileSkillList title="Others" skillList={otherSkills} color="#606060"/>
        </SkillListsWrapper>
      </Component>
    </ProfileSection>
    );
}

const ProfileSection = styled.section`
  font-family: 'Roboto', sans-serif;
  font-style: normal; 
  color: white;
  height: 100vh;
  top: 100%;
  z-index: 100;
`;

const SubTitle = styled.h2`
  font-size: 3rem;
  font-weight: 550;
  margin: 0;
  text-align: center;
`;

const Component = styled.div`
  padding-left: 19rem;
  padding-right: 20rem;
  padding-top: 5rem;
`;

const Text = styled.div`
  display: inline-block;
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0;
  color: white;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Texts = styled.div`
  text-align: center;
  margin-left: 3rem;
`;

const MyImage = styled.img`
  width: 215px;
  border-radius: 120px 50px 250px 150px;
`;

const Wrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
`;

const SkillListsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
`;