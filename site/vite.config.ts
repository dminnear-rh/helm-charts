import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    proxy: {
      '/index.yaml': {
        target: 'https://charts.validatedpatterns.io',
        changeOrigin: true,
      },
    },
    fs: {
      allow: ['.', '..'],
    },
  },
});
