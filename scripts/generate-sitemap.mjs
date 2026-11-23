import fs from 'node:fs';
import path from 'node:path';
import { load as loadYaml } from 'js-yaml';

const BASE_URL = 'https://spmdesignz.com';
const BLOG_DIR = path.resolve('src/content/blog');
const SITEMAP_PATH = path.resolve('public/sitemap.xml');

const staticPages = [
  { loc: '/', lastmod: '2026-08-23', changefreq: 'weekly', priority: '1.0' },
  { loc: '/store', lastmod: '2026-08-23', changefreq: 'weekly', priority: '0.9' },
  { loc: '/order', lastmod: '2026-08-23', changefreq: 'weekly', priority: '0.8' },
  { loc: '/blog', lastmod: new Date().toISOString().slice(0, 10), changefreq: 'weekly', priority: '0.8' },
];

const servicePages = [
  { loc: '/service/logo-design', lastmod: '2026-08-17', changefreq: 'monthly', priority: '0.9' },
  { loc: '/service/company-profile', lastmod: '2026-08-24', changefreq: 'monthly', priority: '0.9' },
  { loc: '/service/office-branding', lastmod: '2026-08-17', changefreq: 'monthly', priority: '0.9' },
  { loc: '/service/social-media-kits', lastmod: '2026-08-17', changefreq: 'monthly', priority: '0.9' },
];

function escapeXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function getBlogEntries() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'));
  const entries = [];

  for (const file of files) {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8');
    const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    let data = {};
    if (match) {
      try {
        data = loadYaml(match[1]) || {};
      } catch (err) {
        console.warn(`Warning: Failed to parse frontmatter in ${file}:`, err.message);
      }
    }

    if (data.draft === true) continue;

    const fileNameSlug = file.replace(/\.md$/i, '');
    const slug = data.slug || fileNameSlug;
    const publishedDate = data.published ? new Date(data.published) : new Date();
    const lastmod = Number.isNaN(publishedDate.getTime())
      ? new Date().toISOString().slice(0, 10)
      : publishedDate.toISOString().slice(0, 10);

    entries.push({
      loc: `/blog/${slug}`,
      lastmod,
      changefreq: 'monthly',
      priority: slug.startsWith('post-') ? '0.7' : '0.8',
      publishedTs: publishedDate.getTime() || 0,
    });
  }

  return entries.sort((a, b) => b.publishedTs - a.publishedTs);
}

function renderUrlBlock({ loc, lastmod, changefreq, priority }) {
  return `  <url>
    <loc>${escapeXml(`${BASE_URL}${loc}`)}</loc>
    <lastmod>${escapeXml(lastmod)}</lastmod>
    <changefreq>${escapeXml(changefreq)}</changefreq>
    <priority>${escapeXml(priority)}</priority>
  </url>`;
}

const blogPages = getBlogEntries();

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Main Pages -->
${staticPages.map(renderUrlBlock).join('\n')}

  <!-- Service Pages -->
${servicePages.map(renderUrlBlock).join('\n')}

  <!-- Blog Posts -->
${blogPages.map(renderUrlBlock).join('\n')}
</urlset>
`;

fs.writeFileSync(SITEMAP_PATH, xml, 'utf8');
console.log(`Generated sitemap.xml with ${staticPages.length + servicePages.length + blogPages.length} URLs (${blogPages.length} blog posts).`);
