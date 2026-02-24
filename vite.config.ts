import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        background_color: "#a300c8",
        description: "Personal website for Joshua Bee",
        display: "standalone",
        icons: [
          {
            src: "images/cards/home/joshua-bee-electric-192.webp",
            type: "image/webp",
            sizes: "192x192",
            purpose: "any maskable"
          },
          {
            src: "images/cards/home/joshua-bee-electric-512.webp",
            type: "image/webp",
            sizes: "512x512",
            purpose: "any maskable"
          },
        ],
        name: "Joshua Bee",
        screenshots: [
          {
            src: "images/screenshots/screenshot1.webp",
            sizes: "5120x2156",
            type: "image/webp",
            platform: "wide",
            label: "Homescreen of Joshua Bee"
          }
        ],
        short_name: "Joshua Bee",
        theme_color: "#a300c8"
      }
    })
  ]
});
