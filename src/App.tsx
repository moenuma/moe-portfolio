import React from 'react';
import styled from '@emotion/styled';
import './App.css';
import './star.scss';
import { Sidebar } from './components/Sidebar';

export const App: React.FC = () => {
  return (
    <div>
      <div className='stars'></div>
      <div className='stars2'></div>
      <div className='stars3'></div>
      <Sidebar />
      <Home id="home">
        <Title>
          <Heading>Moe</Heading>
          <Emoji>👩🏻‍💻💬👩🏻‍🎨💡</Emoji><br/>
          <Heading>Numasawa.</Heading>
        </Title>
      </Home>
      <Profile id="profile">
        <div>hiii</div>
      </Profile>
    </div>
  );
}

const Home = styled.section`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  height: 100vh;
  z-index: 100;
`;

const Title = styled.div`
  padding-top: 22vw;
  padding-left: 5%;
`;

const Heading = styled.h1`
  display: inline;
  font-style: normal;
  font-weight: 700;
  font-size: 11vw;
  line-height: 9vw;
  color: white;
  margin: 0;
`;

const Emoji = styled.span`
  font-size: 6vw;
  line-height: 3vw;
  margin-left: 10vw;
  padding-bottom: 10vw;
`;

const Profile = styled.section`
  font-family: 'Roboto', sans-serif;
  font-style: normal; 
  font-size: 20vw;
  color: white;
  height: 100vh;
  top: 100%;
`;