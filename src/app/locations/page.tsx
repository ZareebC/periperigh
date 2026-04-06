import { buildMetadata } from '@/lib/metadata';
import { locations } from '@/data/locations';
import { breadcrumbConfig } from '@/data/navigation';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import LocationCard from '@/components/location/LocationCard';
import GoogleMap from '@/components/location/GoogleMap';

export const metadata = buildMetadata({
  title: 'Our Locations — Brooklyn & Long Island',
  description:
    'Peri Peri Grill House has two locations: Bed-Stuy, Brooklyn and Bethpage, Long Island. Find hours, addresses, phone numbers, and directions.',
  path: '/locations',
});

export default function LocationsPage() {
  return (
    <>
      {locations.map((loc) => (
        <LocalBusinessSchema key={loc.id} location={loc} />
      ))}
      <Breadcrumbs items={breadcrumbConfig['/locations']} />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-4">
            Our Locations — Brooklyn &amp; Long Island
          </h1>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-16">
            Two locations serving 100% halal, flame-grilled peri peri chicken. Both offer
            dine-in, takeout, and delivery.
          </p>

          <div className="space-y-16">
            {locations.map((loc) => (
              <div key={loc.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <LocationCard location={loc} showHours />
                <GoogleMap location={loc} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
