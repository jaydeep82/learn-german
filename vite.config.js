import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    // Installable + offline (roadmap C1). Precaches the whole app (data lives
    // in the JS bundle, audio is on-device TTS), so everything works offline.
    // NOTE: scripts/deploy.sh must keep serving sw.js / manifest.webmanifest /
    // registerSW.js with no-cache and invalidate them on deploy.
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Deutsch30 — Learn German A1',
        short_name: 'Deutsch30',
        description: 'Learn German in 50 days — lessons, vocabulary, spaced repetition and a full Goethe A1 exam trainer.',
        lang: 'en',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        theme_color: '#155cf0',
        background_color: '#f8fafc',
        icons: [
          { src: '/pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: '/pwa-512x512.png', sizes: '512x512', type: 'image/png' },
          { src: '/pwa-maskable-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico,woff2}'],
        // The app bundle is ~1.2 MB; leave growth headroom past Workbox's 2 MiB default.
        maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
        navigateFallback: '/index.html',
        runtimeCaching: [
          {
            // The Inter webfont from rsms.me — cache it so typography survives offline.
            urlPattern: /^https:\/\/rsms\.me\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'inter-font',
              expiration: { maxEntries: 16, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
    }),
  ],
  server: { port: 5173, open: true },
});
