import { join, dirname } from 'path';
import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-interactions'),
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        plugins: [new VanillaExtractPlugin(), new MiniCssExtractPlugin()],
        rules: [
          {
            test: /\.css$/,
            sideEffects: true,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {},
              },
            ],
            exclude: /\.vanilla\.css$/,
          },
          {
            // Targets only CSS files generated by vanilla-extract
            test: /\.vanilla\.css$/i,
            sideEffects: true,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: require.resolve('css-loader'),
                options: {
                  // Required as image imports should be handled via JS/TS import statements
                  url: false,
                },
              },
            ],
          },
        ],
      },
    },
  ],
  framework: {
    name: getAbsolutePath('@storybook/nextjs'),
    options: {},
  },
  webpackFinal: config => {
    config.module.rules.unshift({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            titleProp: true,
            ref: true,
            svgo: false,
            svgoConfig: {
              plugins: [{ removeViewBox: false }],
            },
          },
        },
        { loader: 'url-loader' },
      ],
    });

    return config;
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: [
    {
      from: '../src/systems/fonts',
      to: 'src/systems/fonts',
    },
    {
      from: '../src/systems/images',
      to: 'src/systems/images',
    },
  ],
};
export default config;
