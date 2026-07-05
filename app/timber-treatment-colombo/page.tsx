import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Sections';
import styles from '../timber-treatment-negombo/negombo.module.css';

const BASE = 'https://www.stxaviertimber.com';

export const metadata: Metadata = {
  title: 'Timber Treatment Colombo | Kiln Drying, VPI & ISPM 15',
  description:
    'Industrial kiln drying, VPI, and ISPM 15 heat treatment serving Colombo. IPPC registered. Est. 1955. Island-wide delivery to construction sites, furniture workshops, and export depots.',
  keywords: [
    'timber treatment Colombo',
    'kiln drying Colombo',
    'VPI treatment Colombo',
    'ISPM 15 Colombo',
    'wood treatment Colombo',
    'timber drying Colombo Sri Lanka',
    'vacuum pressure impregnation Colombo',
    'IPPC registered Colombo',
    'timber treatment near Colombo',
    'wood preservation Colombo',
    'construction timber Colombo',
  ],
  alternates: { canonical: `${BASE}/timber-treatment-colombo` },
  openGraph: {
    title: 'Timber Treatment Colombo | St. Xavier Timber',
    description: 'Industrial kiln drying, VPI, and ISPM 15 heat treatment serving Colombo. IPPC registered. Est. 1955. Island-wide delivery.',
    url: `${BASE}/timber-treatment-colombo`,
  },
};

const localSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE}/#colombo`,
  name: 'St. Xavier Timber — Colombo Timber Treatment',
  description: 'Industrial timber treatment facility serving Colombo and the Western Province. Kiln drying, vacuum pressure impregnation (VPI), and ISPM 15 heat treatment. Located in Daluwakotuwa, Kochchikade — 45 minutes from Colombo city. Island-wide delivery available.',
  url: `${BASE}/timber-treatment-colombo`,
  telephone: ['+94312277752', '+94714711417', '+94769494944'],
  email: 'info@stxaviertimber.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1088, Colombo Road',
    addressLocality: 'Daluwakotuwa, Kochchikade',
    addressRegion: 'Western Province',
    postalCode: '11540',
    addressCountry: 'LK',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 7.3553, longitude: 79.8638 },
  areaServed: [
    { '@type': 'City', name: 'Colombo' },
    { '@type': 'City', name: 'Dehiwala' },
    { '@type': 'City', name: 'Sri Jayawardenepura Kotte' },
    { '@type': 'City', name: 'Moratuwa' },
    { '@type': 'City', name: 'Kelaniya' },
    { '@type': 'City', name: 'Wattala' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Timber Treatment Services — Colombo',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kiln Drying', description: 'Industrial automated kiln drying to 12–15% moisture content. Serving Colombo construction companies, furniture manufacturers, and exporters.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vacuum Pressure Impregnation (VPI)', description: 'Full-penetration Boron Borax treatment at 10 bar for pest and fungal protection. 10-year warranty. Serving Colombo.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ISPM 15 Heat Treatment', description: 'IPPC registered heat treatment for wooden packaging destined for international export. Serving Colombo port exporters.' } },
    ],
  },
};

const SERVICES = [
  {
    tag: 'Service 1',
    name: 'Kiln Drying',
    headline: 'Precision drying to 12–15% MC',
    desc: 'Our fully automated kiln removes moisture evenly across every piece. Timber comes out dimensionally stable and ready for cutting, machining, or installation — critical for Colombo\'s high-value furniture, joinery, and fit-out projects where warping or shrinkage post-installation is not acceptable.',
    details: [
      'Target: 12–15% moisture content across all species',
      'Suitable for construction, furniture, doors, windows, and export',
      'Drying time: 3–12 days depending on species and thickness',
      'Calibrated meters verify moisture at multiple points per batch',
    ],
  },
  {
    tag: 'Service 2',
    name: 'Vacuum Pressure Impregnation (VPI)',
    headline: 'Full-core Boron Borax protection',
    desc: 'Surface treatments only protect the outer millimetres. Our VPI process drives 5% Boron Borax preservative deep into the wood core at 10 bar (145 PSI) — providing protection that holds even after cutting and machining. Essential for Colombo construction projects where timber is embedded in walls, floors, or roofing structures.',
    details: [
      '10 bar (145 PSI) pressure drives preservative to the wood core',
      'Protects against termites, borers, and fungal decay',
      '10-year warranty against pest contamination',
      'Safe, non-toxic — no heavy metals, arsenic, or solvents',
    ],
  },
  {
    tag: 'Service 3',
    name: 'ISPM 15 Heat Treatment',
    headline: 'IPPC registered export compliance',
    desc: 'All wooden packaging, crates, and dunnage in international trade must be ISPM 15 certified. Without it, shipments can be held or rejected at destination ports. We are IPPC registered with the National Plant Quarantine Service and issue the required IPPC mark — essential for Colombo\'s exporting businesses shipping through the Port of Colombo.',
    details: [
      'IPPC registered — compliant with international phytosanitary standards',
      'Core heated to 56°C for a minimum of 30 minutes',
      'Accepted in 180+ countries for international export',
      'Treatment certificate issued per shipment',
    ],
  },
];

const FAQS = [
  {
    q: 'How far is St. Xavier Timber from Colombo?',
    a: 'Our facility is at 1088, Colombo Road, Daluwakotuwa, Kochchikade — approximately 40–45 minutes north of Colombo city along the Colombo–Negombo road. We also offer island-wide delivery, so many Colombo customers send timber to us for treatment and arrange collection or delivery from our facility.',
  },
  {
    q: 'Do you deliver treated timber to Colombo?',
    a: 'Yes. We deliver treated timber directly to Colombo construction sites, furniture workshops, warehouses, and export depots across the Western Province. Delivery is arranged at the time of quoting.',
  },
  {
    q: 'Is ISPM 15 treatment available for Colombo port exporters?',
    a: 'Yes. We are IPPC registered and issue the official IPPC phytosanitary mark on all certified wooden packaging. Our certificates are accepted by Port of Colombo customs and at destination ports in 180+ countries. We regularly serve Colombo-based exporters.',
  },
  {
    q: 'How do I get a quote?',
    a: 'Call us on 031 227 7752, WhatsApp 071 471 1417, or use the quote form on our website. Send your timber species, dimensions, quantity, and required treatment. We typically respond within a few hours.',
  },
];

export default function ColomboPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Serving Colombo & Western Province</span>
          <h1 className={styles.h1}>
            Timber Treatment<br />
            <em>for Colombo</em>
          </h1>
          <p className={styles.heroSub}>
            Sri Lanka's most experienced timber treatment facility — IPPC registered, ISPM 15 certified, Est. 1955.
            Kiln drying, VPI treatment, and ISPM 15 heat treatment with island-wide delivery to Colombo.
          </p>
          <div className={styles.heroBadges}>
            {['Island-wide Delivery', 'IPPC Registered', 'Est. 1955', 'ISPM 15 Certified'].map((b) => (
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

      {/* Location callout */}
      <section className={styles.location}>
        <div className={styles.locationInner}>
          <div className={styles.locationText}>
            <h2 className={styles.locationH2}>Serving Colombo's construction, furniture, and export industries</h2>
            <p className={styles.locationDesc}>
              Located at 1088, Colombo Road, Daluwakotuwa, Kochchikade — 40 minutes north of Colombo on the main Colombo–Negombo highway.
              Colombo businesses regularly send timber batches to our facility for treatment, then collect or arrange delivery to their site.
              We deliver to all Colombo districts, including the port area for export clients.
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
            <div className={styles.lStat}><span className={styles.lNum}>~40 min</span><span className={styles.lLabel}>from Colombo city</span></div>
            <div className={styles.lStat}><span className={styles.lNum}>70+</span><span className={styles.lLabel}>years in operation</span></div>
            <div className={styles.lStat}><span className={styles.lNum}>3</span><span className={styles.lLabel}>treatment services</span></div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={styles.services}>
        <div className={styles.servicesInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>What We Offer</span>
            <h2 className={styles.sectionH2}>Three Treatment Services Under One Roof</h2>
          </div>
          <div className={styles.servicesList}>
            {SERVICES.map((s) => (
              <div key={s.name} className={styles.serviceCard}>
                <div className={styles.serviceTop}>
                  <span className={styles.serviceTag}>{s.tag}</span>
                  <h3 className={styles.serviceName}>{s.name}</h3>
                  <p className={styles.serviceHeadline}>{s.headline}</p>
                </div>
                <p className={styles.serviceDesc}>{s.desc}</p>
                <ul className={styles.serviceList}>
                  {s.details.map((d) => (
                    <li key={d} className={styles.serviceItem}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <circle cx="6" cy="6" r="5.5" stroke="#5a7a2e" strokeWidth="1"/>
                        <path d="M3.5 6l1.8 1.8L8.5 4.5" stroke="#5a7a2e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <div className={styles.faqInner}>
          <h2 className={styles.sectionH2}>Common Questions from Colombo Customers</h2>
          <div className={styles.faqList}>
            {FAQS.map((f) => (
              <div key={f.q} className={styles.faqItem}>
                <h3 className={styles.faqQ}>{f.q}</h3>
                <p className={styles.faqA}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaH2}>Ready to treat your timber?</h2>
          <p className={styles.ctaSub}>
            Send us your timber species, dimensions, and quantity. We will advise on the right treatment and provide a quote — usually within a few hours.
          </p>
          <div className={styles.ctaActions}>
            <a href="/#contact" className={styles.ctaBtn}>Get a Quote</a>
            <a href="/calculator" className={styles.ctaSecondary}>Use the Calculator →</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
