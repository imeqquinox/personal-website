import React, { useEffect } from 'react';

import './css/Portfolio.css';
import HonourPreview from '../assets/honour1.PNG';
import AudioPreview from '../assets/audio1.PNG';
import IWMPreview from '../assets/IWM1.PNG';
import NetworkPreview from '../assets/network1.PNG';
import GraphicsPreview from '../assets/graphics1.PNG';
import ShopPreview from '../assets/shop-clone1.png';
import WordlePreview from '../assets/wordle1.png';
import MessagingPreview from '../assets/messaging1.PNG';

import ProjectThumbnail from './ProjectThumbnail.js';
import WebsiteThumbnail from './WebsiteThumbnail.js';

function Portfolio() {
  const observer = new IntersectionObserver(entries => {
    
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('portfolio_fade');
      }
    })
  });

  useEffect(() => {
    observer.observe(document.querySelector('.portfolio'));
  })

  return (
    <section className='portfolio' id='portfolio'>
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
        <div className='web_portfolio'>
          <WebsiteThumbnail 
            image={ShopPreview} 
            title='Craftware'
            subtitle='Online shop clone'
            site='https://adoring-mccarthy-133f46.netlify.app/'
            siteText='Live Site'
            code='https://github.com/imeqquinox/shop-clone'
          />
          <WebsiteThumbnail 
            image={WordlePreview}
            title='Wordle'
            subtitle='Wordle clone'
            site='#'
            siteText='WIP'
            code='https://github.com/imeqquinox/wordle-clone'
          />
          <WebsiteThumbnail 
            image={MessagingPreview}
            title='Messaging App'
            subtitle='Front and backend messaging app'
            site='#'
            siteText='WIP'
            code='https://github.com/imeqquinox/messaging-app'
          />
        </div>
    </section>
  )
}

export default Portfolio