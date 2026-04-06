import { buildMetadata } from '@/lib/metadata';
import { getLocationBySlug } from '@/data/locations';
import { breadcrumbConfig } from '@/data/navigation';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import MenuSchema from '@/components/seo/MenuSchema';
import LocationCard from '@/components/location/LocationCard';
import GoogleMap from '@/components/location/GoogleMap';
import FullMenu from '@/components/menu/FullMenu';
import Link from 'next/link';

const location = getLocationBySlug('bethpage-long-island')!;

export const metadata = buildMetadata({
  title: 'Peri Peri Grill House — Bethpage, Long Island | Menu & Hours',
  description: location.metaDescription,
  path: '/bethpage-long-island',
  geo: {
    region: 'US-NY',
    placename: 'Bethpage, New York',
    latitude: location.geo.latitude,
    longitude: location.geo.longitude,
  },
});

export default function BethpagePage() {
  return (
    <>
      <LocalBusinessSchema location={location} />
      <MenuSchema location={location} />
      <Breadcrumbs items={breadcrumbConfig['/bethpage-long-island']} />

      {/* Location Hero */}
      <section className="bg-gradient-to-br from-gray-950 to-red-950 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Peri Peri Grill House — <span className="text-red-400">Bethpage, Long Island</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            {location.neighborhoodDescription}
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={`tel:${location.phone.e164}`}
              className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
              Call {location.phone.formatted}
            </a>
            <Link
              href="/order-online"
              className="inline-flex items-center px-6 py-3 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Order Online
            </Link>
          </div>
        </div>
      </section>

      {/* Location Info + Map */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <LocationCard location={location} showHours />
            <GoogleMap location={location} />
          </div>
        </div>
      </section>

      {/* Full Menu */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Bethpage Menu</h2>
          <p className="text-gray-500 mb-10">
            100% halal peri peri chicken, marinated overnight and flame-grilled to order. Prices may vary.
          </p>
          <FullMenu />
        </div>
      </section>
    </>
  );
}
