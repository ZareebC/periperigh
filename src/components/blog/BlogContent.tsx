import type { ReactNode } from 'react';

interface BlogContentProps {
  children: ReactNode;
}

export default function BlogContent({ children }: BlogContentProps) {
  return <div className="blog-prose">{children}</div>;
}
