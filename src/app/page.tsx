import Link from 'next/link';
import { buildMetadata } from '@/lib/metadata';
import { locations } from '@/data/locations';
import { menuCategories } from '@/data/menu';
import LocationCard from '@/components/location/LocationCard';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';

export const metadata = buildMetadata({
  title: 'Peri Peri Grill House | Flame-Grilled Halal Peri Peri Chicken',
  description:
    'Halal peri peri chicken in Brooklyn and Bethpage, Long Island. Marinated overnight, flame-grilled to order with bold peri peri sauces. Dine in, takeout, or delivery.',
  path: '/',
});

export default function HomePage() {
  const popularItems = menuCategories
    .flatMap((cat) => cat.items)
    .filter((item) => item.popular)
    .slice(0, 6);

  return (
    <>
      {locations.map((loc) => (
        <LocalBusinessSchema key={loc.id} location={loc} />
      ))}

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-red-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Flame-Grilled Halal Peri Peri Chicken in{' '}
              <span className="text-red-400">Brooklyn &amp; Long Island</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Our chicken is 100% halal, marinated overnight in our house-made peri peri sauce with
              African Bird&apos;s Eye chili, then flame-grilled to order. Choose your heat level —
              from mellow lemon &amp; herb to face-melting extra hot.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/order-online"
                className="inline-flex items-center px-8 py-4 bg-red-600 text-white text-lg font-bold rounded-xl hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20"
              >
                Order Online
              </Link>
              <Link
                href="/brooklyn-bed-stuy"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white text-lg font-bold rounded-xl hover:bg-white/10 transition-colors"
              >
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            What Makes Peri Peri Grill House Different
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
            Not all peri peri is created equal. Here&apos;s what sets our flame-grilled chicken apart.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">
                🔥
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Flame-Grilled, Never Baked</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Every piece of chicken is cooked over an open flame — not baked in an oven,
                not fried in oil. Live fire creates that signature smoky char and seals in the
                juices from our overnight marinade.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">
                🌙
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Marinated Overnight</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our chicken isn&apos;t just seasoned on the spot. It&apos;s marinated overnight in
                our special blend of peri peri spices and African Bird&apos;s Eye chili. This slow
                marinade creates depth of flavor you simply can&apos;t rush.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">
                ✅
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">100% Halal Certified</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                All of our chicken and meat is 100% halal. We&apos;re committed to serving our
                community with food that meets halal standards — no exceptions, no compromises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Items */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Fan Favorites
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
            Our most popular items — the ones people come back for again and again.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularItems.map((item) => (
              <div key={item.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">{item.description}</p>
                <p className="text-lg font-bold text-red-600 mt-3">
                  ${typeof item.price === 'number' ? item.price.toFixed(2) : item.price}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/brooklyn-bed-stuy"
              className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Two Locations Serving NYC &amp; Long Island
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
            Visit us in Bed-Stuy, Brooklyn or Bethpage, Long Island. Both locations offer dine-in,
            takeout, and delivery.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((loc) => (
              <LocationCard key={loc.id} location={loc} showHours />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-700 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Real Peri Peri?</h2>
          <p className="text-red-100 text-lg mb-8 max-w-xl mx-auto">
            Order online for pickup or delivery, or visit us in Brooklyn or Long Island.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/order-online"
              className="inline-flex items-center px-8 py-4 bg-white text-red-600 text-lg font-bold rounded-xl hover:bg-gray-100 transition-colors"
            >
              Order Now
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white text-lg font-bold rounded-xl hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
