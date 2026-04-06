import type { MenuCategory } from '@/data/menu';
import MenuItem from './MenuItem';

interface MenuSectionProps {
  category: MenuCategory;
}

export default function MenuSection({ category }: MenuSectionProps) {
  return (
    <section id={category.id} className="scroll-mt-24">
      <div className="flex items-center gap-4 mb-2">
        <h3 className="font-display font-700 text-2xl">{category.name}</h3>
        <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(28,24,20,0.08)' }} />
      </div>
      <p className="mb-6" style={{ color: 'var(--color-smoke)' }}>{category.description}</p>
      <div>
        {category.items.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}
