import { buildMetadata } from '@/lib/metadata';
import { locations } from '@/data/locations';
import { breadcrumbConfig } from '@/data/navigation';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { TrackedPhone, TrackedOrderLink } from '@/components/analytics/TrackedLink';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'Order Peri Peri Grill House Online — Delivery & Pickup',
  description:
    'Order halal peri peri chicken online from Peri Peri Grill House. Delivery and pickup available in Brooklyn and Bethpage, Long Island via UberEats, DoorDash, and more.',
  path: '/order-online',
});

export default function OrderOnlinePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbConfig['/order-online']} />

      <section className="py-20 md:py-28">
        <div className="max-w-[900px] mx-auto px-6 lg:px-10">
          <div className="label mb-4" style={{ color: 'var(--color-ember)' }}>
            Order
          </div>
          <div className="ember-line mb-6" />
          <h1 className="font-display font-800 text-4xl md:text-5xl tracking-tight mb-4">
            Order Online
          </h1>
          <p className="text-lg mb-16" style={{ color: 'var(--color-smoke)' }}>
            Choose your location to order for delivery or pickup.
          </p>

          <div className="space-y-8">
            {locations.map((loc) => (
              <div
                key={loc.id}
                className="p-8 md:p-10 rounded-sm"
                style={{ backgroundColor: 'var(--color-cream)', border: '1px solid rgba(28,24,20,0.08)' }}
              >
                <div className="label mb-2" style={{ color: 'var(--color-gold)' }}>
                  {loc.neighborhood}
                </div>
                <h2 className="font-display font-700 text-2xl mb-2">{loc.shortName}</h2>
                <p className="mb-1" style={{ color: 'var(--color-smoke)' }}>{loc.address.full}</p>
                <p className="mb-6">
                  <TrackedPhone
                    phone={loc.phone.e164}
                    locationId={loc.id}
                    className="font-display font-600"
                    style={{ color: 'var(--color-ember)' }}
                  >
                    {loc.phone.formatted}
                  </TrackedPhone>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {loc.orderLinks.map((link) => (
                    <TrackedOrderLink
                      key={link.platform}
                      href={link.url}
                      platform={link.platform}
                      locationId={loc.id}
                      className="flex items-center justify-center gap-2 px-6 py-4 font-display font-600 text-sm rounded-sm transition-all hover:translate-y-[-1px]"
                      style={{ backgroundColor: 'var(--color-char)', color: 'var(--color-cream)' }}
                    >
                      Order on {link.platform}
                      <svg className="w-4 h-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </TrackedOrderLink>
                  ))}
                </div>

                <Link
                  href={`/${loc.slug}`}
                  className="inline-block mt-5 font-display text-sm font-600 transition-colors hover:opacity-70"
                  style={{ color: 'var(--color-ember)' }}
                >
                  View full menu & prices →
                </Link>
              </div>
            ))}
          </div>

          {/* Catering */}
          <div
            className="mt-16 pt-16 text-center"
            style={{ borderTop: '1px solid rgba(28,24,20,0.08)' }}
          >
            <h2 className="font-display font-700 text-2xl mb-4">Catering &amp; Large Orders</h2>
            <p className="mb-8" style={{ color: 'var(--color-smoke)' }}>
              Planning an event? Our family meal platters are perfect for gatherings.
            </p>
            <Link href="/contact" className="btn-outline">Contact for Catering</Link>
          </div>
        </div>
      </section>
    </>
  );
}
