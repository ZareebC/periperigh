import { mozzPlanks } from '@/data/menu';

export default function MozzPlanks() {
  return (
    <section id="peri-mozz-planks" className="scroll-mt-24">
      <div className="flex items-center gap-4 mb-2">
        <h3 className="font-display font-700 text-2xl">Peri Mozz Planks</h3>
        <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(28,24,20,0.08)' }} />
      </div>
      <p className="mb-6" style={{ color: 'var(--color-smoke)' }}>
        Crispy mozzarella planks with an insane cheese pull. Perfect for dipping in ranch or hot honey.
      </p>

      {/* Sizes */}
      <div className="flex flex-wrap gap-3 mb-6">
        {mozzPlanks.sizes.map((size) => (
          <div
            key={size.pieces}
            className="flex items-center gap-4 px-5 py-3 rounded-sm"
            style={{ backgroundColor: 'var(--color-cream-dark)', border: '1px solid rgba(28,24,20,0.06)' }}
          >
            <span className="font-display font-700 text-lg">{size.pieces} pc</span>
            <span className="font-display font-700" style={{ color: 'var(--color-ember)' }}>
              ${size.price.toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      {/* Flavors */}
      <div className="label mb-3" style={{ color: 'var(--color-gold)', fontSize: '10px' }}>
        Choose your flavor
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {mozzPlanks.flavors.map((flavor) => (
          <div
            key={flavor.name}
            className="px-5 py-4 rounded-sm"
            style={{ border: '1px solid rgba(28,24,20,0.08)' }}
          >
            <span className="font-display font-600 text-sm block">{flavor.name}</span>
            <span className="text-[13px] mt-1 block" style={{ color: 'var(--color-smoke)' }}>
              {flavor.description}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
