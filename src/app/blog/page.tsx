import Link from 'next/link';
import { buildMetadata } from '@/lib/metadata';
import { breadcrumbConfig } from '@/data/navigation';
import { getPublishedPosts, contentClusters } from '@/data/blog';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import ClusterFilter from '@/components/blog/ClusterFilter';

export const metadata = buildMetadata({
  title: 'Blog — Peri Peri Stories & Recipes',
  description:
    'Stories, recipes, and guides from Peri Peri Grill House. Learn about peri peri chicken, halal food in NYC, our cooking process, and what makes flame-grilled peri peri different.',
  path: '/blog',
});

export default function BlogPage() {
  const posts = getPublishedPosts();

  return (
    <>
      <Breadcrumbs items={breadcrumbConfig['/blog']} />

      <section className="py-20 md:py-28">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
          <div className="label mb-4" style={{ color: 'var(--color-ember)' }}>
            Stories & Guides
          </div>
          <div className="ember-line mb-6" />
          <h1 className="font-display font-800 text-4xl md:text-5xl tracking-tight mb-4">
            Blog
          </h1>
          <p className="text-lg mb-12" style={{ color: 'var(--color-smoke)' }}>
            Stories about peri peri, halal food in NYC, our cooking process, and the communities we
            serve.
          </p>

          {posts.length > 0 ? (
            <ClusterFilter posts={posts} clusters={contentClusters} />
          ) : (
            <div className="text-center py-16">
              <p className="text-lg mb-8" style={{ color: 'var(--color-smoke)' }}>
                Our first posts are coming soon. In the meantime, learn about our chicken.
              </p>
              <Link href="/halal-peri-peri-chicken" className="btn-ember">
                Our Chicken Story
              </Link>
            </div>
          )}

          <div className="mt-16 text-center">
            <Link href="/" className="btn-outline">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
