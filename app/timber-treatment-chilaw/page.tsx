import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Sections';
import styles from '../timber-treatment-negombo/negombo.module.css';

const BASE = 'https://www.stxaviertimber.com';

export const metadata: Metadata = {
  title: 'Timber Treatment Chilaw & Puttalam | Kiln Drying, VPI & ISPM 15',
  description:
    'Kiln drying, VPI, and ISPM 15 heat treatment 40 minutes from Chilaw, straight down the coastal road. IPPC registered. Est. 1955. Serving Chilaw, Wennappuwa, Marawila, and Puttalam.',
  keywords: [
    'timber treatment Chilaw',
    'kiln drying Chilaw',
    'VPI treatment Chilaw',
    'timber treatment Puttalam',
    'wood treatment Chilaw',
    'timber treatment Wennappuwa',
    'timber treatment Marawila',
    'ISPM 15 Chilaw',
    'coconut timber treatment Puttalam',
  ],
  alternates: { canonical: `${BASE}/timber-treatment-chilaw` },
  openGraph: {
    title: 'Timber Treatment Chilaw & Puttalam | St. Xavier Timber',
    description: 'Kiln drying, VPI, and ISPM 15 heat treatment 40 minutes from Chilaw. IPPC registered. Est. 1955.',
    url: `${BASE}/timber-treatment-chilaw`,
  },
};

const localSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE}/#chilaw`,
  name: 'St. Xavier Timber — Chilaw & Puttalam Timber Treatment',
  description: 'Industrial timber treatment serving Chilaw, Puttalam, and the coconut triangle. Kiln drying, vacuum pressure impregnation (VPI), and ISPM 15 heat treatment. Located in Daluwakotuwa, Kochchikade — directly on the Colombo–Chilaw coastal road.',
  url: `${BASE}/timber-treatment-chilaw`,
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
    { '@type': 'City', name: 'Chilaw' },
    { '@type': 'City', name: 'Puttalam' },
    { '@type': 'City', name: 'Wennappuwa' },
    { '@type': 'City', name: 'Marawila' },
    { '@type': 'City', name: 'Nattandiya' },
    { '@type': 'City', name: 'Dankotuwa' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Timber Treatment Services — Chilaw & Puttalam',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kiln Drying', description: 'Industrial automated kiln drying to 12–15% moisture content. Serving Chilaw and Puttalam district builders, furniture makers, and coconut timber processors.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vacuum Pressure Impregnation (VPI)', description: 'Full-penetration Boron Borax treatment at 10 bar. 10-year pest warranty. Essential for coastal humidity conditions.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ISPM 15 Heat Treatment', description: 'IPPC registered heat treatment for export wooden packaging. Serving Puttalam district exporters.' } },
    ],
  },
};

const SERVICES = [
  {
    tag: 'Service 1',
    name: 'Kiln Drying',
    headline: 'Precision drying to 12–15% MC',
    desc: 'Air-drying timber near the coast rarely gets below 20% moisture content — the sea air simply will not allow it. Our automated kilns bring timber from Chilaw and Puttalam district down to a verified 12–15% MC regardless of the weather, so furniture, doors, and fittings made from it stay stable in service.',
    details: [
      'Target: 12–15% moisture content across all species',
      'Coconut, teak, jak, mahogany, rubberwood, and more',
      'Drying time: 3–12 days depending on species and thickness',
      'Calibrated meters verify moisture at multiple points per batch',
    ],
  },
  {
    tag: 'Service 2',
    name: 'Vacuum Pressure Impregnation (VPI)',
    headline: 'Full-core Boron Borax protection',
    desc: 'Coastal humidity keeps fungal decay active year-round, and termite pressure across Puttalam district is among the highest on the island. Our VPI process drives 5% Boron Borax preservative to the core of the timber at 10 bar (145 PSI) — protection that survives cutting and machining, backed by a 10-year warranty against pest contamination.',
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
    desc: 'Exporters in the coconut triangle shipping desiccated coconut, produce, and seafood need ISPM 15 certified wooden packaging to clear destination ports. We are IPPC registered with the National Plant Quarantine Service and issue the IPPC mark and treatment certificate on every certified batch.',
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
    q: 'How far is St. Xavier Timber from Chilaw?',
    a: 'Our facility is at 1088, Colombo Road, Daluwakotuwa, Kochchikade — about 40 minutes south of Chilaw straight down the coastal main road, passing through Marawila and Wennappuwa. From Puttalam town it is roughly 90 minutes on the same road.',
  },
  {
    q: 'Do you treat coconut timber?',
    a: 'Yes — and being in the heart of the coconut triangle, we treat a lot of it. Coconut timber must be treated promptly after sawing as it is highly susceptible to fungal staining and borer attack. Kiln drying plus VPI is the standard specification for structural coconut timber.',
  },
  {
    q: 'Why does coastal timber need kiln drying instead of air drying?',
    a: 'Coastal relative humidity in the Chilaw–Puttalam belt stays high year-round, which puts a floor under air-dried moisture content of around 18–22%. Timber at that MC will shrink and move once it is installed indoors. Kiln drying is the only reliable way to reach the 12–15% MC that interior joinery and furniture require.',
  },
  {
    q: 'How do I get a quote?',
    a: 'Call us on 031 227 7752, WhatsApp 071 471 1417, or use the quote form on our website. Send your timber species, dimensions, quantity, and required treatment. We typically respond within a few hours.',
  },
];

export default function ChilawPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Serving Chilaw, Puttalam & the Coconut Triangle</span>
          <h1 className={styles.h1}>
            Timber Treatment<br />
            <em>for Chilaw & Puttalam</em>
          </h1>
          <p className={styles.heroSub}>
            40 minutes from Chilaw straight down the coastal road. Kiln drying, VPI treatment,
            and ISPM 15 heat treatment. IPPC registered. Est. 1955.
          </p>
          <div className={styles.heroBadges}>
            {['40 min from Chilaw', 'IPPC Registered', 'Est. 1955', 'Island-wide Delivery'].map((b) => (
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
            <h2 className={styles.locationH2}>On the main coastal road, south of Chilaw</h2>
            <p className={styles.locationDesc}>
              Located at 1088, Colombo Road, Daluwakotuwa, Kochchikade — directly on the Colombo–Chilaw main road.
              If you are coming from Chilaw, Marawila, Wennappuwa, Nattandiya, or Dankotuwa, we are a straight run
              south with no detours. Drop timber on the way to Colombo and collect it treated on the way back.
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
            <div className={styles.lStat}><span className={styles.lNum}>~40 min</span><span className={styles.lLabel}>from Chilaw town</span></div>
            <div className={styles.lStat}><span className={styles.lNum}>70+</span><span className={styles.lLabel}>years in operation</span></div>
            <div className={styles.lStat}><span className={styles.lNum}>3</span><span className={styles.lLabel}>treatment services</span></div>
          </div>
        </div>
      </section>

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

      <section className={styles.faq}>
        <div className={styles.faqInner}>
          <h2 className={styles.sectionH2}>Common Questions from Chilaw & Puttalam Customers</h2>
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
