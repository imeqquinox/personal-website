import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Text } from '@react-three/drei';

import './App.css';

function App() {
  return (
    <div>
      <Canvas id='title__canvas'>
        <PerspectiveCamera position={[0, 0, 0]} makeDefault={true} />
        {/* <OrbitControls /> */}
        <Text scale={[2, 2, 2]} position={[0, 0.25, -5]} color="black" anchorX="center" anchorY="middle">
          Lewis Wilson
        </Text>
        <Text scale={[1, 1, 1]} position={[0, 0, -5]} color="black" anchorX="center" anchorY="middle">
          eqquinox
        </Text>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
      </Canvas>
      <Canvas id='about__canvas'>
        <PerspectiveCamera position={[0, 0, 0]} makeDefault={true} />
        <Text scale={[2, 2, 2]} position={[0, 0.25, -5]} color="black" anchorX="center" anchorY="middle">
          About
        </Text>
        <Text scale={[1, 1, 1]} position={[0, 0, -5]} color="black" anchorX="center" anchorY="middle">
          Hi my name is Lewis
        </Text>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
      </Canvas>
      <Canvas id='works__canvas'>
        <PerspectiveCamera position={[0, 0, 0]} makeDefault={true} />
        <Text scale={[2, 2, 2]} position={[0, 0.25, -5]} color="black" anchorX="center" anchorY="middle">
          Works
        </Text>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
      </Canvas>
      <Canvas id='contact__canvas'>
        <PerspectiveCamera position={[0, 0, 0]} makeDefault={true} />
        <Text scale={[2, 2, 2]} position={[0, 0.25, -5]} color="black" anchorX="center" anchorY="middle">
          Contact
        </Text>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
      </Canvas>
    </div>
  );
}

export default App;
