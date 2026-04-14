import { notFound } from 'next/navigation';
import Link from 'next/link';
import { buildMetadata } from '@/lib/metadata';
import { getBlogContent } from '@/lib/blog-content';
import {
  getPostBySlug,
  getPublishedPosts,
  getRelatedPosts,
  getClusterForPost,
  getPostsByCluster,
} from '@/data/blog';
import type { BreadcrumbItem } from '@/data/navigation';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import ArticleSchema from '@/components/seo/ArticleSchema';
import BlogHero from '@/components/blog/BlogHero';
import BlogContent from '@/components/blog/BlogContent';
import ClusterNav from '@/components/blog/ClusterNav';
import RelatedPosts from '@/components/blog/RelatedPosts';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    ogImage: post.ogImage || post.featuredImage.src,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const Content = await getBlogContent(slug);
  if (!Content) notFound();

  const cluster = getClusterForPost(post);
  const clusterPosts = cluster ? getPostsByCluster(cluster.id) : [];
  const relatedPosts = getRelatedPosts(post, 4);

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.title, href: `/blog/${post.slug}` },
  ];

  return (
    <>
      <ArticleSchema post={post} />
      <Breadcrumbs items={breadcrumbs} />

      <article className="py-12 md:py-20">
        <div className="max-w-[800px] mx-auto px-6 lg:px-10">
          <BlogHero post={post} />

          {/* Cluster pillar banner */}
          {cluster && (
            <div
              className="mb-10 p-4 rounded-lg flex items-center gap-3"
              style={{ background: 'var(--color-cream-dark)' }}
            >
              <span className="label" style={{ color: 'var(--color-smoke)' }}>
                Part of:
              </span>
              <Link
                href={cluster.pillarPath}
                className="font-display font-600 text-base underline decoration-1 underline-offset-2"
                style={{ color: 'var(--color-ember)' }}
              >
                {cluster.name} Guide &rarr;
              </Link>
            </div>
          )}

          <BlogContent>
            <Content />
          </BlogContent>

          {/* Site links */}
          {post.siteLinks.length > 0 && (
            <div
              className="mt-12 pt-8 border-t"
              style={{ borderColor: 'var(--color-cream-dark)' }}
            >
              <p className="font-display font-600 text-lg mb-4" style={{ color: 'var(--color-char)' }}>
                Explore more
              </p>
              <div className="flex flex-wrap gap-3">
                {post.siteLinks.map((link) => (
                  <Link
                    key={link}
                    href={link}
                    className="btn-outline text-sm"
                  >
                    {formatSiteLink(link)}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Cluster navigation */}
          {cluster && clusterPosts.length > 0 && (
            <ClusterNav cluster={cluster} posts={clusterPosts} currentSlug={post.slug} />
          )}

          {/* Related posts */}
          <RelatedPosts posts={relatedPosts} />

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p
              className="font-display font-700 text-2xl mb-6"
              style={{ color: 'var(--color-char)' }}
            >
              Ready for chicken that actually tastes like something?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/order-online" className="btn-ember">
                Order Online
              </Link>
              <Link href="/brooklyn-bed-stuy" className="btn-outline">
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

/** Convert a site path like /halal-peri-peri-chicken to a readable label */
function formatSiteLink(path: string): string {
  const labels: Record<string, string> = {
    '/': 'Home',
    '/brooklyn-bed-stuy': 'Brooklyn Menu',
    '/bethpage-long-island': 'Bethpage Menu',
    '/halal-peri-peri-chicken': 'Our Chicken',
    '/locations': 'Locations',
    '/order-online': 'Order Online',
    '/faq': 'FAQ',
    '/contact': 'Contact',
    '/hicksville-halal-chicken': 'Hicksville',
  };
  return labels[path] || path.replace(/^\//, '').replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}
