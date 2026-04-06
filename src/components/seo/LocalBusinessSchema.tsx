import JsonLd from './JsonLd';
import { siteConfig } from '@/data/siteConfig';
import type { Location } from '@/data/locations';

interface LocalBusinessSchemaProps {
  location: Location;
}

function dayToSchemaDay(day: string): string {
  const map: Record<string, string> = {
    Sunday: 'https://schema.org/Sunday',
    Monday: 'https://schema.org/Monday',
    Tuesday: 'https://schema.org/Tuesday',
    Wednesday: 'https://schema.org/Wednesday',
    Thursday: 'https://schema.org/Thursday',
    Friday: 'https://schema.org/Friday',
    Saturday: 'https://schema.org/Saturday',
  };
  return map[day] || day;
}

export default function LocalBusinessSchema({ location }: LocalBusinessSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Restaurant', 'LocalBusiness'],
    '@id': `${siteConfig.domain}/${location.slug}/#localbusiness`,
    name: location.name,
    description: location.metaDescription,
    url: `${siteConfig.domain}/${location.slug}`,
    telephone: location.phone.e164,
    email: siteConfig.email,
    servesCuisine: ['Peri Peri', 'Halal', 'African', 'Portuguese', 'Chicken'],
    priceRange: '$$',
    image: `${siteConfig.domain}/og-default.jpg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.address.street,
      addressLocality: location.address.city,
      addressRegion: location.address.state,
      postalCode: location.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.geo.latitude,
      longitude: location.geo.longitude,
    },
    openingHoursSpecification: location.hours
      .filter((h) => !h.closed)
      .map((h) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: dayToSchemaDay(h.day),
        opens: h.open,
        closes: h.close,
      })),
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.tiktok,
    ],
    hasMenu: `${siteConfig.domain}/${location.slug}`,
    acceptsReservations: false,
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Credit Card, Debit Card',
    parentOrganization: {
      '@id': `${siteConfig.domain}/#restaurant`,
    },
  };

  return <JsonLd data={schema} />;
}
