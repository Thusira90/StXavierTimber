'use client';
import { useState } from 'react';
import styles from './Sections.module.css';

/* ── Process ─────────────────────────────────────────────── */
const steps = [
  {
    n: '01',
    title: 'Timber Intake & Inspection',
    desc: 'Every load is assessed before treatment begins. Timber is sorted by species, thickness, and intended end-use so each batch receives the correct treatment schedule.',
    details: [
      'Visual inspection for defects, splits, and pest activity',
      'Pre-treatment moisture content measured on every piece',
      'Batched by species, thickness, and end-use (construction, furniture, export)',
      'Customer requirements logged and job sheet created',
      'Estimated completion timeline confirmed at intake',
    ],
    duration: 'Same day',
  },
  {
    n: '02',
    title: 'Vacuum Pressure Impregnation',
    desc: 'Timber is loaded into our sealed pressure vessel where a two-stage cycle drives 5% Boron Borax preservative deep into the wood core — not just the surface.',
    details: [
      '45-minute initial vacuum removes residual air from wood cells',
      '5% Boron Borax solution introduced at 10 bar (145 PSI)',
      'Pressure held for 2–6 hours depending on species and thickness',
      'Final vacuum extracts surface excess, leaving preservative locked in the core',
      'Timber rested 24 hours post-treatment to allow fixation',
    ],
    duration: '1–2 days',
  },
  {
    n: '03',
    title: 'Kiln Drying Cycle',
    desc: 'Impregnated timber is stickered and stacked in our automated kiln. Temperature, humidity, and airflow are continuously monitored until the target moisture content is reached.',
    details: [
      'Stickered stacking ensures even airflow through every layer',
      'Drying schedule tailored per species and initial moisture content',
      'Temperature and humidity adjusted automatically throughout the cycle',
      'Calibrated resistance-type meters verify moisture at multiple points',
      'Target: 12–15% MC — suitable for construction, furniture, and export',
    ],
    duration: '3–12 days',
  },
  {
    n: '04',
    title: 'Quality Check & Dispatch',
    desc: 'Before any timber leaves the facility, a full moisture audit is completed and all documentation is prepared. ISPM 15 certified loads are marked and ready for export.',
    details: [
      'Full moisture content audit recorded for every batch',
      'IPPC mark applied to all export-bound timber (ISPM 15 compliant)',
      'Treatment records and certification documentation issued to customer',
      'Island-wide delivery coordinated to customer schedule',
      'Collection from our Daluwakotuwa facility also available',
    ],
    duration: 'Same day',
  },
];

export function Process() {
  return (
    <section className={styles.altSection} id="process">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>How it works</span>
          <h2 className={styles.h2}>From Raw Timber To Treated Product</h2>
          <p className={styles.headerSub}>
            A structured four-stage process designed for consistency — every batch is tracked from intake to dispatch.
          </p>
        </div>
        <div className={styles.stepGrid}>
          {steps.map((s) => (
            <div key={s.n} className={styles.step}>
              <div className={styles.stepHeader}>
                <span className={styles.stepNum}>{s.n}</span>
              </div>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.desc}</p>
              <ul className={styles.stepList}>
                {s.details.map((d) => (
                  <li key={d} className={styles.stepItem}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className={styles.stepIcon}>
                      <circle cx="6" cy="6" r="5.5" stroke="currentColor" strokeWidth="1"/>
                      <path d="M3.5 6l1.8 1.8L8.5 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
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
  );
}

/* ── Industries ───────────────────────────────────────────── */
const indIcons: Record<string, React.ReactNode> = {
  'Export Pallet Manufacturers': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 8V6a2 2 0 00-2-2H5a2 2 0 00-2 2v2"/><rect x="1" y="8" width="22" height="13" rx="2"/><path d="M12 8v13M8 8v13M16 8v13"/>
    </svg>
  ),
  'Construction Companies': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21h18M9 21V7l3-4 3 4v14M3 21V11l6-4M21 21V11l-6-4"/><path d="M9 12h6"/>
    </svg>
  ),
  'Furniture Manufacturers': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="9" width="16" height="7" rx="2"/><path d="M4 12H2v4h2M20 12h2v4h-2M6 16v2M18 16v2"/>
    </svg>
  ),
  'Door & Window Makers': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="2" width="16" height="20" rx="1"/><path d="M4 12h16M12 2v20"/><circle cx="16" cy="12" r="1" fill="currentColor" stroke="none"/>
    </svg>
  ),
  'Packaging Industry': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  ),
  'Architects & Interior Designers': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21L12 3l9 18"/><path d="M6.5 14.5h11"/>
    </svg>
  ),
  'Agricultural Exporters': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 17h18M3 17L6 7h12l3 10M12 7V3M9 3h6"/><path d="M7 17v2M17 17v2"/>
    </svg>
  ),
};

const industries = [
  {
    icon: '📦',
    name: 'Export Pallet Manufacturers',
    sub: 'ISPM 15 heat treatment for compliance',
    desc: 'Pallets crossing international borders must meet ISPM 15 phytosanitary standards. We provide IPPC-registered heat treatment and issue the documentation required for customs clearance in any destination country.',
    details: [
      'IPPC mark applied to every certified pallet load',
      'Full treatment records issued for customs documentation',
      'Fast turnaround to keep export schedules on track',
      'High-volume batch capacity for regular pallet runs',
    ],
  },
  {
    icon: '🏗️',
    name: 'Construction Companies',
    sub: 'Structural beams, roof timber, lumber',
    desc: 'Structural timber used in roofing, framing, and flooring must be dimensionally stable and free from pest risk. Kiln-dried and VPI-treated timber performs consistently and reduces costly on-site failures.',
    details: [
      'Kiln drying reduces shrinkage and warping in structural timber',
      'VPI treatment protects against termites and fungal decay',
      'Suitable for roofing, wall framing, flooring, and beams',
      'Island-wide delivery direct to construction sites',
    ],
  },
  {
    icon: '🪑',
    name: 'Furniture Manufacturers',
    sub: 'Stable, low-moisture hardwood',
    desc: 'Furniture made from poorly dried timber warps, splits joints, and generates rejects. Our kiln drying brings hardwood to the 12–15% MC range that furniture production demands — consistent batch after batch.',
    details: [
      '12–15% MC target minimises post-production movement',
      'Rubberwood, mahogany, and hardwood species treated regularly',
      'Reduced reject rates and finishing defects for manufacturers',
      'VPI available for pest-prone species like rubberwood',
    ],
  },
  {
    icon: '🚪',
    name: 'Door & Window Makers',
    sub: 'Warp and pest resistant timber',
    desc: 'Doors and window frames demand tight dimensional tolerances. Untreated or poorly dried timber swells, warps, and allows pest entry over time. Our treatment process delivers stable timber that holds its shape after fitting.',
    details: [
      'Precise drying eliminates moisture-driven warping post-installation',
      'VPI treatment locks out termites and borers at the core',
      'Suitable for interior and exterior joinery applications',
      'Consistent moisture levels across each batch for reliable machining',
    ],
  },
  {
    icon: '📫',
    name: 'Packaging Industry',
    sub: 'Industrial crating treatment',
    desc: 'Industrial crates and wooden packaging used in machinery, engineering, and heavy goods export must meet treatment requirements. We handle high-volume crating timber with full compliance documentation.',
    details: [
      'Heat treatment and VPI options for crating timber',
      'ISPM 15 certification for internationally shipped crates',
      'Suitable for heavy machinery, equipment, and bulk goods packaging',
      'Bulk volume capacity with consistent batch quality',
    ],
  },
  {
    icon: '📐',
    name: 'Architects & Interior Designers',
    sub: 'Specification-grade treated timber',
    desc: 'Architects and interior designers specifying timber for feature walls, ceilings, flooring, and bespoke joinery need material that is dimensionally stable, pest-free, and consistent. Our treatment ensures the timber performs exactly as specified once installed.',
    details: [
      'Kiln drying to 12–15% MC for stable, warp-free installation',
      'VPI treatment eliminates pest risk in feature and decorative timber',
      'Consistent batch quality across large and small project quantities',
      'Treatment records available for specification and project documentation',
    ],
  },
  {
    icon: '🚢',
    name: 'Agricultural Exporters',
    sub: 'Export-ready international shipments',
    desc: 'Sri Lankan agricultural exporters using wooden packaging or pallets need treatment that meets the import requirements of their destination markets. We ensure every shipment is phytosanitarily compliant and export-ready.',
    details: [
      'ISPM 15 heat treatment accepted in over 180 countries',
      'Treatment documentation prepared for each export shipment',
      'Works with freight forwarders and shipping agents directly',
      'Rapid turnaround to align with shipping container schedules',
    ],
  },
];

export function Industries() {
  return (
    <section className={styles.section} id="industries">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Industries Served</span>
          <h2 className={styles.h2}>Who We Work With</h2>
          <p className={styles.headerSub}>
            From export pallet manufacturers to furniture makers — we treat timber for industries where quality and compliance are non-negotiable.
          </p>
        </div>
        <div className={styles.indGrid}>
          {industries.map((i) => (
            <div key={i.name} className={styles.indCard}>
              <div className={styles.indCardTop}>
                <span className={styles.indIcon}>{indIcons[i.name]}</span>
                <div>
                  <p className={styles.indName}>{i.name}</p>
                  <p className={styles.indSub}>{i.sub}</p>
                </div>
              </div>
              <p className={styles.indDesc}>{i.desc}</p>
              <ul className={styles.indList}>
                {i.details.map((d) => (
                  <li key={d} className={styles.indItem}>
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true" className={styles.indCheckIcon}>
                      <circle cx="6" cy="6" r="5.5" stroke="currentColor" strokeWidth="1"/>
                      <path d="M3.5 6l1.8 1.8L8.5 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
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
  );
}

/* ── Species ──────────────────────────────────────────────── */
const species = [
  { name: 'Rubberwood', treat: 'Both treatments', drying: '3–5 days', uses: 'Furniture, pallets', benefit: 'VPI essential — pest prone' },
  { name: 'Pine', treat: 'Kiln + VPI', drying: '4–7 days', uses: 'Construction, crating', benefit: 'Responds well to treatment' },
  { name: 'Teak', treat: 'Kiln drying', drying: '7–12 days', uses: 'Decking, furniture', benefit: 'Naturally durable species' },
  { name: 'Nadun', treat: 'Both treatments', drying: '5–8 days', uses: 'Structural, beams', benefit: 'High strength retention' },
  { name: 'Kumbuk', treat: 'VPI recommended', drying: '6–9 days', uses: 'Industrial packing', benefit: 'Dense grain holds treatment' },
  { name: 'Mahogany', treat: 'Kiln drying', drying: '5–7 days', uses: 'Furniture, doors', benefit: 'Stable post-drying' },
];

export function Species() {
  return (
    <section className={styles.altSection} id="species">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Timber Species</span>
          <h2 className={styles.h2}>Species we treat & their profiles</h2>
        </div>
        <div className={styles.spGrid}>
          {species.map((s) => (
            <div key={s.name} className={styles.spCard}>
              <p className={styles.spName}>{s.name}</p>
              <span className={styles.spTreat}>{s.treat}</span>
              <div className={styles.spRows}>
                <div className={styles.spRow}><span>Drying time</span><span className={styles.spVal}>{s.drying}</span></div>
                <div className={styles.spRow}><span>Use cases</span><span className={styles.spVal}>{s.uses}</span></div>
                <div className={styles.spRow}><span>Key benefit</span><span className={styles.spVal}>{s.benefit}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CeyPall ──────────────────────────────────────────────── */
const ceypallProducts = [
  {
    tag: 'Export',
    title: 'Heat-treated pallets',
    subtitle: 'ISPM 15 compliant',
    desc: 'ISPM 15-compliant pallets with IPPC stamp. Core heated to 56°C for a minimum of 30 minutes. Accepted in all major international markets. Treatment certificate provided.',
    features: ['56°C core heat treatment', 'IPPC stamped', 'Treatment certificate included', 'Accepted in 180+ countries'],
  },
  {
    tag: 'Storage',
    title: 'Vacuum pressure impregnated',
    subtitle: 'Long-term warehouse use',
    desc: 'For long-term warehouse and racking applications. Boron Borax is forced deep into the wood core under pressure — backed by a warranty of up to 6 years against pest contamination.',
    features: ['Up to 10 bar pressure impregnation', '6-year pest warranty', 'Ideal for racking systems', 'Enhanced durability'],
  },
  {
    tag: 'Custom',
    title: 'Custom size pallets',
    subtitle: 'Built to your spec',
    desc: 'All standard international dimensions and custom sizes built to your exact specifications. Same treatment standards, fast turnaround.',
    features: ['All standard sizes available', 'Custom dimensions on request', 'Same treatment quality', 'Quick lead times'],
  },
];

export function CeyPall() {
  return (
    <section className={styles.ceypallSection}>
      <div className={styles.inner}>
        <div className={styles.ceypallHeader}>
          <div className={styles.ceypallHeaderLeft}>
            <span className={styles.ceypallEyebrow}>Sister Company</span>
            <h2 className={styles.ceypallH2}>
              Need pallets? <br />
              <a href="https://ceypall.com" target="_blank" rel="noopener noreferrer" className={styles.ceypallLink}>CeyPall</a> has you covered.
            </h2>
            <p className={styles.ceypallSub}>
              CeyPall is our pallet manufacturing arm — built on the same 1955 timber legacy.
              Every CeyPall pallet is made from St. Xavier treated timber: kiln-dried, VPI-treated,
              and ISPM 15 certified for export. IPPC registered with the National Plant Quarantine
              Service of Sri Lanka.
            </p>
            <div className={styles.ceypallBadges}>
              {['IPPC Registered', 'ISPM 15 Certified', 'Est. 1955 legacy', '20+ years manufacturing'].map((b) => (
                <span key={b} className={styles.ceypallBadge}>{b}</span>
              ))}
            </div>
          </div>
          <div className={styles.ceypallHeaderRight}>
            <div className={styles.ceypallStat}>
              <span className={styles.ceypallStatNum}>56°C</span>
              <span className={styles.ceypallStatLabel}>Core heat treatment</span>
            </div>
            <div className={styles.ceypallStat}>
              <span className={styles.ceypallStatNum}>IPPC</span>
              <span className={styles.ceypallStatLabel}>Registered & Certified</span>
            </div>
            <div className={styles.ceypallStat}>
              <span className={styles.ceypallStatNum}>180+</span>
              <span className={styles.ceypallStatLabel}>Countries accepted</span>
            </div>
          </div>
        </div>

        <div className={styles.ceypallGrid}>
          {ceypallProducts.map((p) => (
            <div key={p.title} className={styles.ceypallCard}>
              <div className={styles.ceypallCardTop}>
                <span className={styles.ceypallTag}>{p.tag}</span>
                <p className={styles.ceypallCardSub}>{p.subtitle}</p>
                <h3 className={styles.ceypallCardTitle}>{p.title}</h3>
              </div>
              <p className={styles.ceypallCardDesc}>{p.desc}</p>
              <ul className={styles.ceypallFeatures}>
                {p.features.map((f) => (
                  <li key={f} className={styles.ceypallFeature}>
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2 7l3.5 3.5L12 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.ceypallCta}>
          <a href="https://ceypall.com" target="_blank" rel="noopener noreferrer" className={styles.ceypallCtaBtn}>
            Visit ceypall.com →
          </a>
          <p className={styles.ceypallCtaNote}>Heat-treated · VPI treated · Custom sizes · Island-wide delivery</p>
        </div>
      </div>
    </section>
  );
}

/* ── Testimonials ─────────────────────────────────────────── */
const testimonials = [
  { quote: 'Consistent moisture levels batch after batch. Our furniture rejects dropped significantly after switching to St. Xavier for kiln drying.', company: 'Colombo Furniture Manufacturer', type: 'Furniture Industry' },
  { quote: 'Reliable ISPM 15 treatment partner for our export operations. Never missed a shipment deadline in two years.', company: 'Western Province Export Company', type: 'Export / Logistics' },
  { quote: 'The VPI treatment has completely eliminated termite damage on our construction timber. The difference is remarkable.', company: 'Building Contractor, Gampaha', type: 'Construction' },
];

export function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Testimonials</span>
          <h2 className={styles.h2}>What our clients say</h2>
        </div>
        <div className={styles.testGrid}>
          {testimonials.map((t) => (
            <div key={t.company} className={styles.testCard}>
              <div className={styles.stars}>{'★★★★★'}</div>
              <p className={styles.testQ}>"{t.quote}"</p>
              <p className={styles.testCo}>— {t.company}</p>
              <p className={styles.testType}>{t.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ──────────────────────────────────────────────────── */
const faqs = [
  {
    q: 'What moisture content does kiln drying achieve?',
    a: 'Our fully automated kiln targets 12–15% moisture content across all species. This is the industry-standard range for structural timber and furniture-grade wood — it minimises warping, shrinkage, and cracking after installation.',
  },
  {
    q: 'How long does the kiln drying process take?',
    a: 'Drying time depends on species, thickness, and initial moisture level. Thin softwood boards can be completed in 3–5 days; dense hardwoods such as Teak or Mahogany may require 8–15 days. We can give you a firm timeline once we assess your load.',
  },
  {
    q: 'What is Vacuum Pressure Impregnation (VPI) and how does it work?',
    a: 'VPI is a two-stage preservative treatment. First, we remove all air from the wood cells under vacuum for approximately 45 minutes. We then force a 5% Boron Borax solution into the wood at 10 bar (145 PSI) of pressure for 2–6 hours. The result is full penetration of the preservative right to the wood core — not just surface saturation.',
  },
  {
    q: 'Is Boron Borax safe for indoor use and for humans?',
    a: 'Yes. Boron Borax is one of the safest timber preservatives available. It contains no heavy metals, no arsenic, and no toxic solvents. It is widely used in residential construction, furniture, and children\'s play equipment. Treated timber is safe to handle, paint, and finish immediately after treatment.',
  },
  {
    q: 'What is ISPM 15 / IPPC certification and why does my export shipment need it?',
    a: 'ISPM 15 is a global standard that requires all wooden packaging material — pallets, crates, dunnage — used in international trade to be heat-treated or fumigated to eliminate pests and pathogens. Without ISPM 15 certification, your shipment can be held, fumigated at your cost, or rejected at the destination port. St. Xavier Timber is IPPC registered and issues the required certification marks on all treated material.',
  },
  {
    q: 'Where is St. Xavier Timber located and do you deliver island-wide?',
    a: 'We are located at 1088, Colombo Road, Daluwakotuwa, Kochchikade (postal code 11540), near Negombo on the western coast of Sri Lanka. We offer island-wide delivery and work with customers from Colombo, Gampaha, Kurunegala, Kandy, and beyond. You can also collect directly from our facility.',
  },
  {
    q: 'What timber species do you treat?',
    a: 'We regularly treat rubberwood, pine, teak, nadun, kumbuk, mahogany, and most imported hardwood species. Rubberwood is our most common species — it requires both kiln drying and VPI due to its susceptibility to borers. Teak typically requires kiln drying only as it is naturally durable. We tailor the treatment schedule per species and thickness.',
  },
  {
    q: 'How do I get a quote for timber treatment?',
    a: 'Send us your timber species, dimensions, quantity, and treatment required (kiln drying, VPI, or both). You can call us on 031 227 7752, WhatsApp 071 471 1417, or fill in the quote form on this page. We typically reply with a timeline and price within a few hours during business hours.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className={styles.altSection} id="faq">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>FAQ</span>
          <h2 className={styles.h2}>Frequently Asked Questions</h2>
        </div>
        <div className={styles.faqList}>
          {faqs.map((f, i) => (
            <div key={f.q} className={styles.faqItem}>
              <button className={styles.faqQ} onClick={() => setOpen(open === i ? null : i)}>
                {f.q}
                <span className={`${styles.faqChevron} ${open === i ? styles.faqOpen : ''}`}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              {open === i && <p className={styles.faqA}>{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Contact ──────────────────────────────────────────────── */
export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const form = e.currentTarget;
    const data = {
      name:      (form.elements.namedItem('name')      as HTMLInputElement).value,
      species:   (form.elements.namedItem('species')   as HTMLInputElement).value,
      quantity:  (form.elements.namedItem('quantity')  as HTMLInputElement).value,
      treatment: (form.elements.namedItem('treatment') as HTMLSelectElement).value,
      phone:     (form.elements.namedItem('phone')     as HTMLInputElement).value,
      notes:     (form.elements.namedItem('notes')     as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.contactInner}>
        <div className={styles.contactLeft}>
          <p className={styles.contactTitle}>Get in Touch</p>
          <p className={styles.contactSub}>
            Send us your timber dimensions and quantity — we'll reply with a timeline and quote,
            usually within a few hours.
          </p>
          <div className={styles.contactInfo}>
            <ContactRow icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.18 21 3 13.82 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/></svg>} label="Office" val="031 227 7752" />
            <ContactRow icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="7" y="2" width="10" height="20" rx="2"/><circle cx="12" cy="17" r="1" fill="currentColor"/></svg>} label="Mobile" val="071 471 1417  ·  076 949 4944" />
            <ContactRow icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg>} label="Email" val="info@stxaviertimber.com" />
            <ContactRow icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>} label="Location" val="1088, Colombo Road, Daluwakotuwa. Kochchikade." />
          </div>
          <a href="https://wa.me/94714711417" className={styles.waBtn} target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.554 4.112 1.523 5.84L0 24l6.335-1.501A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.002-1.368l-.359-.214-3.72.881.938-3.618-.235-.372A9.783 9.783 0 012.18 12C2.18 6.566 6.566 2.18 12 2.18c5.434 0 9.82 4.386 9.82 9.82 0 5.434-4.386 9.818-9.82 9.818z"/>
            </svg>
            Chat on WhatsApp
          </a>
          <div className={styles.hours}>
            <p className={styles.hoursLabel}>Business Hours</p>
            <p className={styles.hoursRow}><span>Mon – Fri</span><span>8:30 AM – 5:00 PM</span></p>
            <p className={styles.hoursRow}><span>Saturday</span><span>8:30 AM – 12:00 PM</span></p>
          </div>
        </div>

        <div className={styles.contactRight}>
          {submitted ? (
            <div className={styles.thankYou}>
              <p className={styles.thankIcon}>✓</p>
              <p className={styles.thankTitle}>Enquiry sent!</p>
              <p className={styles.thankSub}>We'll get back to you within a few hours.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <input name="name" type="text" placeholder="Your name / company" required className={styles.input} />
              <input name="species" type="text" placeholder="Timber species & dimensions" required className={styles.input} />
              <input name="quantity" type="text" placeholder="Quantity (sq ft or pieces)" required className={styles.input} />
              <select name="treatment" className={styles.input} defaultValue="" required>
                <option value="" disabled>Treatment required</option>
                <option>Kiln Drying only</option>
                <option>Vacuum Pressure Impregnation only</option>
                <option>Both — Kiln + VPI</option>
              </select>
              <input name="phone" type="tel" inputMode="numeric" placeholder="Phone or WhatsApp number" className={styles.input} onKeyDown={(e) => { if (!/[\d\s\+\-\(\)]/.test(e.key) && !['Backspace','Delete','Tab','ArrowLeft','ArrowRight'].includes(e.key)) e.preventDefault(); }} />
              <textarea name="notes" placeholder="Any other requirements or questions..." className={styles.textarea} rows={4} />
              {error && <p className={styles.formError}>Something went wrong — please try again or call us directly.</p>}
              <button type="submit" className={styles.submitBtn} disabled={loading}>
                {loading ? 'Sending…' : 'Send Enquiry →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, val }: { icon: React.ReactNode; label: string; val: string }) {
  return (
    <div className={styles.cRow}>
      <span className={styles.cIcon}>{icon}</span>
      <div>
        <p className={styles.cLabel}>{label}</p>
        <p className={styles.cVal}>{val}</p>
      </div>
    </div>
  );
}

/* ── Footer ───────────────────────────────────────────────── */
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div>
          <p className={styles.footerName}>St. Xavier Timber</p>
          <p className={styles.footerSub}>1088, Colombo Road, Daluwakotuwa. Kochchikade. · Est. 1955</p>
        </div>
        <div className={styles.footerLinks}>
          <a href="https://www.facebook.com/profile.php?id=100054793123041" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com/stxaviertimber?igsh=MTRueHJydWNkNmdnOQ%3D%3D" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.linkedin.com/company/st-xavier-timber-daluwakotuwa/?viewAsMember=true" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <p className={styles.footerRight}>
          Pallet products →{' '}
          <a href="https://ceypall.com" target="_blank" rel="noopener noreferrer" className={styles.ceypall}>
            CEYPALL
          </a>
        </p>
      </div>
    </footer>
  );
}
