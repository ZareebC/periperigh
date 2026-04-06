import Link from 'next/link';
import type { Location } from '@/data/locations';
import HoursTable from './HoursTable';

interface LocationCardProps {
  location: Location;
  showHours?: boolean;
  showMap?: boolean;
}

export default function LocationCard({ location, showHours = true, showMap = false }: LocationCardProps) {
  return (
    <div
      className="rounded-sm p-8 md:p-10 transition-all"
      style={{
        backgroundColor: 'var(--color-cream)',
        border: '1px solid rgba(28,24,20,0.08)',
      }}
    >
      <div className="label mb-3" style={{ color: 'var(--color-ember)' }}>
        {location.neighborhood}
      </div>
      <h3 className="font-display font-700 text-2xl mb-4">{location.shortName}</h3>

      <address className="not-italic space-y-1 mb-5" style={{ color: 'var(--color-smoke)' }}>
        <p>{location.address.street}</p>
        <p>{location.address.city}, {location.address.state} {location.address.zip}</p>
        <p className="pt-1">
          <a
            href={`tel:${location.phone.e164}`}
            className="font-display font-600 transition-colors"
            style={{ color: 'var(--color-ember)' }}
          >
            {location.phone.formatted}
          </a>
        </p>
      </address>

      {showHours && <HoursTable hours={location.hours} />}

      {showMap && (
        <div className="mt-6 rounded-sm overflow-hidden">
          <iframe
            src={`https://maps.google.com/maps?q=${encodeURIComponent(location.address.full)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            width="100%"
            height="220"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map of ${location.name}`}
          />
        </div>
      )}

      <div className="flex flex-wrap gap-3 mt-6">
        <Link href={`/${location.slug}`} className="btn-ember !py-2.5 !px-5 !text-sm">
          View Menu
        </Link>
        <a
          href={location.googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline !py-2.5 !px-5 !text-sm"
        >
          Directions
        </a>
      </div>
    </div>
  );
}
