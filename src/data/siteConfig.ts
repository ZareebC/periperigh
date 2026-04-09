export const siteConfig = {
  name: 'Peri Peri Grill House',
  domain: 'https://periperigh.com',
  tagline: 'Flame-Grilled Halal Peri Peri Chicken',
  description:
    'Halal peri peri chicken in Brooklyn and Bethpage, Long Island. Marinated overnight, flame-grilled to order with bold peri peri sauces. Dine in, takeout, or delivery.',
  email: 'help@periperigh.com',
  cateringEmail: 'Periperigh.li@gmail.com',
  social: {
    instagram: 'https://www.instagram.com/periperigh/',
    facebook: 'https://www.facebook.com/periperigh/',
    tiktok: 'https://www.tiktok.com/@periperigh',
  },
  ga4MeasurementId: process.env.NEXT_PUBLIC_GA4_ID || '',

  // Proof points — verifiable facts AI can cite
  proofPoints: {
    foundedYear: 2018,
    yearsInBusiness: new Date().getFullYear() - 2018,
    yelpReviewCount: 212,
    yelpPhotoCount: 204,
    locationCount: 2,
    heatLevelCount: 7,
    menuItemCount: '50+',
    overnightMarinadeHours: 12,
    lastMenuUpdate: 'April 2026',
  },
} as const;
