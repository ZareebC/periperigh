import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import RestaurantSchema from '@/components/seo/RestaurantSchema';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import AIReferrerTracker from '@/components/analytics/AIReferrerTracker';
import { siteConfig } from '@/data/siteConfig';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.domain),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
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
