import Link from 'next/link';
import { buildMetadata } from '@/lib/metadata';
import { locations } from '@/data/locations';
import { menuCategories, heatLevels } from '@/data/menu';
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

      {/* ========== HERO — Asymmetric, warm, bold ========== */}
      <section className="section-dark relative overflow-hidden">
        {/* Subtle ember glow in corner */}
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.07] pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--color-ember) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, var(--color-ember), transparent)' }}
        />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 md:py-32 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            {/* Main headline — offset left */}
            <div className="lg:col-span-8">
              <div className="label mb-6" style={{ color: 'var(--color-ember-light)' }}>
                Brooklyn &middot; Long Island &middot; 100% Halal
              </div>
              <h1
                className="font-display font-800 tracking-[-0.03em] leading-[0.95]"
                style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
              >
                Flame-grilled.
                <br />
                Marinated overnight.
                <br />
                <span style={{ color: 'var(--color-ember)' }}>
                  Unapologetically bold.
                </span>
              </h1>
              <p
                className="mt-8 text-lg md:text-xl leading-relaxed max-w-xl"
                style={{ color: 'var(--color-smoke-light)' }}
              >
                Our peri peri chicken is marinated overnight in African Bird&apos;s Eye chili
                and flame-grilled to order. Seven heat levels. Two locations. Zero shortcuts.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/order-online" className="btn-ember !text-base !px-8 !py-4">
                  Order Online
                </Link>
                <Link href="/brooklyn-bed-stuy" className="btn-outline btn-outline-light !text-base !px-8 !py-4">
                  View Menu
                </Link>
              </div>
            </div>

            {/* Quick info — right column */}
            <div className="lg:col-span-4 space-y-6">
              {locations.map((loc) => (
                <div key={loc.id} className="pb-6" style={{ borderBottom: '1px solid var(--color-char-medium)' }}>
                  <div className="label mb-2" style={{ color: 'var(--color-gold)' }}>
                    {loc.neighborhood}
                  </div>
                  <p className="font-display font-500 text-sm" style={{ color: 'var(--color-cream)' }}>
                    {loc.address.street}
                  </p>
                  <a
                    href={`tel:${loc.phone.e164}`}
                    className="font-display text-sm transition-colors"
                    style={{ color: 'var(--color-smoke-light)' }}
                  >
                    {loc.phone.formatted}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== THE PROCESS — Editorial strip ========== */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left — section label */}
            <div className="lg:col-span-4">
              <div className="label mb-4" style={{ color: 'var(--color-ember)' }}>
                What makes us different
              </div>
              <div className="ember-line mb-6" />
              <h2 className="font-display font-800 text-4xl md:text-5xl tracking-tight">
                Three things.
                <br />
                No compromise.
              </h2>
            </div>

            {/* Right — the three pillars */}
            <div className="lg:col-span-8 lg:pt-2">
              <div className="space-y-0">
                {/* Pillar 1 */}
                <div className="py-8" style={{ borderBottom: '1px solid rgba(28,24,20,0.1)' }}>
                  <div className="grid grid-cols-[60px_1fr] gap-6 items-start">
                    <span className="font-display font-800 text-5xl" style={{ color: 'var(--color-ember)', lineHeight: 1 }}>
                      01
                    </span>
                    <div>
                      <h3 className="font-display font-700 text-xl mb-2">Overnight Marinade</h3>
                      <p style={{ color: 'var(--color-smoke)' }}>
                        Our chicken sits in our peri peri spice blend for a minimum of 12 hours.
                        Not a quick rub. Not a 30-minute soak. The flavors penetrate deep into
                        the meat, creating a depth you can taste in every single bite.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="py-8" style={{ borderBottom: '1px solid rgba(28,24,20,0.1)' }}>
                  <div className="grid grid-cols-[60px_1fr] gap-6 items-start">
                    <span className="font-display font-800 text-5xl" style={{ color: 'var(--color-ember)', lineHeight: 1 }}>
                      02
                    </span>
                    <div>
                      <h3 className="font-display font-700 text-xl mb-2">Flame-Grilled to Order</h3>
                      <p style={{ color: 'var(--color-smoke)' }}>
                        Every piece is cooked over live fire — never baked in an oven, never fried
                        in oil. The open flame creates that smoky char on the outside while our
                        overnight marinade keeps the inside impossibly juicy.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="py-8">
                  <div className="grid grid-cols-[60px_1fr] gap-6 items-start">
                    <span className="font-display font-800 text-5xl" style={{ color: 'var(--color-ember)', lineHeight: 1 }}>
                      03
                    </span>
                    <div>
                      <h3 className="font-display font-700 text-xl mb-2">100% Halal. Always.</h3>
                      <p style={{ color: 'var(--color-smoke)' }}>
                        All of our chicken and meat is certified halal. This is non-negotiable.
                        When you eat here, you know exactly what you&apos;re getting — halal food
                        prepared with care and respect for the communities we serve.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== HEAT SCALE — Visual strip ========== */}
      <section className="section-dark py-20 md:py-28 relative overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, var(--color-ember), transparent)' }}
        />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="label mb-4" style={{ color: 'var(--color-ember-light)' }}>
              The Peri Scale
            </div>
            <h2 className="font-display font-800 text-4xl md:text-5xl tracking-tight">
              Seven levels of fire.
            </h2>
            <p className="mt-4 text-lg max-w-lg mx-auto" style={{ color: 'var(--color-smoke-light)' }}>
              From zero heat to maximum flame — every level is packed with flavor.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {heatLevels.map((level, i) => (
              <div
                key={level.name}
                className="p-5 rounded-sm text-center transition-all hover:scale-105"
                style={{
                  backgroundColor: 'var(--color-char-warm)',
                  borderBottom: `3px solid`,
                  borderColor: `hsl(${20 - i * 3}, ${70 + i * 4}%, ${55 - i * 4}%)`,
                }}
              >
                <div
                  className="font-display font-800 text-3xl mb-2"
                  style={{ color: `hsl(${20 - i * 3}, ${70 + i * 4}%, ${55 - i * 4}%)` }}
                >
                  {i + 1}
                </div>
                <div className="font-display font-600 text-sm" style={{ color: 'var(--color-cream)' }}>
                  {level.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== MENU HIGHLIGHTS — Editorial cards ========== */}
      <section className="py-24 md:py-32 section-warm grill-pattern">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <div className="label mb-4" style={{ color: 'var(--color-ember)' }}>
                From the grill
              </div>
              <div className="ember-line mb-6" />
              <h2 className="font-display font-800 text-4xl md:text-5xl tracking-tight">
                Fan favorites.
              </h2>
            </div>
            <Link
              href="/brooklyn-bed-stuy"
              className="font-display font-600 text-sm uppercase tracking-wider transition-colors hover:opacity-70"
              style={{ color: 'var(--color-ember)' }}
            >
              Full menu →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {popularItems.map((item) => (
              <div
                key={item.name}
                className="p-8 transition-colors"
                style={{
                  backgroundColor: 'var(--color-cream)',
                  borderRight: '1px solid rgba(28,24,20,0.06)',
                  borderBottom: '1px solid rgba(28,24,20,0.06)',
                }}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-display font-700 text-lg">{item.name}</h3>
                  <span className="font-display font-700 text-lg flex-shrink-0" style={{ color: 'var(--color-ember)' }}>
                    ${typeof item.price === 'number' ? item.price.toFixed(2) : item.price}
                  </span>
                </div>
                <p className="text-[15px] leading-relaxed" style={{ color: 'var(--color-smoke)' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== LOCATIONS — Clean, informative ========== */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="label mb-4" style={{ color: 'var(--color-ember)' }}>
              Visit us
            </div>
            <h2 className="font-display font-800 text-4xl md:text-5xl tracking-tight">
              Two locations. One standard.
            </h2>
            <p className="mt-4 text-lg max-w-lg mx-auto" style={{ color: 'var(--color-smoke)' }}>
              Dine in, takeout, or delivery — both locations serve the same
              overnight-marinated, flame-grilled halal peri peri chicken.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((loc) => (
              <LocationCard key={loc.id} location={loc} showHours />
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA — Bold, warm ========== */}
      <section className="section-dark py-24 md:py-32 relative overflow-hidden text-center">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, var(--color-ember), transparent)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.04] pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--color-ember) 0%, transparent 70%)' }}
        />
        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <h2
            className="font-display font-800 tracking-tight leading-[1.05]"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
          >
            Ready for chicken
            <br />
            that actually tastes
            <br />
            <span style={{ color: 'var(--color-ember)' }}>like something?</span>
          </h2>
          <p className="mt-6 text-lg" style={{ color: 'var(--color-smoke-light)' }}>
            Order for pickup or delivery. Visit us in Brooklyn or Long Island.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/order-online" className="btn-ember !text-base !px-10 !py-4">
              Order Now
            </Link>
            <Link href="/contact" className="btn-outline btn-outline-light !text-base !px-10 !py-4">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
