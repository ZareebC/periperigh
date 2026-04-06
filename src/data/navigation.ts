export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Menu',
    href: '#',
    children: [
      { label: 'Brooklyn (Bed-Stuy)', href: '/brooklyn-bed-stuy' },
      { label: 'Bethpage (Long Island)', href: '/bethpage-long-island' },
    ],
  },
  { label: 'Our Chicken', href: '/halal-peri-peri-chicken' },
  { label: 'Locations', href: '/locations' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export const breadcrumbConfig: Record<string, BreadcrumbItem[]> = {
  '/': [],
  '/halal-peri-peri-chicken': [
    { label: 'Home', href: '/' },
    { label: 'Halal Peri Peri Chicken', href: '/halal-peri-peri-chicken' },
  ],
  '/brooklyn-bed-stuy': [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/locations' },
    { label: 'Brooklyn (Bed-Stuy)', href: '/brooklyn-bed-stuy' },
  ],
  '/bethpage-long-island': [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/locations' },
    { label: 'Bethpage (Long Island)', href: '/bethpage-long-island' },
  ],
  '/hicksville-halal-chicken': [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/locations' },
    { label: 'Bethpage (Long Island)', href: '/bethpage-long-island' },
    { label: 'Hicksville', href: '/hicksville-halal-chicken' },
  ],
  '/locations': [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/locations' },
  ],
  '/order-online': [
    { label: 'Home', href: '/' },
    { label: 'Order Online', href: '/order-online' },
  ],
  '/contact': [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: '/contact' },
  ],
  '/faq': [
    { label: 'Home', href: '/' },
    { label: 'FAQ', href: '/faq' },
  ],
  '/blog': [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
  ],
};
