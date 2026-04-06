import type { Metadata } from 'next';
import { Syne, Source_Serif_4, JetBrains_Mono, Bebas_Neue } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import RestaurantSchema from '@/components/seo/RestaurantSchema';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import AIReferrerTracker from '@/components/analytics/AIReferrerTracker';
import { siteConfig } from '@/data/siteConfig';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
});

const heroFont = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-hero',
  display: 'swap',
  weight: '400',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.domain),
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${sourceSerif.variable} ${heroFont.variable} ${jetbrainsMono.variable}`}>
      <body>
        <GoogleAnalytics />
        <AIReferrerTracker />
        <RestaurantSchema />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
