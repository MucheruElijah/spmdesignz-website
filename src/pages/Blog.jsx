import React from 'react';
import { Link } from 'react-router-dom';
import posts from '../data/blogPosts.json';
import { Calendar, ArrowRight } from 'lucide-react';

function getFirstImage(htmlContent) {
  if (!htmlContent) return '/portfolio_company_profile_oceanscan.jpg';
  const match = htmlContent.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match ? match[1] : '/portfolio_company_profile_oceanscan.jpg';
}

function getPlainTextExcerpt(htmlContent, maxLength = 130) {
  if (!htmlContent) return '';
  // Strip script tags and HTML tags
  let text = htmlContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  text = text.replace(/<[^>]+>/g, ' ');
  text = text.replace(/\s+/g, ' ').trim();
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
}

function Blog() {
  return (
    <main className="blog-page">
      <section className="container" style={{ paddingTop: '150px', paddingBottom: '100px', minHeight: '80vh' }}>
        <div className="blog-header" style={{ marginBottom: '3rem' }}>
          <h1 style={{ color: 'var(--primary-color)', fontSize: '3rem', marginBottom: '0.5rem' }}>Our Blog</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>Insights, tips, and strategies on branding and design.</p>
        </div>

        <div className="blog-grid">
          {posts.map(post => {
            const imageUrl = getFirstImage(post.content);
            const excerpt = getPlainTextExcerpt(post.content);
            const postId = post.id.split('-').pop();

            return (
              <article key={post.id} className="blog-card">
                <div className="blog-card-image">
                  <img src={imageUrl} alt={post.title} />
                </div>
                <div className="blog-card-body">
                  <div className="blog-meta">
                    <Calendar size={14} /> 
                    <span>{new Date(post.published).toLocaleDateString()}</span>
                  </div>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{excerpt}</p>
                  <div className="blog-card-footer">
                    <Link to={`/blog/${postId}`} className="btn-outline blog-read-more">
                      Read More <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Blog;
