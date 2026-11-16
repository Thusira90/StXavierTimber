import Link from 'next/link';
import type { ReactNode } from 'react';
import { POSTAL_ADDRESS, GEO, PHONES_E164, EMAIL } from '@/lib/company';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Sections';
import styles from '../app/timber-treatment-negombo/negombo.module.css';

// Shared layout for the /services/* landing pages, so every service page
// carries the same Service + FAQPage + BreadcrumbList markup and the same
// hero / intro / aspects / FAQ / CTA structure as /services/kiln-drying.

const BASE = 'https://www.stxaviertimber.com';

export type ServiceFaq = { q: string; a: string };
export type ServiceAspect = { tag: string; name: string; headline: string; desc: string; details: string[] };

type Props = {
  path: string;
  schemaName: string;
  serviceType: string;
  schemaDescription: string;
  breadcrumbName: string;
  eyebrow: string;
  h1: ReactNode;
  heroSub: string;
  badges: string[];
  introH2: string;
  intro: ReactNode;
  stats: { num: string; label: string }[];
  aspectsEyebrow: string;
  aspectsH2: string;
  aspects: ServiceAspect[];
  extra?: ReactNode;
  faqH2: string;
  faqs: ServiceFaq[];
  ctaH2: string;
  ctaSub: string;
};

export default function ServicePage(p: Props) {
  const url = `${BASE}${p.path}`;
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': url,
    name: p.schemaName,
    serviceType: p.serviceType,
    description: p.schemaDescription,
    url,
    areaServed: { '@type': 'Country', name: 'Sri Lanka' },
    provider: {
      '@type': 'LocalBusiness',
      '@id': BASE,
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
    mainEntity: p.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE}/#services` },
      { '@type': 'ListItem', position: 3, name: p.breadcrumbName, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>{p.eyebrow}</span>
          <h1 className={styles.h1}>{p.h1}</h1>
          <p className={styles.heroSub}>{p.heroSub}</p>
          <div className={styles.heroBadges}>
            {p.badges.map((b) => (
              <span key={b} className={styles.badge}>{b}</span>
            ))}
          </div>
          <div className={styles.heroActions}>
            <Link href="/contact-us" className={styles.btnPrimary}>Get a Quote</Link>
            <a href="https://wa.me/94714711417" className={styles.btnWa} target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <section className={styles.location}>
        <div className={styles.locationInner}>
          <div className={styles.locationText}>
            <h2 className={styles.locationH2}>{p.introH2}</h2>
            <div className={styles.locationDesc}>{p.intro}</div>
            <div className={styles.contactRow}>
              <a href="tel:+94312277752" className={styles.contactLink}>031 227 7752</a>
              <span className={styles.dot}>·</span>
              <a href="tel:+94714711417" className={styles.contactLink}>071 471 1417</a>
              <span className={styles.dot}>·</span>
              <a href="mailto:info@stxaviertimber.com" className={styles.contactLink}>info@stxaviertimber.com</a>
            </div>
          </div>
          <div className={styles.locationStats}>
            {p.stats.map((s) => (
              <div key={s.label} className={styles.lStat}>
                <span className={styles.lNum}>{s.num}</span>
                <span className={styles.lLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles.servicesInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>{p.aspectsEyebrow}</span>
            <h2 className={styles.sectionH2}>{p.aspectsH2}</h2>
          </div>
          <div className={styles.servicesList}>
            {p.aspects.map((s) => (
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
                        <circle cx="6" cy="6" r="5.5" stroke="#5a7a2e" strokeWidth="1" />
                        <path d="M3.5 6l1.8 1.8L8.5 4.5" stroke="#5a7a2e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
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

      {p.extra}

      <section className={styles.faq}>
        <div className={styles.faqInner}>
          <h2 className={styles.sectionH2}>{p.faqH2}</h2>
          <div className={styles.faqList}>
            {p.faqs.map((f) => (
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
          <h2 className={styles.ctaH2}>{p.ctaH2}</h2>
          <p className={styles.ctaSub}>{p.ctaSub}</p>
          <div className={styles.ctaActions}>
            <Link href="/contact-us" className={styles.ctaBtn}>Get a Quote</Link>
            <Link href="/calculator" className={styles.ctaSecondary}>Use the Calculator →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export { styles as servicePageStyles };
