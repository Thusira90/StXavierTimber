import type { Metadata } from 'next';
import { POSTAL_ADDRESS } from '@/lib/company';
import Navbar from '@/components/Navbar';
import { Contact, Footer } from '@/components/Sections';
import styles from '../timber-treatment-negombo/negombo.module.css';

const BASE = 'https://www.stxaviertimber.com';

export const metadata: Metadata = {
  title: 'Contact Us | St. Xavier Timber — Get a Timber Treatment Quote',
  description:
    'Contact St. Xavier Timber for kiln drying, VPI, and ISPM 15 heat treatment. Call 031 227 7752, WhatsApp 071 471 1417, or send your timber specs for a quote — usually within a few hours. Daluwakotuwa, Kochchikade. Island-wide.',
  keywords: [
    'contact St. Xavier Timber',
    'timber treatment quote Sri Lanka',
    'kiln drying quote',
    'VPI treatment quote',
    'ISPM 15 quote Sri Lanka',
    'timber treatment contact Negombo',
  ],
  alternates: { canonical: `${BASE}/contact-us` },
  openGraph: {
    title: 'Contact St. Xavier Timber | Get a Timber Treatment Quote',
    description: 'Call 031 227 7752, WhatsApp 071 471 1417, or send your timber specs for a quote. Daluwakotuwa, Kochchikade. Island-wide delivery.',
    url: `${BASE}/contact-us`,
  },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${BASE}/contact-us`,
  url: `${BASE}/contact-us`,
  name: 'Contact St. Xavier Timber',
  description: 'Contact page for St. Xavier Timber — kiln drying, VPI, and ISPM 15 heat treatment in Sri Lanka.',
  mainEntity: {
    '@type': 'LocalBusiness',
    '@id': BASE,
    name: 'St. Xavier Timber',
    telephone: ['+94312277752', '+94714711417', '+94769494944'],
    email: 'info@stxaviertimber.com',
    address: POSTAL_ADDRESS,
    geo: { '@type': 'GeoCoordinates', latitude: 7.3553, longitude: 79.8638 },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:30', closes: '17:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '08:30', closes: '12:00' },
    ],
    areaServed: { '@type': 'Country', name: 'Sri Lanka' },
  },
};

export default function ContactUsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Get a Quote</span>
          <h1 className={styles.h1}>
            Contact<br />
            <em>St. Xavier Timber</em>
          </h1>
          <p className={styles.heroSub}>
            Send us your timber species, dimensions, and quantity — we&apos;ll advise on the right
            treatment and reply with a quote, usually within a few hours. Call, WhatsApp, or use the
            form below.
          </p>
          <div className={styles.heroActions}>
            <a href="tel:+94312277752" className={styles.btnPrimary}>031 227 7752</a>
            <a href="https://wa.me/94714711417" className={styles.btnWa} target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Reuse the homepage contact form + details */}
      <Contact />

      <Footer />
    </>
  );
}
