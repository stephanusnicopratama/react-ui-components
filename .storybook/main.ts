import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
  ],

  staticDirs: ['../src/assets'],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  viteFinal: async (config) => {
    if (!config.resolve) config.resolve = {};
    const base = Array.isArray(config.resolve.alias) ? config.resolve.alias : [];
    config.resolve.alias = [
      ...base,
      { find: 'utils', replacement: path.resolve(__dirname, '../src/utils') },
      { find: 'components', replacement: path.resolve(__dirname, '../src/components') },
      { find: 'assets', replacement: path.resolve(__dirname, '../src/assets') },
      { find: 'typings', replacement: path.resolve(__dirname, '../src/typings') },
    ];
    return config;
  },
};
export default config;
