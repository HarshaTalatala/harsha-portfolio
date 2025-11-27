import React, { useState, useEffect } from 'react';
import './App.css';
import IntroAnimation from './reveal/IntroAnimation';
import CustomCursor from './components/CustomCursor';
import Landing from './components/Landing';
import Expertise from './components/Expertise';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

const MainPortfolioContent = () => {
  return (
    <div className="bg-dot-texture min-h-screen">
      <Landing />
      <Expertise />
      <Education />
      <Journey />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1800);
    
    const hideTimer = setTimeout(() => {
      setShowIntro(false);
    }, 2300);
    
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="App bg-black bg-dot-texture">
      <CustomCursor />
      {showIntro ? (
        <IntroAnimation fadeOut={fadeOut} />
      ) : (
        <MainPortfolioContent />
      )}
    </div>
  );
}

export default App;