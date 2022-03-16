import React from 'react';

import './css/GraphicsPage.css';

function GraphicsPage() {
  return (
    <section className='graphics_project'>
        <h1>Graphics Programming (OpenGL)</h1>

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