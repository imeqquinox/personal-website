import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';

import './css/About.css';
import TextSphere from './TextSphere.js';

function About() {
  return (
    <div className='background_wrapper'>
      <section className='about' id='about'>
          <div className='about_info'>
            <h1>About me</h1>
            <p>
              Hi I'm Lewis, 2020 graduate with a 2:1 degree in Computer Game Applications
              Development (BSc) from Abertay University. I have around 1 year professional experience 
              from my time at Digicast(UK) and an internship in Tokyo with their parent company 
              Crescent Inc.
            </p>
            <p>
              Recently I've self-taught myself front-end development skills, and am pursuing an opportunity to begin
              a career in the web development industry. 
            </p>
            <p>
              Current areas of interest include front-end web development, graphics and game development.
            </p>
          </div>
          
          <Suspense fallback={null}>
            <Canvas dpr={[1, 2]}camera={{ position: [0, 0, 1.5], fov: 90 }}>
              <fog attach="fog" args={['#202025', 0, 10]} />
              <TextSphere count={3} radius={0.75}/>
            </Canvas>
          </Suspense>
      </section>
    </div>
  )
}

export default About