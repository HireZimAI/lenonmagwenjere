import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { site, externalSites } from '@/data/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Lenon Magwenjere — Entrepreneur, Strategic Advisor, Author',
    template: '%s · Lenon Magwenjere',
  },
  description: site.shortBio,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: site.name,
    title: 'Lenon Magwenjere — Entrepreneur, Strategic Advisor, Author',
    description: site.shortBio,
    images: [{ url: '/og-default.png', width: 1200, height: 630 }], // [ADD SOCIAL SHARING IMAGE]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lenon Magwenjere',
    description: site.shortBio,
    images: ['/og-default.png'],
  },
  robots: { index: true, follow: true },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Lenon Magwenjere',
  url: site.url,
  jobTitle: 'Entrepreneur and Strategic Advisor',
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Strategic Advisor',
    skills:
      'Opportunity identification, business development, risk management, systems execution',
  },
  description: site.shortBio,
  knowsAbout: [
    'AI strategy',
    'AI governance',
    'Enterprise risk management',
    'Digital transformation',
    'Business process outsourcing',
    'Operating models',
    'Business development',
    'Client advisory',
  ],
  worksFor: [
    { '@type': 'Organization', name: 'HireZim AI', url: externalSites.hirezim },
    { '@type': 'Organization', name: 'Veneka Group' },
  ],
  affiliation: { '@type': 'CollegeOrUniversity', name: 'NOLA College' },
  // Only conferred qualifications. The IMM MPhil is still in progress, so it is
  // deliberately absent here — alumniOf asserts a completed relationship.
  alumniOf: [{ '@type': 'CollegeOrUniversity', name: 'University of South Africa' }],
  image: `${site.url}/lenon-portrait.jpg`,
  sameAs: [], // [ADD SOCIAL PROFILE URLS]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/InstrumentSerif-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Inter-Variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/icon.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
