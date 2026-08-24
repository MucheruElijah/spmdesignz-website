import React from 'react';
import { BookOpen, PenTool, Briefcase, Share2 } from 'lucide-react';

export const servicesData = [
  {
    id: 'company-profile',
    title: 'Company Profile, Business Plan & Annual Reports',
    shortDescription: 'Professional company profile writing, corporate business plans, and annual report designs that command trust and win clients.',
    icon: <BookOpen size={40} className="service-icon" />,
    fullDescription: 'Win major contracts, attract investors, and establish immediate corporate authority. We write, structure, and design high-impact Company Profiles, Executive Business Plans, and Annual Reports. Whether you are submitting a government tender, pitching to venture capitalists, or presenting to enterprise clients, we transform your achievements into a persuasive, beautifully designed document.',
    fiverrUrl: 'https://www.fiverr.com/spmdesignz/write-and-design-your-company-profile',
    features: [
      'Professional Copywriting & Content Structuring',
      'Custom Cover Page & Executive Summary Design',
      'Organization Chart (Organogram) & Team Profiles',
      'Product / Service Catalog & Portfolio Highlights',
      'Financial Charts, Revenue Projections & Market Data',
      'Print-Ready 300 DPI CMYK PDF with Bleeds',
      'Interactive Digital PDF with Clickable Links',
      'Fully Editable Source Files (MS Word / InDesign / PowerPoint)'
    ],
    process: [
      { step: '1', title: 'Content & Information Ingestion', desc: 'We collect your business details, mission, vision, services, team info, and existing branding assets.' },
      { step: '2', title: 'Copywriting & Graphic Structuring', desc: 'Our team writes compelling copy, formats organograms, and crafts bespoke infographic layouts tailored to your industry.' },
      { step: '3', title: 'Review, Polish & Source Handoff', desc: 'We refine the layout with your feedback and deliver high-res print files, web-interactive PDFs, and fully editable source documents.' }
    ],
    faqs: [
      { q: 'Can you help write the content if I only have basic notes?', a: 'Yes! We specialize in both copywriting and design. You can provide rough bullet points or your existing draft, and our team will research, write, and polish professional corporate content for your profile.' },
      { q: 'Can I edit the document in Microsoft Word or InDesign later?', a: 'Absolutely. We provide fully editable files (Word .docx, Adobe InDesign, or PowerPoint) so you can easily update team members, stats, and achievements as your company grows.' },
      { q: 'Is this suitable for corporate tender bids and investor pitches?', a: 'Yes! Our company profiles and business plans are engineered specifically to meet strict international standards for corporate procurement, banking tenders, and investor presentations.' }
    ],
    portfolioImages: [
      '/portfolio_company_profile_oceanscan.jpg',
      '/portfolio_business_plan_allstate.png',
      '/portfolio_financial_projections_report.png'
    ],
    packages: {
      basic: {
        name: 'Starter Profile (Up to 4 Pages)',
        price: 40,
        deliveryDays: 3,
        revisions: '3 Revisions',
        description: 'Clean corporate layout covering About Us, Mission/Vision, Services & Contact info for startups.',
        features: [
          'Up to 4 Pages Formatted & Designed',
          'Custom Cover Page + About + Services',
          'High-Res Print PDF + Interactive Web PDF',
          '3 Rounds of Revisions',
          '3-Day Delivery'
        ]
      },
      standard: {
        name: 'Executive Company Profile (Up to 10 Pages)',
        price: 80,
        deliveryDays: 4,
        revisions: 'Unlimited Revisions',
        description: 'Comprehensive company profile or business plan with organization chart, infographics, and content polish.',
        features: [
          'Up to 10 Pages Designed & Written',
          'Executive Summary, Organogram & Capabilities',
          'Custom Infographics, Tables & Charts',
          'Editable Word/InDesign/PowerPoint + Print PDF',
          'Unlimited Revisions',
          '4-Day Delivery'
        ]
      },
      premium: {
        name: 'Complete Corporate Deck (Up to 20 Pages)',
        price: 150,
        deliveryDays: 5,
        revisions: 'Unlimited Revisions',
        description: 'Full corporate annual report, investor business plan, or comprehensive company profile with market data.',
        features: [
          'Up to 20 Pages Complete Layout',
          'Market Research & Financial Tables Styling',
          'Full Source Files (InDesign / Word / AI / PDF)',
          'Print CMYK 300 DPI + Digital Interactive PDF',
          'VIP Priority Support & Unlimited Polish',
          '5-Day Turnaround'
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
      '/portfolio_company_profile_oceanscan.jpg'
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
      '/portfolio_business_plan_allstate.png'
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
