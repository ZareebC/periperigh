'use client';

import { useEffect, useRef } from 'react';
import { trackMenuView } from '@/lib/analytics';

interface MenuViewTrackerProps {
  locationId: string;
  children: React.ReactNode;
}

export default function MenuViewTracker({ locationId, children }: MenuViewTrackerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const tracked = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !tracked.current) {
          tracked.current = true;
          trackMenuView(locationId);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [locationId]);

  return <div ref={ref}>{children}</div>;
}
