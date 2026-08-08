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
          <div className="testimonials-slider">
            
            <div className="testimonial-card">
              <Quote size={32} className="quote-icon" />
              <p>"Great experience with the Spmdesignz team, and good communication and efficient work. Also the Spmdesignz team is good at managing the branding design including logos and brand color setting, so they help us a lot and expect to keep working with them, and recommend them!"</p>
              <div className="client-info">
                <div className="stars">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#F4A900" color="#F4A900" />)}
                </div>
                <h4>Tony Lau</h4>
                <span>CEO at CN International</span>
              </div>
            </div>

            <div className="testimonial-card">
              <Quote size={32} className="quote-icon" />
              <p>"Creative design, timely delivery and excellent work"</p>
              <div className="client-info">
                <div className="stars">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#F4A900" color="#F4A900" />)}
                </div>
                <h4>Dennis Muriuki</h4>
                <span>ERP & CRM Systems Consultant</span>
              </div>
            </div>

            <div className="testimonial-card">
              <Quote size={32} className="quote-icon" />
              <p>"The Spmdesignz team's willingness to work with me in real time to produce a document that was needed the following day was impressive! They delivered amazing work!"</p>
              <div className="client-info">
                <div className="stars">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#F4A900" color="#F4A900" />)}
                </div>
                <h4>donlca_merriman</h4>
                <span>United States</span>
              </div>
            </div>

            <div className="testimonial-card">
              <Quote size={32} className="quote-icon" />
              <p>"Best on the site!"</p>
              <div className="client-info">
                <div className="stars">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#F4A900" color="#F4A900" />)}
                </div>
                <h4>blgasa</h4>
                <span>United States</span>
              </div>
            </div>

            <div className="testimonial-card">
              <Quote size={32} className="quote-icon" />
              <p>"The Spmdesignz team took our vision for this product and made it a beautiful reality. Their professionalism and brand alignment EXCEEDED our expectations. Quick and proactive communication made working with them marvelous. Already have several projects lined up for them—highly recommend! 🤩"</p>
              <div className="client-info">
                <div className="stars">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#F4A900" color="#F4A900" />)}
                </div>
                <h4>csjullen78</h4>
                <span>Cayman Islands</span>
              </div>
            </div>

          </div>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="https://www.fiverr.com/s/rEV65Gy" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Hire us on Fiverr <ArrowRight size={20} />
            </a>
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
            <form className="contact-form" action="https://formspree.io/f/xaewqpqo" method="POST">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Required</label>
                <select id="service" name="service">
                  <option value="Logo Design">Logo Design</option>
                  <option value="Flyer Design">Flyer Design</option>
                  <option value="Poster Design">Poster Design</option>
                  <option value="Social Media Kit">Social Media Kit</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Tell us about your project..." required></textarea>
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
