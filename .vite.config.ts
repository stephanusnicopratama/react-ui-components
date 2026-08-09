import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: 'utils', replacement: path.resolve(__dirname, './src/utils') },
      { find: 'components', replacement: path.resolve(__dirname, './src/components') },
      { find: 'assets', replacement: path.resolve(__dirname, './src/assets') },
      { find: 'typings', replacement: path.resolve(__dirname, './src/typings') },
    ],
  },
});
