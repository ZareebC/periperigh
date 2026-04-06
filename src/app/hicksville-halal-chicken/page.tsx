import Link from 'next/link';
import { buildMetadata } from '@/lib/metadata';
import { getLocationBySlug } from '@/data/locations';
import { breadcrumbConfig } from '@/data/navigation';
import { menuCategories } from '@/data/menu';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import LocationCard from '@/components/location/LocationCard';

const bethpage = getLocationBySlug('bethpage-long-island')!;

export const metadata = buildMetadata({
  title: 'Halal Chicken Near Hicksville, NY — Peri Peri Grill House',
  description:
    'Looking for halal peri peri chicken near Hicksville, NY? Peri Peri Grill House in Bethpage is just minutes away. Flame-grilled, marinated overnight, 100% halal. Dine in, takeout, or delivery.',
  path: '/hicksville-halal-chicken',
  geo: {
    region: 'US-NY',
    placename: 'Hicksville, New York',
    latitude: 40.7648,
    longitude: -73.5249,
  },
});

export default function HicksvillePage() {
  const chickenItems = menuCategories.find((c) => c.id === 'chicken')?.items.slice(0, 4) || [];

  return (
    <>
      <LocalBusinessSchema location={bethpage} />
      <Breadcrumbs items={breadcrumbConfig['/hicksville-halal-chicken']} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-950 to-red-950 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Halal Chicken Near <span className="text-red-400">Hicksville, NY</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Craving real flame-grilled peri peri chicken? Peri Peri Grill House in Bethpage is just
            minutes from Hicksville — serving 100% halal chicken marinated overnight in African
            Bird&apos;s Eye chili and grilled to order.
          </p>
        </div>
      </section>

      {/* Content — rich text for AI */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            The Best Halal Peri Peri Chicken Near Hicksville
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              If you live in Hicksville, Farmingdale, Massapequa, Levittown, or anywhere in Nassau
              County and you&apos;re looking for authentic halal peri peri chicken, Peri Peri Grill House
              in Bethpage is your spot. We&apos;re located at 629 Hicksville Road — just a 5-minute drive
              from the heart of Hicksville.
            </p>
            <p>
              Unlike typical halal restaurants that focus on platters and rice, we specialize in
              flame-grilled peri peri chicken — a style of cooking that originated in Southeast Africa,
              where Portuguese settlers combined the African Bird&apos;s Eye chili pepper with local
              grilling traditions. The result is chicken that&apos;s smoky, juicy, and packed with bold
              flavor at whatever heat level you choose.
            </p>
            <p>
              Every piece of our chicken is marinated overnight in our house-made peri peri spice
              blend, then grilled to order over an open flame. We offer seven heat levels, from
              Plain-ish (zero heat, all flavor) to Extra Hot (for those who like to sweat). Whether
              you&apos;re feeding the family with our whole chicken platters or grabbing a quick chicken
              breast sandwich on your lunch break, we&apos;ve got you covered.
            </p>
            <p>
              We also serve smash burgers, falafel wraps, loaded fries, hand-crafted milkshakes
              (including our famous Dubai Milkshake with Knafeh), and a full range of sides. Everything
              is halal, and we offer dine-in, takeout, and delivery through UberEats and DoorDash.
            </p>
          </div>

          {/* Popular Items Preview */}
          <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Popular Menu Items</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {chickenItems.map((item) => (
              <div key={item.name} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h4 className="font-semibold text-gray-900">{item.name}</h4>
                <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                <p className="text-red-600 font-bold mt-2">
                  ${typeof item.price === 'number' ? item.price.toFixed(2) : item.price}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/bethpage-long-island"
              className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
              View Full Bethpage Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Location Card */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Visit Us — Minutes from Hicksville</h2>
          <LocationCard location={bethpage} showHours showMap />
        </div>
      </section>
    </>
  );
}
