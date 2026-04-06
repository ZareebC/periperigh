import Link from 'next/link';
import { mainNav } from '@/data/navigation';
import MobileNav from './MobileNav';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b" style={{ backgroundColor: 'var(--color-cream)', borderColor: 'rgba(28,24,20,0.08)' }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo — distinctive type treatment */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Ember dot */}
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--color-ember)' }} />
            <div className="font-display">
              <span className="text-[22px] font-800 tracking-tight" style={{ color: 'var(--color-char)' }}>
                PERI PERI
              </span>
              <span className="text-[22px] font-400 tracking-tight ml-1.5" style={{ color: 'var(--color-smoke)' }}>
                Grill House
              </span>
            </div>
          </Link>

          {/* Desktop Nav — understated, editorial */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {mainNav.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <button
                    className="font-display text-[13px] font-600 uppercase tracking-[0.08em] py-2 transition-colors"
                    style={{ color: 'var(--color-smoke)' }}
                  >
                    {item.label}
                    <svg className="inline-block w-3 h-3 ml-1 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-3 min-w-[220px] rounded-sm shadow-xl border" style={{ backgroundColor: 'var(--color-cream)', borderColor: 'rgba(28,24,20,0.08)' }}>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-2.5 font-display text-[13px] font-500 transition-colors hover:pl-6"
                          style={{ color: 'var(--color-char)' }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-display text-[13px] font-600 uppercase tracking-[0.08em] py-2 transition-colors hover:opacity-100"
                  style={{ color: 'var(--color-smoke)' }}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-4">
            <Link
              href="/order-online"
              className="hidden md:inline-flex btn-ember !py-2.5 !px-6 !text-[13px] !tracking-[0.04em] !uppercase"
            >
              Order Now
            </Link>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
