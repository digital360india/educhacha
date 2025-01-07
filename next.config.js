/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

// next.config.js
module.exports = {
    images: {
      domains: ['res.cloudinary.com'],
    },
    // trailingSlash: true,
    async redirects() {
      return [
        {
          source: '/blogs/:slug',
          destination: 'https://blog.educhacha.com/:slug',
          basePath:false,
          permanent:false
        },
        {
          source: '/blogs',
          destination: 'https://blog.educhacha.com',
          basePath:false,
          permanent:false
        },
      ];
    },
  };
