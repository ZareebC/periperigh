'use client';

import { useState } from 'react';
import type { BlogPostMeta, ContentCluster } from '@/data/blog';
import BlogCard from './BlogCard';

interface ClusterFilterProps {
  posts: BlogPostMeta[];
  clusters: ContentCluster[];
}

export default function ClusterFilter({ posts, clusters }: ClusterFilterProps) {
  const [activeCluster, setActiveCluster] = useState<string | null>(null);

  const activeClusters = clusters.filter((c) => posts.some((p) => p.clusterId === c.id));
  const filtered = activeCluster ? posts.filter((p) => p.clusterId === activeCluster) : posts;

  return (
    <>
      {activeClusters.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveCluster(null)}
            className="label px-3 py-1.5 rounded-full border transition-colors cursor-pointer"
            style={{
              borderColor: !activeCluster ? 'var(--color-ember)' : 'var(--color-cream-dark)',
              color: !activeCluster ? 'var(--color-ember)' : 'var(--color-smoke)',
              background: !activeCluster ? 'rgba(217, 91, 43, 0.08)' : 'transparent',
            }}
          >
            All
          </button>
          {activeClusters.map((cluster) => (
            <button
              key={cluster.id}
              onClick={() => setActiveCluster(cluster.id)}
              className="label px-3 py-1.5 rounded-full border transition-colors cursor-pointer"
              style={{
                borderColor:
                  activeCluster === cluster.id ? 'var(--color-ember)' : 'var(--color-cream-dark)',
                color:
                  activeCluster === cluster.id ? 'var(--color-ember)' : 'var(--color-smoke)',
                background:
                  activeCluster === cluster.id ? 'rgba(217, 91, 43, 0.08)' : 'transparent',
              }}
            >
              {cluster.name}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filtered.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center py-12 text-lg" style={{ color: 'var(--color-smoke)' }}>
          No posts yet in this category. Check back soon.
        </p>
      )}
    </>
  );
}
