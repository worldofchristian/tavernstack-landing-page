import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240,
      deleteOriginFile: false,
      filter: /\.(js|mjs|json|css|html)$/i,
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
      deleteOriginFile: false,
      filter: /\.(js|mjs|json|css|html)$/i,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['react-d3-speedometer']
        }
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        sequences: false,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: false,
        drop_console: false
      },
      mangle: {
        safari10: true
      }
    }
  },
  optimizeDeps: {
    include: ['react-d3-speedometer']
  }
})
