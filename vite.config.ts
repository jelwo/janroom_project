import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),  // src ディレクトリへのエイリアス設定
    }
  },
  base: process.env.NODE_ENV === 'production'
  ? '/janroom_project/'
  : '/'
});
