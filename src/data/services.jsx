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
    aboutSections: [
      {
        title: 'Why a Professional Company Profile is Crucial for Your Business',
        intro: 'Think of your company profile as the curriculum vitae (CV) of your corporation. In competitive tenders, banking reviews, investor pitches, and B2B partnerships, first impressions determine whether your business is shortlisted or overlooked. A professionally written and designed profile communicates stability, credibility, and corporate excellence.',
        items: [
          { label: 'Tender & Procurement Bids', text: 'Meets strict corporate and governmental submission standards with structured capabilities and certifications.' },
          { label: 'Investor & Venture Funding', text: 'Clearly outlines your market opportunity, business model, executive leadership, and financial growth trajectory.' },
          { label: 'Client Acquisition & Trust', text: 'Gives prospective clients an immediate, polished overview of your track record, services, and unique value proposition.' }
        ]
      },
      {
        title: 'Core Sections We Write & Design',
        intro: 'Every business is unique. We tailor the document structure to match your exact industry and goals:',
        items: [
          { label: 'Executive Summary', text: 'Compelling overview of your company background, mission, vision, and core corporate values.' },
          { label: 'Organizational Hierarchy', text: 'Custom-designed organograms and executive leadership biographies.' },
          { label: 'Products & Capabilities', text: 'Detailed service breakdowns with clean typography, iconography, and value propositions.' },
          { label: 'Milestones & Case Studies', text: 'Showcasing key achievements, client logos, completed projects, and awards.' },
          { label: 'Financial Highlights', text: 'Cleanly styled revenue projections, growth statistics, and performance tables.' },
          { label: 'CSR & Contact Details', text: 'Corporate Social Responsibility initiatives, certifications, licenses, and interactive contact info.' }
        ]
      },
      {
        title: 'Why Choose Spmdesignz?',
        items: [
          { label: '10+ Years of Corporate Experience', text: 'Over a decade designing high-converting corporate documents for international businesses.' },
          { label: '100% Bespoke Custom Layouts', text: 'Never generic or cookie-cutter templates. Every page is crafted around your unique brand identity.' },
          { label: 'Print & Digital Dual Optimization', text: 'High-res 300 DPI CMYK with bleeds for professional printing, plus lightweight interactive web PDFs.' },
          { label: 'Fully Editable Source Files', text: 'Delivered in accessible formats like Microsoft Word (.docx), Adobe InDesign, or PowerPoint for future updates.' },
          { label: 'Unlimited Polish & Revisions', text: 'We work closely with you until you are completely satisfied with every detail.' }
        ]
      },
      {
        title: 'What We Need to Get Started',
        intro: 'Getting started is effortless. Simply provide whatever assets you currently have:',
        items: [
          { label: 'Company Logo', text: 'Vector AI, EPS, SVG, or high-resolution transparent PNG.' },
          { label: 'Content / Draft Notes', text: 'Your existing draft, rough bullet points, website link, or notes (we can write and polish the text for you).' },
          { label: 'Brand Guidelines', text: 'Preferred color codes and fonts (if established).' },
          { label: 'Imagery', text: 'Photos of your team, products, or facility (or we can curate licensed high-res stock imagery).' }
        ]
      }
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
      '/portfolio_business_plan_allstate.png',
      '/portfolio_company_profile_oceanscan.jpg',
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
    aboutSections: [
      {
        title: 'Your Visual Identity Starts With a Timeless Logo',
        intro: 'A logo is not merely a piece of artwork—it is the foundation of your company’s entire visual language. A well-designed logo creates instant recognition, sets you apart from competitors, and establishes long-term customer trust across every medium.',
        items: [
          { label: 'Unforgettable First Impression', text: 'Captivate potential customers within seconds with a distinct, balanced visual mark.' },
          { label: 'Scale Flawlessly Everywhere', text: 'Engineered as mathematical vector geometry that scales seamlessly from a mobile app favicon to billboard size without blurriness.' },
          { label: 'Full Commercial Protection', text: '100% original designs crafted from scratch, ready for trademark registration.' }
        ]
      },
      {
        title: 'What You Receive in Our Branding Packages',
        items: [
          { label: 'Multiple Unique Concepts', text: 'Different creative directions sketched and digitized for you to explore and choose from.' },
          { label: 'Complete Vector Master Pack', text: 'Includes Adobe Illustrator (AI), Scalable Vector Graphics (SVG), EPS, and print-ready PDF.' },
          { label: 'Digital Web Exports', text: 'High-resolution transparent PNGs, high-contrast dark/light variations, and social media avatar crops.' },
          { label: 'Brand Color Guide', text: 'Exact color breakdowns including HEX (web), RGB (screens), CMYK (print), and Pantone codes.' },
          { label: 'Typography Guidelines', text: 'Recommended primary and secondary font pairings to keep all company communications cohesive.' }
        ]
      },
      {
        title: 'Design Aesthetics We Specialize In',
        items: [
          { label: 'Minimalist & Modern', text: 'Clean lines, balanced whitespace, and iconic simplicity.' },
          { label: 'Wordmark & Monograms', text: 'Custom typographic letterforms and luxury initials.' },
          { label: 'Geometric & Abstract', text: 'Smart visual symbols representing tech, fintech, finance, and corporate strength.' },
          { label: 'Emblem & Heritage', text: 'Sophisticated crests and badges for real estate, automotive, legal, and hospitality.' }
        ]
      }
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
    samplePdfUrl: '/samples/minimalist_logo_showcase.pdf',
    portfolioImages: [
      '/portfolio_minimalist_logos_grid.png',
      '/portfolio_logo_design_new.png',
      '/portfolio_logo_design.jpg'
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
    aboutSections: [
      {
        title: 'Elevate Every Document Your Clients & Partners Read',
        intro: 'In business, presentation is everything. Sending a poorly formatted contract with misaligned logos or broken page numbering damages your credibility. We turn routine office collaterals into branded, high-prestige assets that inspire confidence and respect.',
        items: [
          { label: 'Corporate Legal Agreements', text: 'Structured sale agreements, service contracts, lease agreements, and partnership deeds with signature boxes and seal positions.' },
          { label: 'Flawless Microsoft Word Formatting', text: 'We resolve formatting chaos, multi-section page numbering, table styling, and header/footer alignment in MS Word.' },
          { label: 'Complete Stationery Suite', text: 'Custom letterheads, corporate invoices, receipt templates, and quotation sheets in editable formats.' }
        ]
      },
      {
        title: 'Problems We Solve in Microsoft Word (.docx)',
        items: [
          { label: 'Broken Section Breaks & Page Numbers', text: 'Configuring Roman numerals for front matter (i, ii, iii) and standard Arabic numerals (1, 2, 3) for body chapters.' },
          { label: 'Misaligned Headers, Footers & Logos', text: 'Ensuring your company logo and header lines remain perfectly aligned across portrait and landscape pages.' },
          { label: 'Unstable Formatting & Spacing', text: 'Standardizing heading styles, bullet hierarchies, margins, line spacing, and automated Table of Contents.' },
          { label: 'PDF to Word Recreation', text: 'Converting static or scanned PDF contracts into fully editable, clean Microsoft Word documents.' }
        ]
      }
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
    samplePdfUrl: '/samples/agreement_contract_branding_showcase.pdf',
    portfolioImages: [
      '/portfolio_agreement_moco.png',
      '/portfolio_ms_word_formatting.png',
      '/portfolio_agreement_branding.png'
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
    aboutSections: [
      {
        title: 'Turn Followers Into Clients with Consistent Branding',
        intro: 'Inconsistent graphics and low-quality posts hurt your brand credibility. A cohesive social media kit ensures that every post, story, and banner you publish immediately communicates authority and premium quality.',
        items: [
          { label: 'Multi-Platform Consistency', text: 'Unified color palettes, typography, and layout styling across LinkedIn, Instagram, Facebook, and YouTube.' },
          { label: 'Editable Canva & Photoshop Templates', text: 'Drag-and-drop templates your team can easily update with new text, products, or photos in seconds.' },
          { label: 'Higher Engagement & Click-Throughs', text: 'Eye-catching layouts engineered to stand out in crowded feeds and drive audience interaction.' }
        ]
      },
      {
        title: 'Assets Included in Your Kit',
        items: [
          { label: 'Profile Avatars & Watermarks', text: 'Optimized circular and square branding marks for social accounts.' },
          { label: 'Company Cover Banners', text: 'Custom-sized header banners for LinkedIn company pages, Facebook business profiles, and YouTube channels.' },
          { label: 'Post & Carousel Templates', text: 'Modern templates for quotes, service announcements, promotional offers, and educational carousels.' },
          { label: 'Story & Reel Backgrounds', text: 'Vertical 9:16 templates for Instagram Stories, TikTok, and Facebook Reels.' },
          { label: 'Highlight Cover Icons', text: 'Custom vector icons for Instagram story highlight categories.' }
        ]
      }
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
