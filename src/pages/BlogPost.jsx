import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import posts from '../data/blogPosts.json';
import { ArrowLeft, Calendar, ArrowRight } from 'lucide-react';

function getFirstImage(htmlContent) {
  if (!htmlContent) return '/portfolio_flyer_design.jpg';
  const match = htmlContent.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match ? match[1] : '/portfolio_flyer_design.jpg';
}

function getPlainTextExcerpt(htmlContent, maxLength = 130) {
  if (!htmlContent) return '';
  let text = htmlContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  text = text.replace(/<[^>]+>/g, ' ');
  text = text.replace(/\s+/g, ' ').trim();
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
}

function BlogPost() {
  const { id } = useParams();
  const post = posts.find(p => p.id.endsWith(id));

  // Scroll to top whenever article changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="container" style={{ paddingTop: '150px', textAlign: 'center', minHeight: '60vh' }}>
        <h2>Post not found</h2>
        <Link to="/blog" style={{ marginTop: '1rem', display: 'inline-block' }} className="btn">Back to Blog</Link>
      </div>
    );
  }

  // Get other articles to display at the bottom (up to 3)
  const otherPosts = posts.filter(p => !p.id.endsWith(id)).slice(0, 3);

  return (
    <main className="blog-post-page">
      <section className="container" style={{ paddingTop: '150px', paddingBottom: '80px', minHeight: '80vh' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '2rem', color: 'var(--primary-color)', textTransform: 'uppercase', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '1px' }}>
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          <h1 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '2.5rem', lineHeight: 1.2 }}>{post.title}</h1>
          <div className="blog-meta" style={{ marginBottom: '3rem', paddingBottom: '1rem', borderBottom: '1px solid var(--surface-color-light)', display: 'flex', gap: '1rem', color: 'var(--text-secondary)' }}>
            <span className="blog-date" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Calendar size={14} /> {new Date(post.published).toLocaleDateString()}
            </span>
          </div>
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} style={{ fontSize: '1.1rem', lineHeight: 1.8 }}></div>
        </div>

        {/* More Articles Section */}
        {otherPosts.length > 0 && (
          <div style={{ marginTop: '6rem', paddingTop: '4rem', borderTop: '1px solid var(--surface-color-light)' }}>
            <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '2.5rem' }}>More Articles to Read</h2>
            <div className="blog-grid">
              {otherPosts.map(otherPost => {
                const imageUrl = getFirstImage(otherPost.content);
                const excerpt = getPlainTextExcerpt(otherPost.content);
                const otherPostId = otherPost.id.split('-').pop();

                return (
                  <article key={otherPost.id} className="blog-card">
                    <div className="blog-card-image">
                      <img src={imageUrl} alt={otherPost.title} />
                    </div>
                    <div className="blog-card-body">
                      <div className="blog-meta">
                        <Calendar size={14} /> 
                        <span>{new Date(otherPost.published).toLocaleDateString()}</span>
                      </div>
                      <h3 className="blog-card-title">{otherPost.title}</h3>
                      <p className="blog-card-excerpt">{excerpt}</p>
                      <div className="blog-card-footer">
                        <Link to={`/blog/${otherPostId}`} className="btn-outline blog-read-more">
                          Read More <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default BlogPost;
