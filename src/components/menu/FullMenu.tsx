import { menuCategories, heatLevels } from '@/data/menu';
import MenuSection from './MenuSection';

export default function FullMenu() {
  return (
    <div>
      {/* Heat Levels */}
      <section
        className="mb-14 p-8 md:p-10 rounded-sm"
        style={{ backgroundColor: 'var(--color-char)', color: 'var(--color-cream)' }}
      >
        <div className="label mb-3" style={{ color: 'var(--color-ember-light)' }}>Choose your heat</div>
        <h3 className="font-display font-700 text-2xl mb-2" style={{ color: 'var(--color-cream)' }}>
          Peri Peri Heat Levels
        </h3>
        <p className="mb-6" style={{ color: 'var(--color-smoke-light)' }}>
          Choose your heat level with any flame-grilled chicken. Every level is packed with flavor.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {heatLevels.map((level, i) => (
            <div
              key={level.name}
              className="flex items-center gap-3 p-3 rounded-sm"
              style={{ backgroundColor: 'var(--color-char-warm)' }}
            >
              <span
                className="font-display font-800 text-xl flex-shrink-0 w-8 text-center"
                style={{ color: `hsl(${20 - i * 3}, ${70 + i * 4}%, ${55 - i * 4}%)` }}
              >
                {i + 1}
              </span>
              <span className="font-display font-500 text-sm" style={{ color: 'var(--color-cream)' }}>
                {level.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Menu Categories */}
      <div className="space-y-14">
        {menuCategories.map((category) => (
          <MenuSection key={category.id} category={category} />
        ))}
      </div>

      <p className="label mt-10 text-center" style={{ color: 'var(--color-smoke-light)', fontSize: '10px' }}>
        Menu items, prices, and availability may vary by location.
      </p>
    </div>
  );
}
