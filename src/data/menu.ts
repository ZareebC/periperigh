export interface MenuItem {
  name: string;
  description: string;
  price: number | string;
  popular?: boolean;
  spicy?: boolean;
  image?: string;
  /** Which locations carry this item. Omit = both locations. */
  locations?: ('brooklyn' | 'bethpage')[];
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
}

export const heatLevels = [
  { name: 'Lemon & Herb', description: 'Bright citrus and herby notes with zero heat. Fresh, zesty, and family-friendly.' },
  { name: 'Mango Passion', description: 'Sweet and tangy mango with a tropical twist — fruity flavor with no heat.' },
  { name: 'Garlic & Herb', description: 'Rich, roasted garlic with aromatic herbs. Savory depth, no spice.' },
  { name: 'Jerk BBQ', description: 'Smoky Caribbean-style jerk seasoning blended with BBQ sweetness. A bold flavor with mild warmth.' },
  { name: 'Mild', description: 'A smooth, balanced blend of peri peri spice — flavorful with a gentle kick.' },
  { name: 'Hot', description: 'Serious heat from African Bird\'s Eye chili — bold, fiery, and not for the faint-hearted.' },
  { name: 'Extra Hot', description: 'Our most extreme heat level. Pure African Bird\'s Eye chili dominance for true spice warriors.' },
];

export const mozzPlanks = {
  sizes: [
    { pieces: 3, price: 8.99 },
    { pieces: 5, price: 14.99 },
    { pieces: 10, price: 28.99 },
  ],
  flavors: [
    { name: 'Plain', description: 'Classic crispy mozzarella — pure cheese pull.' },
    { name: 'Nashville Hot', description: 'Spicy Oil Drip — fiery kick with every bite.' },
    { name: 'Mesquite BBQ', description: 'Smokey Oil Drip — rich, smoky, and savory.' },
  ],
};

export const menuCategories: MenuCategory[] = [
  {
    id: 'chicken',
    name: 'Peri Peri Chicken',
    description:
      'Our signature flame-grilled chicken is marinated overnight in a special blend of peri peri spices, then grilled to perfection. Choose your heat level from our peri scale.',
    items: [
      {
        name: 'Wings',
        description:
          'Marinated overnight in a special blend of peri peri spices and flame grilled with your choice of spice from the peri scale.',
        price: 11.99,
        popular: true,
      },
      {
        name: '1/4 Chicken — Breast & Wing',
        description:
          'Quarter chicken breast and wing, flame-grilled with your choice of peri peri basting sauce.',
        price: 8.99,
      },
      {
        name: '1/4 Chicken — Leg & Thigh',
        description:
          'Quarter chicken leg and thigh, flame-grilled with your choice of peri peri basting sauce.',
        price: 7.99,
      },
      {
        name: '1/4 Leg & Thigh with Rice & Salad',
        description:
          'Flame-grilled halal chicken leg and thigh, juicy and seasoned to perfection, served with peri peri rice and fresh salad.',
        price: 19.99,
        popular: true,
      },
      {
        name: '1/2 Chicken',
        description:
          'Half chicken marinated overnight in a special blend of peri peri spices and flame grilled with your choice of spice from the peri scale.',
        price: 16.29,
        popular: true,
      },
      {
        name: 'Boneless Chicken Breast with Rice & Salad',
        description:
          'Juicy, flame-grilled boneless chicken breast marinated in our peri-peri spices, served with peri peri rice and a fresh house salad. Balanced, flavorful, and satisfying.',
        price: 13.79,
      },
      {
        name: 'Whole Chicken',
        description:
          'A whole chicken basted in your choice of peri peri sauce. Perfectly seasoned and packed with flavor.',
        price: 39.99,
      },
      {
        name: 'Crispy Chicken Tenders',
        description:
          'Crispy golden chicken tenders — juicy on the inside, crackling on the outside — drenched in mild or hot peri-peri sauce.',
        price: 11.99,
        locations: ['bethpage'],
      },
      {
        name: 'Lamb Chops',
        description:
          'Flame-grilled halal lamb chops marinated in our peri peri spice blend, seared to perfection.',
        price: 'Market Price',
        locations: ['brooklyn'],
      },
    ],
  },
  {
    id: 'peri-mozz-planks',
    name: 'Peri Mozz Planks',
    description:
      'Crispy mozzarella planks with an insane cheese pull. Perfect for dipping in ranch or hot honey.',
    items: [
      {
        name: 'Peri Mozz Planks',
        description: 'Crispy mozzarella planks with an insane cheese pull. Available in 3, 5, or 10 pieces.',
        price: '8.99–28.99',
        popular: true,
      },
    ],
  },
  {
    id: 'burgers-sandwiches',
    name: 'Burgers & Sandwiches',
    description:
      'From flame-grilled chicken breast to crispy tenders and our signature smash burgers — all served with our house-made peri peri sauces.',
    items: [
      {
        name: 'Chicken Breast Sandwich',
        description:
          'Flame grilled with your choice of spice from peri scale. Served on a toasted Brioche roll with peri peri mayonnaise and mixed greens.',
        price: 13.99,
        popular: true,
      },
      {
        name: 'Peri Classic Smash Burger',
        description:
          'Juicy smashed beef patty cooked crispy on the edges, topped with melted cheese, pickles, and our house-made Peri Secret Sauce, served on a toasted bun.',
        price: 8.50,
        popular: true,
      },
      {
        name: 'Peri Oklahoma Smash Burger',
        description:
          'Smashed beef cooked with a generous amount of grilled onions for deep caramelized flavor, finished with melted cheese and our signature Peri Secret Sauce on a toasted bun.',
        price: 9.00,
      },
      {
        name: 'Falafel Burger',
        description:
          'Falafel patty served with peri peri mayonnaise, lettuce, tomato, and onions.',
        price: 13.99,
      },
      {
        name: 'Fried Chicken Sandwich',
        description:
          'Crispy golden chicken, juicy on the inside, crackling on the outside, drenched in mild or spicy peri-peri sauce.',
        price: 11.99,
        locations: ['bethpage'],
      },
    ],
  },
  {
    id: 'wraps',
    name: 'Wraps',
    description:
      'Our flame-grilled chicken and falafel wrapped up with fresh vegetables and peri peri mayo.',
    items: [
      {
        name: 'Chicken Breast Wrap',
        description:
          'Flame grilled with your choice of spice from peri scale. Served with peri peri mayonnaise, lettuce, tomato, and onion.',
        price: 11.99,
      },
      {
        name: 'Falafel Wrap',
        description:
          'Falafel patty served with peri peri mayonnaise, lettuce, tomato, and onion.',
        price: 11.99,
      },
      {
        name: 'Crispy Tender Wrap',
        description:
          'Crispy golden chicken tender wrap. Served with peri peri mayonnaise, lettuce, tomato, and onion.',
        price: 11.99,
        locations: ['bethpage'],
      },
    ],
  },
  {
    id: 'family-meals',
    name: 'Family Meals',
    description:
      'Feed the whole family with our shareable peri peri chicken platters served with your choice of sides.',
    items: [
      {
        name: 'Whole Chicken with 4 Sides',
        description:
          'A whole chicken cut into 8 pieces, basted in your choice of peri peri sauce, and served with four sides. Made for sharing.',
        price: 53.99,
      },
      {
        name: '2 Whole Chickens with 6 Sides',
        description:
          'Two whole peri peri chickens, cut into 8 pieces each, basted with your choice of sauce, and served with six sides of your choice. Perfect for sharing.',
        price: 95.99,
      },
    ],
  },
  {
    id: 'kids-menu',
    name: 'Kids Menu',
    description: 'Kid-friendly options for our younger guests.',
    items: [
      {
        name: '4 Pc Chicken Nuggets',
        description: 'Four crispy chicken nuggets, perfect for little ones.',
        price: 4.79,
        locations: ['bethpage'],
      },
      {
        name: '6 Pc Chicken Nuggets',
        description: 'Six crispy chicken nuggets.',
        price: 5.99,
        locations: ['bethpage'],
      },
      {
        name: '2 Pc Chicken Tenders',
        description:
          'Crispy golden chicken tenders — juicy on the inside, crackling on the outside.',
        price: 7.29,
        locations: ['bethpage'],
      },
    ],
  },
  {
    id: 'salads',
    name: 'Salads',
    description: 'Fresh salads to complement your peri peri meal.',
    items: [
      {
        name: 'Mixed Green Salad',
        description:
          '32 oz portion of mixed greens, cherry tomatoes, carrots, cucumber, red onion, feta cheese, with vinaigrette or ranch dressing.',
        price: 10.29,
      },
    ],
  },
  {
    id: 'sides',
    name: 'Sides',
    description:
      'The perfect companions to your flame-grilled peri peri chicken.',
    items: [
      {
        name: 'Peri Peri Fries',
        description:
          'Fries finished with a dusting of peri peri seasoning.',
        price: 5.99,
        popular: true,
      },
      {
        name: 'Peri Peri Rice',
        description:
          'Basmati rice cooked in a blend of mild peri peri spices with red bell peppers.',
        price: 5.99,
      },
      {
        name: 'Corn on the Cob',
        description:
          'Flame grilled corn finished with butter and a dusting of peri peri seasoning.',
        price: 5.99,
      },
      {
        name: 'Mashed Potatoes',
        description:
          'Smooth, creamy potatoes topped with gravy and hints of peri peri.',
        price: 5.99,
      },
      {
        name: 'Coleslaw',
        description:
          'A crunchy, creamy shredded cabbage drizzled with zesty peri-peri seasoning.',
        price: 5.99,
      },
      {
        name: 'Side Salad',
        description:
          'Mixed greens, cherry tomatoes, carrots, cucumber, red onion, feta cheese, with vinaigrette or ranch dressing.',
        price: 5.99,
      },
      {
        name: 'Mac & Cheese',
        description:
          'Creamy macaroni coated in rich, melty cheddar cheese.',
        price: 5.99,
      },
      {
        name: 'Lentil Soup with Pita',
        description:
          'Hearty lentil soup with a spicy peri-peri kick, perfect for a warming and flavorful meal.',
        price: 6.49,
      },
      {
        name: 'Avocado',
        description: 'Fresh sliced avocado.',
        price: 1.79,
      },
      {
        name: 'Pita',
        description: 'Fresh warm pita bread.',
        price: 1.29,
      },
      {
        name: 'Loaded Fries',
        description:
          'Crispy fries loaded with melted cheese, grilled onions, and our house-made Peri Secret Sauce. Add crispy chicken or smashed beef to make it a meal.',
        price: 8.00,
        popular: true,
      },
    ],
  },
  {
    id: 'sauces',
    name: 'Sauces',
    description: 'Our house-made sauces and dips to complement every bite.',
    items: [
      { name: 'Cheese Sauce', description: 'Rich, creamy, and smooth melted cheese sauce perfect for dipping, drizzling, or adding extra cheesy flavor.', price: 2.99 },
      { name: 'Garlic Sauce', description: 'A bold peri peri blend infused with rich garlic flavor, delivering zesty heat and savory depth in every bite.', price: 0.60 },
      { name: 'Hot Sauce', description: 'A fiery, flavorful peri peri sauce packed with bold spice and vibrant heat for those who like it hot.', price: 0.60 },
      { name: 'Mild Sauce', description: 'A smooth, flavorful blend of spices and mild heat, perfect for adding gentle peri peri flavor without overpowering spice.', price: 0.60 },
      { name: 'Very Peri Secret Sauce', description: 'Our signature secret sauce — a house-made peri peri blend you won\'t find anywhere else.', price: 1.19 },
      { name: 'Peri Peri Mayo', description: 'Creamy mayo blended with peri peri spices for a smooth, tangy sauce with a gentle kick.', price: 1.29 },
      { name: 'Ranch', description: 'Classic ranch dipping sauce.', price: 1.20 },
      { name: "Mike's Hot Honey", description: "Mike's Hot Honey — sweet with a kick of heat.", price: 1.79 },
    ],
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Sweet treats to finish off your meal.',
    items: [
      {
        name: 'Ice Cream',
        description: 'Ask about our rotating ice cream flavors.',
        price: 4.79,
      },
    ],
  },
  {
    id: 'milkshakes',
    name: 'Milkshakes',
    description:
      'Hand-crafted milkshakes made with premium ice cream and real ingredients.',
    items: [
      {
        name: 'Vanilla Milkshake',
        description:
          'A simple, classic blend of milk and French vanilla ice cream for a smooth and creamy vanilla treat.',
        price: 8.39,
      },
      {
        name: 'Chocolate Milkshake',
        description:
          'A simple, creamy blend of chocolate ice cream, chocolate sauce, and whole milk for a rich chocolate treat.',
        price: 8.39,
      },
      {
        name: 'Dubai Milkshake',
        description:
          'Creamy French vanilla ice cream blended with chocolate and pistachio sauce, mixed with Knafeh and topped with crunchy Knafeh. A rich Dubai-style treat in every sip.',
        price: 13.29,
        popular: true,
        locations: ['bethpage'],
      },
      {
        name: 'Mango Milkshake',
        description:
          'Indian mango ice cream blended with rich mango puree for a smooth, tropical, ultra-mango flavor.',
        price: 11.99,
      },
      {
        name: 'Biscoff Milkshake',
        description:
          'French vanilla ice cream blended with Biscoff sauce and crunchy crumbled cookies, then topped with even more Biscoff crumble for the perfect sweet crunch.',
        price: 11.99,
      },
      {
        name: 'Nutella Milkshake',
        description:
          'French vanilla ice cream blended with Nutella sauce, infused with rich Nutella flavor, then finished with warm Nutella drizzled on top.',
        price: 11.99,
      },
    ],
  },
];

/** Returns menu categories filtered for a specific location, removing empty categories */
export function getMenuForLocation(locationId: 'brooklyn' | 'bethpage'): MenuCategory[] {
  return menuCategories
    .map((category) => ({
      ...category,
      items: category.items.filter(
        (item) => !item.locations || item.locations.includes(locationId)
      ),
    }))
    .filter((category) => category.items.length > 0);
}
