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
    url: `${BASE}/calculator`,
    lastModified: new Date('2026-07-03'),
    changeFrequency: 'yearly',
    priority: 0.8,
  },
  {
    url: `${BASE}/case-studies`,
    lastModified: new Date('2026-07-03'),
    changeFrequency: 'yearly',
    priority: 0.8,
  },
  {
    url: `${BASE}/contact-us`,
    lastModified: new Date('2026-07-12'),
    changeFrequency: 'yearly',
    priority: 0.9,
  },
  {
    url: `${BASE}/timber-treatment-negombo`,
    lastModified: new Date('2026-07-03'),
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: `${BASE}/timber-treatment-colombo`,
    lastModified: new Date('2026-07-04'),
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: `${BASE}/timber-treatment-gampaha`,
    lastModified: new Date('2026-07-04'),
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: `${BASE}/timber-treatment-kandy`,
    lastModified: new Date('2026-07-04'),
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: `${BASE}/timber-treatment-kurunegala`,
    lastModified: new Date('2026-07-05'),
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: `${BASE}/timber-treatment-chilaw`,
    lastModified: new Date('2026-07-05'),
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: `${BASE}/timber-treatment-galle`,
    lastModified: new Date('2026-07-05'),
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: `${BASE}/service-areas`,
    lastModified: new Date('2026-07-05'),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${BASE}/services/kiln-drying`,
    lastModified: new Date('2026-07-21'),
    changeFrequency: 'monthly',
    priority: 0.9,
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
