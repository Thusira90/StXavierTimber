import type { Metadata } from 'next';
import { OG_BASE } from '@/lib/seo';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Sections';
import TimberCalculator from '@/components/TimberCalculator';
import Link from 'next/link';
import styles from '../timber-treatment-negombo/negombo.module.css';

export const metadata: Metadata = {
  title: { absolute: 'Timber Treatment Calculator | Drying Time & Volume' },
  description:
    'Free timber treatment estimator: enter your species and dimensions for instant volume, drying time, and treatment recommendations.',
  alternates: { canonical: 'https://www.stxaviertimber.com/calculator' },
  openGraph: {
    ...OG_BASE,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'St. Xavier Timber — Kiln Drying & VPI Treatment Sri Lanka' }], url: 'https://www.stxaviertimber.com/calculator' },
};

export default function CalculatorPage() {
  return (
    <>
      <Navbar />
      <TimberCalculator />

      {/* Static, server-rendered explainer so the page has indexable content
          for crawlers and AI assistants that do not run the calculator. */}
      <section className={styles.faq}>
        <div className={styles.faqInner}>
          <h2 className={styles.sectionH2}>How the estimate works</h2>
          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQ}>Volume</h3>
              <p className={styles.faqA}>
                Timber volume is length × width × thickness × number of pieces. In Sri Lanka timber is usually priced
                by the cubic foot: a piece 10 ft long, 6 in wide and 2 in thick is 10 × 0.5 × 0.167 ≈ 0.83 cu ft.
                Treatment and kiln capacity are planned in the same unit, so volume drives both cost and scheduling.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQ}>Drying time</h3>
              <p className={styles.faqA}>
                Kiln drying to 12–15% moisture content typically takes 3–12 days. Thin, light species such as rubberwood
                and pine dry fastest; thick or dense hardwoods such as teak and mahogany take longest. Air-drying under
                cover first shortens kiln time. The calculator gives a range; we confirm the schedule after inspecting
                the load.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQ}>Treatment recommendation</h3>
              <p className={styles.faqA}>
                Non-durable species (rubberwood, pine, albizia, eucalyptus) used indoors or under cover need{' '}
                <Link href="/services/vpi-boron-treatment" className={styles.contactLink}>VPI boron treatment</Link> and{' '}
                <Link href="/services/kiln-drying" className={styles.contactLink}>kiln drying</Link>. Durable heartwood such as
                teak usually needs kiln drying only. Export packaging timber needs{' '}
                <Link href="/services/ispm-15-heat-treatment" className={styles.contactLink}>ISPM 15 heat treatment</Link>.
                Borate VPI is not suitable for ground contact or timber that is wetted repeatedly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
