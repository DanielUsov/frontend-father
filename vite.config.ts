import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:1234/', // Замените на адрес вашего удаленного сервера
        changeOrigin: true,
      },
    },
  },
});
