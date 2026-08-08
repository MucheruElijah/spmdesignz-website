import React from 'react';
import { Link } from 'react-router-dom';
import posts from '../data/blogPosts.json';
import { Calendar } from 'lucide-react';

function Blog() {
  return (
    <main className="blog-page">
      <section className="container" style={{ paddingTop: '150px', minHeight: '80vh' }}>
        <h1 style={{ color: 'var(--primary-color)', textAlign: 'left', marginBottom: '3rem', fontSize: '3rem' }}>Our Blog</h1>
        <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {posts.map(post => (
            <div key={post.id} className="blog-card" style={{ backgroundColor: 'var(--surface-color)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--surface-color-light)', transition: 'transform 0.3s ease' }}>
              <div className="blog-card-content">
                <div className="blog-meta" style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                  <span className="blog-date" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Calendar size={14} /> {new Date(post.published).toLocaleDateString()}</span>
                </div>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem', lineHeight: '1.3' }}>{post.title}</h3>
                <div style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }} dangerouslySetInnerHTML={{ __html: post.content }}></div>
                <Link to={`/blog/${post.id.split('-').pop()}`} className="btn-outline" style={{ display: 'inline-block', padding: '0.5rem 1rem', borderRadius: '4px', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 600 }}>Read More</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Blog;
