/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      process.env.NEXT_PUBLIC_IMG_CONFIG,
      '103.126.161.103',
      'red5studio.vn',
    ],
  },
};

module.exports = nextConfig;
