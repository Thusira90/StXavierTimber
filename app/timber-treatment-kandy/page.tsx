import type { Metadata } from 'next';
import { POSTAL_ADDRESS } from '@/lib/company';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Sections';
import styles from '../timber-treatment-negombo/negombo.module.css';

const BASE = 'https://www.stxaviertimber.com';

export const metadata: Metadata = {
  title: 'Timber Treatment Kandy | Kiln Drying, VPI & ISPM 15',
  description:
    'Kiln drying, VPI, and ISPM 15 heat treatment with island-wide delivery to Kandy. IPPC registered. Est. 1955. Sri Lanka\'s most experienced timber treatment facility.',
  keywords: [
    'timber treatment Kandy',
    'kiln drying Kandy',
    'VPI treatment Kandy',
    'ISPM 15 Kandy',
    'wood treatment Kandy',
    'timber drying Kandy Sri Lanka',
    'vacuum pressure impregnation Kandy',
    'IPPC registered Kandy',
    'timber treatment Sri Lanka delivery Kandy',
    'wood preservation Kandy',
    'construction timber Kandy',
  ],
  alternates: { canonical: `${BASE}/timber-treatment-kandy` },
  openGraph: {
    title: 'Timber Treatment Kandy | St. Xavier Timber',
    description: 'Industrial kiln drying, VPI, and ISPM 15 heat treatment with delivery to Kandy. IPPC registered. Est. 1955.',
    url: `${BASE}/timber-treatment-kandy`,
  },
};

const localSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE}/#kandy`,
  name: 'St. Xavier Timber — Kandy Timber Treatment',
  description: 'Industrial timber treatment facility serving Kandy and the Central Province. Kiln drying, vacuum pressure impregnation (VPI), and ISPM 15 heat treatment with island-wide delivery. Located in Daluwakotuwa, Kochchikade.',
  url: `${BASE}/timber-treatment-kandy`,
  telephone: ['+94312277752', '+94714711417', '+94769494944'],
  email: 'info@stxaviertimber.com',
  address: POSTAL_ADDRESS,
  geo: { '@type': 'GeoCoordinates', latitude: 7.3553, longitude: 79.8638 },
  areaServed: [
    { '@type': 'City', name: 'Kandy' },
    { '@type': 'City', name: 'Peradeniya' },
    { '@type': 'City', name: 'Katugastota' },
    { '@type': 'City', name: 'Gampola' },
    { '@type': 'City', name: 'Matale' },
    { '@type': 'City', name: 'Kurunegala' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Timber Treatment Services — Kandy',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kiln Drying', description: 'Industrial automated kiln drying to 12–15% moisture content. Serving Kandy construction companies, furniture manufacturers, and joinery businesses with island-wide delivery.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vacuum Pressure Impregnation (VPI)', description: 'Deep-penetration borate preservative treatment at 10 bar for pest and fungal protection. 10-year warranty. Delivery to Kandy available.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ISPM 15 Heat Treatment', description: 'IPPC registered heat treatment for wooden packaging destined for international export. Serving Kandy businesses with delivery.' } },
    ],
  },
};

const SERVICES = [
  {
    tag: 'Service 1',
    name: 'Kiln Drying',
    headline: 'Precision drying to 12–15% MC',
    desc: 'Our fully automated kiln brings timber to a stable 12–15% moisture content — preventing warping, shrinkage, and dimensional movement after installation. For Kandy\'s furniture and joinery businesses working with high-value hardwoods like teak and mahogany, kiln-dried timber is the professional standard. Treated timber is delivered directly to your Kandy premises.',
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
    desc: 'Kandy\'s humid highland climate accelerates fungal growth and timber degradation if wood is not properly treated. Our VPI process drives 5% borate preservative solution deep into the timber at 10 bar (145 PSI), with retention verified per species and dimension, providing long-lasting protection against termites, wood borers, and fungal decay — even after the timber is cut and machined. Backed by a 10-year warranty.',
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
    desc: 'Wooden packaging used in international trade must be ISPM 15 certified to cross borders without risk of rejection or quarantine at the destination port. We are IPPC registered with the National Plant Quarantine Service of Sri Lanka and issue the official IPPC phytosanitary mark on every certified load. Kandy-based tea exporters and manufacturers requiring certified wooden packaging use our service regularly.',
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
    q: 'Do you deliver treated timber to Kandy?',
    a: 'Yes. We offer island-wide delivery including to Kandy, Peradeniya, Katugastota, Gampola, Matale, and surrounding areas. Many Kandy customers send timber to us for treatment and we deliver back to their site, factory, or construction project. Delivery is arranged at the time of quoting.',
  },
  {
    q: 'Which timber species do you treat for Kandy customers?',
    a: 'We treat rubberwood, pine, mahogany, teak, nadun, kumbuk, imported hardwood, and other species. Kandy area customers frequently send us teak and mahogany for kiln drying prior to furniture production, and rubberwood for VPI treatment.',
  },
  {
    q: 'Is kiln drying worth it for timber used in Kandy\'s climate?',
    a: 'Yes — particularly for Kandy\'s highland climate, which has higher humidity and more frequent rainfall than coastal areas. Timber that has not been kiln-dried to a stable moisture content will continue to absorb and release moisture seasonally, causing joints to open, boards to warp, and finishes to fail. Kiln drying to a stable moisture content greatly reduces this movement.',
  },
  {
    q: 'How do I get a quote?',
    a: 'Call us on 031 227 7752, WhatsApp 071 471 1417, or use the quote form on our website. Send your timber species, dimensions, quantity, and required treatment. We typically respond within a few hours and can arrange pickup or delivery.',
  },
];

export default function KandyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Serving Kandy & Central Province</span>
          <h1 className={styles.h1}>
            Timber Treatment<br />
            <em>for Kandy</em>
          </h1>
          <p className={styles.heroSub}>
            Sri Lanka's most experienced timber treatment facility, with island-wide delivery to Kandy.
            Kiln drying, VPI treatment, and ISPM 15 heat treatment. IPPC registered. Est. 1955.
          </p>
          <div className={styles.heroBadges}>
            {['Island-wide Delivery', 'IPPC Registered', 'Est. 1955', 'Central Province'].map((b) => (
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
            <h2 className={styles.locationH2}>Island-wide delivery to Kandy and Central Province</h2>
            <p className={styles.locationDesc}>
              Our facility is at 1088, Colombo Road, Daluwakotuwa, Kochchikade. Kandy customers typically send timber batches
              to our facility — either by transport or we arrange pickup — and we deliver treated timber directly to your
              site, workshop, or depot in Kandy. No local facility matches our equipment, certifications, or 70-year track record.
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
            <div className={styles.lStat}><span className={styles.lNum}>Island-wide</span><span className={styles.lLabel}>delivery to Kandy</span></div>
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
          <h2 className={styles.sectionH2}>Common Questions from Kandy Customers</h2>
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
            Send us your timber species, dimensions, and quantity. We will advise on the right treatment and arrange delivery to Kandy — usually quoted within a few hours.
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
