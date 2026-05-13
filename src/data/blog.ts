// ---------------------------------------------------------------------------
// Blog data registry — metadata, clusters, and helper functions
// Content lives in src/content/blog/*.mdx; this file is the index.
// ---------------------------------------------------------------------------

export interface ContentCluster {
  id: string;
  name: string;
  description: string;
  /** Path to the pillar page — can be an existing site page or a blog post */
  pillarPath: string;
}

export interface BlogAuthor {
  name: string;
  role?: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  /** 150-160 chars for meta description */
  description: string;
  /** References a ContentCluster.id */
  clusterId: string;
  publishedAt: string; // YYYY-MM-DD
  updatedAt: string; // YYYY-MM-DD
  author: BlogAuthor;
  ogImage?: string;
  featuredImage: { src: string; alt: string };
  tags: string[];
  /** Explicit links to other blog posts (slugs) */
  relatedSlugs: string[];
  /** Explicit links to existing site pages for internal linking */
  siteLinks: string[];
  /** If true, this post is the pillar for its cluster */
  isPillar?: boolean;
  readingTimeMinutes: number;
  /** If true, post is excluded from index and sitemap */
  draft?: boolean;
}

// ---------------------------------------------------------------------------
// Content Clusters
// ---------------------------------------------------------------------------

export const contentClusters: ContentCluster[] = [
  {
    id: 'peri-peri-chicken',
    name: 'Peri Peri Chicken',
    description:
      'Everything about peri peri chicken — what it is, how it\'s made, heat levels, and halal certification.',
    pillarPath: '/halal-peri-peri-chicken',
  },
  {
    id: 'halal-food-nyc',
    name: 'Halal Food NYC & Long Island',
    description:
      'The best halal food in Brooklyn, Long Island, and greater NYC — guides, comparisons, and local recommendations.',
    pillarPath: '/blog/best-halal-restaurants-brooklyn',
  },
  {
    id: 'our-menu-story',
    name: 'Our Menu & Story',
    description:
      'Behind-the-scenes stories about our menu items, viral moments, and what makes Peri Peri Grill House different.',
    pillarPath: '/brooklyn-bed-stuy',
  },
];

// ---------------------------------------------------------------------------
// Blog Posts
// ---------------------------------------------------------------------------

export const blogPosts: BlogPostMeta[] = [
  {
    slug: 'what-is-peri-peri-chicken',
    title: 'What Is Peri Peri Chicken? The Complete Guide',
    description:
      'What is peri peri chicken? A halal flame-grilled chicken marinated overnight in African Bird\'s Eye chili. Learn the history, heat levels, and where to find it in Brooklyn and Long Island.',
    clusterId: 'peri-peri-chicken',
    publishedAt: '2026-04-15',
    updatedAt: '2026-04-15',
    author: { name: 'Peri Peri Grill House', role: 'Team' },
    featuredImage: {
      src: '/images/hero-chicken-flame-grilled.jpg',
      alt: 'Flame-grilled peri peri chicken with African Bird\'s Eye chili peppers',
    },
    tags: ['peri peri', 'halal', 'chicken', 'african cuisine', 'brooklyn', 'long island', 'nandos alternative'],
    relatedSlugs: ['nandos-alternative-nyc', 'is-peri-peri-chicken-halal'],
    siteLinks: ['/halal-peri-peri-chicken', '/brooklyn-bed-stuy', '/faq'],
    readingTimeMinutes: 6,
  },
  {
    slug: 'nandos-alternative-nyc',
    title: 'Looking for a Nando\'s in NYC? Where to Get Peri Peri Chicken Instead',
    description:
      'There\'s no Nando\'s in NYC. The closest are in DC and Chicago. Here\'s where to get halal peri peri chicken in Brooklyn and Long Island, with a Nando\'s comparison and ordering guide.',
    clusterId: 'peri-peri-chicken',
    publishedAt: '2026-04-22',
    updatedAt: '2026-04-22',
    author: { name: 'Peri Peri Grill House', role: 'Team' },
    featuredImage: {
      src: '/images/hero-chicken-flame-grilled.jpg',
      alt: 'Halal peri peri chicken in Brooklyn, the closest alternative to Nando\'s in NYC',
    },
    tags: ['nandos', 'nandos alternative', 'peri peri', 'halal', 'brooklyn', 'long island', 'nyc'],
    relatedSlugs: ['what-is-peri-peri-chicken', 'is-peri-peri-chicken-halal'],
    siteLinks: ['/halal-peri-peri-chicken', '/brooklyn-bed-stuy', '/bethpage-long-island', '/order-online'],
    readingTimeMinutes: 5,
  },
  {
    slug: 'is-peri-peri-chicken-halal',
    title: 'Is Peri Peri Chicken Halal? A Straight Answer',
    description:
      'Is peri peri chicken halal? It depends on the restaurant. Here\'s what halal means, how to verify a peri peri restaurant\'s certification, and where to find halal peri peri chicken in NYC and Long Island.',
    clusterId: 'peri-peri-chicken',
    publishedAt: '2026-04-29',
    updatedAt: '2026-04-29',
    author: { name: 'Peri Peri Grill House', role: 'Team' },
    featuredImage: {
      src: '/images/hero-chicken-flame-grilled.jpg',
      alt: 'Halal certified peri peri chicken at Peri Peri Grill House Brooklyn and Bethpage',
    },
    tags: ['halal', 'peri peri', 'zabiha', 'halal certification', 'brooklyn', 'long island', 'nyc'],
    relatedSlugs: ['what-is-peri-peri-chicken', 'nandos-alternative-nyc'],
    siteLinks: ['/halal-peri-peri-chicken', '/brooklyn-bed-stuy', '/bethpage-long-island', '/faq', '/order-online'],
    readingTimeMinutes: 6,
  },
];

// ---------------------------------------------------------------------------
// Helper Functions
// ---------------------------------------------------------------------------

export function getPostBySlug(slug: string): BlogPostMeta | undefined {
  return blogPosts.find((p) => p.slug === slug && !p.draft);
}

export function getPublishedPosts(): BlogPostMeta[] {
  return blogPosts
    .filter((p) => !p.draft)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getPostsByCluster(clusterId: string): BlogPostMeta[] {
  return getPublishedPosts().filter((p) => p.clusterId === clusterId);
}

export function getClusterById(id: string): ContentCluster | undefined {
  return contentClusters.find((c) => c.id === id);
}

export function getClusterForPost(post: BlogPostMeta): ContentCluster | undefined {
  return getClusterById(post.clusterId);
}

export function getRelatedPosts(post: BlogPostMeta, max = 4): BlogPostMeta[] {
  const published = getPublishedPosts().filter((p) => p.slug !== post.slug);

  // Prioritize explicit relatedSlugs
  const explicit = post.relatedSlugs
    .map((slug) => published.find((p) => p.slug === slug))
    .filter((p): p is BlogPostMeta => p !== undefined);

  if (explicit.length >= max) return explicit.slice(0, max);

  // Fill remaining with same-cluster posts
  const sameCluster = published.filter(
    (p) => p.clusterId === post.clusterId && !post.relatedSlugs.includes(p.slug),
  );

  // Then any other posts
  const other = published.filter(
    (p) => p.clusterId !== post.clusterId && !post.relatedSlugs.includes(p.slug),
  );

  return [...explicit, ...sameCluster, ...other].slice(0, max);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  for (const post of getPublishedPosts()) {
    for (const tag of post.tags) {
      tags.add(tag);
    }
  }
  return Array.from(tags).sort();
}

export function getAllClusterIds(): string[] {
  const ids = new Set<string>();
  for (const post of getPublishedPosts()) {
    ids.add(post.clusterId);
  }
  return Array.from(ids);
}
