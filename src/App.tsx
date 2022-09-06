import React, { useEffect } from 'react';
import './background.css';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Experience } from './pages/Experience';
import { MyWork } from './pages/MyWork';
import { background } from './background';

export const App: React.FC = () => {
  
  useEffect(() => {
    background();
    
  }, []);

  return (
    <>
      <canvas className="orb-canvas" />
      <Sidebar />
      <Home />
      <Profile />
      <Experience />
      <MyWork />
    </>
  );
}