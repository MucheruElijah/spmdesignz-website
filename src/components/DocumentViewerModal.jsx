import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as pdfjsLib from 'pdfjs-dist';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  Maximize, 
  Minimize, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Loader2
} from 'lucide-react';
import './DocumentViewerModal.css';

// Set up pdf.js worker using unpkg
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

export default function DocumentViewerModal({ isOpen, onClose, docData }) {
  const [pdfDoc, setPdfDoc] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState(0);
  const [scale, setScale] = useState(1.0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const renderTaskRef = useRef(null);

  useEffect(() => {
    if (!isOpen || !docData?.pdfUrl) {
      setPdfDoc(null);
      setCurrentPage(1);
      setScale(1.0);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    setCurrentPage(1);

    const loadingTask = pdfjsLib.getDocument(docData.pdfUrl);
    loadingTask.promise
      .then((pdf) => {
        setPdfDoc(pdf);
        setNumPages(pdf.numPages);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading PDF:', err);
        setError('Failed to load document sample.');
        setLoading(false);
      });

    return () => {
      if (loadingTask) {
        loadingTask.destroy();
      }
    };
  }, [isOpen, docData]);

  // Render current page onto canvas
  useEffect(() => {
    if (!pdfDoc || !canvasRef.current) return;

    let isCancelled = false;

    // Cancel any ongoing render task
    if (renderTaskRef.current) {
      renderTaskRef.current.cancel();
    }

    pdfDoc.getPage(currentPage).then((page) => {
      if (isCancelled) return;

      const canvas = canvasRef.current;
      if (!canvas) return;
      const context = canvas.getContext('2d');

      // Determine viewport scale based on container width or selected scale
      const containerWidth = containerRef.current ? containerRef.current.clientWidth - 40 : 800;
      const unscaledViewport = page.getViewport({ scale: 1 });
      const baseScale = Math.min((containerWidth / unscaledViewport.width), 1.6);
      const effectiveScale = baseScale * scale;

      const viewport = page.getViewport({ scale: effectiveScale });

      // Support high DPI displays
      const outputScale = window.devicePixelRatio || 1;
      canvas.width = Math.floor(viewport.width * outputScale);
      canvas.height = Math.floor(viewport.height * outputScale);
      canvas.style.width = Math.floor(viewport.width) + 'px';
      canvas.style.height = Math.floor(viewport.height) + 'px';

      const transform = outputScale !== 1
        ? [outputScale, 0, 0, outputScale, 0, 0]
        : null;

      const renderContext = {
        canvasContext: context,
        transform: transform,
        viewport: viewport
      };

      const renderTask = page.render(renderContext);
      renderTaskRef.current = renderTask;

      renderTask.promise
        .catch((err) => {
          if (err.name !== 'RenderingCancelledException') {
            console.error('Page render error:', err);
          }
        });
    });

    return () => {
      isCancelled = true;
      if (renderTaskRef.current) {
        renderTaskRef.current.cancel();
      }
    };
  }, [pdfDoc, currentPage, scale]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        goToNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        goToPrev();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentPage, numPages]);

  const goToPrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const goToNext = () => {
    if (currentPage < numPages) setCurrentPage((prev) => prev + 1);
  };

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.2, 2.0));
  };

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, 0.7));
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  if (!isOpen || !docData) return null;

  return (
    <div className={`doc-modal-overlay ${isFullscreen ? 'fullscreen-mode' : ''}`} onClick={onClose}>
      <div 
        className="doc-modal-container" 
        onClick={(e) => e.stopPropagation()}
        onContextMenu={(e) => e.preventDefault()}
      >
        {/* Header Bar */}
        <div className="doc-modal-header">
          <div className="doc-title-info">
            <span className="doc-badge">
              <ShieldCheck size={14} /> View-Only Showcase Sample
            </span>
            <h3>{docData.title}</h3>
          </div>

          <div className="doc-header-actions">
            {/* Zoom Controls */}
            <div className="zoom-controls">
              <button className="icon-btn" onClick={zoomOut} title="Zoom Out" aria-label="Zoom out">
                <ZoomOut size={18} />
              </button>
              <span className="zoom-level">{Math.round(scale * 100)}%</span>
              <button className="icon-btn" onClick={zoomIn} title="Zoom In" aria-label="Zoom in">
                <ZoomIn size={18} />
              </button>
            </div>

            {/* Fullscreen Toggle */}
            <button className="icon-btn" onClick={toggleFullscreen} title="Toggle Fullscreen" aria-label="Fullscreen">
              {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
            </button>

            {/* Close Button */}
            <button className="close-btn" onClick={onClose} aria-label="Close modal">
              <X size={22} />
            </button>
          </div>
        </div>

        {/* Document Main Canvas Viewport */}
        <div className="doc-viewport" ref={containerRef}>
          {loading && (
            <div className="doc-loading">
              <Loader2 className="spinner" size={36} />
              <p>Loading multi-page sample showcase...</p>
            </div>
          )}

          {error && (
            <div className="doc-error">
              <p>{error}</p>
            </div>
          )}

          {/* Navigation Chevron Left */}
          {numPages > 1 && (
            <button 
              className={`doc-nav-arrow arrow-left ${currentPage === 1 ? 'disabled' : ''}`}
              onClick={goToPrev}
              disabled={currentPage === 1}
              aria-label="Previous Page"
            >
              <ChevronLeft size={32} />
            </button>
          )}

          {/* Canvas Wrapper with Anti-theft Watermark Overlay */}
          <div className="canvas-wrapper">
            <canvas ref={canvasRef} className="doc-canvas" />
            <div className="doc-watermark-overlay" aria-hidden="true">
              <div className="watermark-text">SPMDESIGNZ • PORTFOLIO SHOWCASE</div>
            </div>
          </div>

          {/* Navigation Chevron Right */}
          {numPages > 1 && (
            <button 
              className={`doc-nav-arrow arrow-right ${currentPage === numPages ? 'disabled' : ''}`}
              onClick={goToNext}
              disabled={currentPage === numPages}
              aria-label="Next Page"
            >
              <ChevronRight size={32} />
            </button>
          )}
        </div>

        {/* Footer Navigation & CTA Bar */}
        <div className="doc-modal-footer">
          {/* Page Counter Indicator */}
          <div className="page-counter-badge">
            Page <strong>{currentPage}</strong> of <strong>{numPages || 1}</strong>
          </div>

          {/* Thumbnail Dots / Jump to page */}
          {numPages > 1 && (
            <div className="page-dots-strip">
              {Array.from({ length: numPages }, (_, i) => i + 1).map((pg) => (
                <button
                  key={pg}
                  className={`page-dot-btn ${currentPage === pg ? 'active' : ''}`}
                  onClick={() => setCurrentPage(pg)}
                  title={`Jump to Page ${pg}`}
                >
                  {pg}
                </button>
              ))}
            </div>
          )}

          {/* Action Order Button */}
          {docData.serviceUrl && (
            <Link to={docData.serviceUrl} className="doc-cta-btn" onClick={onClose}>
              <Sparkles size={16} /> Order This Service <ArrowRight size={16} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
