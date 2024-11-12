import { Canvas, useThree, useLoader, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls  } from "@react-three/drei";
import { RGBELoader } from "three/examples/jsm/Addons.js";
import { useRef } from "react";
import * as THREE from "three";

export default function Hero() {
    const envMap = useLoader(RGBELoader, "./src/assets/environment.hdr");

    return (
        <header className="h-screen flex items-center justify-center bg-off-black">
           <h1 className="font-italiana text-off-white text-7xl absolute z-10">eqquinox</h1>
            <Canvas>
                <Environment files="./src/assets/test.hdr" background />
                <Sphere position={[-1, 2, 0]} environment={envMap} />
                <Sphere position={[1, -2, 0]} environment={envMap} />
                <Sphere environment={Environment} />
                <mesh position={[0, 0, -5]}>
                    <planeGeometry args={[5, 5, 2, 2]} />
                    <meshBasicMaterial color="blue" />
                </mesh>
                <ambientLight intensity={0.8} />
                <directionalLight position={[0, 0, 5]} color="white" />
                <OrbitControls />
            </Canvas>
        </header>
    )
}

function Sphere(props) {
    const mat = useRef();
    const { viewport } = useThree();
    const envMap = useLoader(RGBELoader, "./src/assets/test.hdr");
   
    // useFrame(() => {
    //     if (mat.current) 
    //         mat.current.uniforms.uTexture.value = envMap;
    // });

    const uniforms = {
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

    const vertexShader = `
        varying vec3 worldNormal;
        varying vec3 eyeVector;

        void main() {
            vec4 worldPos = modelMatrix * vec4(position, 1.0);
            vec4 mvPosition = viewMatrix * worldPos;

            gl_Position = projectionMatrix * mvPosition;

            vec3 transformedNormal = normalMatrix * normal;
            worldNormal = normalize(transformedNormal);

            eyeVector = normalize(worldPos.xyz - cameraPosition);
        }
    `;

    const fragmentShader = `
        uniform float uIorR;
        uniform float uIorG;
        uniform float uIorB; 
        uniform sampler2D uTexture;
        uniform vec2 winResolution;

        varying vec3 worldNormal;
        varying vec3 eyeVector;

        void main() {
            float iorRatioRed = 1.0/uIorR;
            float iorRatioGreen = 1.0/uIorG;
            float iorRatioBlue = 1.0/uIorB;

            vec3 color = vec3(1.0);

            vec2 uv = gl_FragCoord.xy / winResolution.xy;
            vec3 normal = worldNormal;

            vec3 refractVecR = refract(eyeVector, normal, iorRatioRed);
            vec3 refractVecG = refract(eyeVector, normal, iorRatioGreen);
            vec3 refractVecB = refract(eyeVector, normal, iorRatioBlue);
            
            float R = texture2D(uTexture, uv + refractVecR.xy).r;
            float G = texture2D(uTexture, uv + refractVecG.xy).g;
            float B = texture2D(uTexture, uv + refractVecB.xy).b;

            color.r = R;
            color.g = G;
            color.b = B;
            
            gl_FragColor = vec4(color, 1.0);
            #include <tonemapping_fragment>
            #include <colorspace_fragment>
        }
    `;

    return (
        <group scale={viewport.width / 4}>
            <mesh position={props.position}>
                <sphereGeometry args={[1, 32, 32 ]} />
                <shaderMaterial 
                    ref={mat}
                    uniforms={uniforms}
                    vertexShader={vertexShader}
                    fragmentShader={fragmentShader}
                />
            </mesh>
        </group>
    )
}