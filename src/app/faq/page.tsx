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

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-16">
            Everything you need to know about Peri Peri Grill House — from our halal commitment
            to our heat levels.
          </p>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
                <h2 className="text-lg font-bold text-gray-900 mb-3">{item.question}</h2>
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
            <p className="text-gray-500 mb-6">
              We&apos;re happy to help. Reach out directly and we&apos;ll get back to you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="mailto:help@periperigh.com"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
