/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['hbomax-images.warnermediacdn.com'],
  },
};

module.exports = nextConfig;
