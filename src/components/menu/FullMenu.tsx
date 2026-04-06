import { menuCategories, heatLevels } from '@/data/menu';
import MenuSection from './MenuSection';

export default function FullMenu() {
  return (
    <div>
      {/* Heat Levels */}
      <section className="mb-12 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 md:p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Peri Peri Heat Levels</h3>
        <p className="text-gray-600 mb-5">
          Choose your heat level with any flame-grilled chicken. From zero spice to maximum fire — every level is packed with flavor.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {heatLevels.map((level, i) => (
            <div key={level.name} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-xs font-bold text-red-600">
                {i + 1}
              </div>
              <div>
                <span className="font-semibold text-gray-900 text-sm">{level.name}</span>
                <p className="text-xs text-gray-500 mt-0.5">{level.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Menu Categories */}
      <div className="space-y-12">
        {menuCategories.map((category) => (
          <MenuSection key={category.id} category={category} />
        ))}
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-gray-400 mt-8 text-center">
        Menu items, prices, and availability may vary by location. For the most current menu and pricing, please order online or call the restaurant.
      </p>
    </div>
  );
}
