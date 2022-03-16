import React from 'react'
import { Canvas } from '@react-three/fiber';

import './css/About.css';
import TextSphere from './TextSphere.js';

function About() {
  return (
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
        
        <Canvas camera={{ position: [0, 0, 3], fov: 70 }}>
          <color attach="background" args={['#116466']} />
          <pointLight position={[10, 10, 10]} />
          <TextSphere />
        </Canvas>
    </section>
  )
}

export default About