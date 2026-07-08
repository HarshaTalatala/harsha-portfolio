import React, { useState, useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import './App.css';
import IntroAnimation from './reveal/IntroAnimation';
import CustomCursor from './components/CustomCursor';
import Landing from './components/Landing';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

const MainPortfolioContent = () => {
  return (
    <div className="bg-dot-texture min-h-screen">
      <Landing />
      <Experience />
      <Projects />
      <Expertise />
      <Education />
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
    }, 1400);

    const hideTimer = setTimeout(() => {
      setShowIntro(false);
    }, 1850);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="App bg-black bg-dot-texture">
        <CustomCursor />
        {showIntro ? <IntroAnimation fadeOut={fadeOut} /> : <MainPortfolioContent />}
      </div>
    </MotionConfig>
  );
}

export default App;
