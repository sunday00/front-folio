import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  root: './src',
  build: {
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      input: {
        app: './src/index.html'
      }
    },
    outDir: '../'
  },
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/' },
      { find: '@a', replacement: '/apis' },
      { find: '@v', replacement: '/views' },
      { find: '@c', replacement: '/components' },
      { find: '@s', replacement: '/store' }
    ]
  },
})
