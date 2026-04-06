import { buildMetadata } from '@/lib/metadata';
import { getLocationBySlug } from '@/data/locations';
import { breadcrumbConfig } from '@/data/navigation';
import { pressItems } from '@/data/press';
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

      {/* Hero */}
      <section className="section-dark relative overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.06] pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--color-ember) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, var(--color-ember), transparent)' }}
        />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 md:py-28">
          <div className="label mb-4" style={{ color: 'var(--color-gold)' }}>
            Long Island &middot; Bethpage
          </div>
          <h1
            className="font-display font-800 tracking-[-0.03em] leading-[0.95]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            Peri Peri Grill House
            <br />
            <span style={{ color: 'var(--color-ember)' }}>Bethpage, Long Island</span>
          </h1>
          <p className="mt-6 text-lg max-w-2xl" style={{ color: 'var(--color-smoke-light)' }}>
            {location.neighborhoodDescription}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={`tel:${location.phone.e164}`} className="btn-ember">
              Call {location.phone.formatted}
            </a>
            <Link href="/order-online" className="btn-outline btn-outline-light">
              Order Online
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="py-6" style={{ backgroundColor: 'var(--color-cream-dark)', borderBottom: '1px solid rgba(28,24,20,0.06)' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6 text-sm" style={{ color: 'var(--color-smoke)' }}>
            <span><strong className="font-display" style={{ color: 'var(--color-char)' }}>{location.address.street}</strong>, {location.address.city}, {location.address.state} {location.address.zip}</span>
            <a href={`tel:${location.phone.e164}`} className="font-display font-600" style={{ color: 'var(--color-ember)' }}>{location.phone.formatted}</a>
          </div>
          <a href="#location-map" className="label text-[10px] transition-colors hover:opacity-70" style={{ color: 'var(--color-ember)' }}>
            Map &amp; Hours ↓
          </a>
        </div>
      </section>

      {/* Full Menu — FIRST */}
      <section className="py-20 md:py-28">
        <div className="max-w-[900px] mx-auto px-6 lg:px-10">
          <div className="label mb-4" style={{ color: 'var(--color-ember)' }}>
            Bethpage Menu
          </div>
          <div className="ember-line mb-6" />
          <h2 className="font-display font-800 text-3xl md:text-4xl tracking-tight mb-3">
            Full Menu
          </h2>
          <p className="mb-12" style={{ color: 'var(--color-smoke)' }}>
            100% halal peri peri chicken, marinated overnight and flame-grilled to order. Prices may vary.
          </p>
          <FullMenu />
        </div>
      </section>

      {/* Press */}
      <section className="py-16" style={{ borderTop: '1px solid rgba(28,24,20,0.06)' }}>
        <div className="max-w-[900px] mx-auto px-6 lg:px-10">
          <div className="label mb-4" style={{ color: 'var(--color-gold)' }}>As seen in</div>
          <div className="flex flex-wrap gap-8 items-center">
            {pressItems.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-700 text-lg transition-colors hover:opacity-60"
                style={{ color: 'var(--color-smoke)' }}
              >
                {item.publication}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Location + Map — BOTTOM */}
      <section id="location-map" className="py-16 section-warm scroll-mt-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="label mb-6" style={{ color: 'var(--color-ember)' }}>
            Find us
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <LocationCard location={location} showHours />
            <GoogleMap location={location} />
          </div>
        </div>
      </section>
    </>
  );
}
