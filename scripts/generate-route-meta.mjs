import fs from 'node:fs';
import path from 'node:path';
import { load as loadYaml } from 'js-yaml';

const BASE_URL = 'https://spmdesignz.com';
const DIST_DIR = path.resolve('dist');
const BLOG_DIR = path.resolve('src/content/blog');
const TEMPLATE_PATH = path.join(DIST_DIR, 'index.html');

function escapeAttr(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function toAbsoluteUrl(assetPath) {
  if (!assetPath) return `${BASE_URL}/logo.png`;
  if (/^https?:\/\//i.test(assetPath)) return assetPath;
  return `${BASE_URL}${assetPath.startsWith('/') ? '' : '/'}${assetPath}`;
}

function stripExcerpt(markdownBody, maxLength = 155) {
  const plain = markdownBody
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#*_`>[\]]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (plain.length <= maxLength) return plain;
  return `${plain.slice(0, maxLength - 3).trim()}...`;
}

function getRouteEntries() {
  const routes = [
    {
      route: '/blog',
      title: 'Blog | Spmdesignz Insights on Branding & Corporate Design',
      description:
        'Insights, tips, and strategies on executive company profiles, MS Word formatting, contract design, and corporate branding.',
      image: `${BASE_URL}/logo.png`,
    },
    {
      route: '/store',
      title: 'Design Store | Spmdesignz Ready-to-Use Corporate Templates',
      description:
        'Browse ready-made executive company profiles, business plan layouts, MS Word templates, and branding packages.',
      image: `${BASE_URL}/logo.png`,
    },
    {
      route: '/order',
      title: 'Track Order | Spmdesignz',
      description: 'Track your active Spmdesignz corporate branding or document design order.',
      image: `${BASE_URL}/logo.png`,
    },
    {
      route: '/service/company-profile',
      title: 'Company Profile, Business Plan & Annual Reports | Spmdesignz',
      description:
        'Professional company profile writing, corporate business plans, and annual report designs that command trust and win clients.',
      image: `${BASE_URL}/portfolio_company_profile_oceanscan.jpg`,
    },
    {
      route: '/service/logo-design',
      title: 'Logo Design & Brand Identity | Spmdesignz',
      description: 'Modern, memorable logos that perfectly encapsulate your brand identity.',
      image: `${BASE_URL}/portfolio_logo_design_new.png`,
    },
    {
      route: '/service/office-branding',
      title: 'Legal Documents, Agreements & Office Branding | Spmdesignz',
      description:
        'Elevate your professional image with custom agreement designs, contracts, and formatted MS Word documents.',
      image: `${BASE_URL}/portfolio_ms_word_formatting.png`,
    },
    {
      route: '/service/social-media-kits',
      title: 'Social Media Kits & Banners | Spmdesignz',
      description:
        'Cohesive and vibrant social media assets designed to boost brand engagement.',
      image: `${BASE_URL}/portfolio_social_media_banners.png`,
    },
  ];

  if (fs.existsSync(BLOG_DIR)) {
    const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'));
    for (const file of files) {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8');
      const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
      if (!match) continue;

      let data = {};
      try {
        data = loadYaml(match[1]) || {};
      } catch {
        continue;
      }

      if (data.draft === true) continue;

      const fileSlug = file.replace(/\.md$/i, '');
      const slug = data.slug || fileSlug;
      const title = data.title ? `${data.title} | Spmdesignz` : 'Spmdesignz Blog';
      const description = data.metaDescription || stripExcerpt(match[2] || '');
      const image = toAbsoluteUrl(data.featuredImage);

      routes.push({
        route: `/blog/${slug}`,
        title,
        description,
        image,
      });
    }
  }

  return routes;
}

function buildHtmlForRoute(template, { route, title, description, image }) {
  const canonicalUrl = `${BASE_URL}${route}`;
  const safeTitleHtml = escapeHtml(title);
  const safeTitleAttr = escapeAttr(title);
  const safeDescAttr = escapeAttr(description);
  const safeUrlAttr = escapeAttr(canonicalUrl);
  const safeImgAttr = escapeAttr(image);

  return template
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${safeTitleHtml}</title>`)
    .replace(
      /<meta\s+name="title"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="title" content="${safeTitleAttr}" />`
    )
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="description" content="${safeDescAttr}" />`
    )
    .replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
      `<link rel="canonical" href="${safeUrlAttr}" />`
    )
    .replace(
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:url" content="${safeUrlAttr}" />`
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:title" content="${safeTitleAttr}" />`
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:description" content="${safeDescAttr}" />`
    )
    .replace(
      /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:image" content="${safeImgAttr}" />`
    )
    .replace(
      /<meta\s+property="twitter:url"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="twitter:url" content="${safeUrlAttr}" />`
    )
    .replace(
      /<meta\s+property="twitter:title"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="twitter:title" content="${safeTitleAttr}" />`
    )
    .replace(
      /<meta\s+property="twitter:description"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="twitter:description" content="${safeDescAttr}" />`
    )
    .replace(
      /<meta\s+property="twitter:image"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="twitter:image" content="${safeImgAttr}" />`
    );
}

if (!fs.existsSync(TEMPLATE_PATH)) {
  console.error('dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');
const routes = getRouteEntries();

for (const entry of routes) {
  const outDir = path.join(DIST_DIR, entry.route.replace(/^\/+/, ''));
  fs.mkdirSync(outDir, { recursive: true });
  const html = buildHtmlForRoute(template, entry);
  fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
}

console.log(`Generated per-route SEO canonical HTML shells for ${routes.length} routes.`);
