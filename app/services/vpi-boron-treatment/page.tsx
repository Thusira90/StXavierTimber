import type { Metadata } from 'next';
import Link from 'next/link';
import { OG_BASE } from '@/lib/seo';
import ServicePage, { servicePageStyles as styles, type ServiceFaq, type ServiceAspect } from '@/components/ServicePage';

const BASE = 'https://www.stxaviertimber.com';
const PATH = '/services/vpi-boron-treatment';

export const metadata: Metadata = {
  title: 'VPI Boron Timber Treatment Sri Lanka',
  description:
    'Vacuum pressure impregnation with 5% borate at 10 bar. Termite and borer protection for roof, frame and furniture timber, 10-year pest warranty.',
  keywords: [
    'VPI timber treatment Sri Lanka',
    'boron treatment timber',
    'boron treated timber Sri Lanka',
    'borate timber treatment',
    'vacuum pressure impregnation Sri Lanka',
    'termite treatment timber Sri Lanka',
    'treated rubberwood Sri Lanka',
    'roof timber treatment',
    'timber preservation Sri Lanka',
  ],
  alternates: { canonical: `${BASE}${PATH}` },
  openGraph: {
    ...OG_BASE,
    title: 'VPI Boron Timber Treatment in Sri Lanka | St. Xavier Timber',
    description:
      '5% borate preservative driven in at 10 bar (145 PSI), retention verified per batch, 10-year pest warranty. Est. 1955.',
    url: `${BASE}${PATH}`,
  },
};

const FAQS: ServiceFaq[] = [
  {
    q: 'What is VPI boron treatment?',
    a: 'Vacuum pressure impregnation (VPI) is a two-stage process. A 45-minute vacuum first draws air out of the wood cells, then a 5% borate (boron) preservative solution is forced into the timber at 10 bar (145 PSI) for 2–6 hours depending on species and thickness. The preservative is driven deep into the timber rather than sitting on the surface, and retention is verified per species and dimension.',
  },
  {
    q: 'What does borate VPI protect against?',
    a: 'Termites, wood-boring beetles (including the powder-post beetles that destroy untreated rubberwood) and fungal decay in timber that stays dry. It is the right treatment for roof trusses, rafters, purlins, wall plates, door and window frames, ceilings, flooring, joinery and furniture.',
  },
  {
    q: 'Can borate-treated timber be used outdoors or in ground contact?',
    a: 'No. Borate stays water-soluble, so repeated wetting leaches it out of the timber. Borate VPI is designed for dry, interior and sheltered above-ground use. It is not suitable for fence posts, timber set in soil, exposed decking that ponds water, or marine work. For those uses a fixed, copper-based preservative is needed, which we do not offer — tell us the application and we will say plainly whether borate VPI is suitable.',
  },
  {
    q: 'Is boron-treated timber safe indoors?',
    a: 'Yes. The borate preservative we use contains no heavy metals, no arsenic and no solvents. Treated timber can be handled, painted, varnished and finished after treatment, and is widely used in homes, furniture and interiors.',
  },
  {
    q: 'Which species need VPI treatment?',
    a: 'Non-durable species benefit most: rubberwood, pine, albizia, eucalyptus and sapwood of most hardwoods. Rubberwood in particular should always be VPI-treated, as it is highly prone to borer attack. Naturally durable heartwood such as teak usually needs kiln drying only.',
  },
  {
    q: 'What does the 10-year warranty cover?',
    a: 'Attack by termites and wood-boring insects within 10 years of treatment, for timber treated to the specified retention and installed in dry, sheltered, above-ground conditions, with the original treatment record retained. Full terms are on our warranty page.',
  },
  {
    q: 'Should timber be kiln dried before or after VPI?',
    a: 'Both orders are used. Most structural and furniture timber is VPI-treated and then kiln dried to a stable 12–15% moisture content, so the timber is protected and dimensionally stable before machining. We advise the right sequence for your species and use.',
  },
];

const ASPECTS: ServiceAspect[] = [
  {
    tag: 'The Process',
    name: 'Vacuum, then 10 bar pressure',
    headline: 'Preservative in the timber, not on it',
    desc: 'Timber is loaded into a sealed pressure vessel. A 45-minute initial vacuum removes air from the wood cells; the 5% borate solution is then introduced and held at 10 bar (145 PSI) for 2–6 hours. A final vacuum draws off surface excess and the timber rests 24 hours to allow fixation.',
    details: [
      '45-minute initial vacuum',
      '5% borate solution at 10 bar / 145 PSI',
      'Pressure held 2–6 hours by species and thickness',
      'Retention verified per species and dimension',
    ],
  },
  {
    tag: 'Best Uses',
    name: 'Roofing, frames, furniture',
    headline: 'Dry, interior and sheltered above-ground timber',
    desc: 'Borate VPI is the standard specification for roof structures — trusses, rafters, purlins and wall plates — and for door and window frames, ceilings, floors, joinery and furniture. These are the members most often attacked by termites and borers in Sri Lankan buildings, and the ones most expensive to replace once a roof is on.',
    details: [
      'Roof trusses, rafters, purlins, wall plates',
      'Door and window frames, ceilings, flooring',
      'Rubberwood, pine and albizia furniture stock',
      'Interior joinery and fit-out timber',
    ],
  },
  {
    tag: 'Documentation',
    name: 'Records and warranty',
    headline: 'Every batch documented',
    desc: 'Each order leaves with a treatment record covering species, dimensions, pre-treatment moisture content, VPI cycle parameters, preservative concentration and retention. That record backs the 10-year pest warranty and belongs in the building handover file.',
    details: [
      'Batch treatment record with cycle parameters',
      '10-year warranty against termites and borers',
      'Suitable for contractor and QS documentation',
      'Combine with kiln drying for stable, protected timber',
    ],
  },
];

export default function VpiPage() {
  return (
    <ServicePage
      path={PATH}
      schemaName='VPI Boron Timber Treatment'
      serviceType='Timber preservation (vacuum pressure impregnation)'
      schemaDescription='Vacuum pressure impregnation of timber with a 5% borate preservative at 10 bar (145 PSI), retention verified per species and dimension. For dry, interior and sheltered above-ground timber. 10-year warranty against termites and wood-boring insects.'
      breadcrumbName='VPI Boron Treatment'
      eyebrow='Our Services · VPI Treatment'
      h1={<>VPI Boron Timber Treatment{' '}<br /><em>in Sri Lanka</em></>}
      heroSub='Vacuum pressure impregnation drives a 5% borate preservative deep into the timber at 10 bar (145 PSI), protecting roof, frame, joinery and furniture timber against termites, borers and decay. Retention verified per batch, backed by a 10-year pest warranty. Est. 1955.'
      badges={['5% Borate', '10 Bar / 145 PSI', '10-Year Pest Warranty', 'Est. 1955']}
      introH2='Why pressure treatment, not brushing'
      intro={
        <>
          <p>
            Brushed, sprayed or dipped preservative only coats the surface. The first cut, drilled hole or joint exposes
            untreated wood, and termites and borers go straight in. VPI forces the preservative into the timber itself, so
            protection survives machining. Rubberwood, pine and other plantation timbers now used in place of scarce
            durable hardwoods must be treated before use. Fixing it later costs far more than treating before
            installation. Pair VPI with <Link href='/services/kiln-drying' className={styles.contactLink}>kiln drying</Link>{' '}
            for timber that is both protected and stable, and read our guides to{' '}
            <Link href='/blog/what-is-vacuum-pressure-impregnation' className={styles.contactLink}>how VPI works</Link> and{' '}
            <Link href='/blog/boron-borax-vs-other-timber-preservatives' className={styles.contactLink}>borate vs other preservatives</Link>.
          </p>
        </>
      }
      stats={[
        { num: '10 bar', label: 'impregnation pressure' },
        { num: '5%', label: 'borate solution' },
        { num: '10 yr', label: 'pest warranty' },
      ]}
      aspectsEyebrow='How It Works'
      aspectsH2='Deep Preservation, Documented'
      aspects={ASPECTS}
      extra={
        <section className={styles.location}>
          <div className={styles.locationInner}>
            <div className={styles.locationText}>
              <h2 className={styles.locationH2}>What borate VPI is for, and what it is not for</h2>
              <div className={styles.locationDesc}>
                <p>
                  Borate is the right preservative for timber that stays dry: inside the building envelope, under a roof,
                  or sheltered above ground. It is not a ground-contact or marine treatment. Borate stays water-soluble, so
                  timber that is rained on repeatedly, set in soil or in contact with seawater will lose its preservative
                  over time. For fence posts, exposed decking, poles, jetties and similar exterior work, specify a fixed,
                  copper-based preservative from a supplier that offers one. We do not offer that treatment. If you are not
                  sure where your timber falls, send us the application and we will tell you honestly. See the{' '}
                  <Link href='/warranty' className={styles.contactLink}>warranty terms</Link> for the exact conditions.
                </p>
              </div>
            </div>
          </div>
        </section>
      }
      faqH2='VPI Treatment — Common Questions'
      faqs={FAQS}
      ctaH2='Need timber treated?'
      ctaSub='Send us the species, dimensions, quantity and what the timber will be used for. We will confirm whether borate VPI suits the application and reply with a quote, usually within a few hours.'
    />
  );
}
