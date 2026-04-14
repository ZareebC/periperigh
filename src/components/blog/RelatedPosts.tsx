import type { BlogPostMeta } from '@/data/blog';
import BlogCard from './BlogCard';

interface RelatedPostsProps {
  posts: BlogPostMeta[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t" style={{ borderColor: 'var(--color-cream-dark)' }}>
      <h2
        className="font-display font-800 text-2xl tracking-tight mb-8"
        style={{ color: 'var(--color-char)' }}
      >
        You might also like
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
