import type { MenuCategory } from '@/data/menu';
import MenuItem from './MenuItem';

interface MenuSectionProps {
  category: MenuCategory;
}

export default function MenuSection({ category }: MenuSectionProps) {
  return (
    <section id={category.id} className="scroll-mt-24">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.name}</h3>
      <p className="text-gray-500 mb-6">{category.description}</p>
      <div>
        {category.items.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}
