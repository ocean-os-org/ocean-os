import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo!.name!.split('.').at(1) || 'files';

          extType = (/woff|woff2/i.test(extType)) ? 'fonts' : extType;
          extType = (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) ? 'imgs' : extType;

          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js'
      },
      input: {
        app: './index.html', // default
      },
    },
  },
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate',
      manifest: {
        name: 'OceanOS',
        short_name: 'OceanOS',
        description: 'OceanOS Personal Operating System',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/assets/icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/assets/icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/assets/icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }          
        ]
      }
    })
  ],
})
