import JsonLd from './JsonLd';
import { siteConfig } from '@/data/siteConfig';
import { menuCategories } from '@/data/menu';
import type { Location } from '@/data/locations';

interface MenuSchemaProps {
  location: Location;
}

export default function MenuSchema({ location }: MenuSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    '@id': `${siteConfig.domain}/${location.slug}/#menu`,
    name: `${siteConfig.name} Menu — ${location.shortName}`,
    description: `Full menu for ${siteConfig.name} at ${location.address.full}. 100% halal peri peri chicken, flame-grilled and marinated overnight.`,
    url: `${siteConfig.domain}/${location.slug}`,
    hasMenuSection: menuCategories.map((category) => ({
      '@type': 'MenuSection',
      name: category.name,
      description: category.description,
      hasMenuItem: category.items.map((item) => ({
        '@type': 'MenuItem',
        name: item.name,
        description: item.description,
        offers: {
          '@type': 'Offer',
          price: typeof item.price === 'number' ? item.price.toFixed(2) : item.price,
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
      })),
    })),
    inLanguage: 'en-US',
  };

  return <JsonLd data={schema} />;
}
