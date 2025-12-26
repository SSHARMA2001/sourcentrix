/**
 * Image resolver for product images
 * Uses Vite's import.meta.glob to dynamically import all product images
 */

// Import all product images using Vite's glob import
const productImages = import.meta.glob('../assets/extracted_images/products/**/*.{jpg,jpeg,png}', {
  eager: true,
  import: 'default'
}) as Record<string, string>;

/**
 * Resolves product image paths to their actual URLs
 * Converts /src/assets/... paths to the actual imported image URLs
 */
export function resolveProductImage(path: string): string {
  // Remove /src prefix if present
  let cleanPath = path.startsWith('/src/') ? path.slice(5) : path;
  
  // Remove leading slash if present
  if (cleanPath.startsWith('/')) {
    cleanPath = cleanPath.slice(1);
  }
  
  // The glob import gives us paths like: ../assets/extracted_images/products/...
  // We need to match: assets/extracted_images/products/...
  const imageKey = `../${cleanPath}`;
  
  // Try exact match first
  if (productImages[imageKey]) {
    return productImages[imageKey] as string;
  }
  
  // Try to find by filename (more flexible matching)
  const fileName = cleanPath.split('/').pop();
  if (fileName) {
    for (const [key, value] of Object.entries(productImages)) {
      if (key.endsWith(fileName)) {
        return value as string;
      }
    }
  }
  
  // If not found, return original path (will show broken image, but won't crash)
  console.warn(`Image not found: ${path} (searched for: ${imageKey})`);
  return path;
}

