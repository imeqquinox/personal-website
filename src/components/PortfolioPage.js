import React from 'react';

import './css/PortfolioPage.css';
import HonourPreview from '../assets/honour1.PNG';
import AudioPreview from '../assets/audio1.PNG';
import IWMPreview from '../assets/IWM1.PNG';
import NetworkPreview from '../assets/network1.PNG';
import GraphicsPreview from '../assets/graphics1.PNG';

import ProjectThumbnail from './ProjectThumbnail.js';

function PortfolioPage() {
  return (
    <div className='portfolio'>
        <h1>Portfolio</h1>
        <h2>Game Development</h2>
        <div className='game_portfolio'>
          <ProjectThumbnail 
            image={HonourPreview}
            title='Honours Project'
          />
          <ProjectThumbnail 
            image={AudioPreview}
            title='Audio Programming'
          />
          <ProjectThumbnail 
            image={IWMPreview}
            title='Imperial War Museum Game Jam'
          />
          <ProjectThumbnail 
            image={NetworkPreview}
            title='Networking Systems for Game Development'
          />
          <ProjectThumbnail 
            image={GraphicsPreview}
            title='Graphics Programming (OpenGL)'
          />
        </div>

        <h2>Web Development</h2>
        <p>Examples of web development here</p>
    </div>
  )
}

export default PortfolioPage