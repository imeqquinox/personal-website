import React from 'react';

import './css/HomePage.css';

import Home from '../components/Home.js';
import About from '../components/About.js';
import Portfolio from '../components/Portfolio.js';
import Contact from '../components/Contact.js';

function HomePage() {
  return (
    <div>
        <Home />
        <About />
        <Portfolio />
        <Contact />
    </div>
  )
}

export default HomePage