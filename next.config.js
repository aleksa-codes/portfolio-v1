/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
};

module.exports = {
  ...nextConfig,

  images: {
    domains: ['picsum.photos'],
    deviceSizes: [320, 480, 768, 1024, 1280, 1600, 1920, 2560, 3840, 5120, 7680]
  }
};
