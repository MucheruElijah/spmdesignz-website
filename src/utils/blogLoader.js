import { load as loadYaml } from 'js-yaml';
import { marked } from 'marked';

// Load all Markdown blog posts from src/content/blog/
const rawPostModules = import.meta.glob('../content/blog/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

marked.setOptions({
  breaks: false,
  gfm: true,
});

function parseFrontmatter(rawContent, filePath) {
  const fileName = filePath.split('/').pop().replace(/\.md$/i, '');
  const match = rawContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);

  let data = {};
  let body = rawContent;

  if (match) {
    try {
      data = loadYaml(match[1]) || {};
    } catch (err) {
      console.error(`Failed to parse frontmatter for ${filePath}:`, err);
    }
    body = match[2] || '';
  }

  const slug = data.slug || fileName;
  const id = data.id || `post-${slug}`;
  const published = data.published
    ? new Date(data.published).toISOString()
    : new Date().toISOString();

  // Convert Markdown (preserving inline HTML) into clean HTML
  const htmlContent = marked.parse(body.trim());

  return {
    title: data.title || fileName,
    slug,
    id,
    published,
    category: data.category || 'Design & Branding',
    featuredImage: data.featuredImage || '',
    metaDescription: data.metaDescription || '',
    draft: Boolean(data.draft),
    content: htmlContent,
    link: `https://spmdesignz.com/blog/${slug}`,
  };
}

const allPosts = Object.entries(rawPostModules)
  .map(([filePath, raw]) => parseFrontmatter(raw, filePath))
  .sort((a, b) => new Date(b.published) - new Date(a.published));

export function getAllPosts() {
  return allPosts;
}

export function getPublishedPosts() {
  const now = new Date();
  return allPosts.filter((post) => !post.draft && new Date(post.published) <= now);
}

export function findPostByIdOrSlug(idOrSlug) {
  if (!idOrSlug) return undefined;
  return allPosts.find(
    (p) => !p.draft && ((p.slug && p.slug === idOrSlug) || p.id.endsWith(idOrSlug))
  );
}

export function getHeroImage(post) {
  if (post?.featuredImage) return post.featuredImage;
  if (!post?.content) return '/portfolio_company_profile_oceanscan.jpg';
  const match = post.content.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match ? match[1] : '/portfolio_company_profile_oceanscan.jpg';
}

export function getPlainTextExcerpt(htmlContent, maxLength = 130) {
  if (!htmlContent) return '';
  let text = htmlContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  text = text.replace(/<[^>]+>/g, ' ');
  text = text.replace(/\s+/g, ' ').trim();
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
}
