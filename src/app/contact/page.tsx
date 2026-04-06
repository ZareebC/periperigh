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

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-4">
            Contact Peri Peri Grill House
          </h1>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-16">
            For catering inquiries, questions, or general information, feel free to reach out.
            You can also email us directly at{' '}
            <a href="mailto:help@periperigh.com" className="text-red-600 font-medium">
              help@periperigh.com
            </a>.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Locations */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Locations</h2>
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
