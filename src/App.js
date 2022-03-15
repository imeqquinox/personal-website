import './App.css';
import Sidebar from './components/Sidebar.js';
import HomePage from './components/HomePage.js';
import AboutPage from './components/AboutPage.js';
import PortfolioPage from './components/PortfolioPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <div className='app_container'>
      <Sidebar />
      <main className='main_container'>
        <HomePage />
        <AboutPage />
        <PortfolioPage />
        <ContactPage />
      </main>
    </div>
  );
}

export default App;
