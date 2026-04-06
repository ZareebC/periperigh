import JsonLd from './JsonLd';
import { siteConfig } from '@/data/siteConfig';
import { locations } from '@/data/locations';
import { pressItems } from '@/data/press';

export default function RestaurantSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${siteConfig.domain}/#restaurant`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.domain,
    telephone: locations[0].phone.e164,
    email: siteConfig.email,
    servesCuisine: ['Peri Peri', 'Halal', 'African', 'Portuguese', 'Chicken'],
    priceRange: '$$',
    image: `${siteConfig.domain}/og-default.jpg`,
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.tiktok,
      ...pressItems.map((item) => item.url),
    ],
    hasMenu: `${siteConfig.domain}/brooklyn-bed-stuy`,
    acceptsReservations: false,
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Credit Card, Debit Card',
    department: locations.map((loc) => ({
      '@type': 'Restaurant',
      name: loc.name,
      telephone: loc.phone.e164,
      address: {
        '@type': 'PostalAddress',
        streetAddress: loc.address.street,
        addressLocality: loc.address.city,
        addressRegion: loc.address.state,
        postalCode: loc.address.zip,
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: loc.geo.latitude,
        longitude: loc.geo.longitude,
      },
    })),
  };

  return <JsonLd data={schema} />;
}
