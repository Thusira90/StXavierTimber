import type { Metadata } from 'next';
import Link from 'next/link';
import { OG_BASE } from '@/lib/seo';
import ServicePage, { servicePageStyles as styles, type ServiceFaq, type ServiceAspect } from '@/components/ServicePage';

const BASE = 'https://www.stxaviertimber.com';
const PATH = '/services/ispm-15-heat-treatment';

export const metadata: Metadata = {
  title: 'ISPM 15 Heat Treatment of Timber Sri Lanka',
  description:
    'IPPC-registered ISPM 15 heat treatment of packaging timber, crates and dunnage: 56°C core for 30 minutes, IPPC mark and batch record.',
  keywords: [
    'ISPM 15 heat treatment Sri Lanka',
    'ISPM 15 treatment',
    'IPPC registered heat treatment',
    'heat treatment wood packaging Sri Lanka',
    'dunnage heat treatment',
    'export crate timber treatment',
    'phytosanitary treatment timber Sri Lanka',
    'HT mark Sri Lanka',
  ],
  alternates: { canonical: `${BASE}${PATH}` },
  openGraph: {
    ...OG_BASE,
    title: 'ISPM 15 Heat Treatment of Timber in Sri Lanka | St. Xavier Timber',
    description:
      'IPPC-registered heat treatment of wooden packaging timber, crates and dunnage to ISPM 15. IPPC mark and per-batch treatment record.',
    url: `${BASE}${PATH}`,
  },
};

const FAQS: ServiceFaq[] = [
  {
    q: 'What does ISPM 15 heat treatment require?',
    a: 'The whole cross-section of the wood must reach a core temperature of 56°C and hold it for at least 30 continuous minutes, verified by probes in the thickest pieces. The treatment must be done by an IPPC-registered facility, and each item is then marked with the IPPC mark.',
  },
  {
    q: 'What can you heat-treat?',
    a: 'Solid wood used for export packaging: sawn packaging timber, crate and box components, skids, bearers, blocks and loose dunnage. Bring us the timber before assembly, or finished wooden packaging, and we treat and mark it. We are a treatment facility; we do not manufacture or sell packaging.',
  },
  {
    q: 'What does the IPPC mark show?',
    a: 'The IPPC symbol, the country code (LK), the treating facility’s unique registration number, and the treatment code HT for heat treatment. Customs inspectors at the destination port check this mark; an absent or incorrect mark is treated the same as untreated wood.',
  },
  {
    q: 'Do you issue a treatment certificate?',
    a: 'Yes. Every batch receives a treatment record showing the date, treatment parameters and quantity. Keep it with your shipping documents.',
  },
  {
    q: 'How quickly can you treat a batch?',
    a: 'The heat cycle itself is short, but chamber scheduling, marking and transport take time. Contact us with your volume and shipping date as early as possible and we will schedule around your deadline.',
  },
  {
    q: 'Is plywood or MDF packaging covered by ISPM 15?',
    a: 'No. Processed wood products such as plywood, particle board, OSB and MDF are exempt from ISPM 15 because the manufacturing process already removes the pest risk. The standard applies to solid wood packaging material.',
  },
  {
    q: 'Does a repair void the treatment?',
    a: 'Yes, if the repair uses untreated wood. Packaging repaired with an unmarked board is no longer compliant and must be re-treated and re-marked before it can be used for export.',
  },
];

const ASPECTS: ServiceAspect[] = [
  {
    tag: 'The Standard',
    name: '56°C core for 30 minutes',
    headline: 'Verified at the core of the thickest piece',
    desc: 'ISPM 15 heat treatment kills all life stages of regulated pests, including eggs, larvae and adults, by holding the core of every piece at 56°C for at least 30 continuous minutes. We verify core temperature with calibrated probes placed in the thickest pieces of each load.',
    details: [
      'Core temperature 56°C held for 30 continuous minutes',
      'Calibrated probes in the thickest pieces',
      'Heat treatment (HT); no methyl bromide',
      'Carried out by an IPPC-registered facility',
    ],
  },
  {
    tag: 'What We Treat',
    name: 'Packaging timber, crates, dunnage',
    headline: 'Your timber, treated and marked',
    desc: 'Packaging makers bring us sawn timber before assembly. Exporters bring finished crates, skids and loose dunnage. Both leave treated, marked and documented. We treat the timber; we do not make or sell the packaging.',
    details: [
      'Sawn packaging timber before assembly',
      'Crate and box components, skids and bearers',
      'Loose dunnage and bracing timber',
      'Kiln drying available in the same visit',
    ],
  },
  {
    tag: 'Documentation',
    name: 'IPPC mark and batch record',
    headline: 'Ready for customs inspection',
    desc: 'Each treated item carries the IPPC mark with country code LK, our facility registration number and the HT code. Each batch gets a treatment record with date, parameters and quantity for your shipping file.',
    details: [
      'IPPC mark applied to treated items',
      'Per-batch treatment record',
      'Registered with the National Plant Quarantine Service',
      'Accepted by IPPC member countries worldwide',
    ],
  },
];

export default function IspmPage() {
  return (
    <ServicePage
      path={PATH}
      schemaName='ISPM 15 Heat Treatment of Wood Packaging Timber'
      serviceType='Phytosanitary heat treatment (ISPM 15)'
      schemaDescription='IPPC-registered ISPM 15 heat treatment of solid wood packaging timber, crate components, skids and dunnage: 56°C core temperature for 30 continuous minutes, IPPC mark (LK, HT) and per-batch treatment record.'
      breadcrumbName='ISPM 15 Heat Treatment'
      eyebrow='Our Services · ISPM 15'
      h1={<>ISPM 15 Heat Treatment{' '}<br /><em>of Timber in Sri Lanka</em></>}
      heroSub='IPPC-registered heat treatment of packaging timber, crate components, skids and dunnage to the ISPM 15 standard. 56°C core for 30 minutes, IPPC mark applied, and a treatment record issued for every batch. Est. 1955.'
      badges={['IPPC Registered', '56°C / 30 min', 'IPPC Mark (HT)', 'Batch Records']}
      introH2='Why export wood needs ISPM 15'
      intro={
        <>
          <p>
            Most countries refuse, fumigate or destroy solid wood packaging that arrives without a valid ISPM 15 mark.
            The cost falls on the exporter, and the delay can cost the contract. Heat treatment by a registered facility
            removes that risk for a small cost per item. We are a timber treatment facility, not a packaging maker:
            bring us your packaging timber or finished wooden packaging and we treat, mark and document it. Read our{' '}
            <Link href='/blog/what-is-ispm-15-heat-treatment' className={styles.contactLink}>guide to ISPM 15</Link> and the{' '}
            <Link href='/blog/ispm-15-certification-sri-lanka-exporters-guide' className={styles.contactLink}>exporter’s certification checklist</Link>,
            or combine treatment with <Link href='/services/kiln-drying' className={styles.contactLink}>kiln drying</Link>.
          </p>
        </>
      }
      stats={[
        { num: '56°C', label: 'core temperature' },
        { num: '30 min', label: 'minimum hold' },
        { num: 'LK · HT', label: 'IPPC mark codes' },
      ]}
      aspectsEyebrow='How It Works'
      aspectsH2='Treated, Marked, Documented'
      aspects={ASPECTS}
      faqH2='ISPM 15 Heat Treatment — Common Questions'
      faqs={FAQS}
      ctaH2='Shipping soon?'
      ctaSub='Send us the timber or packaging type, dimensions, quantity and shipping date. We will confirm a chamber slot and reply with a quote, usually within a few hours.'
    />
  );
}
