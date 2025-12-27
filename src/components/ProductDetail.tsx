import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productCatalog } from '../data/productsData';
import type { Product } from '../data/productsData';
import Header from './Header';
import Contact from './Contact';
import './ProductDetail.css';

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();

  // Flatten all products to find the current one
  const allProducts = useMemo(() => {
    try {
      console.log('ProductDetail - productCatalog:', productCatalog);
      if (!productCatalog || productCatalog.length === 0) {
        console.warn('ProductCatalog is empty or undefined');
        return [];
      }
      const products: Product[] = [];
      productCatalog.forEach((category) => {
        if (category && category.subCategories) {
          category.subCategories.forEach((subCategory) => {
            if (subCategory && subCategory.products) {
              subCategory.products.forEach((product) => {
                products.push(product);
              });
            }
          });
        }
      });
      console.log('All products flattened:', products.length);
      return products;
    } catch (error) {
      console.error('Error loading products:', error);
      return [];
    }
  }, []);

  const product = productId ? allProducts.find((p) => p.id === productId) : null;

  // Get other products (excluding current product) - show 7 products
  const otherProducts = useMemo(() => {
    return allProducts.filter((p) => p.id !== productId).slice(0, 7);
  }, [allProducts, productId]);

  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (otherProducts.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentProductIndex((prevIndex) => (prevIndex + 1) % otherProducts.length);
    }, 4000); // Change product every 4 seconds

    return () => clearInterval(interval);
  }, [otherProducts.length]);

  useEffect(() => {
    if (product && product.images.length > 0) {
      setCurrentImageIndex(0);
    }
  }, [product]);

  if (!productId) {
    return (
      <>
        <Header />
        <div className="product-detail-error">
          <h2>No product ID provided</h2>
          <button onClick={() => navigate('/')} className="back-button">
            Back to Products
          </button>
        </div>
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Header />
        <div className="product-detail-error">
          <h2>Product not found</h2>
          <p>Product ID: {productId}</p>
          <button onClick={() => navigate('/')} className="back-button">
            Back to Products
          </button>
        </div>
      </>
    );
  }

  const handleProductClick = (selectedProductId: string) => {
    navigate(`/product/${selectedProductId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    // Prevent the error from propagating and showing 404 in console
    e.stopPropagation();
    // Set a fallback image
    target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400"%3E%3Crect width="600" height="400" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999" font-family="Arial" font-size="18"%3E' + encodeURIComponent(product.name) + '%3C/text%3E%3C/svg%3E';
    // Remove error event listener to prevent infinite loop
    target.onerror = null;
  };

  const goToPreviousImage = () => {
    if (product && product.images && product.images.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? product.images.length - 1 : prev - 1
      );
    }
  };

  const goToNextImage = () => {
    if (product && product.images && product.images.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === product.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <>
      <Header />
      <div className="product-detail-page">
        <div className="product-detail-container">
        <button onClick={() => navigate('/')} className="back-button">
          ← Back to Products
        </button>
        
        <div className="product-detail-content">
          <div className="product-image-section">
            {product.images && product.images.length > 0 ? (
              <div className="product-image-wrapper">
                <img 
                  src={product.images[currentImageIndex].src} 
                  alt={product.images[currentImageIndex].alt}
                  className="product-detail-image"
                  onError={handleImageError}
                />
                {product.images.length > 1 && (
                  <>
                    <button
                      className="product-image-nav product-image-nav-prev"
                      onClick={goToPreviousImage}
                      aria-label="Previous image"
                    >
                      &#8249;
                    </button>
                    <button
                      className="product-image-nav product-image-nav-next"
                      onClick={goToNextImage}
                      aria-label="Next image"
                    >
                      &#8250;
                    </button>
                    <div className="product-image-counter">
                      {currentImageIndex + 1} / {product.images.length}
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="product-image-placeholder">
                {product.name}
              </div>
            )}
          </div>
          
          <div className="product-info-section">
            <h1 className="product-detail-name">{product.name}</h1>
            <p className="product-detail-description">{product.description}</p>
            
            <div className="specifications-section">
              <h2 className="specifications-title">Key Features & Details</h2>
              {product.details && product.details.length > 0 ? (
                <ul className="specifications-list">
                  {product.details.map((detail, index) => (
                    <li key={index} className="specification-item">
                      {detail}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No details available for this product.</p>
              )}
            </div>
          </div>
        </div>

        {/* Other Products Carousel Section */}
        {otherProducts.length > 0 && (
          <div className="other-products-section">
            <h2 className="other-products-title">Other Products</h2>
            <div className="other-products-carousel-wrapper">
              <div className="other-products-carousel">
                {otherProducts.map((otherProduct, index) => (
                  <div
                    key={otherProduct.id}
                    className={`other-product-card ${index === currentProductIndex ? 'active' : ''}`}
                    onClick={() => handleProductClick(otherProduct.id)}
                  >
                    <div className="other-product-image-wrapper">
                      {otherProduct.images.length > 0 ? (
                        <img
                          src={otherProduct.images[0].src}
                          alt={otherProduct.images[0].alt}
                          className="other-product-image"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            e.stopPropagation();
                            target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200"%3E%3Crect width="300" height="200" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999" font-family="Arial" font-size="14"%3E' + encodeURIComponent(otherProduct.name) + '%3C/text%3E%3C/svg%3E';
                            target.onerror = null;
                          }}
                        />
                      ) : (
                        <div className="other-product-placeholder">
                          {otherProduct.name}
                        </div>
                      )}
                    </div>
                    <p className="other-product-label">{otherProduct.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
      <Contact />
    </>
  );
};

export default ProductDetail;

