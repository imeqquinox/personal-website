import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Line, Text } from "@react-three/drei";
import { ChromaticAberration } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { EffectComposer } from "@react-three/postprocessing";
import { useRef } from "react";
import * as THREE from "three";

export default function Hero() {
    return (
        <header className="h-screen flex items-center justify-center bg-off-black">
            <Canvas camera={{ position: [0, 0, 8]}}>
                <Rig />
                <Text    
                    font='/Italiana-Regular.ttf'
                    scale={[2, 2, 1]}
                    anchorX="center"
                    anchorY="middle"
                >
                    eqquinox
                </Text>   
                <LineSphere />
                <EffectComposer>
                    <ChromaticAberration 
                        blendFunction={BlendFunction.NORMAL}
                        offset={[0.002, 0.002]}
                    />
                </EffectComposer>
            </Canvas>
        </header>
    )
}

function LineSphere() {
    const points = []; 
    const count = 300;
    const radius = 7.5; 

    for (let i = 0; i < count; i++) {
        const lat = Math.acos(1 - 2 * (i + 0.5) / count);
        const lon = Math.PI * (1 + Math.sqrt(5)) * i;  
        const x = radius * Math.cos(lat) * Math.cos(lon);
        const y = radius * Math.cos(lat) * Math.sin(lon);
        if (lat > 1) continue;
        const z = radius * Math.sin(lat);

        points.push([x, y, z]);
    }

    const lineSegments = []; 
    for (let i = 0; i < points.length; i++) {
        const start = points[i];
        const end = points[(i + 1) % points.length];
        lineSegments.push(
            <Line 
                key={i}
                points={[start, end]}
                color="white"
                lineWidth={1}
                dashed
            />
        )
    }

    return <>{lineSegments}</>
}

function Rig() {
    const ref = useRef();
    const vec = new THREE.Vector3();
    const { camera, mouse } = useThree();

    useFrame(() => {
        camera.position.lerp(vec.set(mouse.x * 0.5, mouse.y * 0.5, camera.position.z), 0.008);
        camera.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (-mouse.x * Math.PI) / 20, 0.05)
    })

    return (
        <group ref={ref} />
    )
}