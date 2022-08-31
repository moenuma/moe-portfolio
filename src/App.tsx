import React from 'react';
import './App.css';
import styled from '@emotion/styled';
import './star.scss';
import { Link } from 'react-scroll';

export const App: React.FC = () => {
  return (
    <div>
      <div className='stars'></div>
      <div className='stars2'></div>
      <div className='stars3'></div>
      <SidebarMenu>
        <Link to="home" className="Nav-item" spy={true} smooth={true} duration={500} offset={-10}>Home</Link>
        <Link to="profile" className="Nav-item" spy={true} smooth={true} duration={500} offset={-10}>Profile</Link>
        <Link to="experience" className="Nav-item" spy={true} smooth={true} duration={500}>Experience</Link>
        <Link to="mywork" className="Nav-item" spy={true} smooth={true} duration={500}>My Work</Link>
        <Link to="contactme" className="Nav-item" spy={true} smooth={true} duration={500}>Contact Me</Link>
      </SidebarMenu>
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

const SidebarMenu = styled.nav`
  display: flex;
  position: fixed;
  right: 2%;
  flex-direction: column;
  justify-content: space-between;
  min-height: 50vh;
  text-align: right;
  vertical-align: middle;
  top: 50%;
  transform: translate(0, -50%) 
`;

const SidebarItem = styled.div`
  text-decoration: none;
  font-weight: 300;
  font-size: 1vw;
  color: white;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
    color: black;
  }
`;

const Profile = styled.section`
  font-family: 'Roboto', sans-serif;
  font-style: normal; 
  font-size: 20vw;
  color: white;
  height: 100vh;
  top: 100%;
`;