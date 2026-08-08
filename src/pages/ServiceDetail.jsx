import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { servicesData } from '../data/services';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import './ServiceDetail.css';
import '../App.css'; // ensure we have styles

function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return <Navigate to="/" />;
  }

  return (
    <div className="service-detail-page">
      <div className="container">
        <Link to="/" className="back-link" style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--primary-color)', textDecoration: 'none', marginBottom: '2rem', fontWeight: '500' }}>
          <ArrowLeft size={20} style={{ marginRight: '0.5rem' }} /> Back to Home
        </Link>
        
        <div className="service-detail-header" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ color: 'var(--primary-color)' }}>
            {service.icon}
          </div>
          <h1>{service.title}</h1>
        </div>

        <div className="service-detail-content">
          <div className="main-content">
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--text-color)' }}>Overview</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
              {service.fullDescription}
            </p>

            <h2 style={{ fontSize: '1.8rem', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--text-color)' }}>What's Included</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {service.features.map((feature, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
                  <CheckCircle2 size={24} color="var(--primary-color)" style={{ marginRight: '1rem', flexShrink: 0 }} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="service-sidebar">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Ready to get started?</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
              Let's discuss how our {service.title} services can help elevate your brand and achieve your goals.
            </p>
            <Link to="/#contact" className="btn" style={{ display: 'block', textAlign: 'center', width: '100%' }}>
              Get a Quote Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetail;
