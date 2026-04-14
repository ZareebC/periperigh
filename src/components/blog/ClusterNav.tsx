import Link from 'next/link';
import type { BlogPostMeta, ContentCluster } from '@/data/blog';

interface ClusterNavProps {
  cluster: ContentCluster;
  posts: BlogPostMeta[];
  currentSlug: string;
}

export default function ClusterNav({ cluster, posts, currentSlug }: ClusterNavProps) {
  const siblingPosts = posts.filter((p) => p.slug !== currentSlug);

  return (
    <nav
      className="my-12 p-6 rounded-lg"
      style={{ background: 'var(--color-cream-dark)' }}
      aria-label="Content series navigation"
    >
      <div className="label mb-3" style={{ color: 'var(--color-ember)' }}>
        {cluster.name} Series
      </div>
      <div className="ember-line mb-4" />

      <Link
        href={cluster.pillarPath}
        className="font-display font-700 text-lg block mb-4 underline decoration-1 underline-offset-2"
        style={{ color: 'var(--color-char)' }}
      >
        Read the full guide &rarr;
      </Link>

      {siblingPosts.length > 0 && (
        <ul className="space-y-2">
          {siblingPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="text-base transition-colors hover:underline"
                style={{ color: 'var(--color-smoke)' }}
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
