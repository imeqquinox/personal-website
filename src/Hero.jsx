import { Canvas, useThree, useLoader, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, Text  } from "@react-three/drei";
import { RGBELoader } from "three/examples/jsm/Addons.js";
import { useMemo, useRef } from "react";
import * as THREE from "three";

import vertexShader from "./shaders/vertexShader.glsl";
import fragmentShader from "./shaders/fragmentShader.glsl";

import staticVertex from "./shaders/staticVertex.glsl";
import staticFragment from "./shaders/staticFragment.glsl";

export default function Hero() {
    return (
        <header className="h-screen flex items-center justify-center bg-off-black">
            <Canvas>
                <Environment files="./src/assets/test.hdr" />
                <PanelSphere position={[-1.75, 1, 3.75]}/>
                <PanelSphere position={[1.75, -1, 3.75]}/>
                <Title />
                <mesh position={[0, 0, -5]}>
                    <planeGeometry args={[5, 5, 2, 2]} />
                    <meshBasicMaterial color="blue" />
                </mesh>
                <ambientLight intensity={0.8} />
                <directionalLight position={[0, 0, 5]} color="white" />
                {/* <OrbitControls /> */}
            </Canvas>
        </header>
    )
}

function Title() {
    const mesh = useRef();

    const uniforms = {
        time: { value: 0 }
    };

    useFrame(({ clock }) => {
        mesh.current.material.uniforms.time.value = clock.getElapsedTime();
    })

    return (
        <Text
            ref={mesh}
            font='/Italiana-Regular.ttf'
            scale={[2, 2, 1]}
            anchorX="center"
            anchorY="middle"
        >
            <shaderMaterial 
                uniforms={uniforms}
                vertexShader={staticVertex}
                fragmentShader={staticFragment}
            />
            eqquinox
        </Text>
    )
}

function PanelSphere(props) {
    const viewport = useThree((state) => state.viewport);
    const envMap = useLoader(RGBELoader, "./src/assets/test.hdr");
    const mesh = useRef();
    const sphereScale = window.innerWidth / 1800;

    useFrame(({ clock }) => {
        if (mesh.current) {
            mesh.current.rotation.x -= 0.001;
            mesh.current.rotation.y += 0.001;
            mesh.current.material.uniforms.time.value = clock.getElapsedTime();
        }
    }) 

    const uniforms = {
        time: { value: 0 }, 
        amplitude: { value: 0.001 },
        uTexture: { value: envMap },
        uIorR: { value: 1.13 },
        uIorG: { value: 1.18 },
        uIorB: { value: 1.22 },
        winResolution: {
            value: new THREE.Vector2(
                window.innerWidth,
                window.innerHeight
            ).multiplyScalar(Math.min(window.devicePixelRatio, 2))
        }
    };

    const geometry = useMemo(() => {
        const icosahedronGeometry = new THREE.IcosahedronGeometry(1, 2);
        const positions = icosahedronGeometry.getAttribute('position');

        const expandedGeometry = new THREE.BufferGeometry();
        const expandedVertices = [];
        const expandedNormals = []; 

        for (let i = 0; i < positions.count; i += 3) {
            // Extract vertices of the current face
            const v1 = new THREE.Vector3().fromBufferAttribute(positions, i);
            const v2 = new THREE.Vector3().fromBufferAttribute(positions, i + 1);
            const v3 = new THREE.Vector3().fromBufferAttribute(positions, i + 2);

            const faceCenter = new THREE.Vector3().addVectors(v1, v2).add(v3).divideScalar(3);
            const normal = faceCenter.clone().normalize();

            const offsetDist = 0.1;

            const v1Lifted = v1.clone().addScaledVector(normal, offsetDist);
            const v2Lifted = v2.clone().addScaledVector(normal, offsetDist);
            const v3Lifted = v3.clone().addScaledVector(normal, offsetDist);

            expandedVertices.push(v1Lifted.x, v1Lifted.y, v1Lifted.z);
            expandedVertices.push(v2Lifted.x, v2Lifted.y, v2Lifted.z);
            expandedVertices.push(v3Lifted.x, v3Lifted.y, v3Lifted.z);

            expandedNormals.push(normal.x, normal.y, normal.z);
            expandedNormals.push(normal.x, normal.y, normal.z);
            expandedNormals.push(normal.x, normal.y, normal.z);
        }

        expandedGeometry.setAttribute('position', new THREE.Float32BufferAttribute(expandedVertices, 3));
        expandedGeometry.setAttribute('normal', new THREE.Float32BufferAttribute(expandedNormals, 3));

        return expandedGeometry;
    }, []);

    return (
        <group scale={sphereScale}>
            <mesh ref={mesh} position={props.position}>
                <bufferGeometry attach="geometry" {...geometry} />
                <shaderMaterial 
                    uniforms={uniforms}
                    vertexShader={vertexShader}
                    fragmentShader={fragmentShader}
                />
            </mesh>
        </group>
    )
}