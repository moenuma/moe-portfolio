import React from 'react';
import styled from '@emotion/styled';
import './App.css';
import './star.scss';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';

export const App: React.FC = () => {
  return (
    <div>
      <div className='stars'></div>
      <div className='stars2'></div>
      <div className='stars3'></div>
      <Sidebar />
      <Home />
      <Profile id="profile">
        <div>hiii</div>
      </Profile>
    </div>
  );
}

const Profile = styled.section`
  font-family: 'Roboto', sans-serif;
  font-style: normal; 
  font-size: 20vw;
  color: white;
  height: 100vh;
  top: 100%;
`;