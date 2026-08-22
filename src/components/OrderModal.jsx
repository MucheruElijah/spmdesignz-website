import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, CheckCircle2, Upload, FileText, Clock, ShieldCheck, ArrowRight, ArrowLeft, AlertCircle } from 'lucide-react';
import './OrderModal.css';

function OrderModal({ pkg, isOpen, onClose }) {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isExpress, setIsExpress] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    businessName: '',
    tagline: '',
    colorPreferences: '',
    designStyle: 'Modern & Minimalist',
    projectInstructions: '',
    uploadedFiles: []
  });

  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen || !pkg) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrorMsg('');
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    // Validate size (limit 25MB total per file)
    const validFiles = files.filter(f => f.size <= 25 * 1024 * 1024);
    if (validFiles.length < files.length) {
      alert('Some files exceeded the 25MB limit and were skipped.');
    }

    const newFiles = validFiles.map(file => ({
      name: file.name,
      size: (file.size / (1024 * 1024)).toFixed(2) + ' MB',
      type: file.type
    }));

    setFormData(prev => ({
      ...prev,
      uploadedFiles: [...prev.uploadedFiles, ...newFiles]
    }));
  };

  const removeFile = (index) => {
    setFormData(prev => ({
      ...prev,
      uploadedFiles: prev.uploadedFiles.filter((_, i) => i !== index)
    }));
  };

  const nextStep = () => {
    if (step === 1) {
      if (!formData.clientName.trim() || !formData.clientEmail.trim() || !formData.businessName.trim()) {
        setErrorMsg('Please fill in your name, email, and business name to proceed.');
        return;
      }
    }
    if (step === 2) {
      if (!formData.projectInstructions.trim()) {
        setErrorMsg('Please provide a brief description of your project instructions.');
        return;
      }
    }
    setErrorMsg('');
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setErrorMsg('');
    setStep(prev => prev - 1);
  };

  const calculateDeliveryDate = () => {
    const days = isExpress ? 1 : pkg.deliveryDays;
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const orderId = `SPM-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const deliveryTarget = calculateDeliveryDate().toISOString();
    const totalPrice = isExpress ? pkg.price + 20 : pkg.price;

    const orderData = {
      orderId,
      packageId: pkg.id,
      packageTitle: pkg.title,
      categoryName: pkg.categoryName,
      price: totalPrice,
      deliveryDays: isExpress ? 1 : pkg.deliveryDays,
      createdAt: new Date().toISOString(),
      deliveryTarget,
      status: 'In Progress',
      clientName: formData.clientName,
      clientEmail: formData.clientEmail,
      clientPhone: formData.clientPhone,
      businessName: formData.businessName,
      tagline: formData.tagline,
      colorPreferences: formData.colorPreferences,
      designStyle: formData.designStyle,
      projectInstructions: formData.projectInstructions,
      uploadedFiles: formData.uploadedFiles
    };

    // Save to localStorage for instant client tracking
    try {
      const existingOrders = JSON.parse(localStorage.getItem('spm_orders') || '{}');
      existingOrders[orderId] = orderData;
      localStorage.setItem('spm_orders', JSON.stringify(existingOrders));
    } catch (err) {
      console.error('Storage error:', err);
    }

    // Submit to Web3Forms
    try {
      const payload = {
        access_key: '7386573a-d118-4d03-b241-c3603ebc3a25',
        subject: `🚨 NEW STORE ORDER [${orderId}]: ${pkg.title} (${formData.businessName})`,
        from_name: formData.clientName,
        email: formData.clientEmail,
        order_id: orderId,
        package_name: pkg.title,
        total_price: `$${totalPrice}`,
        delivery_turnaround: isExpress ? '24h Express' : `${pkg.deliveryDays} Days`,
        client_phone: formData.clientPhone || 'Not provided',
        business_name: formData.businessName,
        tagline: formData.tagline || 'None',
        color_preferences: formData.colorPreferences || 'Designer choice',
        design_style: formData.designStyle,
        project_instructions: formData.projectInstructions,
        attached_files_count: formData.uploadedFiles.length,
        files_list: formData.uploadedFiles.map(f => `${f.name} (${f.size})`).join(', ')
      };

      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      console.warn('Web3Forms background send notice:', err);
    }

    setIsSubmitting(false);
    onClose();
    navigate(`/order/${orderId}`);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-area">
            <span className="modal-category">{pkg.categoryName}</span>
            <h3>{pkg.title}</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={22} />
          </button>
        </div>

        {/* Stepper Bar */}
        <div className="modal-stepper">
          <div className={`step-pill ${step >= 1 ? 'active' : ''}`}>1. Client & Brand</div>
          <div className="step-divider" />
          <div className={`step-pill ${step >= 2 ? 'active' : ''}`}>2. Project Brief</div>
          <div className="step-divider" />
          <div className={`step-pill ${step >= 3 ? 'active' : ''}`}>3. Files & Timeline</div>
        </div>

        {errorMsg && (
          <div className="modal-error-banner">
            <AlertCircle size={18} /> {errorMsg}
          </div>
        )}

        {/* Modal Content */}
        <div className="modal-body">
          {/* STEP 1: CONTACT & BRAND INFO */}
          {step === 1 && (
            <div className="step-content animate-fade">
              <div className="package-summary-pill">
                <div>
                  <strong>Package Price:</strong> <span className="price-tag">${pkg.price} USD</span>
                </div>
                <div className="delivery-badge">
                  <Clock size={15} /> Standard: {pkg.deliveryDays} Days Delivery
                </div>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label>Your Full Name *</label>
                  <input
                    type="text"
                    name="clientName"
                    value={formData.clientName}
                    onChange={handleInputChange}
                    placeholder="e.g. John Doe"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Your Email Address *</label>
                  <input
                    type="email"
                    name="clientEmail"
                    value={formData.clientEmail}
                    onChange={handleInputChange}
                    placeholder="e.g. john@company.com"
                    required
                  />
                </div>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label>WhatsApp / Phone Number (Optional)</label>
                  <input
                    type="text"
                    name="clientPhone"
                    value={formData.clientPhone}
                    onChange={handleInputChange}
                    placeholder="e.g. +1 555 123 4567"
                  />
                </div>
                <div className="form-group">
                  <label>Business / Project Name *</label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    placeholder="e.g. Horizon Peak Logistics"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Slogan or Tagline (Optional)</label>
                <input
                  type="text"
                  name="tagline"
                  value={formData.tagline}
                  onChange={handleInputChange}
                  placeholder="e.g. Elevating Quality Everywhere"
                />
              </div>
            </div>
          )}

          {/* STEP 2: DESIGN PREFERENCES & BRIEF */}
          {step === 2 && (
            <div className="step-content animate-fade">
              <div className="form-grid">
                <div className="form-group">
                  <label>Preferred Design Style</label>
                  <select name="designStyle" value={formData.designStyle} onChange={handleInputChange}>
                    <option value="Modern & Minimalist">Modern & Minimalist</option>
                    <option value="Bold & Corporate">Bold & Corporate</option>
                    <option value="Luxury & Elegant">Luxury & Elegant</option>
                    <option value="Creative & Artistic">Creative & Artistic</option>
                    <option value="Vintage & Classic">Vintage & Classic</option>
                    <option value="Let the Designer Decide">Let the Designer Decide</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Brand Colors / Palette Idea</label>
                  <input
                    type="text"
                    name="colorPreferences"
                    value={formData.colorPreferences}
                    onChange={handleInputChange}
                    placeholder="e.g. Navy Blue & Gold, or Orange & Black"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Detailed Project Instructions & Requirements *</label>
                <textarea
                  name="projectInstructions"
                  rows="5"
                  value={formData.projectInstructions}
                  onChange={handleInputChange}
                  placeholder="Tell us what you want to achieve, target audience, specific elements to include, dimensions, or any competitor examples you like..."
                  required
                />
              </div>
            </div>
          )}

          {/* STEP 3: FILE UPLOAD & CONFIRMATION */}
          {step === 3 && (
            <div className="step-content animate-fade">
              {/* File Upload Zone */}
              <div className="file-upload-box">
                <Upload size={32} className="upload-icon" />
                <h4>Upload Sketches, Logos or Reference Docs (Optional)</h4>
                <p>Supported: PNG, JPG, PDF, AI, PSD, DOCX, ZIP (Up to 25MB)</p>
                <label className="btn-browse">
                  Browse Files
                  <input
                    type="file"
                    multiple
                    accept=".png,.jpg,.jpeg,.pdf,.ai,.psd,.doc,.docx,.zip,.eps,.svg"
                    onChange={handleFileUpload}
                    style={{ display: 'none' }}
                  />
                </label>
              </div>

              {formData.uploadedFiles.length > 0 && (
                <div className="uploaded-files-list">
                  <h5>Attached Files ({formData.uploadedFiles.length}):</h5>
                  {formData.uploadedFiles.map((file, idx) => (
                    <div key={idx} className="file-chip">
                      <FileText size={16} />
                      <span className="file-name">{file.name}</span>
                      <span className="file-size">({file.size})</span>
                      <button type="button" onClick={() => removeFile(idx)} className="btn-remove-file">
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Express Turnaround Add-on */}
              <div className="express-addon-card" onClick={() => setIsExpress(!isExpress)}>
                <input
                  type="checkbox"
                  checked={isExpress}
                  onChange={(e) => setIsExpress(e.target.checked)}
                  onClick={(e) => e.stopPropagation()}
                />
                <div className="express-addon-info">
                  <div className="express-title">
                    ⚡ 24-Hour Express Priority Delivery (+\$20)
                  </div>
                  <div className="express-desc">
                    Bump your order to the front of our queue for delivery within 24 hours.
                  </div>
                </div>
              </div>

              {/* Final Summary Card */}
              <div className="order-final-summary">
                <div className="summary-row">
                  <span>Base Package:</span>
                  <strong>${pkg.price} USD</strong>
                </div>
                {isExpress && (
                  <div className="summary-row express-row">
                    <span>Express 24h Add-on:</span>
                    <strong>+$20 USD</strong>
                  </div>
                )}
                <div className="summary-row total-row">
                  <span>Total Amount:</span>
                  <span className="final-price">${isExpress ? pkg.price + 20 : pkg.price} USD</span>
                </div>
                <div className="security-guarantee">
                  <ShieldCheck size={16} color="#10b981" />
                  <span>100% Satisfaction Guarantee • Direct Designer Chat • Live Order Countdown</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          {step > 1 ? (
            <button className="btn-secondary" onClick={prevStep} disabled={isSubmitting}>
              <ArrowLeft size={16} /> Back
            </button>
          ) : (
            <a href={pkg.fiverrLink} target="_blank" rel="noopener noreferrer" className="btn-fiverr-link">
              Prefer Fiverr? Order There
            </a>
          )}

          {step < 3 ? (
            <button className="btn-primary" onClick={nextStep}>
              Next Step <ArrowRight size={16} />
            </button>
          ) : (
            <button className="btn-primary btn-submit-order" onClick={handleSubmitOrder} disabled={isSubmitting}>
              {isSubmitting ? 'Creating Your Order...' : 'Confirm & Start Order 🚀'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrderModal;
