import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { Menu, X, MapPin, Phone, Mail, ShoppingBag } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaBehance } from 'react-icons/fa';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ServiceDetail from './pages/ServiceDetail';
import Store from './pages/Store';
import OrderTracking from './pages/OrderTracking';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);
  
  return (
    <nav>
      <div className="nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-primary)', fontWeight: 700, fontSize: '1.5rem' }}>
            <img src="/logo.png" alt="Spmdesignz Logo" style={{ height: '40px', width: 'auto' }} /> Spmdesignz
          </span>
        </Link>
        
        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`} style={{ alignItems: 'center' }}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          {isHome && (
            <>
              <li><a href="#services" onClick={closeMenu}>Services</a></li>
              <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
              <li><a href="#about" onClick={closeMenu}>About Us</a></li>
            </>
          )}
          <li><Link to="/store" onClick={closeMenu} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}><ShoppingBag size={16} color="var(--primary-color)" /> Store</Link></li>
          <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
          <li className="quote-btn-container" style={{ display: 'flex', alignItems: 'center', paddingLeft: '1.5rem', borderLeft: '1px solid rgba(255,255,255,0.2)', marginLeft: '0.5rem', height: '30px' }}>
            <Link to={isHome ? "#contact" : "/#contact"} className="btn" onClick={closeMenu} style={{padding: '0.5rem 1rem'}}>Get a Quote</Link>
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
        <Route path="/store" element={<Store />} />
        <Route path="/order" element={<OrderTracking />} />
        <Route path="/order/:orderId" element={<OrderTracking />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <footer className="site-footer">
        <div className="container footer-grid">
          {/* Column 1: Brand, Socials, Copyright */}
          <div className="footer-col footer-col-brand">
            <Link to="/" className="footer-logo">
              <img src="/logo.png" alt="Spmdesignz Logo" />
              <span>Spmdesignz</span>
            </Link>
            <div className="footer-socials">
              <a href="https://web.facebook.com/spmdesigners" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook size={20} /></a>
              <a href="https://www.instagram.com/spmdesignz" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size={20} /></a>
              <a href="https://linkedin.com/spmdesigns" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
              <a href="https://www.behance.net/mucheruelijah" target="_blank" rel="noopener noreferrer" aria-label="Behance"><FaBehance size={20} /></a>
            </div>
            <p className="copyright-text">&copy; {new Date().getFullYear()} Spmdesignz. All rights reserved.</p>
          </div>

          {/* Column 2: Explore */}
          <div className="footer-col footer-col-explore">
            <h4 className="footer-heading">Explore</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/store">Design Store</Link></li>
              <li><Link to="/order">Track Order</Link></li>
              <li><a href="/#services">Services</a></li>
              <li><a href="/#portfolio">Portfolio</a></li>
              <li><a href="/#about">About Us</a></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="footer-col footer-col-contact">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>P.O. Box 22892, 00100<br />Nairobi, Kenya</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <span>
                  <a href="tel:0738280809">0738 280 809</a> / <a href="tel:0770223001">0770 223 001</a>
                </span>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <a href="mailto:info@spmdesignz.com">info@spmdesignz.com</a>
              </li>
              <li>
                <FaWhatsapp size={18} className="contact-icon whatsapp-icon" />
                <a href="https://wa.me/254738280809" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default App;
