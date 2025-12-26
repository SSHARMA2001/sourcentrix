import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Default Vite port
  },
  preview: {
    port: 4173, // Default preview port
  },
  build: {
    // Ensure production build is ready for HTTPS
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
