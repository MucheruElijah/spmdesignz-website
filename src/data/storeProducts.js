export const storeCategories = [
  { id: 'all', name: 'All Services' },
  { id: 'company-profile', name: 'Company Profiles & Business Plans' },
  { id: 'logo-design', name: 'Logo Design' },
  { id: 'office-branding', name: 'Office Branding & Formatting' },
  { id: 'social-media-kits', name: 'Social Media Kits' }
];

export const storePackages = [
  // --- LOGO DESIGN ---
  {
    id: 'logo-starter',
    categoryId: 'logo-design',
    categoryName: 'Logo Design',
    title: 'Starter Logo Concept',
    badge: null,
    price: 25,
    deliveryDays: 3,
    shortDescription: 'Ideal for early startups & small businesses needing a clean, professional logo.',
    deliverables: [
      '2 Custom Logo Concepts',
      'High-Resolution PNG (Transparent Background)',
      'High-Resolution JPG Preview',
      '2 Rounds of Revisions',
      '3-Day Delivery',
      'Commercial Usage Rights'
    ],
    fiverrLink: 'https://www.fiverr.com/s/rEV65Gy',
    recommended: false
  },
  {
    id: 'logo-standard',
    categoryId: 'logo-design',
    categoryName: 'Logo Design',
    title: 'Standard Brand Logo Package',
    badge: 'Most Popular',
    price: 45,
    deliveryDays: 3,
    shortDescription: 'Our bestselling package with full vector source files for print and web scaling.',
    deliverables: [
      '3 Unique Logo Concepts',
      'Vector Source Files (AI, EPS, SVG)',
      'Transparent PNG & High-Res JPG',
      'Color Palette & Font Specifications',
      'Unlimited Revisions',
      '3-Day Delivery',
      'Full Commercial Copyrights'
    ],
    fiverrLink: 'https://www.fiverr.com/s/rEV65Gy',
    recommended: true
  },
  {
    id: 'logo-premium',
    categoryId: 'logo-design',
    categoryName: 'Logo Design',
    title: 'Complete Brand Identity Suite',
    badge: 'Best Value',
    price: 80,
    deliveryDays: 2,
    shortDescription: 'The ultimate identity solution with social media kit, stationery, and priority turnaround.',
    deliverables: [
      '5 Premium Logo Concepts',
      'Complete Vector & Source Pack (AI, EPS, SVG, PDF, PNG)',
      'Social Media Kit (Avatars + Banners)',
      'Business Card & Letterhead Design',
      'Full Brand Style Guide & Color Codes',
      'Priority 2-Day Delivery',
      'VIP Designer Support & Unlimited Revisions'
    ],
    fiverrLink: 'https://www.fiverr.com/s/rEV65Gy',
    recommended: false
  },

  // --- OFFICE BRANDING & MS WORD ---
  {
    id: 'office-doc-fix',
    categoryId: 'office-branding',
    categoryName: 'Office Branding & Formatting',
    title: 'MS Word Document & Header/Footer Fix',
    badge: null,
    price: 20,
    deliveryDays: 2,
    shortDescription: 'Fix messy page numbering, broken headers/footers, and misaligned logos.',
    deliverables: [
      'Up to 10 Pages Formatted',
      'Header & Footer Alignment',
      'Flawless Page Numbering Setup',
      'Logo & Graphic Precision Positioning',
      'Delivered as Editable Word (.docx) & PDF',
      '2-Day Delivery'
    ],
    fiverrLink: 'https://www.fiverr.com/spmdesignz/professionally-format-microsoft-word-headers-footers-and-page-numbering',
    recommended: false
  },
  {
    id: 'office-executive-template',
    categoryId: 'office-branding',
    categoryName: 'Office Branding & Formatting',
    title: 'Executive Word Template & Long Doc',
    badge: 'Most Popular',
    price: 45,
    deliveryDays: 2,
    shortDescription: 'Meticulous corporate document formatting with branded cover, letterhead, and dynamic TOC.',
    deliverables: [
      'Up to 25 Pages Formatted',
      'Custom Branded Letterhead Template',
      'Clickable / Dynamic Table of Contents',
      'Corporate Typography & Spacing Hierarchy',
      'Callout Boxes & Tables Stylized',
      'Editable Word (.docx) + Print PDF',
      '2-Day Delivery & 3 Revisions'
    ],
    fiverrLink: 'https://www.fiverr.com/spmdesignz/professionally-format-microsoft-word-headers-footers-and-page-numbering',
    recommended: true
  },
  {
    id: 'office-corporate-suite',
    categoryId: 'office-branding',
    categoryName: 'Office Branding & Formatting',
    title: 'Complete Corporate Collateral Pack',
    badge: 'Full Suite',
    price: 75,
    deliveryDays: 3,
    shortDescription: 'Complete suite of official branded business collaterals and contract templates.',
    deliverables: [
      'Custom Letterhead + Invoice + Receipt Templates',
      'Branded Contract / Agreement Layout',
      'Company Profile Formatting (up to 15 pages)',
      'Email Signature Graphic Header',
      'Fully Editable Word + Vector Source Files',
      '3-Day Turnaround & Unlimited Polish'
    ],
    fiverrLink: 'https://www.fiverr.com/s/rEV65Gy',
    recommended: false
  },

  // --- COMPANY PROFILES & BUSINESS PLANS ---
  {
    id: 'profile-starter',
    categoryId: 'company-profile',
    categoryName: 'Company Profiles & Business Plans',
    title: 'Starter Profile (Up to 4 Pages)',
    badge: null,
    price: 40,
    deliveryDays: 3,
    shortDescription: 'Clean corporate layout covering About Us, Mission/Vision, Services & Contact info for startups.',
    deliverables: [
      'Up to 4 Pages Formatted & Designed',
      'Custom Cover Page + About Us + Services',
      'High-Resolution Print PDF + Interactive Web PDF',
      '3 Rounds of Revisions',
      '3-Day Delivery'
    ],
    fiverrLink: 'https://www.fiverr.com/spmdesignz/write-and-design-your-company-profile',
    recommended: false
  },
  {
    id: 'profile-executive',
    categoryId: 'company-profile',
    categoryName: 'Company Profiles & Business Plans',
    title: 'Executive Company Profile (Up to 10 Pages)',
    badge: 'Most Popular',
    price: 80,
    deliveryDays: 4,
    shortDescription: 'Comprehensive company profile or business plan with organization chart, infographics, and content polish.',
    deliverables: [
      'Up to 10 Pages Designed & Written',
      'Executive Summary, Organogram & Capabilities',
      'Custom Infographics, Tables & Charts',
      'Editable Word/InDesign/PowerPoint + Print PDF',
      'Unlimited Revisions',
      '4-Day Delivery'
    ],
    fiverrLink: 'https://www.fiverr.com/spmdesignz/write-and-design-your-company-profile',
    recommended: true
  },
  {
    id: 'profile-corporate-deck',
    categoryId: 'company-profile',
    categoryName: 'Company Profiles & Business Plans',
    title: 'Complete Corporate Deck (Up to 20 Pages)',
    badge: 'Enterprise',
    price: 150,
    deliveryDays: 5,
    shortDescription: 'Full corporate annual report, investor business plan, or comprehensive company profile with market data.',
    deliverables: [
      'Up to 20 Pages Complete Layout',
      'Market Research & Financial Tables Styling',
      'Full Source Files (InDesign / Word / AI / PDF)',
      'Print CMYK 300 DPI + Digital Interactive PDF',
      'VIP Priority Support & Unlimited Polish',
      '5-Day Turnaround'
    ],
    fiverrLink: 'https://www.fiverr.com/spmdesignz/write-and-design-your-company-profile',
    recommended: false
  },

  // --- SOCIAL MEDIA KITS ---
  {
    id: 'social-starter',
    categoryId: 'social-media-kits',
    categoryName: 'Social Media Kits',
    title: 'Starter Social Media Pack',
    badge: null,
    price: 30,
    deliveryDays: 2,
    shortDescription: 'Essential branding assets to give your Instagram and Facebook an instant upgrade.',
    deliverables: [
      '3 Custom Themed Post Templates',
      'Profile Avatars & Watermarks',
      'High-Res PNG & JPG Exports',
      '2-Day Delivery'
    ],
    fiverrLink: 'https://www.fiverr.com/s/rEV65Gy',
    recommended: false
  },
  {
    id: 'social-platform-kit',
    categoryId: 'social-media-kits',
    categoryName: 'Social Media Kits',
    title: 'Complete Multi-Platform Kit',
    badge: 'Most Popular',
    price: 60,
    deliveryDays: 3,
    shortDescription: 'Unified visual presence across Instagram, Facebook, LinkedIn, Twitter, and YouTube.',
    deliverables: [
      '6 Themed Post Templates (Feed & Carousel)',
      '3 Story / Reel Background Templates',
      'Cover Banners (Facebook, LinkedIn, X, YouTube)',
      'Highlight Icons & Profile Avatars',
      'Editable Canva / PSD Source Files',
      '3-Day Delivery & Unlimited Revisions'
    ],
    fiverrLink: 'https://www.fiverr.com/s/rEV65Gy',
    recommended: true
  },
  {
    id: 'social-monthly-suite',
    categoryId: 'social-media-kits',
    categoryName: 'Social Media Kits',
    title: 'Monthly Brand Growth Suite',
    badge: 'Ultimate Pack',
    price: 100,
    deliveryDays: 4,
    shortDescription: 'A month of cohesive visual content ready for daily publishing and ad campaigns.',
    deliverables: [
      '12 Premium Themed Templates (Feed & Stories)',
      'Ad Banner Campaign Set (Multiple Dimensions)',
      'Complete Banner Package for all Social Channels',
      'Custom Highlight Story Icons',
      'Full Editable Source Files (PSD + Canva)',
      'Priority 4-Day Turnaround'
    ],
    fiverrLink: 'https://www.fiverr.com/s/rEV65Gy',
    recommended: false
  }
];
