// eslint-disable-next-line import/namespace
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@hehe/hds'],
};

export default withVanillaExtract(nextConfig);
