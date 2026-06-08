import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://www.stxaviertimber.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'St. Xavier Timber | Kiln Drying & Wood Preservation Sri Lanka',
    template: '%s | St. Xavier Timber',
  },
  description:
    'Industrial kiln drying and vacuum pressure impregnation (VPI) services in Sri Lanka. IPPC registered, ISPM 15 compliant. Est. 1955, Daluwakotuwa, Kochchikade.',
  keywords: [
    'kiln drying Sri Lanka',
    'wood treatment Sri Lanka',
    'ISPM 15 heat treatment Sri Lanka',
    'vacuum pressure impregnation Sri Lanka',
    'timber preservation Sri Lanka',
    'wood impregnation Sri Lanka',
    'VPI treatment Sri Lanka',
    'boron treatment timber',
    'IPPC registered Sri Lanka',
    'St. Xavier Timber',
    'Daluwakotuwa timber',
    'Kochchikade timber',
    'timber treatment Negombo',
    'export pallet treatment',
    'ISPM 15 pallet Sri Lanka',
    'CeyPall',
    'wooden pallets Sri Lanka',
    'pallet manufacturer Sri Lanka',
    'ISPM 15 wooden pallet Sri Lanka',
    'export pallets Sri Lanka',
    'heat treated pallets Sri Lanka',
    'pallet manufacturing Daluwakotuwa',
    'wooden crates Sri Lanka',
  ],
  authors: [{ name: 'St. Xavier Timber' }],
  creator: 'St. Xavier Timber',
  publisher: 'St. Xavier Timber',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'St. Xavier Timber | Kiln Drying & Wood Preservation Sri Lanka',
    description:
      'Industrial kiln drying and VPI timber treatment. IPPC registered, ISPM 15 certified. Est. 1955. Serving construction, furniture, and export industries island-wide.',
    url: siteUrl,
    siteName: 'St. Xavier Timber',
    locale: 'en_LK',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'St. Xavier Timber — Kiln Drying & VPI Treatment Sri Lanka',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'St. Xavier Timber | Kiln Drying & Wood Preservation Sri Lanka',
    description:
      'Industrial kiln drying and VPI timber treatment. IPPC registered, ISPM 15 certified. Est. 1955.',
    images: ['/og-image.png'],
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
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1088, Colombo Road',
    addressLocality: 'Daluwakotuwa, Kochchikade',
    addressRegion: 'Western Province',
    addressCountry: 'LK',
  },
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
            'Full-penetration Boron Borax treatment at 10 bar (145 PSI) for pest and fungal protection. 10-year warranty against pest contamination.',
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
  subOrganization: {
    '@type': 'Organization',
    name: 'CeyPall',
    description:
      'Pallet manufacturing arm of St. Xavier Timber. Produces ISPM 15 certified, IPPC registered wooden pallets from kiln-dried and VPI-treated timber for export and local use.',
    url: 'https://ceypall.com',
    foundingDate: '1955',
    parentOrganization: {
      '@type': 'Organization',
      name: 'St. Xavier Timber',
      url: siteUrl,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Pallet Products',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'ISPM 15 Certified Export Pallets',
            description:
              'Heat treated wooden pallets compliant with ISPM 15 phytosanitary standards. IPPC registered, accepted in 180+ countries for international export.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'VPI Treated Pallets',
            description:
              'Vacuum pressure impregnated pallets for pest and fungal protection. Made from St. Xavier kiln-dried timber.',
          },
        },
      ],
    },
  },
};

const ceypallSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://ceypall.com',
  name: 'CeyPall',
  alternateName: 'CeyPall Pallets',
  description:
    'Sri Lanka\'s IPPC registered pallet manufacturer. ISPM 15 certified wooden pallets made from kiln-dried and VPI-treated timber. Sister company of St. Xavier Timber, Est. 1955.',
  url: 'https://ceypall.com',
  parentOrganization: {
    '@type': 'Organization',
    name: 'St. Xavier Timber',
    url: siteUrl,
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1088, Colombo Road',
    addressLocality: 'Daluwakotuwa, Kochchikade',
    addressRegion: 'Western Province',
    addressCountry: 'LK',
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ceypallSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
