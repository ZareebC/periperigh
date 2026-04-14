import JsonLd from './JsonLd';
import { siteConfig } from '@/data/siteConfig';
import type { BlogPostMeta } from '@/data/blog';

interface ArticleSchemaProps {
  post: BlogPostMeta;
}

export default function ArticleSchema({ post }: ArticleSchemaProps) {
  const url = `${siteConfig.domain}/blog/${post.slug}`;

  const authorSchema =
    post.author.role === 'Team'
      ? {
          '@type': 'Organization' as const,
          name: post.author.name,
          url: siteConfig.domain,
        }
      : {
          '@type': 'Person' as const,
          name: post.author.name,
        };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.featuredImage.src.startsWith('/')
      ? `${siteConfig.domain}${post.featuredImage.src}`
      : post.featuredImage.src,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: authorSchema,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.domain}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    url,
  };

  return <JsonLd data={schema} />;
}
