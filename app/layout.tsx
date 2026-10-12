import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { site, externalSites } from '@/data/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Lenon Magwenjere - Entrepreneur, Strategic Advisor, Author',
    template: '%s · Lenon Magwenjere',
  },
  description: site.shortBio,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: site.name,
    title: 'Lenon Magwenjere - Entrepreneur, Strategic Advisor, Author',
    description: site.shortBio,
    images: [{ url: '/og-default.png', width: 1200, height: 630 }], // [ADD SOCIAL SHARING IMAGE]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lenon Magwenjere',
    description: site.shortBio,
    images: ['/og-default.png'],
  },
  robots: process.env.NEXT_PUBLIC_PREVIEW_MODE === 'true' ? { index: false, follow: false } : { index: true, follow: true },
};

const personSchema = {'@context':'https://schema.org','@type':'Person',name:site.name,url:site.url,jobTitle:'Entrepreneur, author, and AI builder',description:site.shortBio,knowsAbout:['Practical AI','AI literacy','Business growth','AI governance','Risk management'],worksFor:[{'@type':'Organization',name:'HireZim AI',url:externalSites.hirezim}],image:`${site.url}/lenon-portrait.jpg`};

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
        {process.env.NEXT_PUBLIC_PREVIEW_MODE === 'true' && <div className="bg-ink px-6 py-3 text-center text-sm text-paper">Review preview. Enquiry forms do not send.</div>}
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
