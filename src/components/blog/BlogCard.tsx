import Link from 'next/link';
import Image from 'next/image';
import type { BlogPostMeta } from '@/data/blog';
import { getClusterForPost } from '@/data/blog';

interface BlogCardProps {
  post: BlogPostMeta;
}

export default function BlogCard({ post }: BlogCardProps) {
  const cluster = getClusterForPost(post);

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article>
        <div className="aspect-[16/9] overflow-hidden rounded-lg mb-4 relative">
          <Image
            src={post.featuredImage.src}
            alt={post.featuredImage.alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div>
          {cluster && (
            <span
              className="label inline-block mb-2 px-2 py-0.5 rounded"
              style={{
                color: 'var(--color-ember)',
                background: 'rgba(217, 91, 43, 0.08)',
              }}
            >
              {cluster.name}
            </span>
          )}
          <h3
            className="font-display font-700 text-xl tracking-tight mb-2 group-hover:underline decoration-1 underline-offset-2"
            style={{ color: 'var(--color-char)' }}
          >
            {post.title}
          </h3>
          <p className="text-base mb-3 line-clamp-2" style={{ color: 'var(--color-smoke)' }}>
            {post.description}
          </p>
          <div className="flex items-center gap-3 text-sm" style={{ color: 'var(--color-smoke-light)' }}>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt + 'T00:00:00').toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
            <span>&middot;</span>
            <span>{post.readingTimeMinutes} min read</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
