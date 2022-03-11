import React from 'react';

import './css/Sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
        <h1>Lewis Wilson</h1>
        <h5>Software Engineer</h5>

        <nav>
            <a href='#Home'>Home</a>
            <a href='#About'>About</a>
            <a href='#Skills'>Skills</a>
            <a href='#Portfolio'>Portfolio</a>
            <a href='#Contact'>Contact</a>
        </nav>

        <div className='footer'> 
            ©2022 - Lewis Wilson
        </div>
    </div>
  )
}

export default Sidebar