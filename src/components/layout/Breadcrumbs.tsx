import Link from 'next/link';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import type { BreadcrumbItem } from '@/data/navigation';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (items.length === 0) return null;

  return (
    <>
      <BreadcrumbSchema items={items} />
      <nav aria-label="Breadcrumb" className="py-4 px-6 lg:px-10 max-w-[1400px] mx-auto">
        <ol className="flex flex-wrap items-center gap-2 label" style={{ color: 'var(--color-smoke-light)', fontSize: '11px' }}>
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 && <span style={{ color: 'var(--color-smoke-light)', opacity: 0.4 }}>/</span>}
              {index === items.length - 1 ? (
                <span style={{ color: 'var(--color-char)' }} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="transition-colors hover:opacity-70">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
