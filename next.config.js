/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [process.env.NEXT_PUBLIC_IMG_CONFIG],
  },
};

module.exports = nextConfig;
