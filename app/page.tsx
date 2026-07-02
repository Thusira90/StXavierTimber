import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import { Process, Industries, CeyPall, FAQ, Contact, Footer } from '@/components/Sections';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: { url: '/' },
};

const BASE = 'https://www.stxaviertimber.com';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What moisture content does kiln drying achieve?',
      acceptedAnswer: { '@type': 'Answer', text: 'Our fully automated kiln targets 12–15% moisture content across all species. This is the industry-standard range for structural timber and furniture-grade wood — it minimises warping, shrinkage, and cracking after installation.' },
    },
    {
      '@type': 'Question',
      name: 'How long does the kiln drying process take?',
      acceptedAnswer: { '@type': 'Answer', text: 'Drying time depends on species, thickness, and initial moisture level. Thin softwood boards can be completed in 3–5 days; dense hardwoods such as Teak or Mahogany may require 8–15 days.' },
    },
    {
      '@type': 'Question',
      name: 'What is Vacuum Pressure Impregnation (VPI) and how does it work?',
      acceptedAnswer: { '@type': 'Answer', text: 'VPI is a two-stage preservative treatment. First, a 45-minute vacuum removes air from the wood cells. A 5% Boron Borax solution is then forced into the wood at 10 bar (145 PSI) for 2–6 hours, achieving full penetration to the wood core — not just surface saturation.' },
    },
    {
      '@type': 'Question',
      name: 'Is Boron Borax safe for indoor use and for humans?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Boron Borax contains no heavy metals, no arsenic, and no toxic solvents. It is widely used in residential construction, furniture, and children\'s play equipment. Treated timber is safe to handle, paint, and finish immediately after treatment.' },
    },
    {
      '@type': 'Question',
      name: 'What is ISPM 15 and why does my export shipment need it?',
      acceptedAnswer: { '@type': 'Answer', text: 'ISPM 15 is a global standard requiring all wooden packaging material used in international trade to be heat-treated or fumigated to eliminate pests. Without ISPM 15 certification, shipments can be held, fumigated at the exporter\'s cost, or rejected at the destination port. St. Xavier Timber is IPPC registered and issues the required certification marks on all treated material.' },
    },
    {
      '@type': 'Question',
      name: 'Where is St. Xavier Timber located and do you deliver island-wide?',
      acceptedAnswer: { '@type': 'Answer', text: 'St. Xavier Timber is located at 1088, Colombo Road, Daluwakotuwa, Kochchikade, Sri Lanka (postal code 11540), near Negombo. We offer island-wide delivery across Sri Lanka and can be reached on 031 227 7752 or 071 471 1417.' },
    },
    {
      '@type': 'Question',
      name: 'What timber species do you treat?',
      acceptedAnswer: { '@type': 'Answer', text: 'We treat rubberwood, pine, teak, nadun, kumbuk, mahogany, and most imported hardwood species. Treatment method and drying schedule are tailored per species — rubberwood and pine are among the most common species we process for furniture and construction clients.' },
    },
    {
      '@type': 'Question',
      name: 'How do I get a quote for kiln drying or VPI treatment?',
      acceptedAnswer: { '@type': 'Answer', text: 'Send us your timber species, dimensions, quantity, and required treatment. You can call 031 227 7752, WhatsApp 071 471 1417, or fill out the quote form at stxaviertimber.com. We typically respond within a few hours.' },
    },
  ],
};

const processSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How St. Xavier Timber Treats Your Timber',
  description: 'A four-stage industrial timber treatment process covering intake inspection, vacuum pressure impregnation, kiln drying, and quality-checked dispatch.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Timber Intake & Inspection',
      text: 'Every load is assessed before treatment begins. Timber is sorted by species, thickness, and intended end-use. Pre-treatment moisture content is measured on every piece and a job sheet is created.',
      url: `${BASE}/#process`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Vacuum Pressure Impregnation',
      text: 'A 45-minute initial vacuum removes residual air from wood cells. 5% Boron Borax is then introduced at 10 bar (145 PSI) for 2–6 hours, driving the preservative deep into the wood core. Timber rests 24 hours post-treatment to allow fixation.',
      url: `${BASE}/#process`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Kiln Drying Cycle',
      text: 'Timber is stickered and stacked in our automated kiln. Temperature, humidity, and airflow are continuously monitored. Calibrated resistance-type meters verify moisture at multiple points until the 12–15% MC target is achieved.',
      url: `${BASE}/#process`,
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Quality Check & Dispatch',
      text: 'A full moisture audit is completed before dispatch. ISPM 15 certified loads receive the IPPC mark. Treatment records and certification documentation are issued. Island-wide delivery or collection from Daluwakotuwa available.',
      url: `${BASE}/#process`,
    },
  ],
};

const kilnDryingSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE}/#kiln-drying`,
  name: 'Kiln Drying',
  alternateName: ['Timber Kiln Drying', 'Wood Kiln Drying', 'ISPM 15 Heat Treatment'],
  description: 'Industrial kiln drying service for timber. Fully automated kiln targets 12–15% moisture content. Suitable for construction, furniture, and export timber. ISPM 15 heat treatment compliant. Drying time 3–12 days depending on species.',
  provider: { '@type': 'LocalBusiness', '@id': BASE, name: 'St. Xavier Timber' },
  areaServed: { '@type': 'Country', name: 'Sri Lanka' },
  serviceType: 'Timber Treatment',
};

const vpiSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE}/#vpi`,
  name: 'Vacuum Pressure Impregnation',
  alternateName: ['VPI Treatment', 'Boron Borax Treatment', 'Timber Preservation'],
  description: 'Vacuum pressure impregnation (VPI) timber treatment using 5% Boron Borax at 10 bar (145 PSI). Full cross-section penetration to the wood core. Safe, non-toxic preservative. 10-year warranty against pest contamination.',
  provider: { '@type': 'LocalBusiness', '@id': BASE, name: 'St. Xavier Timber' },
  areaServed: { '@type': 'Country', name: 'Sri Lanka' },
  serviceType: 'Timber Preservation',
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(processSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(kilnDryingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(vpiSchema) }} />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Industries />
        <CeyPall />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
