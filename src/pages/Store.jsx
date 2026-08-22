import React, { useState } from 'react';
import { storeCategories, storePackages } from '../data/storeProducts';
import OrderModal from '../components/OrderModal';
import { Check, Clock, Sparkles, Shield, Zap, MessageSquare, ArrowRight, ExternalLink } from 'lucide-react';
import './Store.css';

function Store() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredPackages = activeCategory === 'all'
    ? storePackages
    : storePackages.filter(p => p.categoryId === activeCategory);

  const handleOpenOrder = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  return (
    <main className="store-page">
      {/* Hero Header */}
      <section className="store-hero">
        <div className="container">
          <div className="store-hero-badge">
            <Sparkles size={16} /> Transparent Pricing • Instant Order Onboarding
          </div>
          <h1>Design Packages &amp; Service Store</h1>
          <p className="store-hero-desc">
            Choose a tailored design package, submit your brief &amp; files in 60 seconds, and watch our team craft your brand assets with a live countdown timer.
          </p>

          {/* Category Filter Pills */}
          <div className="store-filter-bar">
            {storeCategories.map(cat => (
              <button
                key={cat.id}
                className={`filter-pill ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Package Grid */}
      <section className="store-grid-section container">
        <div className="store-grid">
          {filteredPackages.map(pkg => (
            <div
              key={pkg.id}
              className={`package-card ${pkg.recommended ? 'recommended-card' : ''}`}
            >
              {pkg.badge && (
                <div className="package-badge-tag">{pkg.badge}</div>
              )}

              <div className="package-header">
                <span className="package-cat-label">{pkg.categoryName}</span>
                <h3 className="package-title">{pkg.title}</h3>
                <p className="package-desc">{pkg.shortDescription}</p>
              </div>

              <div className="package-price-box">
                <div className="price-number">
                  <span className="currency">$</span>
                  <span className="amount">{pkg.price}</span>
                  <span className="period">USD</span>
                </div>
                <div className="delivery-time">
                  <Clock size={15} /> {pkg.deliveryDays} Days Turnaround
                </div>
              </div>

              <div className="package-deliverables">
                <h4>What's Included:</h4>
                <ul>
                  {pkg.deliverables.map((item, idx) => (
                    <li key={idx}>
                      <Check size={16} className="check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="package-actions">
                <button
                  className="btn btn-primary btn-order-direct"
                  onClick={() => handleOpenOrder(pkg)}
                >
                  Order Package <ArrowRight size={16} />
                </button>
                <a
                  href={pkg.fiverrLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-order-fiverr"
                >
                  Or Order on Fiverr <ExternalLink size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Guarantee Banner */}
      <section className="store-trust-section container">
        <div className="trust-grid">
          <div className="trust-item">
            <Shield size={32} color="var(--primary-color)" />
            <h4>100% Money-Back Guarantee</h4>
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

      {/* Order Modal Component */}
      <OrderModal
        pkg={selectedPackage}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}

export default Store;
