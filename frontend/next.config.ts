import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.stockx.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'image.ceneostatic.pl',
        port: '',
        // Adjust the pathname if needed (e.g., '/data/products/**')
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        // Adjust the pathname if needed (e.g., '/data/products/**')
        pathname: '/**',
      },

    ],
  },
};

export default nextConfig;
