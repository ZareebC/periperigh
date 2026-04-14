import type { Metadata } from 'next';
import { siteConfig } from '@/data/siteConfig';

interface BuildMetadataOptions {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  geo?: {
    region: string;
    placename: string;
    latitude: number;
    longitude: number;
  };
}

export function buildMetadata({
  title,
  description,
  path,
  ogImage,
  geo,
}: BuildMetadataOptions): Metadata {
  const url = `${siteConfig.domain}${path}`;
  // Title branding is handled by layout.tsx template (`%s | Brand`).
  // Pages only pass the page-specific part; the homepage uses the default title from layout.
  const pageTitle = path === '/' ? `${siteConfig.name} | ${siteConfig.tagline}` : title;
  // OG/Twitter don't go through layout template, so they need the full branded title
  const ogTitle = path === '/' ? `${siteConfig.name} | ${siteConfig.tagline}` : `${title} | ${siteConfig.name}`;

  const metadata: Metadata = {
    title: pageTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: siteConfig.name,
      type: 'website',
      locale: 'en_US',
      ...(ogImage && { images: [{ url: ogImage, width: 1200, height: 630 }] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
    },
    other: {},
  };

  // Add geo meta tags for location pages
  if (geo && metadata.other) {
    metadata.other['geo.region'] = geo.region;
    metadata.other['geo.placename'] = geo.placename;
    metadata.other['geo.position'] = `${geo.latitude};${geo.longitude}`;
    metadata.other['ICBM'] = `${geo.latitude}, ${geo.longitude}`;
  }

  return metadata;
}
