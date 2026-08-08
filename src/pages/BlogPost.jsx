import React from 'react';
import { useParams, Link } from 'react-router-dom';
import posts from '../data/blogPosts.json';
import { ArrowLeft, Calendar } from 'lucide-react';

function BlogPost() {
  const { id } = useParams();
  const post = posts.find(p => p.id.endsWith(id));

  if (!post) {
    return <div className="container" style={{ paddingTop: '150px', textAlign: 'center', minHeight: '60vh' }}><h2>Post not found</h2><Link to="/blog" style={{ marginTop: '1rem', display: 'inline-block' }} className="btn">Back to Blog</Link></div>;
  }

  return (
    <main className="blog-post-page">
      <section className="container" style={{ paddingTop: '150px', minHeight: '80vh' }}>
        <div style={{ maxWidth: '900px' }}>
          <Link to="/blog" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '1px' }}>
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          <h1 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '2.5rem', lineHeight: 1.2 }}>{post.title}</h1>
          <div className="blog-meta" style={{ marginBottom: '3rem', paddingBottom: '1rem', borderBottom: '1px solid var(--surface-color-light)', display: 'flex', gap: '1rem', color: 'var(--text-secondary)' }}>
            <span className="blog-date" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Calendar size={14} /> {new Date(post.published).toLocaleDateString()}</span>
          </div>
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} style={{ fontSize: '1.1rem', lineHeight: 1.8 }}></div>
        </div>
      </section>
    </main>
  );
}

export default BlogPost;
