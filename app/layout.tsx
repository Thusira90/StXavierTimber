import type { Metadata } from 'next';
import { POSTAL_ADDRESS } from '@/lib/company';
import { Analytics } from '@/components/Analytics';
import { ConversionTracker } from '@/components/ConversionTracker';
import './globals.css';

const siteUrl = 'https://www.stxaviertimber.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Timber Treatment Sri Lanka | Kiln Drying & VPI Since 1955',
    template: '%s | St. Xavier Timber',
  },
  description:
    'Industrial timber treatment in Sri Lanka since 1955 — kiln drying, vacuum pressure impregnation (VPI), and ISPM 15 heat treatment. IPPC registered.',
  keywords: [
    'kiln drying Sri Lanka',
    'timber seasoning Sri Lanka',
    'wood seasoning Sri Lanka',
    'kiln seasoning timber',
    'wood treatment Sri Lanka',
    'ISPM 15 heat treatment Sri Lanka',
    'vacuum pressure impregnation Sri Lanka',
    'timber preservation Sri Lanka',
    'wood impregnation Sri Lanka',
    'VPI treatment Sri Lanka',
    'boron treatment timber',
    'boron borax timber treatment',
    'IPPC registered Sri Lanka',
    'St. Xavier Timber',
    'Daluwakotuwa timber',
    'Kochchikade timber',
    'timber treatment Negombo',
    'rubberwood treatment Sri Lanka',
    'timber drying Sri Lanka',
    'timber treatment facility Sri Lanka',
    'termite treatment timber Sri Lanka',
    'export timber treatment Sri Lanka',
  ],
  authors: [{ name: 'St. Xavier Timber' }],
  creator: 'St. Xavier Timber',
  publisher: 'St. Xavier Timber',
  openGraph: {
    title: 'Timber Treatment Sri Lanka | Kiln Drying & VPI | St. Xavier Timber',
    description:
      'Industrial kiln drying and VPI timber treatment. IPPC registered, ISPM 15 certified. Est. 1955. Serving construction, furniture, and export industries island-wide.',
    siteName: 'St. Xavier Timber',
    locale: 'en_LK',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'St. Xavier Timber — Kiln Drying & VPI Treatment Sri Lanka',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Timber Treatment Sri Lanka | Kiln Drying & VPI | St. Xavier Timber',
    description:
      'Industrial kiln drying and VPI timber treatment. IPPC registered, ISPM 15 certified. Est. 1955.',
    images: ['/og-image.jpg'],
  },
  verification: {
    yandex: '65dc4f5fab5a3520',
    other: {
      'msvalidate.01': '8007F79D9D0F89E8137D0D777B9BD4C3',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': siteUrl,
  name: 'St. Xavier Timber',
  description:
    'Industrial kiln drying and vacuum pressure impregnation (VPI) timber treatment services in Sri Lanka. IPPC registered and ISPM 15 certified. Est. 1955.',
  url: siteUrl,
  telephone: ['+94312277752', '+94714711417', '+94769494944'],
  email: 'info@stxaviertimber.com',
  foundingDate: '1955',
  address: POSTAL_ADDRESS,
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 7.3553,
    longitude: 79.8638,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:30',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '08:30',
      closes: '12:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Timber Treatment Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Kiln Drying',
          description:
            'Industrial automated kiln drying to 12–15% moisture content for construction, furniture, and export timber.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Vacuum Pressure Impregnation (VPI)',
          description:
            'Deep-penetration 5% borate preservative treatment at 10 bar (145 PSI) for pest and fungal protection, with retention verified per species and dimension. 10-year warranty against pest contamination.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'ISPM 15 Heat Treatment',
          description:
            'IPPC registered heat treatment for wooden packaging and pallets. Compliant with ISPM 15 phytosanitary standards for international export.',
        },
      },
    ],
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=100054793123041',
    'https://www.instagram.com/stxaviertimber',
    'https://www.linkedin.com/company/st-xavier-timber-daluwakotuwa/',
  ],
};

const ceypallSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.ceypall.com',
  name: 'CeyPall',
  alternateName: 'CeyPall Pallets',
  description:
    'Sri Lanka\'s IPPC registered pallet manufacturer. ISPM 15 certified wooden pallets made from kiln-dried and VPI-treated timber. Sister company of St. Xavier Timber; incorporated 2025, built on the same 1955 timber legacy.',
  url: 'https://www.ceypall.com',
  foundingDate: '2025-10-03',
  address: POSTAL_ADDRESS,
  knowsAbout: [
    'ISPM 15 wooden pallets',
    'IPPC heat treatment',
    'export pallet manufacturing',
    'wooden packaging Sri Lanka',
    'phytosanitary compliance',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* GA4 — gated to the production host only (see components/Analytics.tsx) */}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ceypallSchema) }}
        />
      </head>
      <body>
        <ConversionTracker />
        {children}

        <a
          href="https://wa.me/94714711417?text=Hi%20St.%20Xavier%20Timber%2C%20I%27d%20like%20a%20timber%20treatment%20quote.%20What%20information%20do%20you%20need%20from%20me%3F"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          style={{
            position: 'fixed',
            bottom: '1.5rem',
            right: '1.5rem',
            zIndex: 50,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: '#25D366',
            color: '#fff',
            fontSize: '0.875rem',
            fontWeight: 600,
            padding: '0.75rem 1rem',
            borderRadius: '50px',
            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.2)',
            textDecoration: 'none',
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" style={{ flexShrink: 0 }}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.526 5.836L.057 23.215a.75.75 0 00.916.927l5.596-1.451A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.71 9.71 0 01-4.953-1.355l-.355-.211-3.655.948.977-3.533-.232-.366A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
          </svg>
          Chat with us
        </a>
      </body>
    </html>
  );
}
