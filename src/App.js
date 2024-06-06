import React, { useEffect } from 'react';

import Aboutus from './components/About/Aboutus';
import Contact from './components/Contact/Contact';
import Course from './components/Course/Course';
import HeroSection from './components/Herosection/HeroSection';

function App() {
  useEffect(() => { document.title = "Dumkal Polytechnic" }, [])

  return (
    <>


      <HeroSection />
      <Aboutus />
      <Course />
      <Contact />


    </>
  )
}

export default App