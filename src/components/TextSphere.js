import React, { Suspense, useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

let vertices = [new THREE.Vector3(-0.5, 1, 0), new THREE.Vector3(0.5, 1, 0), new THREE.Vector3(1, 0, 0), new THREE.Vector3(0.5, -1, 0),
    new THREE.Vector3(-0.5, -1, 0), new THREE.Vector3(-1, 0, 0), new THREE.Vector3(0, 0, -1), new THREE.Vector3(0, 0, 1)]; 
let skills = ["C++/C#", "HTML", "CSS", "Javascript", "React", "Unity", "GitHub", "ThreeJS"];

function TextItem({ children, position}) {
    const ref = useRef();
    //console.log(ref.current);

    useFrame((state, delta) => {
    //ref.current.rotation.x += 0.01;
    //ref.current.rotation.y += 0.01; 

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

function TextSphere() {
    const ref = useRef();

    return ( 
        <group ref={ref} position={[0, 0, 0]} scale={[1.5, 1.5, 1.5]} rotation={[-0.2, -0.2, 0]}>
            {skills.map((skill, index) => (
                <TextItem key={index} position={vertices[index]} children={skill} />
            ))}
        </group>
    )
}

export default TextSphere