import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import Image from 'next/image';
import BlogCTA from '@/components/blog/BlogCTA';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,

    h2: (props) => (
      <h2
        className="font-display font-800 text-2xl md:text-3xl tracking-tight mt-12 mb-4"
        style={{ color: 'var(--color-char)' }}
        {...props}
      />
    ),

    h3: (props) => (
      <h3
        className="font-display font-700 text-xl md:text-2xl tracking-tight mt-10 mb-3"
        style={{ color: 'var(--color-char)' }}
        {...props}
      />
    ),

    p: (props) => (
      <p
        className="text-lg leading-relaxed mb-6"
        style={{ color: 'var(--color-char-medium)' }}
        {...props}
      />
    ),

    a: ({ href, children, ...props }) => {
      if (href?.startsWith('/')) {
        return (
          <Link
            href={href}
            className="underline decoration-1 underline-offset-2 transition-colors"
            style={{ color: 'var(--color-ember)' }}
            {...props}
          >
            {children}
          </Link>
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-1 underline-offset-2 transition-colors"
          style={{ color: 'var(--color-ember)' }}
          {...props}
        >
          {children}
        </a>
      );
    },

    ul: (props) => (
      <ul
        className="list-disc pl-6 mb-6 space-y-2 text-lg"
        style={{ color: 'var(--color-char-medium)' }}
        {...props}
      />
    ),

    ol: (props) => (
      <ol
        className="list-decimal pl-6 mb-6 space-y-2 text-lg"
        style={{ color: 'var(--color-char-medium)' }}
        {...props}
      />
    ),

    li: (props) => <li className="leading-relaxed" {...props} />,

    blockquote: (props) => (
      <blockquote
        className="border-l-4 pl-6 my-8 italic"
        style={{
          borderColor: 'var(--color-ember)',
          color: 'var(--color-smoke)',
        }}
        {...props}
      />
    ),

    strong: (props) => (
      <strong className="font-600" style={{ color: 'var(--color-char)' }} {...props} />
    ),

    hr: () => (
      <hr className="my-10 border-0 h-px" style={{ background: 'var(--color-cream-dark)' }} />
    ),

    img: ({ src, alt, ...props }) => {
      if (!src) return null;
      return (
        <figure className="my-8">
          <Image
            src={src}
            alt={alt || ''}
            width={800}
            height={450}
            className="rounded-lg w-full"
            sizes="(max-width: 900px) 100vw, 800px"
            {...props}
          />
          {alt && (
            <figcaption
              className="text-sm mt-2 text-center"
              style={{ color: 'var(--color-smoke-light)' }}
            >
              {alt}
            </figcaption>
          )}
        </figure>
      );
    },

    table: (props) => (
      <div className="overflow-x-auto my-8">
        <table className="w-full text-left border-collapse" {...props} />
      </div>
    ),

    th: (props) => (
      <th
        className="font-display font-600 text-sm uppercase tracking-wider py-3 px-4 border-b-2"
        style={{
          color: 'var(--color-char)',
          borderColor: 'var(--color-ember)',
        }}
        {...props}
      />
    ),

    td: (props) => (
      <td
        className="py-3 px-4 border-b text-base"
        style={{
          color: 'var(--color-char-medium)',
          borderColor: 'var(--color-cream-dark)',
        }}
        {...props}
      />
    ),

    // Custom components available in MDX
    BlogCTA,
  };
}
