/**
 * Image resolver for product images
 * Uses Vite's import.meta.glob to dynamically import all product images
 */

// Import all product images using Vite's glob import
// Images in Vite are imported as their URL strings directly
const productImagesModules = import.meta.glob('../assets/extracted_images/products/**/*.{jpg,jpeg,png}', {
  eager: true
}) as Record<string, { default: string }>;

// Create a normalized map for easier lookup
const productImages: Record<string, string> = {};
for (const [key, module] of Object.entries(productImagesModules)) {
  // Extract the actual URL from the module
  // Vite imports images as modules with a default export containing the URL
  const imageUrl = typeof module === 'string' ? module : (module as any).default || module;
  
  // Normalize the key (remove ../ prefix, normalize slashes)
  const normalizedKey = key.replace(/^\.\.\//, '').replace(/\\/g, '/');
  productImages[normalizedKey] = imageUrl;
  // Also store with original key for backward compatibility
  productImages[key] = imageUrl;
  // Store with /src/ prefix
  productImages[`src/${normalizedKey}`] = imageUrl;
  // Store with /src/ prefix and leading slash
  productImages[`/src/${normalizedKey}`] = imageUrl;
}

/**
 * Resolves product image paths to their actual URLs
 * Converts /src/assets/... paths to the actual imported image URLs
 */
export function resolveProductImage(path: string): string {
  // Normalize the input path
  let normalizedPath = path.replace(/\\/g, '/');
  
  // Remove /src prefix if present
  if (normalizedPath.startsWith('/src/')) {
    normalizedPath = normalizedPath.slice(5);
  }
  
  // Remove leading slash if present
  if (normalizedPath.startsWith('/')) {
    normalizedPath = normalizedPath.slice(1);
  }
  
  // Try direct lookup with various path formats
  const lookupKeys = [
    normalizedPath,                    // assets/extracted_images/products/...
    `/src/${normalizedPath}`,          // /src/assets/extracted_images/products/...
    `src/${normalizedPath}`,           // src/assets/extracted_images/products/...
    `../${normalizedPath}`,            // ../assets/extracted_images/products/...
    path,                              // Original path
  ];
  
  for (const key of lookupKeys) {
    if (productImages[key]) {
      return productImages[key];
    }
  }
  
  // Try to find by filename (fallback matching)
  const fileName = normalizedPath.split('/').pop();
  if (fileName) {
    for (const [key, value] of Object.entries(productImages)) {
      // Match if the key ends with the filename
      if (key.endsWith(`/${fileName}`) || key.endsWith(fileName)) {
        return value;
      }
    }
  }
  
  // If still not found, try partial path matching
  const pathParts = normalizedPath.split('/').filter(p => p);
  if (pathParts.length >= 2) {
    const folderName = pathParts[pathParts.length - 2];
    const fileName = pathParts[pathParts.length - 1];
    
    for (const [key, value] of Object.entries(productImages)) {
      if (key.includes(folderName) && key.includes(fileName)) {
        return value;
      }
    }
  }
  
  // If not found, return original path (will show broken image, but won't crash)
  if (import.meta.env.DEV) {
    console.warn(`Image not found: ${path}`);
    console.warn('Normalized path:', normalizedPath);
    console.warn('Sample available keys:', Object.keys(productImages).slice(0, 3));
  }
  return path;
}


