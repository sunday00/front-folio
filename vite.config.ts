import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    chunkSizeWarningLimit: 2000
  },
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@a', replacement: path.resolve(__dirname, 'src/apis') },
      { find: '@v', replacement: path.resolve(__dirname,'src/views') },
      { find: '@c', replacement: path.resolve(__dirname,'src/components') }
    ]
  },
})
