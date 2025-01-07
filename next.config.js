/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.ibb.co', 'm3.winback.store', 'm1.winback.store', 'mma.prnewswire.com', 'winback-academy.org'],
  },
};

module.exports = withPWA(nextConfig);
