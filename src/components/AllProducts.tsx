import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { productCatalog } from '../data/productsData';
import type { Product } from '../data/productsData';
import Header from './Header';
import ProductDialog from './ProductDialog';
import Contact from './Contact';
import './AllProducts.css';

const AllProducts: React.FC = () => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());

  // Flatten all products from all categories and subcategories
  const allProducts = useMemo(() => {
    const products: Product[] = [];
    try {
      if (productCatalog && Array.isArray(productCatalog)) {
        productCatalog.forEach((category) => {
          if (category && category.subCategories) {
            category.subCategories.forEach((subCategory) => {
              if (subCategory && subCategory.products) {
                subCategory.products.forEach((product) => {
                  products.push({
                    ...product,
                    categoryId: category.id,
                    categoryName: category.name,
                    subCategoryId: subCategory.id,
                    subCategoryName: subCategory.name,
                  } as Product & { categoryId: string; categoryName: string; subCategoryId: string; subCategoryName: string });
                });
              }
            });
          }
        });
      }
    } catch (error) {
      console.error('Error loading products:', error);
    }
    return products;
  }, []);

  // Get unique categories and subcategories for filter
  const filterOptions = useMemo(() => {
    const categories: { id: string; name: string; productCount: number }[] = [];
    const subCategories: { id: string; name: string; categoryId: string; productCount: number }[] = [];

    if (productCatalog && Array.isArray(productCatalog)) {
      productCatalog.forEach((category) => {
        let categoryCount = 0;
        if (category.subCategories) {
          category.subCategories.forEach((subCategory) => {
            const subCount = subCategory.products?.length || 0;
            categoryCount += subCount;
            subCategories.push({
              id: subCategory.id,
              name: subCategory.name,
              categoryId: category.id,
              productCount: subCount,
            });
          });
        }
        categories.push({
          id: category.id,
          name: category.name,
          productCount: categoryCount,
        });
      });
    }
    return { categories, subCategories };
  }, []);

  // Filter and search products
  const filteredProducts = useMemo(() => {
    let filtered = allProducts;

    // Filter by selected categories
    if (selectedCategories.size > 0) {
      filtered = filtered.filter((product: any) => selectedCategories.has(product.categoryId));
    }

    // Search by name or description
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter((product: any) => {
        const nameMatch = product.name?.toLowerCase().includes(query);
        const descMatch = product.description?.toLowerCase().includes(query);
        const categoryMatch = product.categoryName?.toLowerCase().includes(query);
        const subCategoryMatch = product.subCategoryName?.toLowerCase().includes(query);
        return nameMatch || descMatch || categoryMatch || subCategoryMatch;
      });
    }

    return filtered;
  }, [allProducts, selectedCategories, searchQuery]);

  const toggleCategory = (categoryId: string) => {
    const newSelected = new Set(selectedCategories);
    if (newSelected.has(categoryId)) {
      newSelected.delete(categoryId);
    } else {
      newSelected.add(categoryId);
    }
    setSelectedCategories(newSelected);
  };

  const clearFilters = () => {
    setSelectedCategories(new Set());
    setSearchQuery('');
  };

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

  return (
    <>
      <Header />
      <div className="all-products-page">
        <div className="all-products-container">
          <div className="all-products-header">
            <button onClick={() => navigate('/')} className="back-button">
              ← Back to Home
            </button>
            <h1 className="all-products-title">All Products</h1>
            <p className="all-products-subtitle">
              Browse our complete catalog of {allProducts.length} products
            </p>
          </div>

          <div className="all-products-content-wrapper">
            {/* Left Side Filter Panel */}
            <aside className="all-products-filters-sidebar">
              <div className="filters-header">
                <h2 className="filters-title">Filters</h2>
                {(selectedCategories.size > 0 || searchQuery) && (
                  <button onClick={clearFilters} className="clear-all-filters-button">
                    Clear All
                  </button>
                )}
              </div>

              {/* Search */}
              <div className="filter-section">
                <h3 className="filter-section-title">Search</h3>
                <div className="search-container">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="clear-search-button"
                      aria-label="Clear search"
                    >
                    </button>
                  )}
                </div>
              </div>

              {/* Category Filter */}
              <div className="filter-section">
                <h3 className="filter-section-title">Categories</h3>
                <div className="filter-checkboxes">
                  {filterOptions.categories.map((category) => (
                    <label key={category.id} className="filter-checkbox-label">
                      <input
                        type="checkbox"
                        checked={selectedCategories.has(category.id)}
                        onChange={() => toggleCategory(category.id)}
                        className="filter-checkbox"
                      />
                      <span className="filter-checkbox-text">
                        {category.name}
                        <span className="filter-count">({category.productCount})</span>
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Results Count */}
              {filteredProducts.length !== allProducts.length && (
                <div className="filter-results-count">
                  Showing {filteredProducts.length} of {allProducts.length} products
                </div>
              )}
            </aside>

            {/* Products Grid */}
            <div className="all-products-main-content">
              {filteredProducts.length === 0 ? (
                <div className="no-products">
                  <p>
                    {searchQuery || selectedCategories.size > 0
                      ? 'No products found matching your filters.'
                      : 'No products available at the moment.'}
                  </p>
                </div>
              ) : (
                <div className="all-products-grid">
                  {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="all-product-card"
                  onClick={() => handleProductClick(product)}
                >
                  <div className="all-product-image-wrapper">
                    {product.images && product.images.length > 0 ? (
                      <img
                        src={product.images[0].src}
                        alt={product.images[0].alt || product.name}
                        className="all-product-image"
                        onError={(e) => handleImageError(e, product.name)}
                      />
                    ) : (
                      <div className="all-product-placeholder">
                        {product.name}
                      </div>
                    )}
                  </div>
                  <div className="all-product-info">
                    <h3 className="all-product-name">{product.name}</h3>
                    <p className="all-product-description">
                      {product.description && product.description.length > 120
                        ? `${product.description.substring(0, 120)}...`
                        : product.description || 'No description available'}
                    </p>
                    {product.details && product.details.length > 0 && (
                      <div className="all-product-features">
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

export default AllProducts;

