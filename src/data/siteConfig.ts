export const siteConfig = {
  name: 'Peri Peri Grill House',
  domain: 'https://periperigh.com',
  tagline: 'Flame-Grilled Halal Peri Peri Chicken',
  description:
    'Halal peri peri chicken in Brooklyn and Bethpage, Long Island. Marinated overnight, flame-grilled to order with bold peri peri sauces. Dine in, takeout, or delivery.',
  email: 'help@periperigh.com',
  social: {
    instagram: 'https://www.instagram.com/periperigh/',
    facebook: 'https://www.facebook.com/periperigh/',
    tiktok: 'https://www.tiktok.com/@periperigh',
  },
  ga4MeasurementId: process.env.NEXT_PUBLIC_GA4_ID || '',
} as const;
