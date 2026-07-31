import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://omshreeayur.com';

  const staticRoutes = ['', '/about', '/contact', '/international-patients'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const treatments = ['heart-disease', 'low-ef', 'respiratory', 'gastro', 'panchakarma'].map((slug) => ({
    url: `${baseUrl}/treatments/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const products = ['kafastha', 'cufpro'].map((slug) => ({
    url: `${baseUrl}/products/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...treatments, ...products];
}
