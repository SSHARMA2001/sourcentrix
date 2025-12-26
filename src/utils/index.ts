// Utility functions and helpers
// Export utility functions here

export { default as Logo } from './Logo';

/**
 * Resolves image paths for Vite (works in both dev and production)
 * Converts /src/assets/... paths to relative paths that Vite can resolve
 */
export function getImageUrl(path: string): string {
  // Remove /src prefix if present and convert to relative path
  if (path.startsWith('/src/')) {
    // Convert /src/assets/... to ../assets/... (relative from data folder)
    return path.replace('/src/', '../');
  }
  // If already a relative path or absolute URL, return as-is
  return path;
}

