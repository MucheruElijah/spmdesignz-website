import React from 'react';
import { PenTool, Layout, Image as ImageIcon, Share2, Star, Quote, CheckCircle2, Zap, ArrowRight, Grid } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';

function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container animate-fade-in">
          <div className="hero-content">
            <h1>Your <i>Premier</i> Design <span>Agency.</span></h1>
            <p>We are the creative force behind striking brand identities. We craft professional flyers, logos, posters, and social media kits that elevate businesses and captivate audiences — completely custom-designed for you.</p>
            
            <ul className="hero-list">
              <li><CheckCircle2 size={20} color="#F4A900" /> <strong>Tailored Designs</strong> — Custom logos, flyers, and branding</li>
              <li><CheckCircle2 size={20} color="#F4A900" /> <strong>Premium Quality</strong> crafted with Adobe Creative Suite</li>
              <li><CheckCircle2 size={20} color="#F4A900" /> <strong>Social Media Ready</strong> kits to boost your engagement</li>
              <li><CheckCircle2 size={20} color="#F4A900" /> <strong>Print & Web Optimized</strong> high-resolution files</li>
            </ul>

            <div className="hero-buttons">
              <a href="#contact" className="btn" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Zap size={18} /> GET INSTANT QUOTE <ArrowRight size={18} /></a>
              <a href="#services" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Grid size={18} /> OUR SERVICES</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            {servicesData.map((service) => (
              <Link to={`/service/${service.id}`} key={service.id} className="service-card-link" style={{textDecoration: 'none', color: 'inherit'}}>
                <div className="service-card">
                  {service.icon}
                  <h3>{service.title}</h3>
                  <p>{service.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <h2>Our Work</h2>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <img src="/hero_background.jpg" alt="Corporate Branding" className="placeholder-img" />
              <div className="portfolio-overlay">
                <h3>Corporate Branding</h3>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="/portfolio_flyer_design.jpg" alt="Tech Flyer" className="placeholder-img" />
              <div className="portfolio-overlay">
                <h3>Tech Flyer</h3>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="/portfolio_logo_design_new.png" alt="Minimalist Logo" className="placeholder-img" />
              <div className="portfolio-overlay">
                <h3>Minimalist Logo</h3>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="/portfolio_social_media.jpg" alt="Social Campaign" className="placeholder-img" />
              <div className="portfolio-overlay">
                <h3>Social Campaign</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2>Client Testimonials</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <Quote size={32} className="quote-icon" />
              <p>"Signpost Media completely transformed our brand. The logo and social media kits are stunning and have doubled our online engagement!"</p>
              <div className="client-info">
                <div className="stars">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#F4A900" color="#F4A900" />)}
                </div>
                <h4>Sarah Jenkins</h4>
                <span>Marketing Director</span>
              </div>
            </div>
            <div className="testimonial-card">
              <Quote size={32} className="quote-icon" />
              <p>"We needed a professional flyer for a major corporate event on a tight deadline. They delivered beyond our expectations. Highly recommended."</p>
              <div className="client-info">
                <div className="stars">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#F4A900" color="#F4A900" />)}
                </div>
                <h4>David Chen</h4>
                <span>Tech Startup Founder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container about-content">
          <div className="about-text">
            <h2>About Us</h2>
            <p>We are a team of passionate and professional graphic designers dedicated to bringing your vision to life. Based on years of experience, we specialize in creating visual identities that speak volumes.</p>
            <p>Utilizing industry-standard tools like <strong>Adobe Illustrator</strong> and <strong>Adobe Photoshop</strong>, we ensure every pixel is perfect and every design is print or web-ready.</p>
            <a href="#contact" className="btn">Work With Us</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="contact-container">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Required</label>
                <select id="service">
                  <option>Logo Design</option>
                  <option>Flyer Design</option>
                  <option>Poster Design</option>
                  <option>Social Media Kit</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Tell us about your project..." required></textarea>
              </div>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
