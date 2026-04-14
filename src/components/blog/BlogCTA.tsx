import Link from 'next/link';

interface BlogCTAProps {
  text: string;
  href: string;
  label: string;
}

export default function BlogCTA({ text, href, label }: BlogCTAProps) {
  return (
    <div
      className="my-8 p-6 rounded-lg text-center"
      style={{ background: 'var(--color-cream-dark)' }}
    >
      <p className="text-lg font-500 mb-4" style={{ color: 'var(--color-char)' }}>
        {text}
      </p>
      <Link href={href} className="btn-ember inline-block">
        {label}
      </Link>
    </div>
  );
}
