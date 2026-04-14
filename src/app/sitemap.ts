import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data/siteConfig';
import { getPublishedPosts } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.domain;

  // Static pages with real last-modified dates
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: '2026-04-14',
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/halal-peri-peri-chicken`,
      lastModified: '2026-04-09',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/brooklyn-bed-stuy`,
      lastModified: '2026-04-09',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/bethpage-long-island`,
      lastModified: '2026-04-09',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hicksville-halal-chicken`,
      lastModified: '2026-04-09',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: '2026-04-09',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/order-online`,
      lastModified: '2026-04-09',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: '2026-04-09',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: '2026-04-09',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly',
      priority: 0.6,
    },
  ];

  // Dynamic blog post entries
  const blogPages: MetadataRoute.Sitemap = getPublishedPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: 'monthly' as const,
    priority: post.isPillar ? 0.8 : 0.7,
  }));

  return [...staticPages, ...blogPages];
}
