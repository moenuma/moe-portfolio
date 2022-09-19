import React, { useEffect } from 'react';
import './App.css';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Experience } from './pages/Experience';
import { MyWork } from './pages/MyWork';
import { ContactMe } from './pages/ContactMe';
import { background } from './background';
import { Navbar } from './components/Navbar';

export const App: React.FC = () => {
  
  useEffect(() => {
    background();
    // var canvas = document.getElementsByTagName('canvas')[0];
    // canvas.width = window.outerWidth;
  }, []);

  return (
    <>
      <canvas className="orb-canvas" />
      <Navbar />
      <div id="page-wrap">
        <Home />
        <Profile />
        <Experience />
        <MyWork />
        <ContactMe />
      </div>
    </>
  );
}
