import React, { useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productCatalog } from '../data/productsData';
import type { Product } from '../data/productsData';
import Header from './Header';
import ProductDialog from './ProductDialog';
import Contact from './Contact';
import agriBackground from '../assets/extracted_images/backgrounds/backgrounds_001.jpg';
import hydraulicBackground from '../assets/extracted_images/backgrounds/backgrounds_002.png';
import forgingBackground from '../assets/extracted_images/backgrounds/backgrounds_003.png';
import miningBackground from '../assets/extracted_images/backgrounds/backgrounds_004.jpg';
import heavyFabricationBackground from '../assets/extracted_images/backgrounds/backgrounds_005.png';
import castingPulleyBackground from '../assets/extracted_images/backgrounds/backgrounds_006.png';
import spareStandardBackground from '../assets/extracted_images/backgrounds/backgrounds_007.png';
import industrialConsumablesBackground from '../assets/extracted_images/backgrounds/backgrounds_008.png';
import './CategoryProducts.css';

const CategoryProducts: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Find the category and get all its products
  const categoryData = useMemo(() => {
    try {
      if (!categoryId || !productCatalog || !Array.isArray(productCatalog)) {
        return null;
      }
      return productCatalog.find((cat) => cat.id === categoryId);
    } catch (error) {
      console.error('Error loading category:', error);
      return null;
    }
  }, [categoryId]);

  // Flatten all products from this category
  const categoryProducts = useMemo(() => {
    const products: Product[] = [];
    if (categoryData && categoryData.subCategories) {
      categoryData.subCategories.forEach((subCategory) => {
        if (subCategory && subCategory.products) {
          subCategory.products.forEach((product) => {
            products.push(product);
          });
        }
      });
    }
    return products;
  }, [categoryData]);

  const handleProductClick = (product: Product) => {
    console.log('Product clicked:', product);
    setSelectedProduct(product);
    setIsDialogOpen(true);
    console.log('Dialog should open, isDialogOpen:', true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedProduct(null);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, productName: string) => {
    const target = e.target as HTMLImageElement;
    target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200"%3E%3Crect width="300" height="200" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999" font-family="Arial" font-size="14"%3E' + productName + '%3C/text%3E%3C/svg%3E';
  };

  if (!categoryId) {
    return (
      <>
        <Header />
        <div className="category-products-page">
          <div className="category-products-container">
            <div className="category-error">
              <h2>No category specified</h2>
              <button onClick={() => navigate('/')} className="back-button">
                ← Back to Home
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (!categoryData) {
    return (
      <>
        <Header />
        <div className="category-products-page">
          <div className="category-products-container">
            <div className="category-error">
              <h2>Category not found</h2>
              <p>Category ID: {categoryId}</p>
              <button onClick={() => navigate('/')} className="back-button">
                ← Back to Home
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  const isAgriSolution = categoryId === 'agri-solution';
  const isHydraulicSolution = categoryId === 'hydraulic-solution';
  const isForgingsMachining = categoryId === 'forgings-machining';
  const isMiningConsumables = categoryId === 'mining-consumables';
  const isHeavyFabrication = categoryId === 'heavy-fabrication';
  const isCastingPulley = categoryId === 'casting-pulley';
  const isSpareStandardParts = categoryId === 'spare-standard-parts';
  const isIndustrialConsumables = categoryId === 'industrial-consumables';

  const getBackgroundImage = () => {
    if (isAgriSolution) return agriBackground;
    if (isHydraulicSolution) return hydraulicBackground;
    if (isForgingsMachining) return forgingBackground;
    if (isMiningConsumables) return miningBackground;
    if (isHeavyFabrication) return heavyFabricationBackground;
    if (isCastingPulley) return castingPulleyBackground;
    if (isSpareStandardParts) return spareStandardBackground;
    if (isIndustrialConsumables) return industrialConsumablesBackground;
    return null;
  };

  const backgroundImage = getBackgroundImage();
  const hasBackground = backgroundImage !== null;

  return (
    <>
      <Header />
      <div 
        className={`category-products-page ${isAgriSolution ? 'agri-solution-bg' : ''} ${isHydraulicSolution ? 'hydraulic-solution-bg' : ''} ${isForgingsMachining ? 'forgings-machining-bg' : ''} ${isMiningConsumables ? 'mining-consumables-bg' : ''} ${isHeavyFabrication ? 'heavy-fabrication-bg' : ''} ${isCastingPulley ? 'casting-pulley-bg' : ''} ${isSpareStandardParts ? 'spare-standard-parts-bg' : ''} ${isIndustrialConsumables ? 'industrial-consumables-bg' : ''}`}
        style={hasBackground ? { '--bg-image': `url(${backgroundImage})` } as React.CSSProperties : {}}
      >
        <div className="category-products-container">
          <div className="category-products-header">
            <button onClick={() => navigate('/')} className="back-button">
              ← Back to Home
            </button>
            <h1 className="category-products-title">{categoryData.name}</h1>
            <p className="category-products-subtitle">
              {categoryProducts.length} {categoryProducts.length === 1 ? 'product' : 'products'} available
            </p>
          </div>

          {/* Show all products */}
          {categoryProducts.length === 0 ? (
            <div className="no-products">
              <p>No products available in this category.</p>
            </div>
          ) : (
            <div className="category-products-grid">
              {categoryProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="category-product-card"
                  onClick={() => handleProductClick(product)}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="category-product-image-wrapper">
                    {product.images && product.images.length > 0 ? (
                      <img
                        src={product.images[0].src}
                        alt={product.images[0].alt || product.name}
                        className="category-product-image"
                        onError={(e) => handleImageError(e, product.name)}
                      />
                    ) : (
                      <div className="category-product-placeholder">
                        {product.name}
                      </div>
                    )}
                  </div>
                  <div className="category-product-info">
                    <h3 className="category-product-name">{product.name}</h3>
                    <p className="category-product-description">
                      {product.description && product.description.length > 120
                        ? `${product.description.substring(0, 120)}...`
                        : product.description || 'No description available'}
                    </p>
                    {product.details && product.details.length > 0 && (
                      <div className="category-product-features">
                        <span className="feature-count">
                          {product.details.length} {product.details.length === 1 ? 'feature' : 'features'}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <ProductDialog
        product={selectedProduct}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />
      <Contact />
    </>
  );
};

export default CategoryProducts;

