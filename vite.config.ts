import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    chunkSizeWarningLimit: 2000
  },
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: 'src' },
      { find: '@a', replacement: 'src/apis' },
      { find: '@v', replacement: 'src/views' },
      { find: '@c', replacement: 'src/components' }
    ],
  },
})
