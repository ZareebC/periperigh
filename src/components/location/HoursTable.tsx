import type { LocationHours } from '@/data/locations';

interface HoursTableProps {
  hours: LocationHours[];
}

export default function HoursTable({ hours }: HoursTableProps) {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <div>
      <h4 className="label mb-3" style={{ color: 'var(--color-smoke)' }}>Hours</h4>
      <div className="space-y-0">
        {hours.map((h) => (
          <div
            key={h.day}
            className="flex justify-between text-sm py-1.5 px-3 -mx-3 rounded-sm"
            style={{
              backgroundColor: h.day === today ? 'var(--color-gold-muted)' : 'transparent',
              color: h.day === today ? 'var(--color-char)' : 'var(--color-smoke)',
              fontWeight: h.day === today ? 600 : 400,
              fontFamily: h.day === today ? 'var(--font-display)' : 'inherit',
            }}
          >
            <span>{h.day}</span>
            <span>{h.closed ? 'Closed' : `${h.open} – ${h.close}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
