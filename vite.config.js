import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd());
  const { VITE_APP_ENV } = env;

  return {
    // Base URL configuration
    base: VITE_APP_ENV === 'production' ? '/' : '/',

    plugins: [vue()],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },

    server: {
      port: 5771, // Change port if needed
      host: true,
      open: true, // Automatically open the browser
      proxy: {
        // Proxy API requests to the backend
        '/dev-api': {
          target: 'http://localhost:8099', // Backend URL
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/dev-api/, ''), 
        },
      },
    },
  };
});
