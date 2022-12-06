/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['103.126.161.103'],
  },
  // async headers() {
  //   return [
  //     {
  //       source: '/:all*(svg|jpg|png)',
  //       locale: false,
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, s-max-age=17280, must-revalidate',
  //         },
  //       ],
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
