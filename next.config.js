/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
    
    /* config options here */
    images: {
        unoptimized: true
    },

    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    },

    trailingSlash: true,
        
  }
  
  module.exports = nextConfig