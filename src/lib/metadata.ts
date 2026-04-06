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
  const fullTitle =
    path === '/' ? `${siteConfig.name} | ${siteConfig.tagline}` : `${title} | ${siteConfig.name}`;

  const metadata: Metadata = {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      type: 'website',
      locale: 'en_US',
      ...(ogImage && { images: [{ url: ogImage, width: 1200, height: 630 }] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
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
