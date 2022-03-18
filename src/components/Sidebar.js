import React, { useState, useEffect, useLayoutEffect } from 'react';

import './css/Sidebar.css';
import BurgerMenu from './BurgerMenu';
import ProfileImg from '../assets/profile.jpg';

function Sidebar() {
  // Toggle for burger
  const [burger, setBurger] = useState(false);

  const HandleResize = () => {
    const vh = window.innerHeight * 0.01; 
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    window.addEventListener('resize', HandleResize);
  });

  // Check window resize and update burger state
  useLayoutEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 767) {
        setBurger(false);
      } else {
        setBurger(true);
      }
    }
    
      window.addEventListener('resize', handleResize);

      return _ => {
        window.removeEventListener('resize', handleResize);
    }
  });

  return (
    <div className='sidebar_container'>
      <aside className='sidebar'>
        <div className='sidebar_profile'>
          <img src={ProfileImg} alt='Profile'/>
        </div>
        
        <h1>Lewis Wilson</h1>
        <h5>Software Engineer</h5>

        <nav>
          <ul>
            <li><a className='nav_link' href='/#home'>Home</a></li>
            <li><a className='nav_link' href='/#about'>About</a></li>
            <li><a className='nav_link' href='/#portfolio'>Portfolio</a></li>
            <li><a className='nav_link' href='/#contact'>Contact</a></li>
          </ul>
        </nav>

        <footer className='footer'> 
          <span>©2022 - Lewis Wilson</span>
        </footer>
      </aside>

      <style jsx='true'>{`
        .sidebar {
          display: ${ burger ? 'none' : "block" };
        }
      `}</style>

      <BurgerMenu state={burger} setBurger={setBurger}/>
    </div>
  )
}

export default Sidebar