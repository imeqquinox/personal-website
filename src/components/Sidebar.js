import React, { useState, useEffect } from 'react';

import './css/Sidebar.css';
import ProfileImg from '../assets/profile.jpg';

function Sidebar() {

  // Check window resize and update burger state
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setBurger(false);
      } else {
        setBurger(true);
      }
    }
    window.addEventListener('resize', handleResize);
  })

  // Toggle for burger
  const [burger, setBurger] = useState(false);
  const toggleBurger = () => {
    setBurger(!burger)
  }

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
            <li><a className='nav_link' href='#Home'>Home</a></li>
            <li><a className='nav_link' href='#About'>About</a></li>
            <li><a className='nav_link' href='#Portfolio'>Portfolio</a></li>
            <li><a className='nav_link' href='#Contact'>Contact</a></li>
          </ul>
        </nav>

        <footer className='footer'> 
          <span>©2022 - Lewis Wilson</span>
        </footer>
      </aside>

      <style jsx>{`
        .sidebar {
          display: ${ burger ? 'none' : "fixed" };
        }
      `}</style>

      <div className='nav_burger' onClick={toggleBurger}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>
    </div>
  )
}

export default Sidebar