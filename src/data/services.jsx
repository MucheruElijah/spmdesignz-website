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
    ],
    process: [
      { step: '1', title: 'Consultation', desc: 'We gather your requirements, event details, and branding guidelines to understand your vision.' },
      { step: '2', title: 'Drafting & Design', desc: 'Our team crafts initial concepts focusing on visual hierarchy, typography, and captivating imagery.' },
      { step: '3', title: 'Final Delivery', desc: 'After your feedback and revisions, we deliver high-resolution print and web files ready for distribution.' }
    ],
    faqs: [
      { q: 'What file formats will I receive?', a: 'You will receive print-ready PDF files, as well as high-resolution PNG and JPG formats for digital use. Source files can also be provided upon request.' },
      { q: 'How many revisions do I get?', a: 'We typically offer up to 3 rounds of revisions to ensure you are 100% satisfied with the final flyer design.' },
      { q: 'Can you use my company photos?', a: 'Absolutely! We can incorporate any high-quality photos, logos, or assets you provide.' }
    ],
    portfolioImages: [
      '/portfolio_flyer_design_1786184135949.jpg',
      '/portfolio_social_media_1786184156682.jpg',
      '/portfolio_logo_design_1786184146882.jpg'
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
    ],
    process: [
      { step: '1', title: 'Brand Discovery', desc: 'We dive deep into your brand values, target audience, and industry competitors.' },
      { step: '2', title: 'Concept Creation', desc: 'We sketch and digitize several unique logo concepts for you to choose from.' },
      { step: '3', title: 'Refinement & Handoff', desc: 'We polish the chosen concept and deliver a complete package of vector files and brand guidelines.' }
    ],
    faqs: [
      { q: 'Will I own the copyright to my logo?', a: 'Yes! Once the final payment is made and the files are handed over, you hold full copyright ownership of the logo design.' },
      { q: 'What is a vector file and why do I need it?', a: 'A vector file (like SVG or AI) allows your logo to be scaled to any size—from a business card to a billboard—without ever losing quality or becoming pixelated.' },
      { q: 'How long does the logo design process take?', a: 'Initial concepts are usually delivered within 3-5 business days, depending on the complexity of the project.' }
    ],
    portfolioImages: [
      '/portfolio_logo_design_1786184146882.jpg',
      '/portfolio_flyer_design_1786184135949.jpg',
      '/portfolio_social_media_1786184156682.jpg'
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
    ],
    process: [
      { step: '1', title: 'Requirements Gathering', desc: 'We collect your existing logo, brand colors, and the specific documents you need branded.' },
      { step: '2', title: 'Template Design', desc: 'We design clean, professional, and easily editable templates tailored to your business operations.' },
      { step: '3', title: 'Finalization', desc: 'Templates are refined and delivered in accessible formats like Word, PDF, or Illustrator.' }
    ],
    faqs: [
      { q: 'Can I edit the documents myself?', a: 'Yes, we provide editable formats like Microsoft Word for letterheads and invoices so you can use them daily.' },
      { q: 'Do you write the content for company profiles?', a: 'We primarily focus on the visual design and formatting. However, we can help structure your existing content for maximum impact.' },
      { q: 'Do you print the materials?', a: 'We provide print-ready digital files. We can also liaise with your chosen print shop to ensure the specs are perfect.' }
    ],
    portfolioImages: [
      '/portfolio_social_media_1786184156682.jpg',
      '/portfolio_logo_design_1786184146882.jpg',
      '/portfolio_flyer_design_1786184135949.jpg'
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
    ],
    process: [
      { step: '1', title: 'Platform Strategy', desc: 'We identify which platforms matter most to your business and define the visual direction.' },
      { step: '2', title: 'Asset Design', desc: 'We create cohesive templates, banners, and icons that perfectly align with your brand identity.' },
      { step: '3', title: 'Delivery & Guidelines', desc: 'You receive all digital assets perfectly sized for each platform, along with instructions on how to use them.' }
    ],
    faqs: [
      { q: 'Which platforms do you design for?', a: 'We design for all major platforms including Instagram, Facebook, LinkedIn, Twitter (X), and YouTube.' },
      { q: 'Do you manage my social media accounts?', a: 'This service is purely for the visual design of your social media assets. We provide you with the beautiful tools you need to succeed.' },
      { q: 'Are the post templates editable?', a: 'Yes! We can provide templates in Canva or Photoshop so your team can easily update text and images in the future.' }
    ],
    portfolioImages: [
      '/portfolio_social_media_1786184156682.jpg',
      '/portfolio_flyer_design_1786184135949.jpg',
      '/portfolio_logo_design_1786184146882.jpg'
    ]
  }
];
