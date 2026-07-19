import type { Metadata } from 'next';
import { POSTAL_ADDRESS } from '@/lib/company';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Sections';
import styles from './negombo.module.css';

const BASE = 'https://www.stxaviertimber.com';

export const metadata: Metadata = {
  title: 'Timber Treatment Negombo',
  description:
    'Industrial kiln drying, VPI, and ISPM 15 heat treatment — 5 minutes from Negombo in Daluwakotuwa. IPPC registered. Est. 1955.',
  keywords: [
    'timber treatment Negombo',
    'kiln drying Negombo',
    'VPI treatment Negombo',
    'ISPM 15 Negombo',
    'wood treatment Negombo',
    'timber drying Negombo Sri Lanka',
    'vacuum pressure impregnation Negombo',
    'IPPC registered Negombo',
    'Daluwakotuwa timber treatment',
    'Kochchikade kiln drying',
    'timber treatment near Negombo',
  ],
  alternates: { canonical: `${BASE}/timber-treatment-negombo` },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'St. Xavier Timber — Kiln Drying & VPI Treatment Sri Lanka' }],
    title: 'Timber Treatment Negombo | St. Xavier Timber',
    description: 'Industrial kiln drying, VPI, and ISPM 15 heat treatment — 5 minutes from Negombo in Daluwakotuwa. IPPC registered. Est. 1955.',
    url: `${BASE}/timber-treatment-negombo`,
  },
};

const localSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE}/#negombo`,
  name: 'St. Xavier Timber — Negombo Timber Treatment',
  description: 'Industrial timber treatment facility serving Negombo and surrounding areas. Kiln drying, vacuum pressure impregnation (VPI), and ISPM 15 heat treatment. Located in Daluwakotuwa, Kochchikade — 5 minutes from Negombo town.',
  url: `${BASE}/timber-treatment-negombo`,
  telephone: ['+94312277752', '+94714711417', '+94769494944'],
  email: 'info@stxaviertimber.com',
  address: POSTAL_ADDRESS,
  geo: { '@type': 'GeoCoordinates', latitude: 7.3553, longitude: 79.8638 },
  areaServed: [
    { '@type': 'City', name: 'Negombo' },
    { '@type': 'City', name: 'Kochchikade' },
    { '@type': 'City', name: 'Daluwakotuwa' },
    { '@type': 'City', name: 'Katana' },
    { '@type': 'City', name: 'Wennappuwa' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Timber Treatment Services — Negombo',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kiln Drying', description: 'Industrial automated kiln drying to 12–15% moisture content for construction, furniture, and export timber. Serving Negombo and surrounding areas.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vacuum Pressure Impregnation (VPI)', description: 'Deep-penetration borate preservative treatment at 10 bar for pest and fungal protection. 10-year warranty. Serving Negombo.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ISPM 15 Heat Treatment', description: 'IPPC registered heat treatment for wooden packaging destined for international export. Serving Negombo exporters.' } },
    ],
  },
};

const SERVICES = [
  {
    tag: 'Service 1',
    name: 'Kiln Drying',
    headline: 'Precision drying to 12–15% MC',
    desc: 'Our fully automated kiln removes moisture evenly across every piece — no hot spots, no uneven drying. Timber comes out dimensionally stable and ready for cutting, machining, or installation. Critical for Negombo\'s humid coastal climate where air-dried timber rarely reaches stable moisture levels.',
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
    headline: 'Deep-penetration borate protection',
    desc: 'Surface sprays and dips don\'t penetrate timber — they protect only the outer few millimetres. Our VPI process drives 5% borate preservative solution deep into the timber at 10 bar (145 PSI), with retention verified per species and dimension, providing protection that holds even after cutting and machining. Backed by a 10-year warranty against pest contamination.',
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
    desc: 'All wooden packaging, crates, and dunnage used in international trade must be ISPM 15 certified. Without it, shipments can be held, fumigated at the exporter\'s cost, or rejected at the destination port. We are IPPC registered with the National Plant Quarantine Service of Sri Lanka and issue the required IPPC mark on every certified load — critical for Negombo\'s active export community.',
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
    q: 'How far is St. Xavier Timber from Negombo?',
    a: 'Our facility is at 1088, Colombo Road, Daluwakotuwa, Kochchikade — approximately 5 minutes south of Negombo town along the Colombo Road. We are easy to access from Negombo, Katana, Wennappuwa, and the surrounding area.',
  },
  {
    q: 'Do you deliver treated timber to Negombo?',
    a: 'Yes. We offer island-wide delivery including direct delivery to Negombo, construction sites, furniture workshops, and export depots. Delivery is arranged at the time of quoting.',
  },
  {
    q: 'What timber species do you treat for Negombo customers?',
    a: 'We regularly treat rubberwood, pine, mahogany, teak, nadun, kumbuk, and imported hardwood species. Rubberwood is the most common species we treat for Negombo-area furniture manufacturers.',
  },
  {
    q: 'How do I get a quote?',
    a: 'Call us on 031 227 7752, WhatsApp 071 471 1417, or use the quote form on our website. Send your timber species, dimensions, quantity, and required treatment. We typically respond within a few hours.',
  },
];

export default function NegomboPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Serving Negombo & Surrounding Areas</span>
          <h1 className={styles.h1}>
            Timber Treatment<br />
            <em>Near Negombo</em>
          </h1>
          <p className={styles.heroSub}>
            St. Xavier Timber is located in Daluwakotuwa, Kochchikade — 5 minutes from Negombo town.
            Industrial kiln drying, VPI treatment, and ISPM 15 heat treatment. Est. 1955. IPPC registered.
          </p>
          <div className={styles.heroBadges}>
            {['5 min from Negombo', 'IPPC Registered', 'Est. 1955', 'Island-wide Delivery'].map((b) => (
              <span key={b} className={styles.badge}>{b}</span>
            ))}
          </div>
          <div className={styles.heroActions}>
            <a href="tel:+94312277752" className={styles.btnPrimary}>031 227 7752</a>
            <a href={`https://wa.me/94714711417`} className={styles.btnWa} target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Location callout */}
      <section className={styles.location}>
        <div className={styles.locationInner}>
          <div className={styles.locationText}>
            <h2 className={styles.locationH2}>Negombo's closest timber treatment facility</h2>
            <p className={styles.locationDesc}>
              Located at 1088, Colombo Road, Daluwakotuwa, Kochchikade — just off the main Colombo–Negombo road.
              Easy access for Negombo-based construction companies, furniture manufacturers, and export businesses.
              Treated timber can be collected from our facility or delivered directly to your site.
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
            <div className={styles.lStat}><span className={styles.lNum}>~5 min</span><span className={styles.lLabel}>from Negombo town</span></div>
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
          <h2 className={styles.sectionH2}>Common Questions from Negombo Customers</h2>
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
            <a href="/contact-us" className={styles.ctaBtn}>Get a Quote</a>
            <a href="/calculator" className={styles.ctaSecondary}>Use the Calculator →</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
