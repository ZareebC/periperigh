import { buildMetadata } from '@/lib/metadata';
import { locations } from '@/data/locations';
import { breadcrumbConfig } from '@/data/navigation';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import LocationCard from '@/components/location/LocationCard';
import ContactForm from '@/components/contact/ContactForm';

export const metadata = buildMetadata({
  title: 'Contact Peri Peri Grill House',
  description:
    'Get in touch with Peri Peri Grill House. Catering inquiries, questions, or feedback — reach us at help@periperigh.com or call our Brooklyn or Long Island location.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      {locations.map((loc) => (
        <LocalBusinessSchema key={loc.id} location={loc} />
      ))}
      <Breadcrumbs items={breadcrumbConfig['/contact']} />

      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left — Form */}
            <div className="lg:col-span-7">
              <div className="label mb-4" style={{ color: 'var(--color-ember)' }}>
                Get in touch
              </div>
              <div className="ember-line mb-6" />
              <h1 className="font-display font-800 text-4xl md:text-5xl tracking-tight mb-4">
                Contact Us
              </h1>
              <p className="text-lg mb-10" style={{ color: 'var(--color-smoke)' }}>
                For catering inquiries, questions, or general information. You can also email us
                directly at{' '}
                <a href="mailto:help@periperigh.com" className="font-display font-600" style={{ color: 'var(--color-ember)' }}>
                  help@periperigh.com
                </a>
              </p>
              <ContactForm />
            </div>

            {/* Right — Locations */}
            <div className="lg:col-span-5 space-y-8">
              <div className="label mb-2" style={{ color: 'var(--color-smoke-light)' }}>
                Our Locations
              </div>
              {locations.map((loc) => (
                <LocationCard key={loc.id} location={loc} showHours />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
