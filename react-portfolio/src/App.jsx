import React from 'react';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Qualification from './components/Qualification';
import Contact from './components/Contact';
import ScrollUp from './components/ScrollUp';
import WaterRippleBackground from './components/WaterRippleBackground';

const App = () => {
  return (
    <>
      <WaterRippleBackground />
      <CustomCursor />
      <Header />
      
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Qualification />
        <Contact />
      </main>

      <ScrollUp />
    </>
  );
};

export default App;
