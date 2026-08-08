import React from 'react';
import { Layout, PenTool, Briefcase, Share2 } from 'lucide-react';

export const servicesData = [
  {
    id: 'flyer-design',
    title: 'Flyer Design',
    shortDescription: 'Captivating and professional flyers for events, corporate marketing, and promotions.',
    icon: <Layout size={40} className="service-icon" />,
    fullDescription: 'Make a lasting impression with our custom flyer designs. Whether you are promoting a one-time event, launching a new product, or running a corporate marketing campaign, our flyers are designed to grab attention and communicate your message clearly.',
    features: [
      'Custom Layouts tailored to your brand guidelines',
      'High-resolution, print-ready files',
      'Web-optimized versions for social sharing',
      'Quick turnaround times'
    ]
  },
  {
    id: 'logo-design',
    title: 'Logo Design',
    shortDescription: 'Modern, memorable logos that perfectly encapsulate your brand identity.',
    icon: <PenTool size={40} className="service-icon" />,
    fullDescription: 'Your logo is the face of your business. We craft timeless, versatile, and memorable logos that resonate with your target audience and stand the test of time.',
    features: [
      'Multiple initial design concepts',
      'Vector source files (AI, EPS, SVG)',
      'High-resolution PNG and JPG exports',
      'Brand color palette and typography recommendations'
    ]
  },
  {
    id: 'office-branding',
    title: 'Office Branding',
    shortDescription: 'Elevate your professional image with fully branded official collaterals.',
    icon: <Briefcase size={40} className="service-icon" />,
    fullDescription: 'Stop presenting your legal documents on plain paper! Elevate your brand image instantly with custom-designed, fully branded corporate collaterals. Professionalism starts the second your client looks at your document.',
    features: [
      'Letterheads, Receipts, and Invoices',
      'Company Profiles and Business Plans',
      'Agreement and Contract Designs',
      'Annual Reports Formatting and Design'
    ]
  },
  {
    id: 'social-media-kits',
    title: 'Social Media Kits',
    shortDescription: 'Cohesive and vibrant social media assets designed to boost engagement.',
    icon: <Share2 size={40} className="service-icon" />,
    fullDescription: 'Establish a powerful and cohesive presence across all major social networks. We design tailored social media kits that ensure your brand looks professional, modern, and engaging on every platform.',
    features: [
      'Custom profile and cover photos',
      'Themed post templates (Instagram, Facebook, LinkedIn)',
      'Story and Reel background designs',
      'Highlight icons and branding elements'
    ]
  }
];
