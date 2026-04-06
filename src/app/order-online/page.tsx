import { buildMetadata } from '@/lib/metadata';
import { locations } from '@/data/locations';
import { breadcrumbConfig } from '@/data/navigation';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
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

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-4">
            Order Peri Peri Grill House Online
          </h1>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-16">
            Choose your location below to order for delivery or pickup. You can also call
            the restaurant directly to place your order.
          </p>

          <div className="space-y-12">
            {locations.map((loc) => (
              <div key={loc.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{loc.shortName}</h2>
                <p className="text-gray-500 mb-1">{loc.address.full}</p>
                <p className="text-gray-500 mb-6">
                  Call: <a href={`tel:${loc.phone.e164}`} className="text-red-600 font-semibold hover:text-red-700">{loc.phone.formatted}</a>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {loc.orderLinks.map((link) => (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-4 bg-gray-950 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
                    >
                      Order on {link.platform}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ))}
                </div>

                <div className="mt-4">
                  <Link
                    href={`/${loc.slug}`}
                    className="text-sm text-red-600 font-medium hover:text-red-700"
                  >
                    View full menu and prices →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Additional content for AI */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Catering &amp; Large Orders</h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-6">
              Planning an event or feeding a crowd? Our family meal platters are perfect for
              gatherings. Contact us for catering options and group orders.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Contact for Catering
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
