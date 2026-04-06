import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Redirect old GoDaddy paths if they ever change
  async redirects() {
    return [
      // Safety redirects — preserve link equity if slugs ever need to change
      {
        source: '/menu',
        destination: '/brooklyn-bed-stuy',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/halal-peri-peri-chicken',
        permanent: true,
      },
    ];
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
