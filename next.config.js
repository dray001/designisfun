/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/designisfun', // ✅ Add this (see below!)
  assetPrefix: '/designisfun',
  images: {
    unoptimized: true,
  },
  experimental: {
    viewTransition: true,
  }
};

module.exports = nextConfig;