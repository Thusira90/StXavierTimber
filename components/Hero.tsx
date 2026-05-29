import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroPalletBg} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.eyebrow}>Kiln Drying & Vacuum Pressure Impregnation · Sri Lanka</span>
          <h1 className={styles.h1}>
            Wood treated<br />
            <em>to last a lifetime.</em>
          </h1>
          <p className={styles.legacy}>
            "Precision treatment. Honest timelines. No shortcuts."
          </p>
          <p className={styles.body}>
            Industrial kiln drying and vacuum pressure impregnation for construction, manufacturing,
            and export. IPPC registered. Island-wide delivery.
          </p>
          <div className={styles.badges}>
            {['Kiln Drying', 'Vacuum Pressure Impregnation', 'IPPC / ISPM 15'].map((b) => (
              <span key={b} className={styles.badge}>{b}</span>
            ))}
          </div>
          <div className={styles.actions}>
            <a href="#contact" className={styles.btnPrimary}>Request a Quote</a>
            <a
              href="https://wa.me/94714711417"
              className={styles.btnWa}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.554 4.112 1.523 5.84L0 24l6.335-1.501A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.002-1.368l-.359-.214-3.72.881.938-3.618-.235-.372A9.783 9.783 0 012.18 12C2.18 6.566 6.566 2.18 12 2.18c5.434 0 9.82 4.386 9.82 9.82 0 5.434-4.386 9.818-9.82 9.818z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className={styles.right}>
          {/* Top wide card — heritage */}
          <div className={styles.infoCardWide}>
            <span className={styles.infoCardEyebrow}>Est. 1955</span>
            <p className={styles.infoCardHeading}>70+ years of timber expertise</p>
            <p className={styles.infoCardSub}>From local timber trading to industrial kiln drying and vacuum pressure impregnation — serving construction, manufacturing, and export.</p>
          </div>

          {/* Bottom 2-col grid */}
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.infoIcon}>
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M12 8v4l2.5 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              <span className={styles.infoNum}>Est. 1955</span>
              <span className={styles.infoLabel}>Four generations of family ownership</span>
              <span className={styles.infoTag}>Heritage</span>
            </div>
            <div className={styles.infoCard}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.infoIcon}>
                <path d="M12 2C8 2 4 5 4 9c0 5 8 13 8 13s8-8 8-13c0-4-4-7-8-7z" stroke="currentColor" strokeWidth="1.4"/>
                <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
              </svg>
              <span className={styles.infoNum}>Island-wide</span>
              <span className={styles.infoLabel}>Delivery across Sri Lanka</span>
              <span className={styles.infoTag}>Delivery</span>
            </div>
            <div className={styles.infoCard}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.infoIcon}>
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M2 12h4M18 12h4M12 2v4M12 18v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              <span className={styles.infoNum}>Bulk</span>
              <span className={styles.infoLabel}>High-volume capacity for regular orders</span>
              <span className={styles.infoTag}>Industrial Scale</span>
            </div>
            <div className={styles.infoCard}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.infoIcon}>
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 2l2.4 1.8 3-.6 1.2 2.8 2.8 1.2-.6 3L22 12l-1.8 2.4.6 3-2.8 1.2-1.2 2.8-3-.6L12 22l-2.4-1.8-3 .6-1.2-2.8-2.8-1.2.6-3L2 12l1.8-2.4-.6-3 2.8-1.2 1.2-2.8 3 .6z" stroke="currentColor" strokeWidth="1.4"/>
              </svg>
              <span className={styles.infoNum}>Warranty</span>
              <span className={styles.infoLabel}>Against pest contamination</span>
              <span className={styles.infoTag}>VPI Warranty</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.stats}>
        {[
          { num: '70+', label: 'Years in timber' },
          { num: '10 bar', label: 'VPI pressure' },
          { num: '12–15%', label: 'Target moisture' },
          { num: 'ISPM 15', label: 'Export standard' },
        ].map((s) => (
          <div key={s.label} className={styles.stat}>
            <span className={styles.statNum}>{s.num}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
