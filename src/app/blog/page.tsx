import { buildMetadata } from '@/lib/metadata';
import { breadcrumbConfig } from '@/data/navigation';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'Blog — Peri Peri Grill House',
  description:
    'Stories, recipes, and news from Peri Peri Grill House. Learn about peri peri chicken, our cooking process, and what makes halal flame-grilled chicken different.',
  path: '/blog',
});

export default function BlogPage() {
  const upcomingPosts = [
    {
      title: "What Is Peri Peri? The African Bird's Eye Chili Story",
      description: 'The history of the pepper that makes our chicken unforgettable.',
    },
    {
      title: 'Halal Peri Peri Chicken in Brooklyn — What Makes It Different',
      description: 'Why our overnight marinade and flame-grilling create a chicken experience unlike any other.',
    },
    {
      title: 'A Guide to Our 7 Heat Levels',
      description: 'From Plain-ish to Extra Hot — which peri peri heat level is right for you?',
    },
    {
      title: 'The Dubai Milkshake — Our Most Viral Menu Item',
      description: 'How a pistachio-Knafeh milkshake became one of our bestsellers.',
    },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbConfig['/blog']} />

      <section className="py-20 md:py-28">
        <div className="max-w-[900px] mx-auto px-6 lg:px-10">
          <div className="label mb-4" style={{ color: 'var(--color-ember)' }}>
            Stories
          </div>
          <div className="ember-line mb-6" />
          <h1 className="font-display font-800 text-4xl md:text-5xl tracking-tight mb-4">
            Blog
          </h1>
          <p className="text-lg mb-16" style={{ color: 'var(--color-smoke)' }}>
            Coming soon — stories about peri peri, our cooking process, and the communities we serve.
          </p>

          <div className="space-y-0">
            {upcomingPosts.map((post, i) => (
              <div
                key={i}
                className="py-8 grid grid-cols-[48px_1fr] gap-6"
                style={{ borderBottom: '1px solid rgba(28,24,20,0.08)' }}
              >
                <span className="font-display font-800 text-3xl" style={{ color: 'var(--color-ember)', lineHeight: 1, opacity: 0.4 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h2 className="font-display font-700 text-xl mb-2">{post.title}</h2>
                  <p style={{ color: 'var(--color-smoke)' }}>{post.description}</p>
                  <span className="label mt-3 inline-block" style={{ color: 'var(--color-gold)', fontSize: '10px' }}>
                    Coming Soon
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/" className="btn-outline">Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  );
}
