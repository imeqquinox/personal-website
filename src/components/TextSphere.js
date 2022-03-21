import React, { useMemo, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

let skills = ["C++/C#", "HTML", "CSS", "Javascript", "React", "Unity", "GitHub", "ThreeJS", "OOP"];

function TextItem({ children, ...props }) {
    const color = new THREE.Color();
    const text = useRef();
    const [hovered, setHovered] = useState(false);
    const over = (e) => (e.stopPropagation(), setHovered(true));
    const out = () => setHovered(false);

    useFrame(({ camera }) => {
        text.current.lookAt(camera.position);
        
        text.current.material.color.lerp(color.set(hovered ? '#0f1626' : 'white'), 0.1);
    })

    return (
        <Text ref={text} onPointerOver={over} onPointerOut={out} {...props} children={children}/>
    )
}

function TextSphere({ count = 3, radius = 20 }) {
    const ref = useRef(); 

    const words = useMemo(() => {
        const temp = []; 
        const spherical = new THREE.Spherical();
        const phiSpan = Math.PI / (count + 1);
        const thetaSpan = (Math.PI * 2) / count; 
        let x = 0; 
        for (let i = 1; i < count + 1; i++) {
            for (let j = 0; j < count; j++) {
                temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), skills[x]]);
                x++;
            }
        }
        return temp;
    }, [count, radius]);

    useFrame(() => {
        ref.current.rotation.y += 0.005;
    });

    return (
        <group ref={ref}>
             {words.map(([pos, word], index) => <TextItem key={index} position={pos} children={word}/>)}
        </group>
    );
}

export default TextSphere