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
    'Looking for halal peri peri chicken near Hicksville, NY? Peri Peri Grill House in Bethpage is just minutes away. Flame-grilled, marinated overnight, 100% halal.',
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
      <section className="section-dark relative overflow-hidden">
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, var(--color-ember), transparent)' }}
        />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 md:py-28">
          <div className="label mb-4" style={{ color: 'var(--color-gold)' }}>
            Nassau County &middot; Long Island
          </div>
          <h1
            className="font-display font-800 tracking-[-0.03em] leading-[0.95]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            Halal Chicken Near
            <br />
            <span style={{ color: 'var(--color-ember)' }}>Hicksville, NY</span>
          </h1>
          <p className="mt-6 text-lg max-w-2xl" style={{ color: 'var(--color-smoke-light)' }}>
            Craving real flame-grilled peri peri chicken? Peri Peri Grill House in Bethpage is just
            minutes from Hicksville — serving 100% halal chicken marinated overnight in African
            Bird&apos;s Eye chili and grilled to order.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <div className="max-w-[800px] mx-auto px-6 lg:px-10">
          <h2 className="font-display font-800 text-3xl mb-6">
            The Best Halal Peri Peri Chicken Near Hicksville
          </h2>
          <div className="space-y-5 text-lg leading-relaxed" style={{ color: 'var(--color-smoke)' }}>
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
              Plain-ish (zero heat, all flavor) to Extra Hot (for those who like to sweat).
            </p>
            <p>
              We also serve smash burgers, falafel wraps, loaded fries, hand-crafted milkshakes
              (including our famous Dubai Milkshake with Knafeh), and a full range of sides. Everything
              is halal, and we offer dine-in, takeout, and delivery through UberEats and DoorDash.
            </p>
          </div>

          {/* Popular Items */}
          <h3 className="font-display font-700 text-2xl mt-14 mb-6">Popular Menu Items</h3>
          <div className="space-y-0">
            {chickenItems.map((item) => (
              <div
                key={item.name}
                className="py-5 flex justify-between gap-6"
                style={{ borderBottom: '1px solid rgba(28,24,20,0.06)' }}
              >
                <div>
                  <h4 className="font-display font-600">{item.name}</h4>
                  <p className="text-sm mt-1" style={{ color: 'var(--color-smoke)' }}>{item.description}</p>
                </div>
                <span className="font-display font-700 flex-shrink-0" style={{ color: 'var(--color-ember)' }}>
                  ${typeof item.price === 'number' ? item.price.toFixed(2) : item.price}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/bethpage-long-island" className="btn-ember">View Full Bethpage Menu</Link>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 section-warm">
        <div className="max-w-[900px] mx-auto px-6 lg:px-10">
          <h2 className="font-display font-700 text-2xl mb-6">Visit Us — Minutes from Hicksville</h2>
          <LocationCard location={bethpage} showHours showMap />
        </div>
      </section>
    </>
  );
}
