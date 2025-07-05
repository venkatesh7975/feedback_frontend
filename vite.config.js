import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // Optional shortcut
    },
  },
  build: {
    outDir: 'dist',         // Default output for Vercel
    emptyOutDir: true,
  },
  base: '/',                // Important for Vercel routing
})
