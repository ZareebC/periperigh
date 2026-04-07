import Link from 'next/link';
import Image from 'next/image';
import { buildMetadata } from '@/lib/metadata';
import { breadcrumbConfig } from '@/data/navigation';
import { heatLevels } from '@/data/menu';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata = buildMetadata({
  title: 'Halal Peri Peri Chicken — From Southeast Africa to Your Plate',
  description:
    'What is peri peri chicken? Learn about the African Bird\'s Eye chili, the overnight marinade, and the flame-grilling tradition that makes Peri Peri Grill House different. 100% halal.',
  path: '/halal-peri-peri-chicken',
});

export default function AboutChickenPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbConfig['/halal-peri-peri-chicken']} />

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
          <div className="label mb-4" style={{ color: 'var(--color-ember-light)' }}>
            Our Story
          </div>
          <h1
            className="font-display font-800 tracking-[-0.03em] leading-[0.95] max-w-3xl"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            Halal Peri Peri Chicken —
            <br />
            <span style={{ color: 'var(--color-ember)' }}>From Southeast Africa to Your Plate</span>
          </h1>
          <p className="mt-6 text-lg max-w-2xl" style={{ color: 'var(--color-smoke-light)' }}>
            The story of how African Bird&apos;s Eye chili, Portuguese grilling, and our overnight
            marinade come together in every piece.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <div className="max-w-[800px] mx-auto px-6 lg:px-10">
          {/* What is peri peri */}
          <div className="mb-16">
            <h2 className="font-display font-800 text-3xl mb-6">What Is Peri Peri?</h2>
            <div className="space-y-5 text-lg leading-relaxed" style={{ color: 'var(--color-smoke)' }}>
              <p>
                Peri peri (also spelled piri piri or peli peli) refers to both a style of cooking and
                the chili pepper at its heart — the African Bird&apos;s Eye chili. This small but
                powerful pepper grows wild across Southeast Africa, from Mozambique to Malawi, and has
                been a staple of African cooking for centuries.
              </p>
              <p>
                When Portuguese settlers arrived in Southeast Africa in the 15th century, they
                discovered these fiery peppers and blended them with garlic, citrus, and oil to create
                what we now know as peri peri sauce. They brought this flavor tradition back along their
                trade routes, and it eventually became one of the world&apos;s great culinary exports.
              </p>
            </div>
          </div>

          {/* Full-width food image */}
          <div className="my-14 relative rounded-sm overflow-hidden aspect-[21/9]">
            <Image
              src="/images/hero-chicken-flame-grilled.jpg"
              alt="Flame-grilled peri peri chicken with fresh peppers on a wooden board"
              fill
              className="object-cover"
              sizes="(max-width: 800px) 100vw, 800px"
            />
          </div>

          {/* Origin story placeholder */}
          <div
            className="mb-16 p-10 rounded-sm"
            style={{ backgroundColor: 'var(--color-cream-dark)', borderLeft: '3px solid var(--color-ember)' }}
          >
            <div className="label mb-3" style={{ color: 'var(--color-ember)' }}>Coming Soon</div>
            <h2 className="font-display font-800 text-3xl mb-4">Our Story</h2>
            <p className="text-lg italic" style={{ color: 'var(--color-smoke)' }}>
              The personal journey from Southeast Africa to Bed-Stuy, Brooklyn, and what inspired
              the founding of Peri Peri Grill House. Check back for the full story.
            </p>
          </div>

          {/* How we make it */}
          <div className="mb-16">
            <h2 className="font-display font-800 text-3xl mb-6">How We Make Our Chicken</h2>
            <p className="text-lg mb-8" style={{ color: 'var(--color-smoke)' }}>
              At Peri Peri Grill House, we don&apos;t take shortcuts. Every piece goes through a
              process that takes time but makes all the difference:
            </p>
            <div className="space-y-0">
              {[
                {
                  num: '01',
                  title: 'Overnight Marinade',
                  text: 'Our chicken is submerged in our house-made peri peri spice blend for a minimum of 12 hours. This isn\'t a quick rub or a 30-minute soak — the flavors penetrate deep into the meat.',
                },
                {
                  num: '02',
                  title: 'Flame-Grilled to Order',
                  text: 'We grill every piece over an open flame, never baked in an oven, never fried in oil. The live fire creates a smoky char on the outside while keeping the inside juicy.',
                },
                {
                  num: '03',
                  title: 'Basted with Your Choice',
                  text: 'As the chicken comes off the grill, it\'s basted in your chosen heat level — from Plain-ish to Extra Hot.',
                },
              ].map((step) => (
                <div
                  key={step.num}
                  className="py-8 grid grid-cols-[48px_1fr] gap-6"
                  style={{ borderBottom: '1px solid rgba(28,24,20,0.08)' }}
                >
                  <span className="font-display font-800 text-4xl" style={{ color: 'var(--color-ember)', lineHeight: 1 }}>
                    {step.num}
                  </span>
                  <div>
                    <h3 className="font-display font-700 text-xl mb-2">{step.title}</h3>
                    <p style={{ color: 'var(--color-smoke)' }}>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Halal */}
          <div className="mb-16">
            <h2 className="font-display font-800 text-3xl mb-6">100% Halal — Always</h2>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--color-smoke)' }}>
              All of our chicken and meat is certified halal. This is a non-negotiable commitment
              to the communities we serve in Brooklyn and Long Island. When you eat at Peri Peri
              Grill House, you know exactly what you&apos;re getting — halal food prepared with
              care and respect.
            </p>
          </div>

          {/* Heat Scale */}
          <div className="mb-16">
            <h2 className="font-display font-800 text-3xl mb-3">The Peri Peri Heat Scale</h2>
            <p className="mb-8" style={{ color: 'var(--color-smoke)' }}>
              Seven levels of flavor and heat. Every level is packed with flavor.
            </p>
            <div className="space-y-0">
              {heatLevels.map((level, i) => (
                <div
                  key={level.name}
                  className="py-5 grid grid-cols-[48px_1fr] gap-6 items-start"
                  style={{ borderBottom: '1px solid rgba(28,24,20,0.06)' }}
                >
                  <span
                    className="font-display font-800 text-3xl text-center"
                    style={{ color: `hsl(${20 - i * 3}, ${70 + i * 4}%, ${55 - i * 4}%)`, lineHeight: 1 }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display font-700 text-lg">{level.name}</h3>
                    <p className="text-sm mt-1" style={{ color: 'var(--color-smoke)' }}>{level.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <h2 className="font-display font-700 text-2xl mb-6">Ready to try it?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/order-online" className="btn-ember">Order Online</Link>
              <Link href="/brooklyn-bed-stuy" className="btn-outline">View Brooklyn Menu</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
