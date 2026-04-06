import type { Location } from '@/data/locations';

interface GoogleMapProps {
  location: Location;
  height?: string;
}

export default function GoogleMap({ location, height = '400px' }: GoogleMapProps) {
  const encodedAddress = encodeURIComponent(location.address.full);
  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=&q=${encodedAddress}`;
  // Fallback: use the simple iframe approach that doesn't need an API key
  const simpleEmbedUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100">
      <iframe
        src={simpleEmbedUrl}
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Google Maps showing ${location.name} at ${location.address.full}`}
      />
    </div>
  );
}
