import Link from 'next/link';
import { buildMetadata } from '@/lib/metadata';
import { faqItems } from '@/data/faq';
import { breadcrumbConfig } from '@/data/navigation';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata = buildMetadata({
  title: 'Frequently Asked Questions — Peri Peri Grill House',
  description:
    'Answers to common questions about Peri Peri Grill House: halal certification, locations, delivery, spice levels, catering, hours, and more.',
  path: '/faq',
});

export default function FAQPage() {
  return (
    <>
      <FAQSchema items={faqItems} />
      <Breadcrumbs items={breadcrumbConfig['/faq']} />

      <section className="py-20 md:py-28">
        <div className="max-w-[900px] mx-auto px-6 lg:px-10">
          <div className="label mb-4" style={{ color: 'var(--color-ember)' }}>
            FAQ
          </div>
          <div className="ember-line mb-6" />
          <h1 className="font-display font-800 text-4xl md:text-5xl tracking-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg mb-16" style={{ color: 'var(--color-smoke)' }}>
            Everything you need to know about Peri Peri Grill House.
          </p>

          <div className="space-y-0">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="py-8"
                style={{ borderBottom: '1px solid rgba(28,24,20,0.08)' }}
              >
                <h2 className="font-display font-700 text-xl mb-3">{item.question}</h2>
                <p className="leading-relaxed" style={{ color: 'var(--color-smoke)' }}>{item.answer}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="mt-16 pt-16 text-center"
            style={{ borderTop: '1px solid rgba(28,24,20,0.08)' }}
          >
            <h2 className="font-display font-700 text-2xl mb-4">Still have questions?</h2>
            <p className="mb-8" style={{ color: 'var(--color-smoke)' }}>
              Reach out directly — we&apos;re happy to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-ember">Contact Us</Link>
              <a href="mailto:help@periperigh.com" className="btn-outline">Email Us</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
