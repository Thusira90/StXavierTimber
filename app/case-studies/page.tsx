import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Sections';
import styles from './case-studies.module.css';

const BASE = 'https://www.stxaviertimber.com';

export const metadata: Metadata = {
  title: 'Case Studies | Timber Treatment Results — St. Xavier Timber',
  description:
    'Real results from St. Xavier Timber clients. How kiln drying and VPI treatment solved contamination, warping, and cracking for Sri Lanka construction companies.',
  alternates: { canonical: `${BASE}/case-studies` },
  openGraph: { url: `${BASE}/case-studies` },
};

const caseStudySchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'St. Xavier Timber Case Studies',
  description: 'Real results from timber treatment projects completed by St. Xavier Timber in Sri Lanka.',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Article',
        headline: 'Failed VPI Treatment Reversed — 7 Years Pest-Free',
        description: 'A construction company came to St. Xavier Timber after VPI treatment done by another provider failed. Timber had become contaminated. St. Xavier re-treated with full VPI and kiln drying, issued a warranty. No pest issues reported in 7 years.',
        author: { '@type': 'Organization', name: 'St. Xavier Timber', url: BASE },
        publisher: { '@type': 'Organization', name: 'St. Xavier Timber', url: BASE },
        about: { '@type': 'Service', name: 'Vacuum Pressure Impregnation', provider: { '@type': 'LocalBusiness', name: 'St. Xavier Timber', '@id': BASE } },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Article',
        headline: 'Timber Sold as Kiln Dried at 56% Moisture — Rescued and Redried to 15%',
        description: 'A construction company\'s timber warped and cracked weeks after installation. Moisture content was measured at above 56% — despite being sold as kiln dried. St. Xavier Timber redried the timber to 15% MC. No warping or cracking in 5 years.',
        author: { '@type': 'Organization', name: 'St. Xavier Timber', url: BASE },
        publisher: { '@type': 'Organization', name: 'St. Xavier Timber', url: BASE },
        about: { '@type': 'Service', name: 'Kiln Drying', provider: { '@type': 'LocalBusiness', name: 'St. Xavier Timber', '@id': BASE } },
      },
    },
  ],
};

const CASES = [
  {
    id: 'cs-01',
    tag: 'VPI Treatment · Construction',
    headline: 'Failed VPI Treatment Reversed — 7 Years Pest-Free',
    situation: {
      label: 'The Situation',
      text: 'A construction company had their structural timber vacuum pressure impregnated by another provider. Within a relatively short period, the timber showed signs of pest contamination — evidence that the treatment had not been carried out correctly. The preservative had not penetrated to the wood core, leaving the timber unprotected despite having been treated and paid for.',
    },
    problem: {
      label: 'The Problem with the Original Treatment',
      text: 'Proper VPI requires a sustained vacuum to evacuate air from wood cells, followed by preservative forced in at high pressure — typically 10 bar (145 PSI) — and held for several hours. If either the vacuum stage or the pressure stage is cut short, the preservative saturates the surface only. The core remains untreated. This is difficult to detect visually, which is why substandard treatment often isn\'t discovered until pests establish themselves.',
    },
    solution: {
      label: 'What We Did',
      text: 'St. Xavier Timber assessed the contaminated timber and carried out a full re-treatment: a complete VPI cycle using 5% Boron Borax at 10 bar, followed by kiln drying to stabilise moisture content. The timber was returned to the client with our standard warranty against pest contamination.',
    },
    result: {
      label: 'The Result',
      stat: '7 years',
      statLabel: 'without a single pest complaint',
      text: 'It has been close to seven years since the re-treatment was completed. The client has reported no pest issues of any kind. The warranty remains in place.',
    },
    lesson: 'VPI treatment that has not been done correctly provides no protection — and can give false confidence that the timber is safe. If your treated timber is showing pest activity, have the moisture and treatment records checked before assuming the wood itself is at fault.',
  },
  {
    id: 'cs-02',
    tag: 'Kiln Drying · Construction',
    headline: 'Timber Sold as Kiln-Dried at 56% Moisture — Redried and Stable for 5 Years',
    situation: {
      label: 'The Situation',
      text: 'A construction company purchased timber that was represented by the supplier as kiln-dried and ready for use. Within a few weeks of installation, the timber began to warp and crack visibly — behaviour consistent with timber that has lost moisture rapidly after installation in a drier environment.',
    },
    problem: {
      label: 'What We Found',
      text: 'When the timber arrived at St. Xavier Timber, we measured the moisture content. It was above 56%. Properly kiln-dried structural timber should be at 12–15% moisture content. At 56%, this timber was closer to freshly cut green wood than to dried stock. The rapid moisture loss after installation — as the wood tried to equalise with the surrounding environment — was the direct cause of the warping and cracking.',
    },
    solution: {
      label: 'What We Did',
      text: 'We ran the timber through a full kiln drying cycle, taking it from above 56% moisture content down to 15%. The drying schedule was calibrated for the species and thickness to prevent stress cracking during the drying process itself. Moisture was verified at multiple points across the load before release.',
    },
    result: {
      label: 'The Result',
      stat: '5 years',
      statLabel: 'no warping or cracking reported',
      text: 'Five years after the timber was correctly dried and returned, the client has reported no warping, cracking, or dimensional movement. The timber has performed as correctly kiln-dried timber should.',
    },
    lesson: 'Kiln-dried timber can only be verified by measuring moisture content — not by asking the supplier. If you are purchasing large volumes for structural use, request a moisture reading at intake or bring a sample to us before installation begins.',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }} />
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Client Results</span>
          <h1 className={styles.h1}>
            What happens when<br />
            <em>timber treatment goes wrong.</em>
          </h1>
          <p className={styles.heroSub}>
            Two anonymised cases from construction clients in Sri Lanka — the problem they arrived with,
            what we found, what we did, and the outcome years later.
          </p>
        </div>
      </section>

      {/* Cases */}
      <div className={styles.cases}>
        {CASES.map((c, i) => (
          <article key={c.id} className={styles.case} id={c.id}>
            <div className={styles.caseInner}>

              {/* Header */}
              <div className={styles.caseHeader}>
                <span className={styles.caseTag}>{c.tag}</span>
                <h2 className={styles.caseHeadline}>{c.headline}</h2>
              </div>

              {/* Body */}
              <div className={styles.caseBody}>
                <div className={styles.caseContent}>
                  <div className={styles.block}>
                    <span className={styles.blockLabel}>{c.situation.label}</span>
                    <p className={styles.blockText}>{c.situation.text}</p>
                  </div>
                  <div className={styles.block}>
                    <span className={styles.blockLabel}>{c.problem.label}</span>
                    <p className={styles.blockText}>{c.problem.text}</p>
                  </div>
                  <div className={styles.block}>
                    <span className={styles.blockLabel}>{c.solution.label}</span>
                    <p className={styles.blockText}>{c.solution.text}</p>
                  </div>
                </div>

                <div className={styles.caseSide}>
                  <div className={styles.resultCard}>
                    <span className={styles.resultEyebrow}>{c.result.label}</span>
                    <div className={styles.resultStat}>{c.result.stat}</div>
                    <div className={styles.resultStatLabel}>{c.result.statLabel}</div>
                    <p className={styles.resultText}>{c.result.text}</p>
                  </div>
                  <div className={styles.lessonCard}>
                    <span className={styles.lessonLabel}>Key Takeaway</span>
                    <p className={styles.lessonText}>{c.lesson}</p>
                  </div>
                </div>
              </div>

            </div>
            {i < CASES.length - 1 && <div className={styles.divider} />}
          </article>
        ))}
      </div>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaH2}>Not sure if your timber has been treated correctly?</h2>
          <p className={styles.ctaSub}>
            Bring a sample to our facility in Daluwakotuwa and we will measure the moisture content
            and assess the treatment — at no charge. Or call us with your specifications.
          </p>
          <div className={styles.ctaActions}>
            <a href="/#contact" className={styles.ctaBtn}>Get in Touch</a>
            <a href="tel:+94312277752" className={styles.ctaPhone}>031 227 7752</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
