import React from 'react';
import styled from '@emotion/styled';

export const Profile: React.FC = () => {
    return (
    <ProfileSection id="profile">
        <SubTitle>Hi</SubTitle>
    </ProfileSection>
    );
}

const ProfileSection = styled.section`
  font-family: 'Roboto', sans-serif;
  font-style: normal; 
  font-size: 20vw;
  color: white;
  height: 100vh;
  top: 100%;
`;

const SubTitle = styled.h2`
    
`;