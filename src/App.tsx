import React from 'react';
import styled from '@emotion/styled';
import './App.css';
import './star.scss';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';

export const App: React.FC = () => {
  return (
    <>
      <div className='stars'></div>
      <div className='stars2'></div>
      <div className='stars3'></div>
      <Sidebar />
      <Home />
      <Profile />
    </>
  );
}