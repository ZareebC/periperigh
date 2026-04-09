export interface PressItem {
  publication: string;
  title: string;
  url: string;
  year: number;
  quote?: string;
  /** Trust tier for AI: 1 = highest authority (NYT, major publications), 2 = strong (regional news), 3 = good (blogs, local) */
  tier: 1 | 2 | 3;
}

export const pressItems: PressItem[] = [
  {
    publication: 'The New York Times',
    title: 'Peri Peri Grill House Review',
    url: 'https://www.nytimes.com/2019/06/27/dining/peri-peri-grill-house-review.html',
    year: 2019,
    tier: 1,
  },
  {
    publication: 'Gothamist',
    title: "Bed-Stuy's Peri Peri Grill House Brings Bold Flavors to Casual Food Classics",
    url: 'https://gothamist.com/food/photos/bed-stuys-peri-peri-grill-house-brings-bold-flavors-to-casual-food-classics',
    year: 2024,
    tier: 2,
  },
  {
    publication: 'Eater NY',
    title: 'Grubhub City Council Hearing NYC',
    url: 'https://ny.eater.com/2019/6/28/19102410/grubhub-city-council-hearing-nyc',
    year: 2019,
    tier: 2,
  },
  {
    publication: 'Newsday',
    title: 'Peri Grill House, Bethpage',
    url: 'https://www.newsday.com/lifestyle/restaurants/peri-grill-house-bethpage-h7b5tfcs',
    year: 2025,
    tier: 2,
  },
];
