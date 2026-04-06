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
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
      <h3 className="text-xl font-bold text-gray-900 mb-1">{location.shortName}</h3>
      <address className="not-italic text-gray-600 space-y-1 mb-4">
        <p>{location.address.street}</p>
        <p>{location.address.city}, {location.address.state} {location.address.zip}</p>
        <p>
          <a
            href={`tel:${location.phone.e164}`}
            className="text-red-600 font-semibold hover:text-red-700 transition-colors"
          >
            {location.phone.formatted}
          </a>
        </p>
      </address>

      {showHours && <HoursTable hours={location.hours} />}

      {showMap && (
        <div className="mt-4 rounded-lg overflow-hidden">
          <iframe
            src={location.googleMapsEmbed}
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map of ${location.name}`}
          />
        </div>
      )}

      <div className="flex flex-wrap gap-3 mt-5">
        <Link
          href={`/${location.slug}`}
          className="inline-flex items-center px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-lg hover:bg-red-700 transition-colors"
        >
          View Menu
        </Link>
        <a
          href={location.googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
        >
          Get Directions
        </a>
      </div>
    </div>
  );
}
