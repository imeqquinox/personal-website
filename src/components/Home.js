import React from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Text } from '@react-three/drei';

import './css/Home.css';

function Box() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'orange'}/>
    </mesh>
  )
}

function Home() {
  return (
    <section className='homepage' id='home'>
      {/* <Canvas>
        <Box />
        <pointLight position={[10, 10, 10]} />
      </Canvas> */}
      {/* <div className='homepage_title'> */}
        <h1>Hi! <br/>I'm Lewis</h1>
        <span>Front End Developer - Software Engineer</span>
      {/* </div> */}
    </section>
  )
}

export default Home