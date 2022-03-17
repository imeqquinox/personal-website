import { Routes, Route } from 'react-router-dom';

import './App.css';

import ScrollToTop from './components/ScrollToTop';
import Sidebar from './components/Sidebar.js';
import HomePage from './pages/HomePage.js';
import HonoursPage from './pages/HonoursPage';
import AudioPage from './pages/AudioPage';
import IWMPage from './pages/IWMPage';
import NetworkPage from './pages/NetworkPage';
import GraphicsPage from './pages/GraphicsPage';

function App() {
  return (
    <div className='app_container'>
      <ScrollToTop>
      <Sidebar />
      <main className='main_container'>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/Honours%20Project" element={<HonoursPage />}/>
            <Route path="/Audio%20Programming" element={<AudioPage />}/>
            <Route path="/Imperial%20War%20Museum%20Game%20Jam" 
              element={<IWMPage />}/>
            <Route path="/Networking%20Systems%20for%20Game%20Development"
              element={<NetworkPage />}/>
            <Route path="/Graphics%20Programming%20(OpenGL)"
              element={<GraphicsPage />}/>
          </Routes>
      </main>
      </ScrollToTop>
    </div>
  );
}

export default App;
