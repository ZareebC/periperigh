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
      'Marinated overnight in our special blend of Peri Peri spices, and flame-grilled with your choice of spice from our Peri Scale.',
    items: [
      {
        name: '6 Wings',
        description:
          'Marinated overnight in a special blend of peri peri spices and flame grilled with your choice of spice from the peri scale.',
        price: 9.99,
        popular: true,
      },
      {
        name: '12 Wings',
        description:
          'A dozen flame-grilled peri peri wings — marinated overnight, choose your heat level.',
        price: 18.99,
      },
      {
        name: '24 Wings',
        description:
          'Two dozen flame-grilled peri peri wings — perfect for sharing. Marinated overnight, choose your heat level.',
        price: 35.99,
      },
      {
        name: '1/4 Chicken — Leg & Thigh',
        description:
          'Quarter chicken leg and thigh, flame-grilled with your choice of peri peri basting sauce.',
        price: 6.49,
      },
      {
        name: '1/4 Chicken — Breast & Wing',
        description:
          'Quarter chicken breast and wing, flame-grilled with your choice of peri peri basting sauce.',
        price: 7.49,
      },
      {
        name: '1/2 Chicken',
        description:
          'Half chicken marinated overnight in a special blend of peri peri spices and flame grilled with your choice of spice from the peri scale.',
        price: 13.49,
        popular: true,
      },
      {
        name: 'Whole Chicken',
        description:
          'A whole chicken basted in your choice of peri peri sauce. Perfectly seasoned and packed with flavor.',
        price: 25.99,
      },
      {
        name: 'Breast Fillet',
        description:
          'Juicy, flame-grilled boneless chicken breast fillet marinated in our peri-peri spices, served with peri peri rice and a fresh house salad.',
        price: 11.49,
      },
      {
        name: 'Fried Chicken Tenders — 3 Piece',
        description:
          'Crispy golden chicken tenders — juicy on the inside, crackling on the outside — drenched in mild or hot peri-peri sauce.',
        price: 9.99,
        locations: ['bethpage'],
      },
      {
        name: 'Fried Chicken Tenders — 5 Piece',
        description:
          'Five crispy golden chicken tenders — juicy on the inside, crackling on the outside — drenched in mild or hot peri-peri sauce.',
        price: 14.99,
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
    name: 'Sandwiches & Burgers',
    description:
      'Chicken, Beef or Veggie, with a twist of Peri Peri.',
    items: [
      {
        name: 'Grilled Chicken Sandwich — Single',
        description:
          'Flame-grilled with your choice of spice from our Peri Scale, served with Peri Peri Mayo and lettuce.',
        price: 9.99,
        popular: true,
      },
      {
        name: 'Grilled Chicken Sandwich — Double',
        description:
          'Double flame-grilled chicken with your choice of spice from our Peri Scale, served with Peri Peri Mayo and lettuce.',
        price: 14.99,
      },
      {
        name: 'Fried Chicken Sandwich — Single',
        description:
          'Served Mild or Hot, with Peri Peri Mayo and lettuce.',
        price: 9.99,
        locations: ['bethpage'],
      },
      {
        name: 'Fried Chicken Sandwich — Double',
        description:
          'Double fried chicken served Mild or Hot, with Peri Peri Mayo and lettuce.',
        price: 14.99,
        locations: ['bethpage'],
      },
      {
        name: 'Falafel Burger — Single',
        description:
          'Falafel patty served with Peri Peri Mayo, lettuce, onions, tomato and ketchup.',
        price: 9.99,
      },
      {
        name: 'Falafel Burger — Double',
        description:
          'Double falafel patty served with Peri Peri Mayo, lettuce, onions, tomato and ketchup.',
        price: 14.99,
      },
      {
        name: 'Peri Classic Smash — Single',
        description:
          '3oz premium beef served spicy or mild, on a potato bun, topped with American Cheese, pickles and Very Peri Secret Sauce.',
        price: 7.50,
        popular: true,
      },
      {
        name: 'Peri Classic Smash — Double',
        description:
          'Two 3oz premium beef patties on a potato bun, topped with American Cheese, pickles and Very Peri Secret Sauce.',
        price: 10.50,
      },
      {
        name: 'Peri Classic Smash — Triple',
        description:
          'Three 3oz premium beef patties on a potato bun, topped with American Cheese, pickles and Very Peri Secret Sauce.',
        price: 13.50,
      },
      {
        name: 'Peri Oklahoma Smash — Single',
        description:
          '3oz premium beef served on a potato bun, topped with American Cheese, onions and Very Peri Sauce.',
        price: 8.50,
      },
      {
        name: 'Peri Oklahoma Smash — Double',
        description:
          'Two 3oz premium beef patties on a potato bun, topped with American Cheese, onions and Very Peri Sauce.',
        price: 11.50,
      },
      {
        name: 'Peri Oklahoma Smash — Triple',
        description:
          'Three 3oz premium beef patties on a potato bun, topped with American Cheese, onions and Very Peri Sauce.',
        price: 14.50,
      },
    ],
  },
  {
    id: 'wraps',
    name: 'Wraps',
    description:
      'Chicken or Veggie. For a lighter option, swap the bun for a wrap.',
    items: [
      {
        name: 'Grilled Chicken Wrap — Single',
        description:
          'Flame-grilled with your choice of spice from our Peri Scale, served with Peri Peri Mayo, lettuce, tomato and onions.',
        price: 9.99,
      },
      {
        name: 'Grilled Chicken Wrap — Double',
        description:
          'Double flame-grilled chicken with your choice of spice, served with Peri Peri Mayo, lettuce, tomato and onions.',
        price: 14.99,
      },
      {
        name: 'Fried Chicken Wrap — Single',
        description:
          'Served Mild or Hot, with Peri Peri Mayo, lettuce, tomato and onions.',
        price: 9.99,
        locations: ['bethpage'],
      },
      {
        name: 'Fried Chicken Wrap — Double',
        description:
          'Double fried chicken served Mild or Hot, with Peri Peri Mayo, lettuce, tomato and onions.',
        price: 14.99,
        locations: ['bethpage'],
      },
      {
        name: 'Falafel Wrap — Single',
        description:
          'Served with Peri Peri Mayo, lettuce, tomato and onions.',
        price: 9.99,
      },
      {
        name: 'Falafel Wrap — Double',
        description:
          'Double falafel served with Peri Peri Mayo, lettuce, tomato and onions.',
        price: 14.99,
      },
    ],
  },
  {
    id: 'loaded-fries',
    name: 'Loaded Fries',
    description:
      'Served spicy or mild, topped with cheese, grilled onions and Very Peri Secret Sauce.',
    items: [
      {
        name: 'Loaded Fries',
        description:
          'Crispy fries topped with cheese, grilled onions, and our house-made Very Peri Secret Sauce.',
        price: 7.50,
        popular: true,
      },
      {
        name: 'Add Crispy Chicken',
        description: 'Add crispy chicken to your loaded fries.',
        price: 4.00,
      },
      {
        name: 'Add Smash Beef',
        description: 'Add smashed beef patty to your loaded fries.',
        price: 4.00,
      },
    ],
  },
  {
    id: 'family-meals',
    name: 'Made to Share',
    description:
      'Feed the whole family with our shareable peri peri chicken platters served with your choice of sides.',
    items: [
      {
        name: '1 Whole Chicken + 4 Sides',
        description:
          'A whole chicken cut into 8 pieces, basted in your choice of peri peri sauce, and served with four sides. Made for sharing.',
        price: 44.99,
      },
      {
        name: '2 Whole Chickens + 6 Sides',
        description:
          'Two whole peri peri chickens, cut into 8 pieces each, basted with your choice of sauce, and served with six sides. Perfect for sharing.',
        price: 79.99,
      },
    ],
  },
  {
    id: 'sides',
    name: 'Sides',
    description:
      'Turn it into a meal...add a little something on the side.',
    items: [
      {
        name: 'Peri Peri Fries — Small',
        description: 'Fries finished with a dusting of peri peri seasoning.',
        price: 4.99,
        popular: true,
      },
      {
        name: 'Peri Peri Fries — Large',
        description: 'Large portion of fries finished with a dusting of peri peri seasoning.',
        price: 5.99,
      },
      {
        name: 'Mashed Potatoes',
        description: 'Smooth, creamy potatoes topped with gravy and hints of peri peri.',
        price: 4.99,
      },
      {
        name: 'Peri Peri Rice',
        description: 'Basmati rice cooked in a blend of mild peri peri spices with red bell peppers.',
        price: 4.99,
      },
      {
        name: 'Corn on the Cob',
        description: 'Flame grilled corn finished with butter and a dusting of peri peri seasoning.',
        price: 4.99,
      },
      {
        name: 'Mac & Cheese',
        description: 'Creamy macaroni coated in rich, melty cheddar cheese.',
        price: 4.99,
      },
      {
        name: 'Side Salad',
        description: 'Mixed greens, cherry tomatoes, carrots, cucumber, red onion, feta cheese, with vinaigrette or ranch dressing.',
        price: 4.99,
      },
      {
        name: 'Coleslaw',
        description: 'A crunchy, creamy shredded cabbage drizzled with zesty peri-peri seasoning.',
        price: 4.99,
      },
      {
        name: 'Peri Peri Lentil Soup & Pita',
        description: 'Hearty lentil soup with a spicy peri-peri kick, perfect for a warming and flavorful meal.',
        price: 5.49,
      },
      {
        name: 'Pita',
        description: 'Fresh warm pita bread.',
        price: 1.00,
      },
    ],
  },
  {
    id: 'salads',
    name: 'Salads',
    description: 'Prepared using fresh greens and vegetables.',
    items: [
      {
        name: 'Mixed Green Salad',
        description:
          'Mixed greens, cherry tomatoes, cucumber, carrots, red onion, feta cheese and vinaigrette or ranch dressing.',
        price: 8.49,
      },
      {
        name: 'Add Chicken Breast',
        description: 'Add a flame-grilled chicken breast to any salad.',
        price: 4.99,
      },
      {
        name: 'Add Grilled Falafel',
        description: 'Add grilled falafel to any salad.',
        price: 4.99,
      },
    ],
  },
  {
    id: 'sauces',
    name: 'Sauces',
    description: 'Our house-made sauces and dips to complement every bite.',
    items: [
      { name: 'Peri Peri Side Sauce', description: 'Mild, Hot or Garlic — our signature peri peri sauce on the side.', price: 0.50 },
      { name: 'Cheese Sauce', description: 'Rich, creamy, and smooth melted cheese sauce perfect for dipping or drizzling.', price: 2.00 },
      { name: 'Peri Peri Mayo', description: 'Creamy mayo blended with peri peri spices for a smooth, tangy sauce with a gentle kick.', price: 1.00 },
      { name: 'Very Peri Secret Sauce', description: 'Our signature secret sauce — a house-made peri peri blend you won\'t find anywhere else.', price: 1.00 },
    ],
  },
  {
    id: 'desserts',
    name: 'Desserts & Milkshakes',
    description: 'Take the heat down a notch with our selection of decadent ice creams and milkshakes.',
    items: [
      {
        name: 'Ice Cream — Single',
        description: 'Chocolate, Vanilla and Mango.',
        price: 3.99,
      },
      {
        name: 'Ice Cream — Double',
        description: 'Double scoop — Chocolate, Vanilla and Mango.',
        price: 6.99,
      },
    ],
  },
  {
    id: 'toppings',
    name: 'Ice Cream Toppings',
    description: 'Add a topping to your ice cream.',
    items: [
      { name: 'Rainbow Sprinkles', description: 'Classic rainbow sprinkles.', price: 1.00 },
      { name: 'Nutella', description: 'Rich Nutella drizzle.', price: 1.00 },
      { name: 'Biscoff', description: 'Crushed Biscoff cookie crumble.', price: 1.00 },
      { name: 'Oreo', description: 'Crushed Oreo cookie crumble.', price: 1.00 },
    ],
  },
  {
    id: 'milkshakes',
    name: 'Milkshakes (16oz)',
    description: 'Hand-crafted milkshakes made with premium ice cream and real ingredients.',
    items: [
      {
        name: 'Dubai Shake',
        description:
          'Creamy French vanilla ice cream blended with chocolate and pistachio sauce, mixed with Knafeh and topped with crunchy Knafeh. A rich Dubai-style treat.',
        price: 10.99,
        popular: true,
        locations: ['bethpage'],
      },
      {
        name: 'Nutella Shake',
        description:
          'French vanilla ice cream blended with Nutella sauce, infused with rich Nutella flavor, finished with warm Nutella drizzled on top.',
        price: 9.99,
      },
      {
        name: 'Biscoff Shake',
        description:
          'French vanilla ice cream blended with Biscoff sauce and crunchy crumbled cookies, topped with even more Biscoff crumble.',
        price: 9.99,
      },
      {
        name: 'Mango Shake',
        description:
          'Indian mango ice cream blended with rich mango puree for a smooth, tropical, ultra-mango flavor.',
        price: 9.99,
      },
      {
        name: 'Chocolate Shake',
        description:
          'A creamy blend of chocolate ice cream, chocolate sauce, and whole milk for a rich chocolate treat.',
        price: 6.99,
      },
      {
        name: 'Vanilla Shake',
        description:
          'A classic blend of milk and French vanilla ice cream for a smooth and creamy treat.',
        price: 6.99,
      },
    ],
  },
  {
    id: 'drinks',
    name: 'Drinks',
    description: 'Beverages to complement your meal.',
    items: [
      { name: 'Fountain Drinks', description: 'Choice of fountain sodas.', price: 2.99 },
      { name: 'Bottle Drinks', description: 'Bottled beverages.', price: 3.99 },
      { name: 'Kids Juice', description: 'Juice box for the little ones.', price: 1.99 },
    ],
  },
  {
    id: 'kids-menu',
    name: 'Kids',
    description: 'Kid-friendly options for our younger guests.',
    items: [
      {
        name: '4 Piece Chicken Nuggets',
        description: 'Four crispy chicken nuggets, perfect for little ones.',
        price: 3.99,
        locations: ['bethpage'],
      },
      {
        name: '6 Piece Chicken Nuggets',
        description: 'Six crispy chicken nuggets.',
        price: 4.99,
        locations: ['bethpage'],
      },
      {
        name: '2 Piece Fried Chicken Tenders',
        description: 'Crispy golden chicken tenders — juicy on the inside, crackling on the outside.',
        price: 5.99,
        locations: ['bethpage'],
      },
    ],
  },
];

/** Combo add-on price */
export const comboPrice = 5.99;
export const comboDescription = 'Add 1 side and 1 fountain drink to any sandwich, wrap, or burger.';

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
