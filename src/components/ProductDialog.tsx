import React, { useState, useEffect } from 'react';
import type { Product } from '../data/productsData';
import './ProductDialog.css';

interface ProductDialogProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDialog: React.FC<ProductDialogProps> = ({ product, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Reset image index when product changes
  useEffect(() => {
    if (product && product.images && Array.isArray(product.images) && product.images.length > 0) {
      setCurrentImageIndex(0);
    }
  }, [product]);

  // Debug logging
  useEffect(() => {
    if (isOpen && product) {
      console.log('ProductDialog - isOpen:', isOpen, 'product:', product);
    }
  }, [isOpen, product]);

  if (!isOpen || !product) {
    return null;
  }

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    const productName = product?.name || 'Product';
    target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999" font-family="Arial" font-size="14"%3E' + productName + '%3C/text%3E%3C/svg%3E';
  };

  const goToPreviousImage = () => {
    if (product && product.images && Array.isArray(product.images) && product.images.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? product.images.length - 1 : prev - 1
      );
    }
  };

  const goToNextImage = () => {
    if (product && product.images && Array.isArray(product.images) && product.images.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === product.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const productImages = product?.images || [];
  const hasMultipleImages = productImages.length > 1;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleImageClick = () => {
    setIsFullScreen(true);
  };

  const handleCloseFullScreen = () => {
    setIsFullScreen(false);
  };

  const handleFullScreenBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleCloseFullScreen();
    }
  };

  return (
    <div className="product-dialog-overlay" onClick={handleBackdropClick}>
      <div className="product-dialog-container" onClick={(e) => e.stopPropagation()}>
        <button className="product-dialog-close" onClick={onClose} aria-label="Close dialog">
        </button>
        
        <div className="product-dialog-content">
          <div className="product-dialog-images">
            <div className="product-dialog-main-image">
              {productImages.length > 0 ? (
                <>
                  <img
                    src={productImages[currentImageIndex]?.src || ''}
                    alt={productImages[currentImageIndex]?.alt || product.name}
                    className="product-dialog-image"
                    onError={handleImageError}
                    onClick={handleImageClick}
                  />
                  <button
                    className="product-dialog-fullscreen-button"
                    onClick={handleImageClick}
                    aria-label="View full size image"
                    title="View full size"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 3H5C3.89543 3 3 3.89543 3 5V8M21 8V5C21 3.89543 20.1046 3 19 3H16M16 21H19C20.1046 21 21 20.1046 21 19V16M3 16V19C3 20.1046 3.89543 21 5 21H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  {hasMultipleImages && (
                    <>
                      <button
                        className="product-dialog-nav-button product-dialog-nav-prev"
                        onClick={goToPreviousImage}
                        aria-label="Previous image"
                      >
                        &#8249;
                      </button>
                      <button
                        className="product-dialog-nav-button product-dialog-nav-next"
                        onClick={goToNextImage}
                        aria-label="Next image"
                      >
                        &#8250;
                      </button>
                      <div className="product-dialog-image-counter">
                        {currentImageIndex + 1} / {productImages.length}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <div className="product-dialog-placeholder">
                  No image available
                </div>
              )}
            </div>
            
            {hasMultipleImages && (
              <div className="product-dialog-thumbnails">
                {productImages.map((image, index) => (
                  <img
                    key={index}
                    src={image?.src || ''}
                    alt={image?.alt || `${product.name} ${index + 1}`}
                    className={`product-dialog-thumbnail ${
                      index === currentImageIndex ? 'active' : ''
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                    onError={handleImageError}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="product-dialog-info">
            <h2 className="product-dialog-title">{product.name || 'Product'}</h2>
            <p className="product-dialog-description">{product.description || 'No description available.'}</p>
            
            {product.details && Array.isArray(product.details) && product.details.length > 0 && (
              <div className="product-dialog-details">
                <h3 className="product-dialog-details-title">Key Features & Details</h3>
                <ul className="product-dialog-details-list">
                  {product.details.map((detail, index) => (
                    <li key={index} className="product-dialog-detail-item">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Full Screen Image Modal */}
      {isFullScreen && productImages.length > 0 && (
        <div 
          className="product-dialog-fullscreen-overlay"
          onClick={handleFullScreenBackdropClick}
        >
          <button
            className="product-dialog-fullscreen-close"
            onClick={handleCloseFullScreen}
            aria-label="Close full screen"
          >
            ×
          </button>
          <div className="product-dialog-fullscreen-container" onClick={(e) => e.stopPropagation()}>
            <img
              src={productImages[currentImageIndex]?.src || ''}
              alt={productImages[currentImageIndex]?.alt || product.name}
              className="product-dialog-fullscreen-image"
              onError={handleImageError}
            />
            {hasMultipleImages && (
              <>
                <button
                  className="product-dialog-fullscreen-nav product-dialog-fullscreen-nav-prev"
                  onClick={goToPreviousImage}
                  aria-label="Previous image"
                >
                  &#8249;
                </button>
                <button
                  className="product-dialog-fullscreen-nav product-dialog-fullscreen-nav-next"
                  onClick={goToNextImage}
                  aria-label="Next image"
                >
                  &#8250;
                </button>
                <div className="product-dialog-fullscreen-counter">
                  {currentImageIndex + 1} / {productImages.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDialog;

