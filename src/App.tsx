import React from 'react';
import './App.css';
import './star.scss';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Experience } from './pages/Experience';

export const App: React.FC = () => {
  return (
    <>
      <div className='stars' />
      <div className='stars2' />
      <div className='stars3' />
      <Sidebar />
      <Home />
      <Profile />
      <Experience />
    </>
  );
}