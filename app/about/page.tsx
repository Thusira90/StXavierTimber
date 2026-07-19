import Image from 'next/image';
import Navbar from '../../components/Navbar';
import { Footer } from '../../components/Sections';
import styles from './about.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'About St. Xavier Timber | Timber Treatment Since 1955' },
  description:
    'Family-owned since 1955. IPPC registered kiln drying, VPI, and ISPM 15 heat treatment in Daluwakotuwa, Kochchikade — four generations of timber expertise.',
  alternates: { canonical: 'https://www.stxaviertimber.com/about' },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'St. Xavier Timber — Kiln Drying & VPI Treatment Sri Lanka' }], url: 'https://www.stxaviertimber.com/about' },
};

// Ordered oldest to newest. These prints are undated — the family places them
// somewhere between the 1950s and the 1980s — so captions describe only what is
// visible in the frame. Do not add years to individual photographs.
const archive = [
  {
    src: '/history/1.jpg',
    w: 656,
    h: 652,
    alt: 'Sepia photograph of the original St. Xavier Timber shopfront, with sawn timber stacked to the rafters and a man seated at the counter.',
    caption: 'The original shopfront, stacked to the rafters.',
  },
  {
    src: '/history/2.jpg',
    w: 672,
    h: 996,
    alt: 'A man in a white shirt and sarong standing with a bicycle outside a palm-thatched timber shed, sawn boards leaning against the wall.',
    caption: 'Outside the yard, boards leaning where they were left.',
  },
  {
    src: '/history/3.jpg',
    w: 1776,
    h: 1180,
    alt: 'A man seated at a workbench inside the timber store, surrounded by stacked sawn timber on every side.',
    caption: 'At the bench, timber stacked on every side.',
  },
  {
    src: '/history/4.jpg',
    w: 1508,
    h: 1016,
    alt: 'A large group of yard workers posed together on and around a felled log at the timber yard.',
    caption: 'The whole crew, gathered on a felled log.',
  },
  {
    src: '/history/5.jpg',
    w: 672,
    h: 928,
    alt: 'A bullock cart loaded with timber standing at the yard, with racks of stacked timber filling the shed behind.',
    caption: 'A bullock cart at the loading bay.',
  },
  {
    src: '/history/6.jpg',
    w: 680,
    h: 712,
    alt: 'Six members of the yard team standing shoulder to shoulder outside the mill, beneath a stack of sawn boards.',
    caption: 'Six of the team, outside the mill.',
  },
  {
    src: '/history/7.jpg',
    w: 1280,
    h: 1024,
    alt: 'A faded colour photograph of men beside an elephant at the timber yard, with the mill shed and coconut palms behind.',
    caption: 'An elephant at the yard, beside the mill shed.',
  },
  {
    src: '/history/8.jpg',
    w: 1512,
    h: 968,
    alt: 'Yard workers at work in the timber store, with sawn timber and the mill shed behind them.',
    caption: 'A working day, somewhere in the middle of it.',
  },
];

const milestones: { year: string; title: string; desc: string; approx?: boolean }[] = [
  {
    year: '1955',
    title: 'Founded in Daluwakotuwa',
    desc: 'St. Xavier Timber was established as a local timber trading operation in Daluwakotuwa, Sri Lanka. What began as a small family enterprise quickly became a trusted name in the regional timber trade.',
  },
  {
    year: '1960s–80s',
    title: 'The Yard Years',
    desc: 'Over these decades the business grew from a local trading operation into an established name across the Western Province — the era our surviving photographs come from. Timber moved by bullock cart and elephant, and the relationships built with construction firms and furniture makers in these years are ones we still hold today. The exact dates are not something we can pin down; the second and third generations grew up in this yard.',
    approx: true,
  },
  {
    year: '1990s',
    title: 'Timber Imports & Processing',
    desc: 'As demand for treated and processed timber increased, St. Xavier expanded into timber imports and basic processing — laying the groundwork for the industrial treatment capabilities that would follow.',
  },
  {
    year: '2005',
    title: 'ISPM 15 Certification Achieved',
    desc: 'St. Xavier Timber achieved IPPC registration, allowing the company to provide certified ISPM 15 heat treatment for timber and wooden packaging destined for international export. This milestone opened the business to Sri Lanka\'s growing export logistics sector.',
  },
  {
    year: '2015',
    title: 'Industrial Treatment Technology',
    desc: 'Investment in modern kiln drying and Vacuum Pressure Impregnation (VPI) infrastructure transformed the business into a full-service timber treatment facility — one of very few in Sri Lanka offering both services under one roof.',
  },
  {
    year: 'Today',
    title: 'Four Generations Strong',
    desc: 'Now in its fourth generation of family ownership, St. Xavier Timber operates as one of Sri Lanka\'s leading timber treatment specialists. IPPC registered, ISPM 15 certified, and serving industries from construction to export logistics island-wide.',
  },
];

const values = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.5 6.5H21l-5.5 4 2 6.5L12 16l-5.5 4 2-6.5L3 9.5h6.5z"/>
      </svg>
    ),
    title: 'Quality First',
    desc: 'Every batch is treated to the same exacting standard — regardless of volume. Quality is not an option we offer; it is the only way we operate.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12M12 12C12 7 7 4 3 6M12 12C12 7 17 4 21 6M3 6c0 6 4 10 9 10M21 6c0 6-4 10-9 10"/>
      </svg>
    ),
    title: 'Sustainable Practice',
    desc: 'Our borate preservative — commonly called Boron Borax, and the active agent at the heart of our VPI treatment — is non-toxic, heavy-metal free, and environmentally safe. We treat timber to last, reducing waste and the need for premature replacement.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4"/><path d="M12 2l2.4 1.8 3-.6 1.2 2.8 2.8 1.2-.6 3L22 12l-1.8 2.4.6 3-2.8 1.2-1.2 2.8-3-.6L12 22l-2.4-1.8-3 .6-1.2-2.8-2.8-1.2.6-3L2 12l1.8-2.4-.6-3 2.8-1.2 1.2-2.8 3 .6z"/>
      </svg>
    ),
    title: 'Compliance & Trust',
    desc: 'IPPC registered and ISPM 15 certified. Our documentation is clean, our treatment records are accurate, and our customers can present them at any port in the world.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'Reliability',
    desc: 'Timelines matter in construction, manufacturing, and export. We treat timber on schedule so our customers can keep their projects and shipments on track.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Our Story</span>
          <h1 className={styles.h1}>
            Seven decades of<br />
            <em>timber expertise.</em>
          </h1>
          <p className={styles.heroSub}>
            From a single timber yard in Daluwakotuwa to one of Sri Lanka's leading treatment
            facilities — built on four generations of family knowledge and a relentless commitment
            to quality.
          </p>
          <div className={styles.heroBadges}>
            {['Est. 1955', 'Four Generations', 'IPPC Registered', 'ISPM 15 Certified'].map((b) => (
              <span key={b} className={styles.badge}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className={styles.introSection}>
        <div className={styles.introInner}>
          <div className={styles.introText}>
            <span className={styles.eyebrowDark}>Who We Are</span>
            <h2 className={styles.h2}>Generations of Knowledge. Consistent Results.</h2>
            <p className={styles.body}>
              St. Xavier Timber was founded in 1955 in Daluwakotuwa, Sri Lanka, by a family with
              deep roots in the local timber trade. What started as a modest trading operation
              supplying construction and furniture businesses in the Western Province has grown,
              over four generations, into one of Sri Lanka's most capable timber treatment
              facilities.
            </p>
            <p className={styles.body}>
              Today we operate an industrial-scale kiln drying facility alongside a Vacuum Pressure
              Impregnation (VPI) chamber — two treatments that complement each other and form the
              backbone of our service offering. We are IPPC registered and ISPM 15 certified,
              enabling us to serve not only local industries but exporters shipping to markets
              across the world.
            </p>
            <p className={styles.body}>
              What sets us apart is not just the machinery — it is the four generations of timber
              knowledge behind every decision. Our team understands how different species respond
              to treatment, how moisture behaves through a drying cycle, and what it takes to
              deliver timber that genuinely performs in the field.
            </p>
          </div>
          <div className={styles.introStats}>
            {[
              { num: '70+', label: 'Years in operation' },
              { num: '4th', label: 'Generation family business' },
              { num: '180+', label: 'Countries accepting our ISPM 15 certification' },
              { num: '10 yr', label: 'Pest warranty on VPI treatment' },
            ].map((s) => (
              <div key={s.label} className={styles.introStat}>
                <span className={styles.introStatNum}>{s.num}</span>
                <span className={styles.introStatLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Archive */}
      <section className={styles.archiveSection}>
        <div className={styles.archiveInner}>
          <div className={styles.archiveHeader}>
            <span className={styles.eyebrowDark}>From the Family Album</span>
            <h2 className={styles.h2}>The Early Decades</h2>
            <p className={styles.archiveIntro}>
              A handful of prints that survived from the yard's first decades — the original
              shopfront, the bullock carts, and the people who did the work. The photographs
              are undated; we know roughly when, but not exactly, so we have left the years off
              rather than guess at them.
            </p>
          </div>
          <div className={styles.archiveGrid}>
            {archive.map((p) => (
              <figure key={p.src} className={styles.archiveFigure}>
                <span className={styles.archiveFrame}>
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={p.w}
                    height={p.h}
                    className={styles.archiveImg}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </span>
                <figcaption className={styles.archiveCaption}>{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={styles.timelineSection}>
        <div className={styles.timelineInner}>
          <div className={styles.timelineHeader}>
            <span className={styles.eyebrowLight}>Our Journey</span>
            <h2 className={styles.h2Light}>Key Milestones</h2>
          </div>
          <div className={styles.timeline}>
            {milestones.map((m, i) => (
              <div key={m.year} className={`${styles.timelineItem} ${i % 2 === 0 ? styles.timelineLeft : styles.timelineRight}`}>
                <div className={styles.timelineCard}>
                  <span className={styles.timelineYear}>
                    {m.year}
                    {m.approx && <span className={styles.timelineApprox}>approx.</span>}
                  </span>
                  <h3 className={styles.timelineTitle}>{m.title}</h3>
                  <p className={styles.timelineDesc}>{m.desc}</p>
                </div>
                <div className={styles.timelineDot} />
              </div>
            ))}
            <div className={styles.timelineLine} />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.valuesSection}>
        <div className={styles.valuesInner}>
          <div className={styles.valuesHeader}>
            <span className={styles.eyebrowDark}>What Drives Us</span>
            <h2 className={styles.h2}>Our Values</h2>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaH2}>Ready to work with us?</h2>
          <p className={styles.ctaSub}>
            Send us your timber specifications and we'll reply with a timeline and quote —
            usually within a few hours.
          </p>
          <div className={styles.ctaActions}>
            <a href="/#contact" className={styles.ctaBtn}>Get a Quote</a>
            <a href="https://wa.me/94714711417" className={styles.ctaWa} target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.554 4.112 1.523 5.84L0 24l6.335-1.501A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.002-1.368l-.359-.214-3.72.881.938-3.618-.235-.372A9.783 9.783 0 012.18 12C2.18 6.566 6.566 2.18 12 2.18c5.434 0 9.82 4.386 9.82 9.82 0 5.434-4.386 9.818-9.82 9.818z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
