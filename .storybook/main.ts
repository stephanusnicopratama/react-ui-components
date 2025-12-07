import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    'storybook-css-modules',
    '@storybook/addon-docs',
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  viteFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'utils': path.resolve(__dirname, '../src/utils'),
        'components': path.resolve(__dirname, '../src/components'),
        'assets': path.resolve(__dirname, '../src/assets'),
        'typings': path.resolve(__dirname, '../src/typings'),
      };
    }
    return config;
  },
};
export default config;
