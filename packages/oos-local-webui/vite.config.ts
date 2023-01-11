import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate',
      includeAssets: [
        '/assets/icons/favicon.ico', 
        '/assets/icons/android-chrome-192x192.png', 
        '/assets/icons/android-chrome-512x512.png', 
        '/assets/icons/apple-touch-icon.png', 
        '/assets/icons/safari-pinned-tab.svg'
      ],
      manifest: {
        name: 'OceanOS',
        short_name: 'OceanOS',
        description: 'OceanOS Personal Operating System',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/assets/android-chrome-192x192-9885fd88.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/assets/android-chrome-512x512-3db7d448.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/assets/android-chrome-512x512-3db7d448.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }          
        ]
      }
    })
  ],
})
