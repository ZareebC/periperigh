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

      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="label mb-4" style={{ color: 'var(--color-ember)' }}>
            Visit us
          </div>
          <div className="ember-line mb-6" />
          <h1 className="font-display font-800 text-4xl md:text-5xl tracking-tight mb-4">
            Our Locations
          </h1>
          <p className="text-lg mb-16 max-w-xl" style={{ color: 'var(--color-smoke)' }}>
            Two locations serving 100% halal, flame-grilled peri peri chicken.
            Both offer dine-in, takeout, and delivery.
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
