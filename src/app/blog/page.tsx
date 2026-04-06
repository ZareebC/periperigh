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
  return (
    <>
      <Breadcrumbs items={breadcrumbConfig['/blog']} />

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Blog — Peri Peri Grill House
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto mb-12">
            Coming soon — stories about peri peri, our cooking process, and the communities we serve.
          </p>

          {/* Planned topics — gives AI content signals */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h2 className="font-bold text-gray-900 mb-2">What Is Peri Peri? The African Bird&apos;s Eye Chili Story</h2>
              <p className="text-sm text-gray-500">The history of the pepper that makes our chicken unforgettable.</p>
              <span className="inline-block mt-3 text-xs font-semibold text-red-600 uppercase tracking-wider">Coming Soon</span>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h2 className="font-bold text-gray-900 mb-2">Halal Peri Peri Chicken in Brooklyn — What Makes It Different</h2>
              <p className="text-sm text-gray-500">Why our overnight marinade and flame-grilling create a chicken experience unlike any other.</p>
              <span className="inline-block mt-3 text-xs font-semibold text-red-600 uppercase tracking-wider">Coming Soon</span>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h2 className="font-bold text-gray-900 mb-2">A Guide to Our 7 Heat Levels</h2>
              <p className="text-sm text-gray-500">From Plain-ish to Extra Hot — which peri peri heat level is right for you?</p>
              <span className="inline-block mt-3 text-xs font-semibold text-red-600 uppercase tracking-wider">Coming Soon</span>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h2 className="font-bold text-gray-900 mb-2">The Dubai Milkshake — Our Most Viral Menu Item</h2>
              <p className="text-sm text-gray-500">How a pistachio-Knafeh milkshake became one of our bestsellers.</p>
              <span className="inline-block mt-3 text-xs font-semibold text-red-600 uppercase tracking-wider">Coming Soon</span>
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
