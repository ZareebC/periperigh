'use client';

import { type ReactNode } from 'react';
import { trackEvent } from '@/lib/analytics';

interface TrackedLinkProps {
  href: string;
  eventName: string;
  eventParams?: Record<string, string | number>;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  target?: string;
  rel?: string;
}

export default function TrackedLink({
  href,
  eventName,
  eventParams,
  children,
  className,
  style,
  target,
  rel,
}: TrackedLinkProps) {
  return (
    <a
      href={href}
      className={className}
      style={style}
      target={target}
      rel={rel}
      onClick={() => trackEvent(eventName, eventParams)}
    >
      {children}
    </a>
  );
}

/** Phone link with tap tracking */
export function TrackedPhone({
  phone,
  locationId,
  children,
  className,
  style,
}: {
  phone: string;
  locationId: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <a
      href={`tel:${phone}`}
      className={className}
      style={style}
      onClick={() => trackEvent('phone_tap', { location: locationId })}
    >
      {children}
    </a>
  );
}

/** Order platform link with click tracking */
export function TrackedOrderLink({
  href,
  platform,
  locationId,
  children,
  className,
  style,
}: {
  href: string;
  platform: string;
  locationId: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
      onClick={() => trackEvent('order_click', { platform, location: locationId })}
    >
      {children}
    </a>
  );
}

/** Directions link with click tracking */
export function TrackedDirectionsLink({
  href,
  locationId,
  children,
  className,
  style,
}: {
  href: string;
  locationId: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
      onClick={() => trackEvent('directions_click', { location: locationId })}
    >
      {children}
    </a>
  );
}
