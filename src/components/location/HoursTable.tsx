import type { LocationHours } from '@/data/locations';

interface HoursTableProps {
  hours: LocationHours[];
}

export default function HoursTable({ hours }: HoursTableProps) {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <div className="space-y-1">
      <h4 className="text-sm font-semibold text-gray-900 mb-2">Hours</h4>
      {hours.map((h) => (
        <div
          key={h.day}
          className={`flex justify-between text-sm py-1 px-2 rounded ${
            h.day === today ? 'bg-red-50 text-red-700 font-medium' : 'text-gray-600'
          }`}
        >
          <span>{h.day}</span>
          <span>{h.closed ? 'Closed' : `${h.open} – ${h.close}`}</span>
        </div>
      ))}
    </div>
  );
}
