import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { productCatalog } from '../data/productsData';
import agriBackground from '../assets/extracted_images/backgrounds/backgrounds_001.jpg';
import hydraulicBackground from '../assets/extracted_images/backgrounds/backgrounds_002.png';
import forgingBackground from '../assets/extracted_images/backgrounds/backgrounds_003.png';
import miningBackground from '../assets/extracted_images/backgrounds/backgrounds_004.jpg';
import heavyFabricationBackground from '../assets/extracted_images/backgrounds/backgrounds_005.png';
import castingPulleyBackground from '../assets/extracted_images/backgrounds/backgrounds_006.png';
import spareStandardBackground from '../assets/extracted_images/backgrounds/backgrounds_007.png';
import industrialConsumablesBackground from '../assets/extracted_images/backgrounds/backgrounds_008.png';
import tailoredSolutionBackground from '../assets/extracted_images/backgrounds/backgrounds_009.png';
import './Products.css';

const Products: React.FC = () => {
  const navigate = useNavigate();
  const [catalog, setCatalog] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load catalog safely
  useEffect(() => {
    try {
      if (productCatalog && Array.isArray(productCatalog)) {
        setCatalog(productCatalog);
        console.log('ProductCatalog loaded:', productCatalog.length, 'categories');
      } else {
        console.warn('ProductCatalog is not an array:', typeof productCatalog);
        setCatalog([]);
      }
    } catch (error) {
      console.error('Error loading productCatalog:', error);
      setCatalog([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/products/category/${categoryId}`);
  };

  // Get first product image from a category
  const getCategoryImage = (category: any) => {
    // Use background image for Agri Solution category
    if (category && category.id === 'agri-solution') {
      return agriBackground;
    }
    
    // Use background image for Hydraulic Solution category
    if (category && category.id === 'hydraulic-solution') {
      return hydraulicBackground;
    }
    
    // Use background image for Forgings & Machining Parts category
    if (category && category.id === 'forgings-machining') {
      return forgingBackground;
    }
    
    // Use background image for Mining Consumables category
    if (category && category.id === 'mining-consumables') {
      return miningBackground;
    }
    
    // Use background image for Heavy Fabrication category
    if (category && category.id === 'heavy-fabrication') {
      return heavyFabricationBackground;
    }
    
    // Use background image for Casting & Pulley category
    if (category && category.id === 'casting-pulley') {
      return castingPulleyBackground;
    }
    
    // Use background image for Spare & Standard Parts category
    if (category && category.id === 'spare-standard-parts') {
      return spareStandardBackground;
    }
    
    // Use background image for Industrial Consumables category
    if (category && category.id === 'industrial-consumables') {
      return industrialConsumablesBackground;
    }
    
    // Use background image for Tailored Solution category
    if (category && category.id === 'tailored-solution') {
      return tailoredSolutionBackground;
    }
    
    if (category && category.subCategories) {
      for (const subCategory of category.subCategories) {
        if (subCategory && subCategory.products && subCategory.products.length > 0) {
          const firstProduct = subCategory.products[0];
          if (firstProduct && firstProduct.images && firstProduct.images.length > 0) {
            return firstProduct.images[0].src;
          }
        }
      }
    }
    return null;
  };

  // Show loading state
  if (isLoading) {
    return (
      <section id="products" className="products-section">
        <div className="products-container">
          <div className="products-title-wrapper">
            <h2 className="products-title">Our Products</h2>
            <button 
              onClick={() => {
                navigate('/products/all');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="view-all-products-button"
            >
              View All Products
            </button>
          </div>
          <p>Loading products...</p>
        </div>
      </section>
    );
  }

  // Safety check for catalog
  if (!catalog || !Array.isArray(catalog) || catalog.length === 0) {
    return (
      <section id="products" className="products-section">
        <div className="products-container">
          <div className="products-title-wrapper">
            <h2 className="products-title">Our Products</h2>
            <button 
              onClick={() => {
                navigate('/products/all');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="view-all-products-button"
            >
              View All Products
            </button>
          </div>
          <p>No products available at the moment.</p>
        </div>
      </section>
    );
  }

  try {
    return (
      <section id="products" className="products-section">
        <div className="products-container">
          <div className="products-title-wrapper">
            <h2 className="products-title">Our Products</h2>
            <button 
              onClick={() => {
                navigate('/products/all');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="view-all-products-button"
            >
              View All Products
            </button>
          </div>

          <div className="products-catalog-grid">
            {catalog && Array.isArray(catalog) && catalog.map((category, index) => {
              if (!category || !category.id) return null;
              const categoryImage = getCategoryImage(category);
              
              return (
                <div 
                  key={category.id} 
                  className="product-category-card"
                  onClick={() => handleCategoryClick(category.id)}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="category-card-image-wrapper">
                    {categoryImage ? (
                      <img
                        src={categoryImage}
                        alt={category.name || 'Category'}
                        className="category-card-image"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="250"%3E%3Crect width="400" height="250" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999" font-family="Arial" font-size="16"%3E' + (category.name || 'Category') + '%3C/text%3E%3C/svg%3E';
                        }}
                      />
                    ) : (
                      <div className="category-card-image-placeholder">
                        {category.name || 'Category'}
                      </div>
                    )}
                  </div>
                  <div className="category-card-header">
                    <h3 className="category-card-title">{category.name || 'Unnamed Category'}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Error rendering Products component:', error);
    return (
      <section id="products" className="products-section">
        <div className="products-container">
          <div className="products-title-wrapper">
            <h2 className="products-title">Our Products</h2>
          </div>
          <p style={{ color: 'red', padding: '2rem' }}>
            Error rendering products. Please check the browser console for details.
            <br />
            Error: {error instanceof Error ? error.message : 'Unknown error'}
          </p>
        </div>
      </section>
    );
  }
};

export default Products;
