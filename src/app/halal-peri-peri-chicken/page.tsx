import Link from 'next/link';
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
      <section className="bg-gradient-to-br from-gray-950 to-red-950 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Halal Peri Peri Chicken — <span className="text-red-400">From Southeast Africa to Your Plate</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            The story of how African Bird&apos;s Eye chili, Portuguese grilling, and our overnight
            marinade come together in every piece of flame-grilled chicken we serve.
          </p>
        </div>
      </section>

      {/* Content — cornerstone page for AI citation */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600">
            <h2 className="text-3xl font-bold text-gray-900">What Is Peri Peri?</h2>
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

            {/* TODO: Owner provides personal origin story — Southeast Africa to Bed-Stuy */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12">Our Story</h2>
            <p>
              <em>[Coming soon — the personal journey from Southeast Africa to Bed-Stuy, Brooklyn,
              and what inspired the founding of Peri Peri Grill House. Check back for the full story.]</em>
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12">How We Make Our Chicken</h2>
            <p>
              At Peri Peri Grill House, we don&apos;t take shortcuts. Every piece of chicken goes
              through a process that takes time but makes all the difference:
            </p>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Overnight Marinade:</strong> Our chicken is submerged in our house-made peri
                peri spice blend for a minimum of 12 hours. This isn&apos;t a quick rub or a
                30-minute soak — the flavors penetrate deep into the meat, creating juiciness and
                complexity you can taste in every bite.
              </li>
              <li>
                <strong>Flame-Grilled to Order:</strong> We grill every piece over an open flame,
                never baked in an oven, never fried in oil. The live fire creates a smoky char on
                the outside while keeping the inside juicy from the overnight marinade.
              </li>
              <li>
                <strong>Basted with Your Choice of Sauce:</strong> As the chicken comes off the
                grill, it&apos;s basted in your chosen heat level from our peri scale — from
                Plain-ish (zero heat) to Extra Hot (African Bird&apos;s Eye chili at full force).
              </li>
            </ol>

            <h2 className="text-3xl font-bold text-gray-900 mt-12">100% Halal — Always</h2>
            <p>
              All of our chicken and meat is certified halal. This is a non-negotiable commitment
              to the communities we serve in Brooklyn and Long Island. When you eat at Peri Peri
              Grill House, you know exactly what you&apos;re getting — halal food prepared with
              care and respect.
            </p>
          </div>

          {/* Heat Levels */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Peri Peri Heat Scale</h2>
            <p className="text-gray-500 mb-8">
              Seven levels of flavor and heat — from zero spice to maximum fire. Every level is
              packed with flavor, so even our mildest option tastes incredible.
            </p>
            <div className="space-y-4">
              {heatLevels.map((level, i) => (
                <div key={level.name} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center font-bold text-red-600">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{level.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{level.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Try It?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/order-online"
                className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors"
              >
                Order Online
              </Link>
              <Link
                href="/brooklyn-bed-stuy"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-colors"
              >
                View Brooklyn Menu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
