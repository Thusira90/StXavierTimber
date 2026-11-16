import type { Metadata } from 'next';
import Link from 'next/link';
import { OG_BASE } from '@/lib/seo';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Sections';
import styles from '../timber-treatment-negombo/negombo.module.css';

const BASE = 'https://www.stxaviertimber.com';

export const metadata: Metadata = {
  title: '10-Year VPI Pest Warranty Terms',
  description:
    'What the St. Xavier Timber 10-year pest warranty on VPI-treated timber covers, what it excludes, the installation conditions, and how to claim.',
  alternates: { canonical: `${BASE}/warranty` },
  openGraph: {
    ...OG_BASE,
    title: '10-Year VPI Pest Warranty Terms | St. Xavier Timber',
    description: 'Cover, exclusions, conditions and claims process for the 10-year pest warranty on VPI-treated timber.',
    url: `${BASE}/warranty`,
  },
};

const TERMS = [
  {
    h: 'What is covered',
    items: [
      'Attack by termites and wood-boring insects in timber VPI-treated by St. Xavier Timber.',
      'Within 10 years of the treatment date shown on the batch treatment record.',
      'Timber treated to the specified retention and installed in the conditions below.',
    ],
  },
  {
    h: 'Installation conditions',
    items: [
      'Dry, interior or sheltered above-ground applications: roof structures, frames, ceilings, floors, joinery and furniture.',
      'Not in ground contact, not embedded in wet soil or masonry that stays wet, and not exposed to repeated rain wash or ponding water.',
      'Not in marine or tidal applications.',
    ],
  },
  {
    h: 'What is not covered',
    items: [
      'Fungal decay caused by prolonged water contact, which borate treatment is not designed to resist.',
      'Damage from ground contact or repeated rain wash.',
      'Mechanical damage, structural failure from overload, and fire.',
      'Damage caused by improper installation or use.',
    ],
  },
  {
    h: 'How to claim',
    items: [
      'Keep the original batch treatment record. It is the basis of every claim.',
      'Contact us with the treatment record, the installation date, and a description and photos of the symptoms (exit holes, boring dust, mud tubes, soft or hollow sections) and where they are.',
      'We arrange an inspection to confirm the nature and cause of the damage. Where it is insect attack on correctly installed VPI-treated timber, we agree the remedy with you. Where the cause is outside the warranty scope, we explain the findings and the remedial options.',
    ],
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE}/warranty`,
  url: `${BASE}/warranty`,
  name: '10-Year VPI Pest Warranty Terms',
  about: { '@type': 'Service', '@id': `${BASE}/services/vpi-boron-treatment`, name: 'VPI Boron Timber Treatment' },
  publisher: { '@type': 'LocalBusiness', '@id': BASE, name: 'St. Xavier Timber' },
};

export default function WarrantyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Warranty</span>
          <h1 className={styles.h1}>
            10-Year Pest Warranty{' '}<br />
            <em>on VPI-Treated Timber</em>
          </h1>
          <p className={styles.heroSub}>
            Every order of timber VPI-treated by St. Xavier Timber carries a 10-year warranty against termites and
            wood-boring insects, backed by the batch treatment record. These are the terms in plain language.
          </p>
        </div>
      </section>

      <section className={styles.faq}>
        <div className={styles.faqInner}>
          <div className={styles.faqList}>
            {TERMS.map((t) => (
              <div key={t.h} className={styles.faqItem}>
                <h2 className={styles.faqQ}>{t.h}</h2>
                <ul>
                  {t.items.map((i) => (
                    <li key={i} className={styles.faqA}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className={styles.faqA}>
            For background, read{' '}
            <Link href="/blog/what-does-10-year-timber-pest-warranty-cover" className={styles.contactLink}>
              what a 10-year timber pest warranty actually covers
            </Link>{' '}
            and see the <Link href="/services/vpi-boron-treatment" className={styles.contactLink}>VPI treatment service</Link>.
          </p>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaH2}>Questions about a warranty or a claim?</h2>
          <p className={styles.ctaSub}>Call 031 227 7752 or send us your treatment record and we will get back to you.</p>
          <div className={styles.ctaActions}>
            <Link href="/contact-us" className={styles.ctaBtn}>Contact Us</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
