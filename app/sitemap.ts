import type { MetadataRoute } from 'next';
import { site, nav } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['/', ...nav.map((n) => n.href), '/contact'];
  return routes.map((path) => ({
    url: `${site.url}${path === '/' ? '/' : `${path}/`}`,
    lastModified: new Date(),
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }));
}
