'use client';

import { useState, type FormEvent } from 'react';
import { trackContactFormSubmit } from '@/lib/analytics';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      location: formData.get('location') as string,
      message: formData.get('message') as string,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || 'Something went wrong');
      }

      setStatus('success');
      trackContactFormSubmit();
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  const inputStyle = {
    backgroundColor: 'var(--color-cream)',
    border: '1px solid rgba(28,24,20,0.12)',
    color: 'var(--color-char)',
    fontFamily: 'var(--font-body)',
    borderRadius: '4px',
  };

  if (status === 'success') {
    return (
      <div
        className="p-10 rounded-sm text-center"
        style={{ backgroundColor: 'var(--color-cream-dark)', border: '1px solid rgba(28,24,20,0.08)' }}
      >
        <div className="label mb-3" style={{ color: 'var(--color-ember)' }}>Sent</div>
        <h3 className="font-display font-700 text-xl mb-3">Message received.</h3>
        <p style={{ color: 'var(--color-smoke)' }}>
          Thank you for reaching out. We&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 font-display text-sm font-600 transition-colors"
          style={{ color: 'var(--color-ember)' }}
        >
          Send another message →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="label block mb-2" style={{ color: 'var(--color-smoke)', fontSize: '11px' }}>
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 outline-none transition-all focus:ring-2"
            style={{ ...inputStyle, '--tw-ring-color': 'var(--color-ember)' } as React.CSSProperties}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="label block mb-2" style={{ color: 'var(--color-smoke)', fontSize: '11px' }}>
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 outline-none transition-all focus:ring-2"
            style={{ ...inputStyle, '--tw-ring-color': 'var(--color-ember)' } as React.CSSProperties}
            placeholder="you@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="label block mb-2" style={{ color: 'var(--color-smoke)', fontSize: '11px' }}>
            Phone (optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 outline-none transition-all focus:ring-2"
            style={{ ...inputStyle, '--tw-ring-color': 'var(--color-ember)' } as React.CSSProperties}
            placeholder="(555) 555-5555"
          />
        </div>
        <div>
          <label htmlFor="location" className="label block mb-2" style={{ color: 'var(--color-smoke)', fontSize: '11px' }}>
            Location
          </label>
          <select
            id="location"
            name="location"
            className="w-full px-4 py-3 outline-none transition-all focus:ring-2"
            style={{ ...inputStyle, '--tw-ring-color': 'var(--color-ember)' } as React.CSSProperties}
          >
            <option value="">Select a location</option>
            <option value="brooklyn">Brooklyn (Bed-Stuy)</option>
            <option value="bethpage">Bethpage (Long Island)</option>
            <option value="both">Both / Either</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="label block mb-2" style={{ color: 'var(--color-smoke)', fontSize: '11px' }}>
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 outline-none transition-all focus:ring-2 resize-y"
          style={{ ...inputStyle, '--tw-ring-color': 'var(--color-ember)' } as React.CSSProperties}
          placeholder="Catering inquiries, questions, feedback..."
        />
      </div>

      {status === 'error' && (
        <div
          className="p-4 rounded-sm text-sm"
          style={{ backgroundColor: 'rgba(217,91,43,0.08)', color: 'var(--color-ember-dark)', border: '1px solid rgba(217,91,43,0.2)' }}
        >
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-ember disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
