import React, { useEffect } from 'react'
import { Canvas } from '@react-three/fiber';

import './css/Home.css';
import Particles from './Particles';

function Home() {
  // Fix vh issue for mobile
  const HandleResize = () => {
    const vh = window.innerHeight * 0.01; 
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    window.addEventListener('resize', HandleResize);
  });

  return (
    <section className='homepage' id='home'>
      <Canvas pixelRatio={[1, 2]} camera={{ position: [0, 0, 3] }}>
        <Particles count={100} />
      </Canvas>

      <div className='homepage_title'>
        <h1>Hi! <br/>I'm Lewis</h1>
        <span>Front End Developer - Software Engineer</span>
      </div>
    </section>
  )
}

export default Home