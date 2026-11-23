import React from 'react';
import { Link } from 'react-router-dom';
import { getPublishedPosts, getHeroImage, getPlainTextExcerpt } from '../utils/blogLoader';
import { Calendar, ArrowRight } from 'lucide-react';

function Blog() {
  const posts = getPublishedPosts();

  return (
    <main className="blog-page">
      <section className="container" style={{ paddingTop: '150px', paddingBottom: '100px', minHeight: '80vh' }}>
        <div className="blog-header" style={{ marginBottom: '3rem' }}>
          <h1 style={{ color: 'var(--primary-color)', fontSize: '3rem', marginBottom: '0.5rem' }}>Our Blog</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>Insights, tips, and strategies on branding and design.</p>
        </div>

        <div className="blog-grid">
          {posts.map(post => {
            const imageUrl = getHeroImage(post);
            const excerpt = post.metaDescription || getPlainTextExcerpt(post.content);
            const postId = post.slug || post.id.split('-').pop();

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
