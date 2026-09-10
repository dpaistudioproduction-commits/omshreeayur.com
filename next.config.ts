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
      {
        source: '/ulcerative-colitis-treatment-omshree-sidha-hospitals-ayurvedic-approach-vs-modern-medicine',
        destination: '/treatments/ulcerative-colitis',
        permanent: true,
      },
      {
        source: '/products',
        destination: '/',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
