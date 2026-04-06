import JsonLd from './JsonLd';
import { siteConfig } from '@/data/siteConfig';
import type { BreadcrumbItem } from '@/data/navigation';

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  if (items.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${siteConfig.domain}${item.href}`,
    })),
  };

  return <JsonLd data={schema} />;
}
