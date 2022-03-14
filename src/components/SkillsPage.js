import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Text } from '@react-three/drei';
import * as THREE from 'three';

import './css/SkillsPage.css'

let vertices = [new THREE.Vector3(-0.5, 1, 0), new THREE.Vector3(0.5, 1, 0), new THREE.Vector3(1, 0, 0), new THREE.Vector3(0.5, -1, 0),
                new THREE.Vector3(-0.5, -1, 0), new THREE.Vector3(-1, 0, 0), new THREE.Vector3(0, 0, -1), new THREE.Vector3(0, 0, 1)]; 
let skills = ["C++/C#", "HTML", "CSS", "Javascript", "React", "Unity", "GitHub", "ThreeJS"];

function TextItem({ children, position}) {
  const ref = useRef();
  //console.log(ref.current);

  useFrame((state, delta) => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01; 

    //ref.current.children[0].lookAt(0, 0, 3);
  })
  
  return (
    <group ref={ref}>
      <Suspense fallback={null}>
        <Text position={position} children={children}/>
      </Suspense>
    </group>
  )
}

function SkillText() {
  return ( 
    <group position={[0, 0, 0]}>
        {skills.map((skill, index) => (
          <TextItem key={index} position={vertices[index]} children={skill} />
        ))}
    </group>
  )
}

function SkillsPage() {
  return (
    <div className='skillpage' id='#Skills'>
      <div className='skill_intro'>
        <h1>Skills</h1>
        <p>
            My main area of game development however recently have been learning 
            front-end development. 
        </p>
      </div>

      <Canvas camera={{ position: [0, 0, 3], fov: 70 }}>
        {/* <OrbitControls/> */}
        <color attach="background" args={['#598aeb']} />
        <pointLight position={[10, 10, 10]} />
        <SkillText />
      </Canvas>
    </div>
  )
}

export default SkillsPage