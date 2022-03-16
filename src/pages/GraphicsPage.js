import React from 'react';

import './css/GraphicsPage.css';
import ImageSlider from '../components/ImageSlider';

import Graphics1 from '../assets/graphics1.PNG';
import Graphics2 from '../assets/graphics2.PNG';
import Graphics3 from '../assets/graphics3.PNG';
import Graphics4 from '../assets/graphics4.PNG';

function GraphicsPage() {
  const images = [Graphics1, Graphics2, Graphics3, Graphics4];

  return (
    <section className='graphics_project'>
        <h1>Graphics Programming (OpenGL)</h1>

        <ImageSlider images={images} alt='Graphics Programming Screenshot' />

        <p>
            <b>
                Platform: Windows <br/>
                Technology: OpenGL, Visual Studio 2017 <br/>
                Year: 2017 <br/>
                Grade: A <br/>
                Source Code: &nbsp;
            </b>
            <a href="https://github.com/imeqquinox/Graphics-OpenGL">GitHub</a>
        </p>

        <p>
            Made use of OpenGL to create a 3D scene. Project consists of lighting, texturing, 
            alpha blending, vertex arrays, model loading and procedurally generated shapes.
        </p>
        <h4>Controls</h4>
        <ul>
            <li>Lighting: G (Switch between day and night)</li>
            <li>Wireframe: O (Switch between on and off)</li>
            <li>Main camera: WASD and mouse</li>
            <li>Camera Reset: P</li>
            <li>Switch Camera (Camera 2 - 4 fixed positions)</li>
                <ul>
                    <li>Camera 1: N</li>
                    <li>Camera 2: M</li>
                    <li>Camera 3: B</li>
                    <li>Camera 4: V</li>
                </ul>
        </ul>
    </section>
  )
}

export default GraphicsPage