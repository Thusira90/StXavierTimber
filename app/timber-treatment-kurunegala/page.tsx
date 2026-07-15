import type { Metadata } from 'next';
import { POSTAL_ADDRESS } from '@/lib/company';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Sections';
import styles from '../timber-treatment-negombo/negombo.module.css';

const BASE = 'https://www.stxaviertimber.com';

export const metadata: Metadata = {
  title: 'Timber Treatment Kurunegala | Kiln Drying, VPI & ISPM 15',
  description:
    'Kiln drying, VPI, and ISPM 15 heat treatment for Kurunegala and the North Western Province. IPPC registered. Est. 1955. Direct route via Kuliyapitiya. Island-wide delivery.',
  keywords: [
    'timber treatment Kurunegala',
    'kiln drying Kurunegala',
    'VPI treatment Kurunegala',
    'wood treatment Kurunegala',
    'ISPM 15 Kurunegala',
    'coconut timber treatment',
    'timber drying North Western Province',
    'timber treatment Kuliyapitiya',
    'timber treatment near Kurunegala',
  ],
  alternates: { canonical: `${BASE}/timber-treatment-kurunegala` },
  openGraph: {
    title: 'Timber Treatment Kurunegala | St. Xavier Timber',
    description: 'Kiln drying, VPI, and ISPM 15 heat treatment for Kurunegala district. IPPC registered. Est. 1955.',
    url: `${BASE}/timber-treatment-kurunegala`,
  },
};

const localSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE}/#kurunegala`,
  name: 'St. Xavier Timber — Kurunegala Timber Treatment',
  description: 'Industrial timber treatment serving Kurunegala and the North Western Province. Kiln drying, vacuum pressure impregnation (VPI), and ISPM 15 heat treatment. Located in Daluwakotuwa, Kochchikade.',
  url: `${BASE}/timber-treatment-kurunegala`,
  telephone: ['+94312277752', '+94714711417', '+94769494944'],
  email: 'info@stxaviertimber.com',
  address: POSTAL_ADDRESS,
  geo: { '@type': 'GeoCoordinates', latitude: 7.3553, longitude: 79.8638 },
  areaServed: [
    { '@type': 'City', name: 'Kurunegala' },
    { '@type': 'City', name: 'Kuliyapitiya' },
    { '@type': 'City', name: 'Narammala' },
    { '@type': 'City', name: 'Pannala' },
    { '@type': 'City', name: 'Wariyapola' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Timber Treatment Services — Kurunegala',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kiln Drying', description: 'Industrial automated kiln drying to 12–15% moisture content. Serving Kurunegala district sawmills, furniture makers, and builders.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vacuum Pressure Impregnation (VPI)', description: 'Deep-penetration borate preservative treatment at 10 bar. 10-year pest warranty. Serving Kurunegala and the North Western Province.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ISPM 15 Heat Treatment', description: 'IPPC registered heat treatment for export wooden packaging. Serving Kurunegala exporters.' } },
    ],
  },
};

const SERVICES = [
  {
    tag: 'Service 1',
    name: 'Kiln Drying',
    headline: 'Precision drying to 12–15% MC',
    desc: 'Kurunegala district is one of Sri Lanka\'s most active timber regions — coconut, teak, jak, and mahogany move through its sawmills daily. Most of it is sold green or air-dried, which is where quality problems start. Our automated kilns bring timber to a verified 12–15% moisture content, so it arrives at the workshop or site dimensionally stable and ready to machine.',
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
    headline: 'Deep-penetration borate protection',
    desc: 'Termite pressure in the North Western Province\'s dry-zone conditions is severe, and surface sprays only protect the outer millimetres of timber. Our VPI process drives 5% borate preservative solution deep into the timber at 10 bar (145 PSI), with retention verified per species and dimension — protection that holds even after the timber is cut, drilled, and machined. Backed by a 10-year warranty against pest contamination.',
    details: [
      '10 bar (145 PSI) pressure drives deep preservative penetration, verified per species and dimension',
      'Protects against termites, borers, and fungal decay',
      '10-year warranty against pest contamination',
      'Safe, non-toxic — no heavy metals, arsenic, or solvents',
    ],
  },
  {
    tag: 'Service 3',
    name: 'ISPM 15 Heat Treatment',
    headline: 'IPPC registered export compliance',
    desc: 'Wooden packaging used in international trade must carry the IPPC certification mark. We are IPPC registered with the National Plant Quarantine Service of Sri Lanka and issue the mark and treatment certificate per batch — used by exporters across the North Western Province shipping coconut products, produce, and manufactured goods.',
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
    q: 'How far is St. Xavier Timber from Kurunegala?',
    a: 'Our facility is at 1088, Colombo Road, Daluwakotuwa, Kochchikade — roughly 90 minutes from Kurunegala town via Kuliyapitiya and Pannala. Many Kurunegala-area sawmills and timber traders send batches to us by lorry and collect them treated, or we arrange delivery.',
  },
  {
    q: 'Do you treat coconut timber?',
    a: 'Yes. Coconut timber is common in the North Western Province and responds well to both kiln drying and VPI treatment. Because coconut timber has no natural durability in its softer inner zones, VPI treatment is strongly recommended for any structural or exposed use.',
  },
  {
    q: 'Do you deliver treated timber to Kurunegala?',
    a: 'Yes. We offer island-wide delivery including Kurunegala, Kuliyapitiya, Narammala, Wariyapola, and surrounding areas. Delivery is arranged at the time of quoting.',
  },
  {
    q: 'How do I get a quote?',
    a: 'Call us on 031 227 7752, WhatsApp 071 471 1417, or use the quote form on our website. Send your timber species, dimensions, quantity, and required treatment. We typically respond within a few hours.',
  },
];

export default function KurunegalaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Serving Kurunegala & North Western Province</span>
          <h1 className={styles.h1}>
            Timber Treatment<br />
            <em>for Kurunegala</em>
          </h1>
          <p className={styles.heroSub}>
            Kiln drying, VPI treatment, and ISPM 15 heat treatment for one of Sri Lanka's busiest timber regions.
            IPPC registered. Est. 1955. Island-wide delivery.
          </p>
          <div className={styles.heroBadges}>
            {['North Western Province', 'IPPC Registered', 'Est. 1955', 'Island-wide Delivery'].map((b) => (
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
            <h2 className={styles.locationH2}>Serving Kurunegala's sawmills, furniture makers, and builders</h2>
            <p className={styles.locationDesc}>
              Located at 1088, Colombo Road, Daluwakotuwa, Kochchikade — about 90 minutes from Kurunegala via
              Kuliyapitiya. Timber traders and sawmills across the district send batches to our facility for
              kiln drying and VPI treatment, then collect or have them delivered back treated, verified, and documented.
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
            <div className={styles.lStat}><span className={styles.lNum}>~90 min</span><span className={styles.lLabel}>from Kurunegala town</span></div>
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
          <h2 className={styles.sectionH2}>Common Questions from Kurunegala Customers</h2>
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
            <a href="/contact-us" className={styles.ctaBtn}>Get a Quote</a>
            <a href="/calculator" className={styles.ctaSecondary}>Use the Calculator →</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
