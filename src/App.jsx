import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ServiceDetail from './pages/ServiceDetail';
import './App.css';

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function Navigation() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  return (
    <nav>
      <div className="nav-container">
        <Link to="/" className="logo">
          <span style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-primary)', fontWeight: 700, fontSize: '1.5rem' }}>
            <img src="/logo.png" alt="Spmdesignz Logo" style={{ height: '40px', width: 'auto' }} /> Spmdesignz
          </span>
        </Link>
        <ul className="nav-links" style={{ alignItems: 'center' }}>
          <li><Link to="/">Home</Link></li>
          {isHome && (
            <>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#about">About Us</a></li>
            </>
          )}
          <li><Link to="/blog">Blog</Link></li>
          <li style={{ display: 'flex', alignItems: 'center', paddingLeft: '1.5rem', borderLeft: '1px solid rgba(255,255,255,0.2)', marginLeft: '0.5rem', height: '30px' }}>
            <Link to={isHome ? "#contact" : "/#contact"} className="btn" style={{padding: '0.5rem 1rem'}}>Get a Quote</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
      </Routes>
      <footer>
        <div className="container footer-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center' }}>
          <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>
            <img src="/logo.png" alt="Spmdesignz Logo" style={{ height: '30px', width: 'auto' }} /> Spmdesignz
          </div>
          <div className="social-links" style={{ display: 'flex', gap: '1.5rem', margin: '0.5rem 0' }}>
            <a href="https://web.facebook.com/spmdesigners" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}><Facebook size={24} /></a>
            <a href="https://www.instagram.com/spmdesignz" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}><Instagram size={24} /></a>
            <a href="https://linkedin.com/spmdesigns" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}><Linkedin size={24} /></a>
          </div>
          <p style={{ color: 'var(--text-secondary)' }}>&copy; {new Date().getFullYear()} Spmdesignz. All rights reserved.</p>
        </div>
      </footer>
    </Router>
  );
}

export default App;
