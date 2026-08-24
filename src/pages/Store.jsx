import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { Star, ArrowRight, Shield, Zap, MessageSquare, Sparkles, ExternalLink, Clock, Layers } from 'lucide-react';
import './Store.css';

function Store() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all'
    ? servicesData
    : servicesData.filter(s => s.id === activeCategory);

  return (
    <main className="store-page">
      {/* Hero Section */}
      <section className="store-hero">
        <div className="container">
          <div className="store-hero-badge">
            <Sparkles size={16} /> Official Service Catalog &amp; Gigs
          </div>
          <h1>Explore Design Gigs &amp; Services</h1>
          <p className="store-hero-desc">
            Browse our top-rated design services, compare Basic, Standard &amp; Premium packages, and get your project delivered on time with a live countdown timer.
          </p>

          {/* Filter Pills */}
          <div className="store-filter-bar">
            <button
              className={`filter-pill ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Services
            </button>
            {servicesData.map(s => (
              <button
                key={s.id}
                className={`filter-pill ${activeCategory === s.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(s.id)}
              >
                {s.title.split('&')[0].trim()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gigs Catalog Grid */}
      <section className="store-grid-section container">
        <div className="gig-catalog-grid">
          {filteredServices.map(service => {
            const minPrice = service.packages?.basic?.price || 25;
            const primaryImage = service.portfolioImages?.[0] || '/portfolio_flyer_design.jpg';

            return (
              <div key={service.id} className="gig-card">
                {/* Image Showcase Container */}
                <Link to={`/service/${service.id}`} className="gig-image-wrapper">
                  <img
                    src={primaryImage}
                    alt={service.title}
                    className="gig-cover-image"
                  />
                  <div className="gig-image-overlay">
                    <span className="gig-overlay-badge">
                      <Layers size={14} /> 3 Tier Packages Available
                    </span>
                  </div>
                </Link>

                {/* Card Body */}
                <div className="gig-card-body">
                  {/* Seller Meta Header */}
                  <div className="gig-seller-header">
                    <img src="/logo.png" alt="Spmdesignz" className="gig-avatar" />
                    <div className="gig-seller-details">
                      <span className="gig-author-name">Spmdesignz Agency</span>
                      <span className="gig-rating-score">
                        <Star size={13} fill="#F4A900" color="#F4A900" /> <strong>4.9</strong> (100+ Reviews)
                      </span>
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="gig-title">
                    <Link to={`/service/${service.id}`}>{service.title}</Link>
                  </h3>
                  <p className="gig-summary">{service.shortDescription}</p>

                  {/* Highlights Checklist */}
                  <ul className="gig-features-list">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx}>• {feat}</li>
                    ))}
                  </ul>

                  {/* Pricing & Footer Actions */}
                  <div className="gig-card-footer">
                    <div className="gig-starting-price">
                      <span className="starting-label">STARTING AT</span>
                      <div className="price-tag">
                        <span className="currency">$</span>
                        <span className="val">{minPrice}</span>
                        <span className="currency-unit">USD</span>
                      </div>
                    </div>

                    <div className="gig-action-btns">
                      <Link to={`/service/${service.id}`} className="btn btn-primary btn-view-gig">
                        View Packages <ArrowRight size={15} />
                      </Link>
                      <a
                        href={service.fiverrUrl || 'https://www.fiverr.com/s/rEV65Gy'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-gig-fiverr"
                        title="View on Fiverr"
                      >
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trust & Guarantee Banner */}
      <section className="store-trust-section container">
        <div className="trust-grid">
          <div className="trust-item">
            <Shield size={32} color="var(--primary-color)" />
            <h4>100% Satisfaction Guarantee</h4>
            <p>We revise your designs until you are thrilled with the final result. Zero risk.</p>
          </div>
          <div className="trust-item">
            <Zap size={32} color="var(--primary-color)" />
            <h4>Live Order Delivery Timer</h4>
            <p>Get a personal tracking link with an active countdown timer tracking your delivery.</p>
          </div>
          <div className="trust-item">
            <MessageSquare size={32} color="var(--primary-color)" />
            <h4>Direct WhatsApp &amp; Email Chat</h4>
            <p>Communicate directly with our lead designer for updates and instant answers.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Store;
