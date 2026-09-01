import { MetadataRoute } from 'next';
import { conditionCategories } from '@/data/conditions';
import { therapies } from '@/data/therapies';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://omshreeayur.com';

  const staticRoutes = [
    '', 
    '/about', 
    '/about/doctors',
    '/about/history',
    '/about/why-omshree',
    '/contact', 
    '/international-patients',
    '/ayurveda',
    '/ayurveda/kerala',
    '/ayurveda/panchakarma',
    '/ayurveda/consultation',
    '/treatments',
    '/treatments/therapies',
    '/conditions',
    '/patient-care',
    '/patient-care/consultation',
    '/patient-care/facilities',
    '/patient-care/journey',
    '/patient-care/tariff',
    '/patient-care/challenging-offer'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Map Condition Categories
  const categoryRoutes = conditionCategories.map(cat => ({
    url: `${baseUrl}/conditions/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Map Individual Conditions
  const conditionRoutes = conditionCategories.flatMap(cat => 
    cat.conditions.map(cond => ({
      url: `${baseUrl}/conditions/${cat.slug}/${cond.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    }))
  );

  // Map Therapies
  const therapyRoutes = therapies.map(therapy => ({
    url: `${baseUrl}/treatments/therapies/${therapy.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Map Treatments (read dynamically)
  const treatmentsDir = path.join(process.cwd(), 'src', 'data', 'treatments');
  const treatmentFiles = fs.existsSync(treatmentsDir) ? fs.readdirSync(treatmentsDir).filter(f => f.endsWith('.json')) : [];
  const treatmentRoutes = treatmentFiles.map(file => {
    const slug = file.replace('.json', '');
    return {
      url: `${baseUrl}/treatments/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    };
  });

  return [...staticRoutes, ...categoryRoutes, ...conditionRoutes, ...therapyRoutes, ...treatmentRoutes];
}
