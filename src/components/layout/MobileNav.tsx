'use client';

import { useState } from 'react';
import Link from 'next/link';
import { mainNav } from '@/data/navigation';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 transition-opacity"
        style={{ color: 'var(--color-char)' }}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h10" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 top-[72px] z-50"
          style={{ backgroundColor: 'var(--color-char)' }}
        >
          <nav className="flex flex-col px-8 py-10 gap-2" aria-label="Mobile navigation">
            {mainNav.map((item) =>
              item.children ? (
                <div key={item.label} className="py-3">
                  <span
                    className="label block mb-3"
                    style={{ color: 'var(--color-smoke-light)' }}
                  >
                    {item.label}
                  </span>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 pl-4 font-display text-xl font-600 transition-colors"
                      style={{ color: 'var(--color-cream)', borderLeft: '2px solid var(--color-ember)' }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 font-display text-2xl font-700"
                  style={{ color: 'var(--color-cream)' }}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="mt-8 pt-8" style={{ borderTop: '1px solid var(--color-char-medium)' }}>
              <Link
                href="/order-online"
                onClick={() => setIsOpen(false)}
                className="btn-ember w-full justify-center !text-lg"
              >
                Order Now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
