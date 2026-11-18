import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/odgi'],
    },
    sitemap: 'https://www.omshreeayur.com/sitemap.xml',
  };
}
