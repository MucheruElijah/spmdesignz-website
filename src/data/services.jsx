import React from 'react';
import { Layout, PenTool, Briefcase, Share2 } from 'lucide-react';

export const servicesData = [
  {
    id: 'flyer-design',
    title: 'Flyer & Poster Design',
    shortDescription: 'Captivating and professional flyers for events, corporate marketing, and promotions.',
    icon: <Layout size={40} className="service-icon" />,
    fullDescription: 'Make a lasting impression with our custom flyer designs. Whether you are promoting a one-time corporate event, launching a new product, or running a large-scale marketing campaign, our flyers are engineered to grab immediate attention and communicate your value proposition clearly.',
    fiverrUrl: 'https://www.fiverr.com/s/rEV65Gy',
    features: [
      'Custom Layouts tailored to your brand guidelines',
      'High-resolution, print-ready files (300 DPI CMYK)',
      'Web-optimized versions for social media sharing',
      'Editable Source Files (Photoshop PSD / Illustrator AI)',
      'Quick turnaround times with unlimited revisions'
    ],
    process: [
      { step: '1', title: 'Consultation & Assets', desc: 'We gather your requirements, event details, copy, and branding assets to understand your exact vision.' },
      { step: '2', title: 'Drafting & Visual Hierarchy', desc: 'Our team crafts initial concepts focusing on visual hierarchy, typography, and captivating imagery.' },
      { step: '3', title: 'Final Delivery & Polish', desc: 'After your feedback and revisions, we deliver high-resolution print and web files ready for immediate distribution.' }
    ],
    faqs: [
      { q: 'What file formats will I receive?', a: 'You will receive print-ready PDF files (with bleeds/trim marks), as well as high-resolution PNG and JPG formats for digital use. Source files (PSD/AI) are also included in Standard and Premium tiers.' },
      { q: 'How many revisions do I get?', a: 'We offer unlimited revisions on our Standard and Premium packages to ensure you are 100% satisfied with the final design.' },
      { q: 'Can you use my company photos and logo?', a: 'Absolutely! We incorporate any high-quality photos, logos, or assets you provide, ensuring they blend seamlessly into the layout.' }
    ],
    portfolioImages: [
      '/portfolio_flyer_design.jpg',
      '/portfolio_social_media_banners.png',
      '/portfolio_social_media.jpg'
    ],
    packages: {
      basic: {
        name: 'Basic Single Flyer',
        price: 25,
        deliveryDays: 2,
        revisions: '3 Revisions',
        description: 'Single-sided high-resolution promotional flyer design ready for print and digital distribution.',
        features: [
          '1 Custom Single-Sided Concept',
          'Print-Ready PDF (300 DPI CMYK)',
          'Social Media & Web Optimized PNG/JPG',
          '3 Rounds of Revisions',
          '2-Day Delivery'
        ]
      },
      standard: {
        name: 'Standard Double-Sided',
        price: 45,
        deliveryDays: 2,
        revisions: 'Unlimited Revisions',
        description: 'Double-sided corporate flyer or event poster with full typography styling and source files.',
        features: [
          '2-Sided Custom Flyer Design',
          'Print-Ready 300 DPI CMYK PDF (All Sizes: A4, A5, Letter)',
          'Editable Source File (PSD / AI)',
          'Web / Instagram / Facebook Versions',
          'Unlimited Revisions',
          '2-Day Delivery'
        ]
      },
      premium: {
        name: 'Premium Multi-Page Pack',
        price: 70,
        deliveryDays: 3,
        revisions: 'Unlimited Revisions',
        description: 'Tri-fold, Bi-fold, or Multi-page promotional brochure designed to impress investors & clients.',
        features: [
          'Bi-Fold or Tri-Fold Full Layout',
          'Structured Product/Service Showcase',
          'High-Resolution Print PDF + Web PDF',
          'Full Editable Source Files (AI/PSD)',
          'Commercial Usage Rights',
          '3-Day Delivery & VIP Support'
        ]
      }
    }
  },
  {
    id: 'logo-design',
    title: 'Logo Design & Brand Identity',
    shortDescription: 'Modern, memorable logos that perfectly encapsulate your brand identity.',
    icon: <PenTool size={40} className="service-icon" />,
    fullDescription: 'Your logo is the cornerstone of your business. We craft timeless, versatile, and memorable logos that resonate with your target audience and stand the test of time across print, web, and physical signage.',
    fiverrUrl: 'https://www.fiverr.com/s/rEV65Gy',
    features: [
      'Multiple unique initial design concepts',
      'Vector source files (AI, EPS, SVG, PDF)',
      'High-resolution transparent PNG and JPG exports',
      'Brand color palette and typography recommendations',
      'Full commercial copyrights and ownership'
    ],
    process: [
      { step: '1', title: 'Brand Discovery', desc: 'We dive deep into your brand values, target audience, industry competitors, and preferred visual aesthetics.' },
      { step: '2', title: 'Concept Creation', desc: 'We sketch and digitize several unique logo concepts for you to review and choose from.' },
      { step: '3', title: 'Refinement & Handoff', desc: 'We polish the chosen concept and deliver a complete master package of vector files and brand guidelines.' }
    ],
    faqs: [
      { q: 'Will I own the full copyright to my logo?', a: 'Yes! Once the final payment is made and files are delivered, you hold 100% full copyright ownership of the logo design.' },
      { q: 'What is a vector file and why do I need it?', a: 'A vector file (AI, EPS, SVG) allows your logo to be scaled infinitely to any size—from a business card to a giant billboard—without losing crisp quality.' },
      { q: 'How long does the logo design process take?', a: 'Initial concepts are delivered within 2-3 business days, with express 24h options available.' }
    ],
    portfolioImages: [
      '/portfolio_logo_design.jpg',
      '/portfolio_logo_design_new.png',
      '/portfolio_flyer_design.jpg'
    ],
    packages: {
      basic: {
        name: 'Starter Logo Concept',
        price: 25,
        deliveryDays: 3,
        revisions: '2 Revisions',
        description: 'Ideal for early startups & small businesses needing a clean, professional logo mark.',
        features: [
          '2 Unique Logo Concepts',
          'High-Resolution PNG (Transparent Background)',
          'High-Resolution JPG Preview',
          '2 Rounds of Revisions',
          '3-Day Delivery',
          'Commercial Rights'
        ]
      },
      standard: {
        name: 'Standard Brand Logo',
        price: 45,
        deliveryDays: 3,
        revisions: 'Unlimited Revisions',
        description: 'Our bestselling package with full vector source files for print and web scaling.',
        features: [
          '3 Unique Logo Concepts',
          'Vector Source Files (AI, EPS, SVG)',
          'Transparent PNG & High-Res JPG',
          'Color Palette & Font Specifications',
          'Unlimited Revisions',
          '3-Day Delivery'
        ]
      },
      premium: {
        name: 'Complete Brand Identity',
        price: 80,
        deliveryDays: 2,
        revisions: 'Unlimited Revisions',
        description: 'The ultimate identity solution with social media kit, stationery, and priority turnaround.',
        features: [
          '5 Premium Logo Concepts',
          'Complete Vector & Source Pack (AI, EPS, SVG, PDF, PNG)',
          'Social Media Kit (Avatars + Banners)',
          'Business Card & Letterhead Design',
          'Full Brand Style Guide & Color Codes',
          'Priority 2-Day Delivery',
          'VIP Designer Support & Unlimited Revisions'
        ]
      }
    }
  },
  {
    id: 'office-branding',
    title: 'Legal Documents, Agreements & Office Branding',
    shortDescription: 'Elevate your professional image with custom agreement designs, contracts, and formatted MS Word documents.',
    icon: <Briefcase size={40} className="service-icon" />,
    fullDescription: 'Stop presenting your business contracts on plain paper! Elevate your brand image instantly with custom-designed, fully branded corporate agreements, annual reports, and legal documents. Additionally, our team specializes in transforming cluttered, messy MS Word documents into polished masterpieces. With over 10 years of experience, we fix misaligned logos, perfect headers and footers, and ensure flawless page numbering.',
    fiverrUrl: 'https://www.fiverr.com/spmdesignz/create-agreement-design-contract-designs-annual-reports-and-realtor-agreement',
    features: [
      'Agreement Designs & Contract Branding',
      'Realtor & Sales Agreement Templates',
      'Professional Microsoft Word Formatting (MS Word)',
      'Headers, Footers, and Page Numbering Setup',
      'Letterheads, Receipts, and Invoices',
      'Company Profiles & Annual Reports Design',
      'PDF to Word Conversions & Editable Templates'
    ],
    process: [
      { step: '1', title: 'Requirements & Document Ingestion', desc: 'We collect your existing logo, text draft, branding colors, and specific document specs.' },
      { step: '2', title: 'Design & Dynamic Formatting', desc: 'We design clean, professional templates or meticulously format your existing messy Word documents to perfection.' },
      { step: '3', title: 'Handoff & Editable Delivery', desc: 'Documents are refined and delivered in accessible, fully editable formats like Microsoft Word (.docx) and print-ready PDF.' }
    ],
    faqs: [
      { q: 'Can I edit the documents myself in Microsoft Word?', a: 'Yes! We provide fully editable Microsoft Word (.docx) files so your team can easily update text, change prices, and add client details daily without breaking the layout.' },
      { q: 'Can you fix existing messy Word documents and broken page numbering?', a: 'Absolutely! We specialize in fixing broken formatting, unaligned logos, inconsistent headers/footers, and corrupted page numbers in existing documents.' },
      { q: 'Do you design sales agreements and realtor contracts?', a: 'Yes, we create custom branded sale agreements, lease contracts, partnership documents, and corporate policies with professional fillable fields and signature sections.' }
    ],
    portfolioImages: [
      '/portfolio_agreement_branding.png',
      '/portfolio_social_media_banners.png',
      '/portfolio_flyer_design.jpg'
    ],
    packages: {
      basic: {
        name: 'Basic Document Fix',
        price: 20,
        deliveryDays: 2,
        revisions: '2 Revisions',
        description: 'Header/Footer setup, page numbering, and logo alignment for documents up to 10 pages.',
        features: [
          'Up to 10 Pages Formatted',
          'Header & Footer Alignment',
          'Flawless Page Numbering Setup',
          'Logo & Precision Positioning',
          'Delivered as Editable Word (.docx) & PDF',
          '2-Day Delivery'
        ]
      },
      standard: {
        name: 'Standard Agreement & Contract',
        price: 45,
        deliveryDays: 2,
        revisions: 'Unlimited Revisions',
        description: 'Custom branded agreement design or contract layout up to 5 pages with source files.',
        features: [
          'Custom Branded Agreement / Contract Layout',
          'Up to 5 Pages Designed & Formatted',
          'Letterhead Header/Footer Integration',
          'Signature & Signatory Stamp Sections',
          'Editable Word (.docx) + Print PDF',
          'Unlimited Revisions & 2-Day Delivery'
        ]
      },
      premium: {
        name: 'Premium Annual Report & Suite',
        price: 60,
        deliveryDays: 3,
        revisions: 'Unlimited Revisions',
        description: 'Up to 10 pages of extensive legal documents, annual reports, or multi-page corporate agreements.',
        features: [
          'Up to 10 Pages Designed & Formatted',
          'Front & Back Cover Branded Layout',
          'Custom Letterhead + Invoice + Agreement Template',
          'Dynamic Table of Contents & Typography Hierarchy',
          'Includes Editable Word + PDF + Source Files',
          '3-Day Delivery & Unlimited Polish'
        ]
      }
    }
  },
  {
    id: 'social-media-kits',
    title: 'Social Media Kits & Banners',
    shortDescription: 'Cohesive and vibrant social media assets designed to boost brand engagement.',
    icon: <Share2 size={40} className="service-icon" />,
    fullDescription: 'Establish a powerful, unified visual presence across all major social networks. We design tailored social media kits that ensure your brand looks modern, credible, and engaging on Instagram, Facebook, LinkedIn, Twitter (X), and YouTube.',
    fiverrUrl: 'https://www.fiverr.com/s/rEV65Gy',
    features: [
      'Custom profile avatars and branded cover banners',
      'Themed post templates (Instagram, Facebook, LinkedIn)',
      'Story and Reel background designs',
      'Highlight icons and watermark branding elements',
      'Editable Canva and Photoshop source files'
    ],
    process: [
      { step: '1', title: 'Platform Strategy', desc: 'We identify which platforms matter most to your business and define the cohesive visual aesthetic.' },
      { step: '2', title: 'Asset Design', desc: 'We create tailored templates, banners, and icons that perfectly align with your brand identity.' },
      { step: '3', title: 'Delivery & Guidelines', desc: 'You receive all digital assets perfectly sized for each platform, along with instructions on how to use and edit them.' }
    ],
    faqs: [
      { q: 'Which platforms do you design for?', a: 'We design for all major platforms including Instagram, Facebook, LinkedIn, Twitter (X), YouTube, and TikTok.' },
      { q: 'Are the post templates editable?', a: 'Yes! We provide templates in Canva or Photoshop so your team can easily update text and images in seconds.' },
      { q: 'Do you provide cover banners for LinkedIn and Facebook?', a: 'Yes, our Standard and Premium packages include perfectly formatted header banners for your company pages and personal profiles.' }
    ],
    portfolioImages: [
      '/portfolio_social_media_banners.png',
      '/portfolio_agreement_branding.png',
      '/portfolio_social_media.jpg'
    ],
    packages: {
      basic: {
        name: 'Starter Social Pack',
        price: 30,
        deliveryDays: 2,
        revisions: '2 Revisions',
        description: 'Essential branding assets to give your Instagram and Facebook an instant professional upgrade.',
        features: [
          '3 Custom Themed Post Templates',
          'Profile Avatars & Watermarks',
          'High-Res PNG & JPG Exports',
          '2-Day Delivery'
        ]
      },
      standard: {
        name: 'Complete Multi-Platform Kit',
        price: 60,
        deliveryDays: 3,
        revisions: 'Unlimited Revisions',
        description: 'Unified visual presence across Instagram, Facebook, LinkedIn, Twitter, and YouTube.',
        features: [
          '6 Themed Post Templates (Feed & Carousel)',
          '3 Story / Reel Background Templates',
          'Cover Banners (Facebook, LinkedIn, X, YouTube)',
          'Highlight Icons & Profile Avatars',
          'Editable Canva / PSD Source Files',
          '3-Day Delivery & Unlimited Revisions'
        ]
      },
      premium: {
        name: 'Monthly Brand Growth Suite',
        price: 100,
        deliveryDays: 4,
        revisions: 'Unlimited Revisions',
        description: 'A full month of cohesive visual content ready for daily publishing and ad campaigns.',
        features: [
          '12 Premium Themed Templates (Feed & Stories)',
          'Ad Banner Campaign Set (Multiple Dimensions)',
          'Complete Banner Package for all Social Channels',
          'Custom Highlight Story Icons',
          'Full Editable Source Files (PSD + Canva)',
          'Priority 4-Day Turnaround'
        ]
      }
    }
  }
];
