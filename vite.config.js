import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './src/public',
  build: {
    outDir: '../../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/public/1-gallery.html'),
      },
    },
  },
  server: {
    open: '/1-gallery.html',
  },
});
