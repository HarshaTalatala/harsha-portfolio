import React, { useState, useEffect } from 'react';
import './App.css';
import IntroAnimation from './reveal/IntroAnimation';
import CustomCursor from './components/CustomCursor';
import Landing from './components/Landing';
import Expertise from './components/Expertise';
import Journey from './components/Journey';
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
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App bg-black bg-dot-texture">
      <CustomCursor />
      {showIntro ? (
        <IntroAnimation />
      ) : (
        <MainPortfolioContent />
      )}
    </div>
  );
}

export default App;