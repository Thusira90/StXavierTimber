import Image from 'next/image';
import styles from './Services.module.css';

const services = [
  {
    tag: 'Kiln Drying',
    title: 'Wood Kiln Drying',
    desc: 'Our fully automated kiln uses precision temperature and moisture control to achieve 12–15% moisture content — reducing warping, cracking, and instability across all species.',
    photo: 'Kiln facility photo',
    image: '/KD.png',
    features: [
      'Fully automated kiln with advanced temper control',
      'Target moisture content 12–15% for all species',
      'ISPM 15 heat treatment compliant for export',
      'Minimal cracking or distortion post-drying',
    ],
  },
  {
    tag: 'Vacuum Pressure Impregnation',
    title: 'Vacuum Pressure Impregnation',
    desc: 'A 5% borate preservative solution (a boron-based preservative) is driven deep into the timber under 10 bar (145 PSI) of pressure, with retention verified per species and dimension — providing long-term protection against pests, fungal decay, and moisture ingress.',
    photo: 'VPI chamber photo',
    image: '/vpi-chamber.png',
    features: [
      '45-minute vacuum air removal pre-treatment',
      '10 bar / 145 PSI pressure maintained 2–6 hours',
      'Deep preservative penetration, with retention verified per species and dimension',
      'Safe borate preservative — no heavy metals or toxic solvents',
    ],
  },
];

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Our Services</span>
          <h2 className={styles.h2}>Two Core Treatment Processes</h2>
          <p className={styles.sub}>
            Every piece of timber that leaves our facility has been treated with precision —
            structurally stable, pest-resistant, and ready for its intended use.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((s) => (
            <div key={s.title} className={styles.card}>
              <div className={styles.cardPhoto}>
                {s.image ? (
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 560px"
                  />
                ) : (
                  <span className={styles.photoNote}>PHOTO SLOT · {s.photo}</span>
                )}
                <span className={styles.cardTag}>{s.tag}</span>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.desc}</p>
                <ul className={styles.features}>
                  {s.features.map((f) => (
                    <li key={f} className={styles.feature}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeWidth="1"/>
                        <path d="M4.5 7l1.8 1.8L9.5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={styles.cardLink}>Request a quote →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
