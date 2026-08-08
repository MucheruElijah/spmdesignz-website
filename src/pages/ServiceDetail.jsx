import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { servicesData } from '../data/services';
import { ArrowLeft, CheckCircle2, ChevronDown, ArrowRight } from 'lucide-react';
import './ServiceDetail.css';
import '../App.css'; // ensure we have styles

function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return <Navigate to="/" />;
  }

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="service-detail-page">
      {/* Dynamic Hero Section */}
      <section className="service-hero">
        <div className="container">
          <Link to="/#services" className="back-link">
            <ArrowLeft size={20} /> Back to Services
          </Link>
          <div className="service-hero-content">
            <div className="service-icon-large">
              {service.icon}
            </div>
            <h1>{service.title}</h1>
            <p className="service-tagline">{service.shortDescription}</p>
            <a href="https://www.fiverr.com/s/rEV65Gy" target="_blank" rel="noopener noreferrer" className="btn btn-primary cta-hero-btn">
              Hire us on Fiverr <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      <div className="container service-main-container">
        <div className="service-content-left">
          {/* Overview */}
          <section className="service-section">
            <h2>Overview</h2>
            <p className="lead-text">{service.fullDescription}</p>
          </section>

          {/* What's Included */}
          <section className="service-section">
            <h2>What's Included</h2>
            <ul className="features-list">
              {service.features.map((feature, index) => (
                <li key={index}>
                  <CheckCircle2 size={24} color="var(--primary-color)" className="feature-icon" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Process Timeline */}
          {service.process && (
            <section className="service-section">
              <h2>Our Process</h2>
              <div className="process-timeline">
                {service.process.map((step, index) => (
                  <div key={index} className="process-step">
                    <div className="step-number">{step.step}</div>
                    <div className="step-content">
                      <h4>{step.title}</h4>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* FAQ Accordion */}
          {service.faqs && (
            <section className="service-section faq-section">
              <h2>Frequently Asked Questions</h2>
              <div className="faq-accordion">
                {service.faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className={`faq-item ${openFaq === index ? 'active' : ''}`}
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="faq-question">
                      <h4>{faq.q}</h4>
                      <ChevronDown size={20} className="faq-chevron" />
                    </div>
                    <div className="faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar / Portfolio */}
        <aside className="service-sidebar">
          {/* Portfolio Grid specific to service */}
          {service.portfolioImages && (
            <div className="service-portfolio">
              <h3>Recent {service.title} Work</h3>
              <div className="service-portfolio-grid">
                {service.portfolioImages.map((img, index) => (
                  <div key={index} className="portfolio-mini-card">
                    <img src={img} alt={`${service.title} Example ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="sticky-cta-box">
            <h3>Ready to get started?</h3>
            <p>Let's discuss how our {service.title} services can help elevate your brand and achieve your goals.</p>
            <a href="https://www.fiverr.com/s/rEV65Gy" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              Order on Fiverr
            </a>
            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
              <Link to="/#contact" style={{ color: 'var(--text-muted)', textDecoration: 'underline' }}>Or contact us directly</Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default ServiceDetail;
