import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'omshreeayur.com',
      }
    ],
  },
  async redirects() {
    return [
      {
        source: '/about-our-hospital',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/our-treatments',
        destination: '/treatments',
        permanent: true,
      },
      {
        source: '/kerala-ayurveda',
        destination: '/ayurveda/kerala',
        permanent: true,
      },
      {
        source: '/facilities',
        destination: '/patient-care/facilities',
        permanent: true,
      },
      {
        source: '/packages',
        destination: '/treatments',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
