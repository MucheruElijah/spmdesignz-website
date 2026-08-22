import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Clock, CheckCircle2, AlertCircle, FileText, ArrowLeft, Search, MessageSquare, Mail, ShieldCheck, Download } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import './OrderTracking.css';

function OrderTracking() {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [order, setOrder] = useState(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: false });

  // Load Order Data
  useEffect(() => {
    if (!orderId) {
      setOrder(null);
      return;
    }

    try {
      const storedOrders = JSON.parse(localStorage.getItem('spm_orders') || '{}');
      if (storedOrders[orderId]) {
        setOrder(storedOrders[orderId]);
      } else {
        // Fallback demo/active order if opened with a simulated ID
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 3);
        setOrder({
          orderId: orderId,
          packageTitle: 'Standard Brand Logo Package',
          categoryName: 'Logo Design',
          price: 45,
          deliveryDays: 3,
          createdAt: new Date().toISOString(),
          deliveryTarget: targetDate.toISOString(),
          status: 'In Progress',
          clientName: 'Design Client',
          clientEmail: 'client@example.com',
          businessName: 'Active Client Project',
          designStyle: 'Modern & Minimalist',
          projectInstructions: 'Brand logo concept with clean modern vector typography.',
          uploadedFiles: []
        });
      }
    } catch (err) {
      console.error(err);
    }
  }, [orderId]);

  // Live Countdown Timer
  useEffect(() => {
    if (!order?.deliveryTarget) return;

    const interval = setInterval(() => {
      const target = new Date(order.deliveryTarget).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true });
        clearInterval(interval);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds, isCompleted: false });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [order]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/order/${searchQuery.trim()}`);
    }
  };

  const whatsappMessage = order
    ? encodeURIComponent(`Hi Elijah! I am checking in regarding my order #${order.orderId} (${order.packageTitle}) for ${order.businessName}.`)
    : '';

  return (
    <main className="order-tracking-page">
      <div className="container">
        {/* Top Navigation */}
        <div className="tracking-top-nav">
          <Link to="/store" className="back-link">
            <ArrowLeft size={18} /> Back to Design Store
          </Link>

          {/* Quick Search for Other Orders */}
          <form className="order-search-form" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Track by Order # (e.g. SPM-2026-8941)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" aria-label="Search Order">
              <Search size={16} />
            </button>
          </form>
        </div>

        {!orderId ? (
          /* Empty Search Screen */
          <div className="empty-tracking-box">
            <Clock size={48} color="var(--primary-color)" />
            <h2>Track Your Active Order</h2>
            <p>Enter your unique SPM Order ID received during checkout to view your live delivery countdown timer and progress.</p>
            <form className="center-search-form" onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Enter Order ID (e.g. SPM-2026-104)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary">
                Track Order <Search size={16} />
              </button>
            </form>
          </div>
        ) : (
          /* Active Order Dashboard */
          <div className="order-dashboard">
            {/* Header Status Bar */}
            <div className="order-header-card">
              <div className="order-title-block">
                <span className="order-pill-badge">ORDER #{order.orderId}</span>
                <h1>{order.packageTitle}</h1>
                <p className="order-business-name">
                  Client: <strong>{order.clientName}</strong> • Project: <strong>{order.businessName}</strong>
                </p>
              </div>

              <div className="order-status-badge in-progress">
                <span className="pulsing-dot" /> {order.status}
              </div>
            </div>

            {/* Main Grid: Timer & Progress */}
            <div className="order-content-grid">
              {/* Left Column: Countdown & Stepper */}
              <div className="order-main-col">
                {/* Live Countdown Timer Card */}
                <div className="countdown-card">
                  <div className="countdown-header">
                    <Clock size={22} color="var(--primary-color)" />
                    <h3>Estimated Delivery Countdown</h3>
                  </div>
                  <p className="countdown-subtext">
                    Our creative team is actively crafting your assets. Target delivery: {new Date(order.deliveryTarget).toLocaleDateString()}
                  </p>

                  <div className="timer-grid">
                    <div className="timer-box">
                      <span className="timer-val">{String(timeLeft.days).padStart(2, '0')}</span>
                      <span className="timer-label">DAYS</span>
                    </div>
                    <div className="timer-colon">:</div>
                    <div className="timer-box">
                      <span className="timer-val">{String(timeLeft.hours).padStart(2, '0')}</span>
                      <span className="timer-label">HOURS</span>
                    </div>
                    <div className="timer-colon">:</div>
                    <div className="timer-box">
                      <span className="timer-val">{String(timeLeft.minutes).padStart(2, '0')}</span>
                      <span className="timer-label">MINS</span>
                    </div>
                    <div className="timer-colon">:</div>
                    <div className="timer-box">
                      <span className="timer-val">{String(timeLeft.seconds).padStart(2, '0')}</span>
                      <span className="timer-label">SECS</span>
                    </div>
                  </div>
                </div>

                {/* Progress Stepper */}
                <div className="stepper-card">
                  <h3>Production Pipeline</h3>
                  <div className="pipeline-steps">
                    <div className="pipeline-item completed">
                      <div className="pipe-icon"><CheckCircle2 size={20} /></div>
                      <div className="pipe-text">
                        <h4>1. Brief &amp; Requirements Confirmed</h4>
                        <p>Project specifications and client assets logged.</p>
                      </div>
                    </div>

                    <div className="pipeline-item active">
                      <div className="pipe-icon"><span className="active-ring" /></div>
                      <div className="pipe-text">
                        <h4>2. Drafting &amp; Designing (In Progress)</h4>
                        <p>Our senior designer is sketching concepts and vectorizing assets.</p>
                      </div>
                    </div>

                    <div className="pipeline-item pending">
                      <div className="pipe-icon">3</div>
                      <div className="pipe-text">
                        <h4>3. Quality Review &amp; Polish</h4>
                        <p>Resolution check, format exports, and color profile verification.</p>
                      </div>
                    </div>

                    <div className="pipeline-item pending">
                      <div className="pipe-icon">4</div>
                      <div className="pipe-text">
                        <h4>4. Final Delivery &amp; Handoff</h4>
                        <p>High-resolution files sent directly to your email for final approval.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Brief Summary & Direct Chat */}
              <div className="order-sidebar-col">
                {/* Direct Designer Communication */}
                <div className="contact-designer-card">
                  <h3>Direct Designer Contact</h3>
                  <p>Have quick feedback, an extra sketch, or questions about your delivery?</p>

                  <a
                    href={`https://wa.me/254738280809?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp-direct"
                  >
                    <FaWhatsapp size={20} /> Chat on WhatsApp
                  </a>

                  <a
                    href={`mailto:mucheru@spmdesignz.com?subject=Update%20on%20Order%20${order.orderId}`}
                    className="btn btn-email-direct"
                  >
                    <Mail size={18} /> Email Designer
                  </a>
                </div>

                {/* Order Details Breakdown */}
                <div className="order-details-box">
                  <h4>Order Summary</h4>
                  <div className="detail-line">
                    <span>Order Date:</span>
                    <strong>{new Date(order.createdAt).toLocaleDateString()}</strong>
                  </div>
                  <div className="detail-line">
                    <span>Package Tier:</span>
                    <strong>{order.packageTitle}</strong>
                  </div>
                  <div className="detail-line">
                    <span>Turnaround Time:</span>
                    <strong>{order.deliveryDays} Days</strong>
                  </div>
                  <div className="detail-line total-line">
                    <span>Total:</span>
                    <strong className="price-highlight">${order.price} USD</strong>
                  </div>

                  {order.uploadedFiles && order.uploadedFiles.length > 0 && (
                    <div className="attached-docs-section">
                      <h5>Attached Files ({order.uploadedFiles.length}):</h5>
                      <ul>
                        {order.uploadedFiles.map((f, i) => (
                          <li key={i}>
                            <FileText size={14} /> <span>{f.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="trust-pill">
                    <ShieldCheck size={16} color="#10b981" />
                    <span>Protected by 100% Satisfaction Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default OrderTracking;
