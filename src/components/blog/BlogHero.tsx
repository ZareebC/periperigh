import Image from 'next/image';
import type { BlogPostMeta } from '@/data/blog';
import { getClusterForPost } from '@/data/blog';

interface BlogHeroProps {
  post: BlogPostMeta;
}

export default function BlogHero({ post }: BlogHeroProps) {
  const cluster = getClusterForPost(post);

  return (
    <header className="mb-10">
      {cluster && (
        <span
          className="label inline-block mb-3 px-2 py-0.5 rounded"
          style={{
            color: 'var(--color-ember)',
            background: 'rgba(217, 91, 43, 0.08)',
          }}
        >
          {cluster.name}
        </span>
      )}

      <h1
        className="font-display font-800 text-3xl md:text-5xl tracking-tight mb-6"
        style={{ color: 'var(--color-char)' }}
      >
        {post.title}
      </h1>

      <div className="flex flex-wrap items-center gap-3 mb-8 text-sm" style={{ color: 'var(--color-smoke)' }}>
        <span className="font-500">{post.author.name}</span>
        <span>&middot;</span>
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

      <div className="aspect-[16/9] relative rounded-lg overflow-hidden">
        <Image
          src={post.featuredImage.src}
          alt={post.featuredImage.alt}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 900px) 100vw, 800px"
        />
      </div>
    </header>
  );
}
