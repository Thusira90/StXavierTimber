import type { Metadata } from 'next';
import { POSTAL_ADDRESS, GEO, PHONES_E164, EMAIL } from '@/lib/company';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Sections';
import styles from '../../timber-treatment-negombo/negombo.module.css';

const BASE = 'https://www.stxaviertimber.com';

export const metadata: Metadata = {
  title: 'Kiln Drying Timber Service',
  description:
    'Industrial wood kiln drying in Sri Lanka. Our fully automated kiln uses advanced temperature and moisture control to reach 12–15% moisture content — reducing warping, cracking, and instability across all species. IPPC registered, Est. 1955. Island-wide delivery.',
  keywords: [
    'kiln drying Sri Lanka',
    'wood kiln drying',
    'timber kiln drying service',
    'kiln dried timber Sri Lanka',
    'timber drying',
    'moisture content 12-15%',
    'automated kiln timber',
    'furniture timber drying',
    'construction timber drying',
    'kiln drying near me',
  ],
  alternates: { canonical: `${BASE}/services/kiln-drying` },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'St. Xavier Timber — Wood Kiln Drying Service Sri Lanka' }],
    title: 'Kiln Drying Timber Service | St. Xavier Timber',
    description:
      'Industrial wood kiln drying to 12–15% moisture content with a fully automated kiln. IPPC registered, Est. 1955. Island-wide delivery across Sri Lanka.',
    url: `${BASE}/services/kiln-drying`,
  },
};

const FAQS = [
  {
    q: 'What moisture content does kiln drying achieve?',
    a: 'We dry timber to a target of 12–15% moisture content, measured with calibrated meters at multiple points in every batch. This is the stable range for construction, furniture, joinery, and export use in Sri Lanka’s climate — dry enough to prevent movement, without over-drying that causes brittleness.',
  },
  {
    q: 'How long does kiln drying take?',
    a: 'Drying time depends on species, thickness, and starting moisture content. A typical load runs 3–12 days: thin rubberwood planks dry quickly, while thick hardwood sections take longer. We set a species-appropriate drying schedule for each batch so timber dries evenly without cracking or case-hardening.',
  },
  {
    q: 'What is the difference between kiln drying and air drying?',
    a: 'Air drying relies on ambient conditions and stalls at 16–19% moisture content in Sri Lanka’s humidity — too wet for interior joinery or export. Kiln drying uses a closed chamber with controlled temperature, humidity, and airflow to reach a stable 12–15% in days rather than months, with far more consistent results across the batch.',
  },
  {
    q: 'Is your kiln drying ISPM 15 compliant for export?',
    a: 'Yes. Our kiln process is ISPM 15 heat-treatment compliant, and we are IPPC registered with the National Plant Quarantine Service. We issue the required IPPC mark and treatment certificate for wooden packaging, crates, and dunnage destined for international export.',
  },
  {
    q: 'How do I get a kiln drying quote?',
    a: 'Send us your timber species, dimensions, quantity, and required moisture content. Call 031 227 7752, WhatsApp 071 471 1417, or use our online quote form. We typically respond within a few hours with a timeline and price. You can also estimate volume and drying time with our timber calculator.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE}/services/kiln-drying`,
  name: 'Wood Kiln Drying',
  serviceType: 'Timber kiln drying',
  description:
    'Industrial automated kiln drying of timber to 12–15% moisture content across all species. Reduces warping, cracking, and dimensional instability for construction, furniture, joinery, and export use. ISPM 15 heat-treatment compliant.',
  url: `${BASE}/services/kiln-drying`,
  areaServed: { '@type': 'Country', name: 'Sri Lanka' },
  provider: {
    '@type': 'LocalBusiness',
    name: 'St. Xavier Timber',
    url: BASE,
    telephone: PHONES_E164,
    email: EMAIL,
    address: POSTAL_ADDRESS,
    geo: GEO,
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const ASPECTS = [
  {
    tag: 'The Process',
    name: 'Fully automated kiln drying',
    headline: 'Precision temperature & moisture control',
    desc: 'Timber is loaded into a closed chamber where temperature, humidity, and airflow are controlled and adjusted throughout the cycle. An advanced temper-control system follows a species-specific schedule so moisture leaves evenly from core to surface — the key to timber that stays flat after it leaves the kiln.',
    details: [
      'Fully automated kiln with advanced temper control',
      'Species-specific drying schedules for even results',
      'Calibrated meters verify moisture at multiple points per batch',
      'Minimal cracking, warping, or case-hardening post-drying',
    ],
  },
  {
    tag: 'What You Get',
    name: 'Stable timber to 12–15% MC',
    headline: 'Ready for cutting, machining, and finishing',
    desc: 'Timber comes out dimensionally stable and ready for its intended use — critical for furniture, joinery, doors, windows, and fit-out work where warping or shrinkage after installation is not acceptable. Correctly dried timber also machines cleanly and holds glue and finishes far better.',
    details: [
      'Target: 12–15% moisture content across all species',
      'Suitable for construction, furniture, doors, windows, and export',
      'Reduced weight and improved dimensional stability',
      'Better machining, gluing, and finishing performance',
    ],
  },
  {
    tag: 'Species & Scope',
    name: 'All commercial species',
    headline: 'Rubberwood, teak, mahogany, pine and more',
    desc: 'We kiln-dry the full range of local and imported species — rubberwood, teak, mahogany, jak, pine, and others — each on a schedule matched to its density and behaviour. Many customers across Sri Lanka send timber to our facility for drying and arrange collection or island-wide delivery.',
    details: [
      'Local and imported hardwoods and softwoods',
      'Drying time typically 3–12 days by species and thickness',
      'ISPM 15 heat-treatment compliant for export packaging',
      'Island-wide delivery of treated timber available',
    ],
  },
];

export default function KilnDryingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Our Services · Kiln Drying</span>
          <h1 className={styles.h1}>
            Wood Kiln Drying<br />
            <em>in Sri Lanka</em>
          </h1>
          <p className={styles.heroSub}>
            Sri Lanka&apos;s most experienced timber treatment facility. Our fully automated kiln uses precision
            temperature and moisture control to bring timber to a stable 12–15% moisture content — reducing warping,
            cracking, and instability across every species. IPPC registered, ISPM 15 certified, Est. 1955.
          </p>
          <div className={styles.heroBadges}>
            {['12–15% Moisture', 'Automated Kiln', 'ISPM 15 Compliant', 'Est. 1955'].map((b) => (
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

      {/* Intro */}
      <section className={styles.location}>
        <div className={styles.locationInner}>
          <div className={styles.locationText}>
            <h2 className={styles.locationH2}>Why kiln drying matters</h2>
            <p className={styles.locationDesc}>
              Timber straight from the mill can hold 30–60% moisture. Used at that level it warps, shrinks, splits, and
              moves after installation — the single most common cause of furniture and joinery failure. Air drying stalls
              at 16–19% in Sri Lanka&apos;s humidity, which is still too wet for interior or export work. Kiln drying is
              the only reliable way to reach a stable 12–15% quickly and consistently. It also pairs with our{' '}
              <a href="/#services" className={styles.contactLink}>VPI preservative treatment</a> and{' '}
              <a href="/timber-treatment-colombo" className={styles.contactLink}>island-wide service</a> for a
              complete, export-ready result.
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
            <div className={styles.lStat}><span className={styles.lNum}>12–15%</span><span className={styles.lLabel}>target moisture content</span></div>
            <div className={styles.lStat}><span className={styles.lNum}>3–12</span><span className={styles.lLabel}>days per batch</span></div>
            <div className={styles.lStat}><span className={styles.lNum}>70+</span><span className={styles.lLabel}>years in operation</span></div>
          </div>
        </div>
      </section>

      {/* Aspects */}
      <section className={styles.services}>
        <div className={styles.servicesInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>How It Works</span>
            <h2 className={styles.sectionH2}>Controlled Drying, Consistent Results</h2>
          </div>
          <div className={styles.servicesList}>
            {ASPECTS.map((s) => (
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
          <h2 className={styles.sectionH2}>Kiln Drying — Common Questions</h2>
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
          <h2 className={styles.ctaH2}>Ready to dry your timber?</h2>
          <p className={styles.ctaSub}>
            Send us your timber species, dimensions, quantity, and required moisture content. We will advise on the right
            drying schedule and provide a quote — usually within a few hours.
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
