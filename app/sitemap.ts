import { MetadataRoute } from 'next';
import { posts } from './blog/posts';

const BASE = 'https://www.stxaviertimber.com';

// Static pages — update lastModified whenever the page content changes.
const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: BASE,
    lastModified: new Date('2026-06-04'),
    changeFrequency: 'monthly',
    priority: 1,
  },
  {
    url: `${BASE}/about`,
    lastModified: new Date('2026-06-04'),
    changeFrequency: 'yearly',
    priority: 0.7,
  },
  {
    url: `${BASE}/blog`,
    // Always reflects the newest post date so Google knows when fresh content arrived.
    lastModified: new Date(posts[0].date),
    changeFrequency: 'weekly',
    priority: 0.8,
  },
];

// Blog posts — sorted newest-first in posts.ts; lastModified = publish date.
const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
  url: `${BASE}/blog/${post.slug}`,
  lastModified: new Date(post.date),
  changeFrequency: 'monthly' as const,
  priority: 0.6,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  return [...staticRoutes, ...blogRoutes];
}
