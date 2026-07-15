import type { Metadata } from 'next';
import { POSTAL_ADDRESS } from '@/lib/company';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Sections';
import styles from '../timber-treatment-negombo/negombo.module.css';

const BASE = 'https://www.stxaviertimber.com';

export const metadata: Metadata = {
  title: 'Service Areas | Island-wide Timber Treatment — St. Xavier Timber',
  description:
    'St. Xavier Timber serves all of Sri Lanka with kiln drying, VPI, and ISPM 15 heat treatment. Island-wide delivery from our Kochchikade facility. Find your area.',
  keywords: [
    'timber treatment Sri Lanka',
    'island-wide timber treatment',
    'timber treatment near me',
    'kiln drying Sri Lanka delivery',
    'VPI treatment Sri Lanka',
    'timber treatment service areas',
  ],
  alternates: { canonical: `${BASE}/service-areas` },
  openGraph: {
    title: 'Service Areas | St. Xavier Timber',
    description: 'Island-wide kiln drying, VPI, and ISPM 15 heat treatment. Find your area.',
    url: `${BASE}/service-areas`,
  },
};

const REGIONS = [
  {
    href: '/timber-treatment-negombo',
    name: 'Negombo',
    detail: '5 minutes from our facility — Negombo, Katana, Wennappuwa, and surrounds.',
  },
  {
    href: '/timber-treatment-colombo',
    name: 'Colombo',
    detail: 'Serving Colombo city, Dehiwala, Kotte, Moratuwa, Kelaniya, and Wattala.',
  },
  {
    href: '/timber-treatment-gampaha',
    name: 'Gampaha',
    detail: 'Gampaha district — Ja-Ela, Wattala, Ragama, Minuwangoda, and Veyangoda.',
  },
  {
    href: '/timber-treatment-kandy',
    name: 'Kandy',
    detail: 'Central Province — Kandy, Peradeniya, Katugastota, Gampola, and Matale.',
  },
  {
    href: '/timber-treatment-kurunegala',
    name: 'Kurunegala',
    detail: 'North Western Province — Kurunegala, Kuliyapitiya, Narammala, and Wariyapola.',
  },
  {
    href: '/timber-treatment-chilaw',
    name: 'Chilaw & Puttalam',
    detail: 'The coconut triangle — Chilaw, Puttalam, Marawila, Wennappuwa, and Nattandiya.',
  },
  {
    href: '/timber-treatment-galle',
    name: 'Galle & the South',
    detail: 'Southern Province — Galle, Hikkaduwa, Ambalangoda, Weligama, and Matara.',
  },
];

const OTHER_AREAS = [
  'Anuradhapura', 'Polonnaruwa', 'Dambulla', 'Trincomalee', 'Batticaloa', 'Ampara',
  'Badulla', 'Bandarawela', 'Nuwara Eliya', 'Ratnapura', 'Kegalle', 'Avissawella',
  'Hambantota', 'Tangalle', 'Embilipitiya', 'Jaffna', 'Vavuniya', 'Mannar',
];

const serviceAreaSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE}/#service-areas`,
  name: 'St. Xavier Timber',
  description: 'Island-wide timber treatment services: kiln drying, vacuum pressure impregnation (VPI), and ISPM 15 heat treatment. Based in Daluwakotuwa, Kochchikade with delivery across Sri Lanka.',
  url: `${BASE}/service-areas`,
  telephone: ['+94312277752', '+94714711417', '+94769494944'],
  email: 'info@stxaviertimber.com',
  address: POSTAL_ADDRESS,
  geo: { '@type': 'GeoCoordinates', latitude: 7.3553, longitude: 79.8638 },
  areaServed: { '@type': 'Country', name: 'Sri Lanka' },
};

export default function ServiceAreasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceAreaSchema) }} />
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Island-wide Coverage</span>
          <h1 className={styles.h1}>
            Timber Treatment<br />
            <em>Across Sri Lanka</em>
          </h1>
          <p className={styles.heroSub}>
            One facility, every district. Timber comes to us from across the island — by your transport or ours —
            and returns kiln dried, VPI treated, or ISPM 15 certified, with records for every batch.
          </p>
          <div className={styles.heroBadges}>
            {['All 25 Districts', 'IPPC Registered', 'Est. 1955', 'Island-wide Delivery'].map((b) => (
              <span key={b} className={styles.badge}>{b}</span>
            ))}
          </div>
          <div className={styles.heroActions}>
            <a href="tel:+94312277752" className={styles.btnPrimary}>031 227 7752</a>
            <a href="https://wa.me/94714711417" className={styles.btnWa} target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <section className={styles.location}>
        <div className={styles.locationInner}>
          <div className={styles.locationText}>
            <h2 className={styles.locationH2}>How island-wide service works</h2>
            <p className={styles.locationDesc}>
              Our treatment facility is at 1088, Colombo Road, Daluwakotuwa, Kochchikade — on the main
              Colombo–Negombo–Chilaw road. Customers either deliver timber to us and collect it treated,
              or we arrange transport both ways. For distant districts, batches are typically scheduled so
              the round trip aligns with your project timeline. Wherever you are, the treatment, the records,
              and the warranty are the same.
            </p>
            <div className={styles.contactRow}>
              <a href="tel:+94312277752" className={styles.contactLink}>031 227 7752</a>
              <span className={styles.dot}>·</span>
              <a href="tel:+94714711417" className={styles.contactLink}>071 471 1417</a>
              <span className={styles.dot}>·</span>
              <a href="mailto:info@stxaviertimber.com" className={styles.contactLink}>info@stxaviertimber.com</a>
            </div>
          </div>
          <div className={styles.locationStats}>
            <div className={styles.lStat}><span className={styles.lNum}>25</span><span className={styles.lLabel}>districts served</span></div>
            <div className={styles.lStat}><span className={styles.lNum}>70+</span><span className={styles.lLabel}>years in operation</span></div>
            <div className={styles.lStat}><span className={styles.lNum}>3</span><span className={styles.lLabel}>treatment services</span></div>
          </div>
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles.servicesInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Regional Pages</span>
            <h2 className={styles.sectionH2}>Find Your Area</h2>
          </div>
          <div className={styles.servicesList}>
            {REGIONS.map((r) => (
              <a key={r.href} href={r.href} className={styles.serviceCard} style={{ textDecoration: 'none' }}>
                <div className={styles.serviceTop}>
                  <span className={styles.serviceTag}>Regional Page</span>
                  <h3 className={styles.serviceName}>{r.name}</h3>
                </div>
                <p className={styles.serviceDesc}>{r.detail}</p>
                <p className={styles.serviceDesc} style={{ color: '#5a7a2e', fontWeight: 600 }}>
                  View {r.name} services →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.faq}>
        <div className={styles.faqInner}>
          <h2 className={styles.sectionH2}>Everywhere Else in Sri Lanka</h2>
          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQ}>Not listed above? We still serve you.</h3>
              <p className={styles.faqA}>
                We regularly treat timber for customers in {OTHER_AREAS.join(', ')} and every other part of
                the island. Distance changes the logistics, not the service — contact us with your location
                and requirements, and we will quote treatment and transport together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaH2}>Wherever you are, let's treat your timber</h2>
          <p className={styles.ctaSub}>
            Send us your location, timber species, dimensions, and quantity. We will advise on the right treatment and quote transport both ways.
          </p>
          <div className={styles.ctaActions}>
            <a href="/contact-us" className={styles.ctaBtn}>Get a Quote</a>
            <a href="/calculator" className={styles.ctaSecondary}>Use the Calculator →</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
