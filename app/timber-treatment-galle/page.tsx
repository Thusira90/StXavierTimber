import type { Metadata } from 'next';
import { POSTAL_ADDRESS } from '@/lib/company';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Sections';
import styles from '../timber-treatment-negombo/negombo.module.css';

const BASE = 'https://www.stxaviertimber.com';

export const metadata: Metadata = {
  title: 'Timber Treatment Galle | Kiln Drying, VPI & ISPM 15',
  description:
    'Kiln drying, VPI, and ISPM 15 heat treatment with delivery to Galle and the Southern Province. IPPC registered. Est. 1955. Serving hotels, villa builders, and furniture makers.',
  keywords: [
    'timber treatment Galle',
    'kiln drying Galle',
    'VPI treatment Galle',
    'wood treatment Galle',
    'ISPM 15 Galle',
    'timber treatment Southern Province',
    'timber treatment Matara',
    'villa construction timber Galle',
    'hotel timber Sri Lanka south coast',
  ],
  alternates: { canonical: `${BASE}/timber-treatment-galle` },
  openGraph: {
    title: 'Timber Treatment Galle | St. Xavier Timber',
    description: 'Kiln drying, VPI, and ISPM 15 heat treatment with delivery to Galle and the Southern Province. IPPC registered. Est. 1955.',
    url: `${BASE}/timber-treatment-galle`,
  },
};

const localSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE}/#galle`,
  name: 'St. Xavier Timber — Galle & Southern Province Timber Treatment',
  description: 'Industrial timber treatment with island-wide delivery to Galle and the Southern Province. Kiln drying, vacuum pressure impregnation (VPI), and ISPM 15 heat treatment. Located in Daluwakotuwa, Kochchikade.',
  url: `${BASE}/timber-treatment-galle`,
  telephone: ['+94312277752', '+94714711417', '+94769494944'],
  email: 'info@stxaviertimber.com',
  address: POSTAL_ADDRESS,
  geo: { '@type': 'GeoCoordinates', latitude: 7.3553, longitude: 79.8638 },
  areaServed: [
    { '@type': 'City', name: 'Galle' },
    { '@type': 'City', name: 'Hikkaduwa' },
    { '@type': 'City', name: 'Unawatuna' },
    { '@type': 'City', name: 'Ambalangoda' },
    { '@type': 'City', name: 'Matara' },
    { '@type': 'City', name: 'Weligama' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Timber Treatment Services — Galle',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kiln Drying', description: 'Industrial automated kiln drying to 12–15% moisture content. Serving Galle hotels, villa projects, and furniture makers with delivery via the Southern Expressway.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vacuum Pressure Impregnation (VPI)', description: 'Deep-penetration borate preservative treatment at 10 bar. 10-year pest warranty. Essential for south coast humidity and salt air conditions.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ISPM 15 Heat Treatment', description: 'IPPC registered heat treatment for export wooden packaging. Serving Southern Province exporters.' } },
    ],
  },
};

const SERVICES = [
  {
    tag: 'Service 1',
    name: 'Kiln Drying',
    headline: 'Precision drying to 12–15% MC',
    desc: 'The south coast\'s boutique hotels, villas, and restoration projects use timber heavily — exposed beams, decking, doors, and bespoke furniture. In Galle\'s coastal humidity, air-dried timber never reaches a stable interior moisture content. Our automated kilns deliver a verified 12–15% MC, so joinery and furniture stay flat and tight after installation.',
    details: [
      'Target: 12–15% moisture content across all species',
      'Teak, mahogany, jak, kumbuk, imported hardwoods, and more',
      'Drying time: 3–12 days depending on species and thickness',
      'Calibrated meters verify moisture at multiple points per batch',
    ],
  },
  {
    tag: 'Service 2',
    name: 'Vacuum Pressure Impregnation (VPI)',
    headline: 'Deep-penetration borate protection',
    desc: 'Salt air, monsoon exposure, and year-round humidity make the south coast one of the toughest environments in Sri Lanka for timber. Surface treatments fail at every cut and fixing hole. Our VPI process drives 5% borate preservative solution deep into the timber at 10 bar (145 PSI), with retention verified per species and dimension — the specification serious villa and hotel projects use for structural and exposed timber. 10-year warranty against pest contamination.',
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
    desc: 'Southern Province exporters — from cinnamon and tea to furniture and handicrafts — need ISPM 15 certified wooden packaging to clear destination ports without holds or rejection. We are IPPC registered with the National Plant Quarantine Service and issue the IPPC mark and treatment certificate on every certified batch.',
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
    q: 'Do you deliver treated timber to Galle?',
    a: 'Yes. We deliver island-wide, and the Southern Expressway makes Galle one of the easier long-distance deliveries — treated timber loaded in the morning is on site the same day. We regularly deliver to Galle, Hikkaduwa, Unawatuna, Ambalangoda, Weligama, and Matara.',
  },
  {
    q: 'Can you treat timber for a villa or hotel project?',
    a: 'Yes. We work with contractors, architects, and project managers on south coast builds — treating structural timber, roof timber, decking, and joinery stock to specification, with per-batch moisture and treatment records your QS or architect can file.',
  },
  {
    q: 'Why does south coast timber need VPI rather than surface treatment?',
    a: 'Coastal humidity keeps decay fungi active all year, and every cut, notch, and bolt hole made during construction breaks through a surface treatment\'s protective shell. VPI-treated timber is protected through its cross-section, so site cutting does not expose vulnerable wood. For exposed or structural coastal timber, it is the only specification that holds up.',
  },
  {
    q: 'How do I get a quote?',
    a: 'Call us on 031 227 7752, WhatsApp 071 471 1417, or use the quote form on our website. Send your timber species, dimensions, quantity, and required treatment. We typically respond within a few hours and can quote delivery to Galle at the same time.',
  },
];

export default function GallePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Serving Galle & the Southern Province</span>
          <h1 className={styles.h1}>
            Timber Treatment<br />
            <em>for Galle</em>
          </h1>
          <p className={styles.heroSub}>
            Kiln drying, VPI treatment, and ISPM 15 heat treatment with same-day delivery to the south coast
            via the Southern Expressway. IPPC registered. Est. 1955.
          </p>
          <div className={styles.heroBadges}>
            {['Southern Province', 'IPPC Registered', 'Est. 1955', 'Island-wide Delivery'].map((b) => (
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
            <h2 className={styles.locationH2}>Serving the south coast's villa, hotel, and furniture projects</h2>
            <p className={styles.locationDesc}>
              Our facility is at 1088, Colombo Road, Daluwakotuwa, Kochchikade. South coast customers send timber
              up by lorry — or we arrange collection — and treated timber returns via the Southern Expressway,
              typically as a same-day delivery. Every batch ships with moisture and treatment records for your
              project file.
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
            <div className={styles.lStat}><span className={styles.lNum}>Same-day</span><span className={styles.lLabel}>delivery via expressway</span></div>
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
          <h2 className={styles.sectionH2}>Common Questions from Galle Customers</h2>
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
            Send us your timber species, dimensions, and quantity. We will advise on the right treatment and quote delivery to the south coast — usually within a few hours.
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
