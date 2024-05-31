import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        'main': resolve(__dirname, 'index.html'),
        'teaching': resolve(__dirname, 'teaching.html'),
        'research': resolve(__dirname, 'research.html'),
        'publications': resolve(__dirname, 'publications.html'),
        'awards-press': resolve(__dirname, 'awards-press.html')
      }
    }
  }
})
