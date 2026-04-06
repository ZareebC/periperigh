export interface LocationHours {
  day: string;
  open: string;
  close: string;
  closed?: boolean;
}

export interface Location {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  neighborhood: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    full: string;
  };
  phone: {
    raw: string;
    formatted: string;
    e164: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  hours: LocationHours[];
  googleMapsEmbed: string;
  googleMapsLink: string;
  orderLinks: {
    platform: string;
    url: string;
  }[];
  metaDescription: string;
  neighborhoodDescription: string;
}

export const locations: Location[] = [
  {
    id: 'brooklyn',
    slug: 'brooklyn-bed-stuy',
    name: 'Peri Peri Grill House — Bed-Stuy, Brooklyn',
    shortName: 'Brooklyn (Bed-Stuy)',
    neighborhood: 'Bed-Stuy',
    address: {
      street: '235 Malcolm X Blvd',
      city: 'Brooklyn',
      state: 'NY',
      zip: '11233',
      full: '235 Malcolm X Blvd, Brooklyn, NY 11233',
    },
    phone: {
      raw: '9179668614',
      formatted: '(917) 966-8614',
      e164: '+19179668614',
    },
    geo: {
      latitude: 40.6848,
      longitude: -73.9416,
    },
    hours: [
      { day: 'Sunday', open: '12:00 PM', close: '9:00 PM' },
      { day: 'Monday', open: '', close: '', closed: true },
      { day: 'Tuesday', open: '12:00 PM', close: '10:00 PM' },
      { day: 'Wednesday', open: '12:00 PM', close: '10:00 PM' },
      { day: 'Thursday', open: '12:00 PM', close: '10:00 PM' },
      { day: 'Friday', open: '12:00 PM', close: '10:00 PM' },
      { day: 'Saturday', open: '12:00 PM', close: '10:00 PM' },
    ],
    googleMapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.5!2d-73.9416!3d40.6848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQxJzA1LjMiTiA3M8KwNTYnMjkuOCJX!5e0!3m2!1sen!2sus!4v1',
    googleMapsLink:
      'https://www.google.com/maps/place/235+Malcolm+X+Blvd,+Brooklyn,+NY+11233',
    orderLinks: [
      {
        platform: 'UberEats',
        url: 'https://www.ubereats.com/store/peri-peri-grill-house/6cdV3ZZVRyC3-JW9D9k28A',
      },
      {
        platform: 'DoorDash',
        url: 'https://www.doordash.com/store/peri-peri-grill-house-brooklyn-313027/',
      },
    ],
    metaDescription:
      'Peri Peri Grill House in Bed-Stuy, Brooklyn. 100% halal peri peri chicken marinated overnight and flame-grilled. Dine in, takeout, or delivery at 235 Malcolm X Blvd.',
    neighborhoodDescription:
      'Located on Malcolm X Boulevard in the heart of Bed-Stuy, Brooklyn, Peri Peri Grill House brings bold, flame-grilled halal peri peri chicken to one of Brooklyn\'s most vibrant neighborhoods. Whether you\'re coming from Crown Heights, Bushwick, or Brownsville, we\'re just minutes away with easy access from the A and C trains at Utica Avenue station.',
  },
  {
    id: 'bethpage',
    slug: 'bethpage-long-island',
    name: 'Peri Peri Grill House — Bethpage, Long Island',
    shortName: 'Bethpage (Long Island)',
    neighborhood: 'Bethpage',
    address: {
      street: '629 Hicksville Rd',
      city: 'Bethpage',
      state: 'NY',
      zip: '11714',
      full: '629 Hicksville Rd, Bethpage, NY 11714',
    },
    phone: {
      raw: '5162619953',
      formatted: '(516) 261-9953',
      e164: '+15162619953',
    },
    geo: {
      latitude: 40.7448,
      longitude: -73.4832,
    },
    hours: [
      { day: 'Sunday', open: '12:00 PM', close: '12:00 AM' },
      { day: 'Monday', open: '11:00 AM', close: '10:00 PM' },
      { day: 'Tuesday', open: '11:00 AM', close: '10:00 PM' },
      { day: 'Wednesday', open: '11:00 AM', close: '10:00 PM' },
      { day: 'Thursday', open: '11:00 AM', close: '12:00 AM' },
      { day: 'Friday', open: '11:00 AM', close: '12:00 AM' },
      { day: 'Saturday', open: '12:00 PM', close: '12:00 AM' },
    ],
    googleMapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.5!2d-73.4832!3d40.7448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzQxLjMiTiA3M8KwMjgnNTkuNSJX!5e0!3m2!1sen!2sus!4v1',
    googleMapsLink:
      'https://www.google.com/maps/place/629+Hicksville+Rd,+Bethpage,+NY+11714',
    orderLinks: [
      {
        platform: 'UberEats',
        url: 'https://www.ubereats.com/store/peri-peri-grill-house/6cdV3ZZVRyC3-JW9D9k28A',
      },
      {
        platform: 'DoorDash',
        url: 'https://www.doordash.com/store/peri-peri-grill-house-brooklyn-313027/',
      },
    ],
    metaDescription:
      'Peri Peri Grill House in Bethpage, Long Island. 100% halal peri peri chicken marinated overnight and flame-grilled. Dine in, takeout, or delivery at 629 Hicksville Rd.',
    neighborhoodDescription:
      'Located on Hicksville Road in Bethpage, Peri Peri Grill House serves bold, flame-grilled halal peri peri chicken to Long Island\'s Nassau County. We\'re just minutes from Hicksville, Farmingdale, Massapequa, and Levittown — making us the go-to spot for peri peri chicken on Long Island. Plenty of free parking available.',
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getLocationById(id: string): Location | undefined {
  return locations.find((l) => l.id === id);
}
