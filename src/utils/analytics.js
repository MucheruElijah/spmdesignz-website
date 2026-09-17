// Google Analytics 4 (GA4) Event and Conversion Tracking Utility

/**
 * Send a custom event to Google Analytics 4
 * @param {string} eventName - Standard GA4 event name (e.g. 'generate_lead', 'select_content')
 * @param {object} params - Event parameters
 */
export const trackEvent = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
};

/**
 * Track high-value business leads and inquiries
 * This uses Google's standard 'generate_lead' event so it appears directly
 * under GA4's Key Events / Conversions report.
 * 
 * @param {string} channel - e.g. 'whatsapp', 'fiverr', 'direct_order', 'contact_form'
 * @param {object} details - Additional metadata (service, price, location, etc.)
 */
export const trackLead = (channel, details = {}) => {
  trackEvent('generate_lead', {
    lead_channel: channel,
    event_category: 'engagement',
    event_label: details.label || channel,
    ...details
  });
};
