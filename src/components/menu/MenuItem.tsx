import type { MenuItem as MenuItemType } from '@/data/menu';

interface MenuItemProps {
  item: MenuItemType;
}

export default function MenuItem({ item }: MenuItemProps) {
  return (
    <div
      className="flex justify-between gap-6 py-5"
      style={{ borderBottom: '1px solid rgba(28,24,20,0.06)' }}
    >
      <div className="flex-1">
        <div className="flex items-center gap-3">
          <h4 className="font-display font-600 text-base">{item.name}</h4>
          {item.popular && (
            <span
              className="label px-2 py-0.5 rounded-sm"
              style={{
                fontSize: '9px',
                backgroundColor: 'var(--color-gold-muted)',
                color: 'var(--color-gold)',
              }}
            >
              Popular
            </span>
          )}
        </div>
        <p className="text-[15px] mt-1.5 leading-relaxed" style={{ color: 'var(--color-smoke)' }}>
          {item.description}
        </p>
      </div>
      <div className="text-right flex-shrink-0">
        <span className="font-display font-700">
          ${typeof item.price === 'number' ? item.price.toFixed(2) : item.price}
        </span>
      </div>
    </div>
  );
}
