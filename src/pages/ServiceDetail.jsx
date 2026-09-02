import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { servicesData } from '../data/services';
import OrderModal from '../components/OrderModal';
import DocumentViewerModal from '../components/DocumentViewerModal';
import {
  ArrowLeft,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  RotateCcw,
  Check,
  Star,
  ShieldCheck,
  ExternalLink,
  MessageSquare,
  BookOpen
} from 'lucide-react';
import './ServiceDetail.css';
import '../App.css';

function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id);

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [activeTier, setActiveTier] = useState('standard'); // 'basic' | 'standard' | 'premium'
  const [openFaq, setOpenFaq] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDocViewerOpen, setIsDocViewerOpen] = useState(false);
  const [selectedOrderPackage, setSelectedOrderPackage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImageIdx(0);
    setActiveTier('standard');
  }, [id]);

  if (!service) {
    return <Navigate to="/" />;
  }

  const images = service.portfolioImages || ['/portfolio_company_profile_oceanscan.jpg'];
  const packages = service.packages || {
    basic: { name: 'Basic', price: 25, deliveryDays: 2, revisions: '2 Revisions', description: service.shortDescription, features: service.features.slice(0, 4) },
    standard: { name: 'Standard', price: 45, deliveryDays: 3, revisions: 'Unlimited Revisions', description: service.shortDescription, features: service.features },
    premium: { name: 'Premium', price: 75, deliveryDays: 2, revisions: 'Unlimited Revisions', description: service.shortDescription, features: service.features }
  };

  const currentPkg = packages[activeTier] || packages.standard;

  const nextImage = () => {
    setActiveImageIdx(prev => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImageIdx(prev => (prev - 1 + images.length) % images.length);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleOpenOrder = () => {
    setSelectedOrderPackage({
      id: `${service.id}-${activeTier}`,
      categoryId: service.id,
      categoryName: service.title,
      title: `${service.title} - ${currentPkg.name}`,
      price: currentPkg.price,
      deliveryDays: currentPkg.deliveryDays,
      deliverables: currentPkg.features,
      fiverrLink: service.fiverrUrl || 'https://www.fiverr.com/s/rEV65Gy'
    });
    setIsModalOpen(true);
  };

  return (
    <div className="service-detail-page">
      <div className="container">
        {/* Breadcrumb Navigation */}
        <div className="service-nav-bar">
          <Link to="/#services" className="back-link-breadcrumb">
            <ArrowLeft size={16} /> Back to Services
          </Link>
          <div className="agency-seller-info">
            <img src="/logo.png" alt="Spmdesignz Logo" className="seller-avatar" />
            <div className="seller-meta">
              <span className="seller-name">Spmdesignz Creative Agency</span>
              <span className="seller-rating">
                <Star size={14} fill="#F4A900" color="#F4A900" /> <strong>4.9</strong> (100+ Orders Completed)
              </span>
            </div>
          </div>
        </div>

        {/* Quick Service Switcher Bar */}
        <div className="store-filter-bar service-filter-bar" style={{ justifyContent: 'flex-start', marginBottom: '1.5rem' }}>
          <Link to="/store" className="filter-pill">
            All Services
          </Link>
          {servicesData.map(s => (
            <Link
              key={s.id}
              to={`/service/${s.id}`}
              className={`filter-pill ${s.id === service.id ? 'active' : ''}`}
            >
              {s.title.split('&')[0].trim()}
            </Link>
          ))}
        </div>

        {/* Page Title */}
        <h1 className="service-main-title">{service.title}</h1>

        {/* Main 2-Column Fiverr Layout */}
        <div className="service-fiverr-layout">
          {/* LEFT COLUMN: Gallery Slider & In-Depth Details */}
          <div className="service-main-left">
            {/* Interactive Image Slider */}
            <div className="slider-container">
              <div className="slider-main-viewport">
                <img
                  src={images[activeImageIdx]}
                  alt={`${service.title} Showcase ${activeImageIdx + 1}`}
                  className="slider-main-image"
                />

                {/* Left/Right Chevron Buttons */}
                {images.length > 1 && (
                  <>
                    <button className="slider-nav-btn prev-btn" onClick={prevImage} aria-label="Previous image">
                      <ChevronLeft size={24} />
                    </button>
                    <button className="slider-nav-btn next-btn" onClick={nextImage} aria-label="Next image">
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}

                <div className="slider-counter">
                  {activeImageIdx + 1} / {images.length}
                </div>
              </div>

              {/* Thumbnails Strip */}
              {images.length > 1 && (
                <div className="slider-thumbnails-strip">
                  {images.map((img, idx) => (
                    <div
                      key={idx}
                      className={`thumbnail-card ${activeImageIdx === idx ? 'active-thumb' : ''}`}
                      onClick={() => setActiveImageIdx(idx)}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} />
                    </div>
                  ))}
                </div>
              )}

              {/* Multi-Page Sample Showcase Trigger Button */}
              {service.samplePdfUrl && (
                <button 
                  className="view-multi-page-doc-btn"
                  onClick={() => setIsDocViewerOpen(true)}
                >
                  <BookOpen size={18} /> View Interactive Multi-Page Sample Document
                </button>
              )}
            </div>

            {/* Service Overview & Full Gig Description */}
            <section className="service-detail-section about-service-section">
              <h2>About This Service</h2>
              <div className="about-service-body">
                <p className="service-body-text lead-summary">{service.fullDescription}</p>

                {service.aboutSections && service.aboutSections.map((sec, idx) => (
                  <div key={idx} className="about-sub-block">
                    <h3 className="about-block-title">{sec.title}</h3>
                    {sec.intro && <p className="about-block-intro">{sec.intro}</p>}
                    {sec.items && (
                      <ul className="about-structured-list">
                        {sec.items.map((item, i) => (
                          <li key={i}>
                            <span className="about-bullet-icon">❖</span>
                            <div className="about-item-text">
                              {item.label && <strong className="item-label">{item.label}: </strong>}
                              <span>{item.text || item}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* What's Included Checklist */}
            <section className="service-detail-section">
              <h2>Key Capabilities &amp; Deliverables</h2>
              <ul className="service-features-grid">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={20} color="var(--primary-color)" className="feat-check" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Process Timeline */}
            {service.process && (
              <section className="service-detail-section">
                <h2>Our Step-by-Step Workflow</h2>
                <div className="process-timeline-styled">
                  {service.process.map((step, idx) => (
                    <div key={idx} className="timeline-node">
                      <div className="node-number">{step.step}</div>
                      <div className="node-info">
                        <h4>{step.title}</h4>
                        <p>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* FAQs Accordion */}
            {service.faqs && (
              <section className="service-detail-section">
                <h2>Frequently Asked Questions</h2>
                <div className="faqs-list">
                  {service.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className={`faq-card ${openFaq === idx ? 'expanded' : ''}`}
                      onClick={() => toggleFaq(idx)}
                    >
                      <div className="faq-head">
                        <h4>{faq.q}</h4>
                        <ChevronDown size={18} className="chevron-icon" />
                      </div>
                      {openFaq === idx && (
                        <div className="faq-body">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* RIGHT COLUMN: Fiverr-Style Tabbed Pricing Box */}
          <aside className="service-pricing-sidebar">
            <div className="fiverr-pricing-card">
              {/* 3 Tabs Header */}
              <div className="pricing-tabs-nav">
                <button
                  className={`pricing-tab-btn ${activeTier === 'basic' ? 'active-tab' : ''}`}
                  onClick={() => setActiveTier('basic')}
                >
                  Basic
                </button>
                <button
                  className={`pricing-tab-btn ${activeTier === 'standard' ? 'active-tab' : ''}`}
                  onClick={() => setActiveTier('standard')}
                >
                  Standard
                </button>
                <button
                  className={`pricing-tab-btn ${activeTier === 'premium' ? 'active-tab' : ''}`}
                  onClick={() => setActiveTier('premium')}
                >
                  Premium
                </button>
              </div>

              {/* Dynamic Tier Body */}
              <div className="pricing-tier-content">
                <div className="tier-price-header">
                  <div className="tier-name-label">{currentPkg.name}</div>
                  <div className="tier-price-val">
                    <span className="currency">$</span>
                    <span className="amount">{currentPkg.price}</span>
                  </div>
                </div>

                <p className="tier-description">{currentPkg.description}</p>

                {/* Metadata Row */}
                <div className="tier-meta-row">
                  <div className="meta-item">
                    <Clock size={16} color="var(--primary-color)" />
                    <span>{currentPkg.deliveryDays}-Day Delivery</span>
                  </div>
                  <div className="meta-item">
                    <RotateCcw size={16} color="var(--primary-color)" />
                    <span>{currentPkg.revisions}</span>
                  </div>
                </div>

                {/* Deliverables Checklist */}
                <div className="tier-checklist">
                  <ul>
                    {currentPkg.features.map((feat, idx) => (
                      <li key={idx}>
                        <Check size={16} className="tier-check-icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="tier-actions">
                  <button className="btn btn-primary btn-continue-order" onClick={handleOpenOrder}>
                    Continue (${currentPkg.price}) &rarr;
                  </button>

                  <a
                    href={service.fiverrUrl || 'https://www.fiverr.com/s/rEV65Gy'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-order-fiverr-link"
                  >
                    Order via Fiverr Escrow <ExternalLink size={13} />
                  </a>

                  <Link to="/#contact" className="btn-contact-custom">
                    <MessageSquare size={14} /> Request Custom Quote
                  </Link>
                </div>

                <div className="pricing-guarantee-pill">
                  <ShieldCheck size={15} color="#10b981" />
                  <span>100% Satisfaction &amp; Quality Guarantee</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Order Modal Component */}
      <OrderModal
        pkg={selectedOrderPackage}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Interactive Document Viewer Modal */}
      {service.samplePdfUrl && (
        <DocumentViewerModal
          isOpen={isDocViewerOpen}
          onClose={() => setIsDocViewerOpen(false)}
          docData={{
            title: `${service.title} (Live Sample Showcase)`,
            pdfUrl: service.samplePdfUrl,
            serviceUrl: `/service/${service.id}`
          }}
        />
      )}
    </div>
  );
}

export default ServiceDetail;
