// ---------------------------------------------------------------------------
// Static MDX import map — one line per post.
// We use explicit imports so webpack/turbopack can statically analyze them.
// Dynamic template-literal imports (import(`.../${slug}.mdx`)) are unreliable.
// ---------------------------------------------------------------------------

import type { ComponentType } from 'react';

type MDXModule = { default: ComponentType };

const mdxModules: Record<string, () => Promise<MDXModule>> = {
  'what-is-peri-peri-chicken': () =>
    import('@/content/blog/what-is-peri-peri-chicken.mdx') as Promise<MDXModule>,
  'nandos-alternative-nyc': () =>
    import('@/content/blog/nandos-alternative-nyc.mdx') as Promise<MDXModule>,
  'is-peri-peri-chicken-halal': () =>
    import('@/content/blog/is-peri-peri-chicken-halal.mdx') as Promise<MDXModule>,
};

export async function getBlogContent(slug: string): Promise<ComponentType | null> {
  const loader = mdxModules[slug];
  if (!loader) return null;
  const mod = await loader();
  return mod.default;
}

export function getAllContentSlugs(): string[] {
  return Object.keys(mdxModules);
}
