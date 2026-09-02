import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as pdfjsLib from 'pdfjs-dist';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
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
  Loader2,
  AlertCircle,
  RotateCcw
} from 'lucide-react';
import './DocumentViewerModal.css';

// Configure bundled local worker via Vite ?url
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export default function DocumentViewerModal({ isOpen, onClose, docData }) {
  const [pdfDoc, setPdfDoc] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState(0);
  const [scale, setScale] = useState(1.0);
  const [loading, setLoading] = useState(true);
  const [pageRendering, setPageRendering] = useState(false);
  const [error, setError] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const renderTaskRef = useRef(null);

  // Parse title and subtitle
  let mainTitle = docData?.title || '';
  let subTitle = '(Live Sample Showcase)';
  if (mainTitle.includes('(')) {
    const splitIndex = mainTitle.indexOf('(');
    subTitle = mainTitle.substring(splitIndex).trim();
    mainTitle = mainTitle.substring(0, splitIndex).trim();
  }

  // Load PDF document when modal opens
  useEffect(() => {
    if (!isOpen || !docData?.pdfUrl) {
      setPdfDoc(null);
      setCurrentPage(1);
      setScale(1.0);
      setLoading(false);
      setError(null);
      return;
    }

    let isMounted = true;
    setLoading(true);
    setError(null);
    setCurrentPage(1);
    setScale(1.0);

    const loadingTask = pdfjsLib.getDocument({
      url: docData.pdfUrl,
      cMapUrl: 'https://unpkg.com/pdfjs-dist@' + pdfjsLib.version + '/cmaps/',
      cMapPacked: true,
    });

    loadingTask.promise
      .then((pdf) => {
        if (!isMounted) return;
        setPdfDoc(pdf);
        setNumPages(pdf.numPages);
        setLoading(false);
      })
      .catch((err) => {
        if (!isMounted) return;
        console.error('Error loading PDF:', err);
        setError('Unable to display preview. Please try again.');
        setLoading(false);
      });

    return () => {
      isMounted = false;
      if (loadingTask) {
        loadingTask.destroy();
      }
    };
  }, [isOpen, docData]);

  // Render active page to canvas with complete fit-to-screen calculation
  useEffect(() => {
    if (!pdfDoc || !canvasRef.current) return;

    let isCancelled = false;
    setPageRendering(true);

    if (renderTaskRef.current) {
      renderTaskRef.current.cancel();
    }

    pdfDoc.getPage(currentPage).then((page) => {
      if (isCancelled) return;

      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;
      const context = canvas.getContext('2d');

      // Measure viewport container
      const paddingX = window.innerWidth <= 768 ? 20 : 60;
      const paddingY = window.innerWidth <= 768 ? 24 : 40;
      const availableWidth = Math.max(container.clientWidth - paddingX, 260);
      const availableHeight = Math.max(container.clientHeight - paddingY, 260);

      const unscaledViewport = page.getViewport({ scale: 1.0 });

      // Compute scale that fits BOTH width AND height perfectly (Zero cutting off!)
      const scaleX = availableWidth / unscaledViewport.width;
      const scaleY = availableHeight / unscaledViewport.height;
      const fitScale = Math.min(scaleX, scaleY);
      
      // Apply user zoom multiplier on top of the 100% fit base
      const effectiveScale = fitScale * scale;

      const viewport = page.getViewport({ scale: effectiveScale });

      // High DPI crisp rendering
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
        .then(() => {
          if (!isCancelled) setPageRendering(false);
        })
        .catch((err) => {
          if (err.name !== 'RenderingCancelledException') {
            console.error('Page render error:', err);
          }
          if (!isCancelled) setPageRendering(false);
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
    setScale((prev) => Math.min(prev + 0.25, 2.5));
  };

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.25, 0.6));
  };

  const resetFit = () => {
    setScale(1.0);
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
          {/* Top Row: Badge, Title & Close Button */}
          <div className="doc-header-top">
            <div className="doc-title-info">
              <span className="doc-badge">
                <ShieldCheck size={13} /> View-Only Showcase Sample
              </span>
              <h3 className="doc-main-title">{mainTitle}</h3>
              <span className="doc-subtitle">{subTitle}</span>
            </div>

            <button className="close-btn" onClick={onClose} aria-label="Close modal">
              <X size={22} />
            </button>
          </div>

          {/* Dedicated Toolbar Row for Zoom & Fullscreen directly below Title */}
          <div className="doc-toolbar-strip">
            <div className="zoom-controls">
              <button className="icon-btn" onClick={zoomOut} title="Zoom Out" aria-label="Zoom out">
                <ZoomOut size={16} />
              </button>
              <span className="zoom-level">{Math.round(scale * 100)}%</span>
              <button className="icon-btn" onClick={zoomIn} title="Zoom In" aria-label="Zoom in">
                <ZoomIn size={16} />
              </button>
              <button className="fit-btn" onClick={resetFit} title="Fit Entire Page to Screen">
                <RotateCcw size={12} /> Fit
              </button>
            </div>

            <button className="fullscreen-btn" onClick={toggleFullscreen} title="Toggle Fullscreen" aria-label="Fullscreen">
              {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
              <span>{isFullscreen ? 'Exit' : 'Fullscreen'}</span>
            </button>
          </div>
        </div>

        {/* Document Main Canvas Viewport (With 100% full 2D scrolling) */}
        <div className="doc-viewport" ref={containerRef}>
          {loading && (
            <div className="doc-loading">
              <Loader2 className="spinner" size={40} />
              <p>Loading multi-page sample showcase...</p>
            </div>
          )}

          {error && (
            <div className="doc-error">
              <AlertCircle size={32} color="#ef4444" />
              <p>{error}</p>
            </div>
          )}

          {/* Navigation Chevron Left (Desktop) */}
          {numPages > 1 && !loading && (
            <button 
              className={`doc-nav-arrow arrow-left ${currentPage === 1 ? 'disabled' : ''}`}
              onClick={goToPrev}
              disabled={currentPage === 1}
              aria-label="Previous Page"
            >
              <ChevronLeft size={30} />
            </button>
          )}

          {/* Canvas Wrapper with margin: auto for non-clipped scrolling */}
          <div className={`canvas-wrapper ${loading || error ? 'hidden' : ''}`}>
            <canvas ref={canvasRef} className="doc-canvas" />
            <div className="doc-watermark-overlay" aria-hidden="true">
              <div className="watermark-text">SPMDESIGNZ • PORTFOLIO SHOWCASE</div>
            </div>
          </div>

          {/* Navigation Chevron Right (Desktop) */}
          {numPages > 1 && !loading && (
            <button 
              className={`doc-nav-arrow arrow-right ${currentPage === numPages ? 'disabled' : ''}`}
              onClick={goToNext}
              disabled={currentPage === numPages}
              aria-label="Next Page"
            >
              <ChevronRight size={30} />
            </button>
          )}
        </div>

        {/* Footer Navigation & CTA Bar */}
        <div className="doc-modal-footer">
          {/* Mobile & Desktop Page Controls */}
          <div className="footer-nav-controls">
            <button 
              className="footer-nav-btn"
              onClick={goToPrev}
              disabled={currentPage === 1}
              aria-label="Previous Page"
            >
              <ChevronLeft size={16} /> Prev
            </button>

            <div className="page-counter-badge">
              Page <strong>{currentPage}</strong> of <strong>{numPages || 1}</strong>
            </div>

            <button 
              className="footer-nav-btn"
              onClick={goToNext}
              disabled={currentPage === numPages}
              aria-label="Next Page"
            >
              Next <ChevronRight size={16} />
            </button>
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
