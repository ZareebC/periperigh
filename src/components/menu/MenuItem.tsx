import type { MenuItem as MenuItemType } from '@/data/menu';

interface MenuItemProps {
  item: MenuItemType;
}

export default function MenuItem({ item }: MenuItemProps) {
  return (
    <div className="flex justify-between gap-4 py-4 border-b border-gray-50 last:border-0">
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h4 className="font-semibold text-gray-900">{item.name}</h4>
          {item.popular && (
            <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-red-100 text-red-700 rounded-full">
              Popular
            </span>
          )}
          {item.spicy && (
            <span className="text-red-500" title="Spicy">🌶️</span>
          )}
        </div>
        <p className="text-sm text-gray-500 mt-1 leading-relaxed">{item.description}</p>
      </div>
      <div className="text-right flex-shrink-0">
        <span className="font-bold text-gray-900">
          ${typeof item.price === 'number' ? item.price.toFixed(2) : item.price}
        </span>
      </div>
    </div>
  );
}
