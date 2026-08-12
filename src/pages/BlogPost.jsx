import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import posts from '../data/blogPosts.json';
import { ArrowLeft, Calendar, ArrowRight, Clock, Share2, Link as LinkIcon } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

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
  const [headings, setHeadings] = useState([]);

  const processedContent = useMemo(() => {
    if (!post?.content) return '';
    const parser = new DOMParser();
    const doc = parser.parseFromString(post.content, 'text/html');
    const firstImg = doc.querySelector('img');
    if (firstImg) {
      let elementToRemove = firstImg;
      if (elementToRemove.parentElement && elementToRemove.parentElement.tagName === 'A') {
        elementToRemove = elementToRemove.parentElement;
      }
      if (elementToRemove.parentElement && elementToRemove.parentElement.classList.contains('separator')) {
        elementToRemove = elementToRemove.parentElement;
      }
      elementToRemove.remove();
    }
    return doc.body.innerHTML;
  }, [post?.content]);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Extract Headings for Table of Contents
    const timer = setTimeout(() => {
      const contentDiv = document.querySelector('.blog-article-content-inner');
      if (contentDiv) {
        // Extract Headings for ToC
        const headingElements = Array.from(contentDiv.querySelectorAll('h2, h3'));
        const extractedHeadings = headingElements.map((elem, index) => {
          if (!elem.id) {
            // Create a URL friendly ID based on the text
            elem.id = elem.innerText.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') || `heading-${index}`;
          }
          return {
            id: elem.id,
            text: elem.innerText,
            level: parseInt(elem.tagName.substring(1)) // 2 or 3
          };
        });
        setHeadings(extractedHeadings);
      }
    }, 100); // Small delay to ensure HTML is injected

    return () => clearTimeout(timer);
  }, [id]);

  if (!post) {
    return (
      <div className="container" style={{ paddingTop: '150px', textAlign: 'center', minHeight: '60vh' }}>
        <h2>Post not found</h2>
        <Link to="/blog" style={{ marginTop: '1rem', display: 'inline-block' }} className="btn">Back to Blog</Link>
      </div>
    );
  }

  // Derived Data
  const otherPosts = posts.filter(p => !p.id.endsWith(id)).slice(0, 3);
  const heroImage = getFirstImage(post.content);
  const fullPlainText = getPlainTextExcerpt(post.content, 999999);
  const wordCount = fullPlainText.split(' ').length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));
  
  // For Share Links
  const currentUrl = window.location.href;

  const scrollToHeading = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Account for fixed navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <main className="blog-post-page">
      {/* 1. Dark Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <div className="blog-hero-grid">
            <div className="blog-hero-content">
              <Link to="/blog" className="blog-hero-back">
                <ArrowLeft size={16} /> Back to Blog <span className="blog-hero-category">| Design & Branding</span>
              </Link>
              <h1 className="blog-hero-title">{post.title}</h1>
              <div className="blog-hero-meta">
                <div className="blog-hero-author">
                  <div className="author-avatar">SM</div>
                  <span className="author-name">Spmdesignz Team</span>
                </div>
                <span className="meta-divider">•</span>
                <span className="blog-hero-date">{new Date(post.published).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                <span className="meta-divider">•</span>
                <span className="blog-hero-readtime"><Clock size={14} /> {readTime} min read</span>
              </div>
            </div>
            <div className="blog-hero-image-wrapper">
              <img src={heroImage} alt={post.title} className="blog-hero-image" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Light Two-Column Article Layout */}
      <section className="blog-article-layout-section">
        <div className="container">
          <div className="blog-article-layout">
            
            {/* Sidebar (Table of Contents & Share) */}
            <aside className="blog-sidebar">
              <div className="sticky-sidebar-content">
                {headings.length > 0 && (
                  <div className="toc-container">
                    <h4 className="toc-title"><Share2 size={16} style={{marginRight: '8px', opacity: 0}} /> TABLE OF CONTENTS</h4>
                    <ul className="toc-list">
                      {headings.map((heading) => (
                        <li key={heading.id} className={`toc-item toc-level-${heading.level}`}>
                          <a href={`#${heading.id}`} onClick={(e) => scrollToHeading(e, heading.id)}>
                            {heading.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="share-article-container">
                  <h4 className="share-title"><Share2 size={16} style={{marginRight: '8px'}} /> SHARE ARTICLE</h4>
                  <div className="share-buttons">
                    <a href={`https://twitter.com/intent/tweet?url=${currentUrl}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter" className="share-btn">
                      <FaTwitter size={16} />
                    </a>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook" className="share-btn">
                      <FaFacebook size={16} />
                    </a>
                    <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn" className="share-btn">
                      <FaLinkedin size={16} />
                    </a>
                    <button onClick={() => navigator.clipboard.writeText(currentUrl)} aria-label="Copy Link" className="share-btn">
                      <LinkIcon size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <article className="blog-article-content">
              {/* Optional secondary breadcrumb inside content */}
              <div className="blog-content-breadcrumb">
                <Link to="/">Home</Link> &gt; <Link to="/blog">Blog</Link> &gt; <span>{post.title}</span>
              </div>
              
              <div 
                className="blog-article-content-inner" 
                dangerouslySetInnerHTML={{ __html: processedContent }} 
              />
            </article>

          </div>
        </div>
      </section>

      {/* More Articles Section */}
      <section className="container">
        {otherPosts.length > 0 && (
          <div style={{ marginTop: '4rem', paddingBottom: '6rem', paddingTop: '4rem', borderTop: '1px solid var(--surface-color-light)' }}>
            <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '2.5rem' }}>More Articles to Read</h2>
            <div className="blog-grid">
              {otherPosts.map(otherPost => {
                const img = getFirstImage(otherPost.content);
                const excerpt = getPlainTextExcerpt(otherPost.content);
                const otherPostId = otherPost.id.split('-').pop();

                return (
                  <article key={otherPost.id} className="blog-card">
                    <div className="blog-card-image">
                      <img src={img} alt={otherPost.title} />
                    </div>
                    <div className="blog-card-body">
                      <div className="blog-meta">
                        <Calendar size={14} /> 
                        <span>{new Date(otherPost.published).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
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
