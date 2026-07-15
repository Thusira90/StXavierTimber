import type { Metadata } from 'next';
import { POSTAL_ADDRESS } from '@/lib/company';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Sections';
import styles from '../timber-treatment-negombo/negombo.module.css';

const BASE = 'https://www.stxaviertimber.com';

export const metadata: Metadata = {
  title: 'Timber Treatment Gampaha | Kiln Drying, VPI & ISPM 15',
  description:
    'Industrial kiln drying, VPI, and ISPM 15 heat treatment for Gampaha district. IPPC registered. Est. 1955. 35 minutes via the Colombo–Negombo road. Island-wide delivery available.',
  keywords: [
    'timber treatment Gampaha',
    'kiln drying Gampaha',
    'VPI treatment Gampaha',
    'ISPM 15 Gampaha',
    'wood treatment Gampaha',
    'timber drying Gampaha Sri Lanka',
    'vacuum pressure impregnation Gampaha',
    'IPPC registered Gampaha',
    'timber treatment near Gampaha',
    'Ja-Ela timber treatment',
    'Wattala timber treatment',
  ],
  alternates: { canonical: `${BASE}/timber-treatment-gampaha` },
  openGraph: {
    title: 'Timber Treatment Gampaha | St. Xavier Timber',
    description: 'Industrial kiln drying, VPI, and ISPM 15 heat treatment serving Gampaha district. IPPC registered. Est. 1955.',
    url: `${BASE}/timber-treatment-gampaha`,
  },
};

const localSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE}/#gampaha`,
  name: 'St. Xavier Timber — Gampaha Timber Treatment',
  description: 'Industrial timber treatment facility serving Gampaha district. Kiln drying, vacuum pressure impregnation (VPI), and ISPM 15 heat treatment. Located in Daluwakotuwa, Kochchikade — easily accessible from Gampaha via the Colombo–Negombo road.',
  url: `${BASE}/timber-treatment-gampaha`,
  telephone: ['+94312277752', '+94714711417', '+94769494944'],
  email: 'info@stxaviertimber.com',
  address: POSTAL_ADDRESS,
  geo: { '@type': 'GeoCoordinates', latitude: 7.3553, longitude: 79.8638 },
  areaServed: [
    { '@type': 'City', name: 'Gampaha' },
    { '@type': 'City', name: 'Ja-Ela' },
    { '@type': 'City', name: 'Wattala' },
    { '@type': 'City', name: 'Ragama' },
    { '@type': 'City', name: 'Minuwangoda' },
    { '@type': 'City', name: 'Veyangoda' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Timber Treatment Services — Gampaha',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kiln Drying', description: 'Industrial automated kiln drying to 12–15% moisture content. Serving Gampaha district construction companies, furniture workshops, and exporters.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vacuum Pressure Impregnation (VPI)', description: 'Deep-penetration borate preservative treatment at 10 bar for pest and fungal protection. 10-year warranty. Serving Gampaha district.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ISPM 15 Heat Treatment', description: 'IPPC registered heat treatment for wooden packaging destined for international export. Serving Gampaha-based exporters.' } },
    ],
  },
};

const SERVICES = [
  {
    tag: 'Service 1',
    name: 'Kiln Drying',
    headline: 'Precision drying to 12–15% MC',
    desc: 'Our fully automated kiln delivers even moisture removal across every piece. Timber leaves our facility at 12–15% moisture content — dimensionally stable and ready for immediate use. Gampaha\'s furniture workshops and construction projects benefit from timber that won\'t warp, shrink, or swell after installation.',
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
    desc: 'Surface sprays protect only the outer few millimetres. Our VPI process drives 5% borate preservative solution deep into the timber at 10 bar (145 PSI), with retention verified per species and dimension, providing long-lasting protection that survives cutting and machining. Gampaha\'s industrial zone and export processing businesses benefit from pest-free timber backed by a 10-year warranty.',
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
    desc: 'Wooden packaging and crates used in international trade must carry the ISPM 15 certification mark. We are IPPC registered with the National Plant Quarantine Service and issue the required IPPC mark per certified load. Gampaha\'s free trade zone and export-oriented businesses regularly use our ISPM 15 service to meet destination country phytosanitary requirements.',
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
    q: 'How far is St. Xavier Timber from Gampaha?',
    a: 'Our facility is at 1088, Colombo Road, Daluwakotuwa, Kochchikade — approximately 30–40 minutes from Gampaha town via the Colombo–Negombo road through Ja-Ela and Wattala. The route is straightforward along a single main road.',
  },
  {
    q: 'Do you serve the Gampaha industrial zone and export businesses?',
    a: 'Yes. We regularly treat timber and wooden packaging for Gampaha-based exporters, manufacturers, and construction businesses. Our ISPM 15 service is widely used by companies in the Gampaha district who export goods requiring certified wooden packaging.',
  },
  {
    q: 'Do you deliver treated timber to Gampaha?',
    a: 'Yes. We offer island-wide delivery including to Gampaha, Ja-Ela, Wattala, Ragama, Minuwangoda, and surrounding areas. Delivery is arranged at the time of quoting.',
  },
  {
    q: 'How do I get a quote?',
    a: 'Call us on 031 227 7752, WhatsApp 071 471 1417, or use the quote form on our website. Send your timber species, dimensions, quantity, and required treatment. We typically respond within a few hours.',
  },
];

export default function GampahaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Serving Gampaha District</span>
          <h1 className={styles.h1}>
            Timber Treatment<br />
            <em>for Gampaha</em>
          </h1>
          <p className={styles.heroSub}>
            Industrial kiln drying, VPI treatment, and ISPM 15 heat treatment — accessible from Gampaha via the Colombo–Negombo road.
            IPPC registered. Est. 1955. Island-wide delivery available.
          </p>
          <div className={styles.heroBadges}>
            {['Gampaha District', 'IPPC Registered', 'Est. 1955', 'Island-wide Delivery'].map((b) => (
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
            <h2 className={styles.locationH2}>Convenient access for Gampaha district businesses</h2>
            <p className={styles.locationDesc}>
              Located at 1088, Colombo Road, Daluwakotuwa, Kochchikade — 30–40 minutes from Gampaha along the main Colombo–Negombo highway via Ja-Ela.
              Gampaha businesses regularly drop timber at our facility for treatment and arrange collection or direct delivery to their site or export depot.
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
            <div className={styles.lStat}><span className={styles.lNum}>~35 min</span><span className={styles.lLabel}>from Gampaha town</span></div>
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
          <h2 className={styles.sectionH2}>Common Questions from Gampaha Customers</h2>
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
