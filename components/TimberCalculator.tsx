'use client';
import { useState, useMemo } from 'react';
import styles from './TimberCalculator.module.css';

const SPECIES = [
  { value: 'rubberwood', label: 'Rubberwood', dryFactor: 1.0, vpiRecommended: true },
  { value: 'pine', label: 'Pine', dryFactor: 1.0, vpiRecommended: false },
  { value: 'mahogany', label: 'Mahogany', dryFactor: 1.3, vpiRecommended: false },
  { value: 'teak', label: 'Teak', dryFactor: 1.6, vpiRecommended: false },
  { value: 'nadun', label: 'Nadun', dryFactor: 1.2, vpiRecommended: true },
  { value: 'kumbuk', label: 'Kumbuk', dryFactor: 1.3, vpiRecommended: true },
  { value: 'imported-hardwood', label: 'Imported Hardwood', dryFactor: 1.4, vpiRecommended: false },
  { value: 'other', label: 'Other / Unsure', dryFactor: 1.2, vpiRecommended: false },
];

const USE_CASES = [
  { value: 'furniture', label: 'Furniture Manufacturing' },
  { value: 'construction', label: 'Construction / Structural' },
  { value: 'doors-windows', label: 'Doors & Windows' },
  { value: 'export-packaging', label: 'Export Packaging / Crates' },
  { value: 'flooring', label: 'Flooring & Decking' },
  { value: 'other', label: 'Other' },
];

function getDryingDays(thicknessMm: number, dryFactor: number): [number, number] {
  let base: [number, number];
  if (thicknessMm <= 25) base = [3, 5];
  else if (thicknessMm <= 38) base = [4, 7];
  else if (thicknessMm <= 50) base = [5, 9];
  else if (thicknessMm <= 75) base = [8, 13];
  else base = [12, 20];
  return [Math.round(base[0] * dryFactor), Math.round(base[1] * dryFactor)];
}

function getTreatmentRecommendation(useCase: string, vpiRecommended: boolean): {
  kiln: boolean; vpi: boolean; ispm: boolean; label: string; note: string;
} {
  if (useCase === 'export-packaging') {
    return { kiln: false, vpi: false, ispm: true, label: 'ISPM 15 Heat Treatment', note: 'Required for all wooden packaging crossing international borders. We are IPPC registered and issue the certification mark.' };
  }
  if (useCase === 'furniture' || useCase === 'doors-windows') {
    return { kiln: true, vpi: true, ispm: false, label: 'Kiln Drying + VPI Treatment', note: vpiRecommended ? 'Strongly recommended — this species is pest-prone. VPI protects the core, kiln drying ensures dimensional stability.' : 'Recommended combination — kiln drying delivers stable 12–15% MC; VPI adds long-term pest protection.' };
  }
  if (useCase === 'construction') {
    return { kiln: true, vpi: true, ispm: false, label: 'Kiln Drying + VPI Treatment', note: 'Structural timber must be dimensionally stable and pest-free. Both treatments extend service life significantly.' };
  }
  if (useCase === 'flooring') {
    return { kiln: true, vpi: false, ispm: false, label: 'Kiln Drying', note: 'Flooring requires precise 8–12% MC to prevent gapping or buckling. VPI is optional but recommended for ground-floor installations.' };
  }
  return { kiln: true, vpi: vpiRecommended, ispm: false, label: vpiRecommended ? 'Kiln Drying + VPI Treatment' : 'Kiln Drying', note: 'Based on your inputs, kiln drying is the primary requirement. Speak to us about whether VPI adds value for your application.' };
}

export default function TimberCalculator() {
  const [species, setSpecies] = useState('rubberwood');
  const [useCase, setUseCase] = useState('furniture');
  const [lengthMm, setLengthMm] = useState('2400');
  const [widthMm, setWidthMm] = useState('100');
  const [thicknessMm, setThicknessMm] = useState('50');
  const [quantity, setQuantity] = useState('100');
  const [unit, setUnit] = useState<'mm' | 'inches'>('mm');

  const toMm = (val: string) => {
    const n = parseFloat(val) || 0;
    return unit === 'inches' ? n * 25.4 : n;
  };

  const result = useMemo(() => {
    const sp = SPECIES.find((s) => s.value === species) || SPECIES[0];
    const L = toMm(lengthMm) / 1000;
    const W = toMm(widthMm) / 1000;
    const T = toMm(thicknessMm) / 1000;
    const Q = parseInt(quantity) || 0;
    const volumeM3 = L * W * T * Q;
    const thickMm = toMm(thicknessMm);
    const [dMin, dMax] = getDryingDays(thickMm, sp.dryFactor);
    const treatment = getTreatmentRecommendation(useCase, sp.vpiRecommended);
    return { volumeM3, dMin, dMax, treatment, valid: volumeM3 > 0 };
  }, [species, useCase, lengthMm, widthMm, thicknessMm, quantity, unit]);

  const whatsappMsg = encodeURIComponent(
    `Hi, I used the calculator on your website.\n\nSpecies: ${SPECIES.find(s => s.value === species)?.label}\nUse case: ${USE_CASES.find(u => u.value === useCase)?.label}\nDimensions: ${lengthMm} × ${widthMm} × ${thicknessMm} ${unit}\nQuantity: ${quantity} pieces\nEstimated volume: ${result.volumeM3.toFixed(3)} m³\n\nPlease send me a quote.`
  );

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Free Estimator</span>
          <h1 className={styles.h1}>Timber Treatment<br /><em>Calculator</em></h1>
          <p className={styles.heroSub}>
            Enter your timber dimensions and intended use — get an instant estimate of volume,
            drying time, and the right treatment. Then request an exact quote.
          </p>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.grid}>

          {/* Inputs */}
          <div className={styles.inputs}>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Your Timber</h2>

              <div className={styles.field}>
                <label className={styles.label}>Species</label>
                <select className={styles.select} value={species} onChange={e => setSpecies(e.target.value)}>
                  {SPECIES.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                </select>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Intended Use</label>
                <select className={styles.select} value={useCase} onChange={e => setUseCase(e.target.value)}>
                  {USE_CASES.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
                </select>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Dimensions</label>
                <div className={styles.unitToggle}>
                  <button className={`${styles.unitBtn} ${unit === 'mm' ? styles.unitActive : ''}`} onClick={() => setUnit('mm')}>mm</button>
                  <button className={`${styles.unitBtn} ${unit === 'inches' ? styles.unitActive : ''}`} onClick={() => setUnit('inches')}>inches</button>
                </div>
                <div className={styles.dimRow}>
                  <div className={styles.dimField}>
                    <span className={styles.dimLabel}>Length</span>
                    <input className={styles.input} type="number" min="0" value={lengthMm} onChange={e => setLengthMm(e.target.value)} placeholder="2400" />
                  </div>
                  <div className={styles.dimField}>
                    <span className={styles.dimLabel}>Width</span>
                    <input className={styles.input} type="number" min="0" value={widthMm} onChange={e => setWidthMm(e.target.value)} placeholder="100" />
                  </div>
                  <div className={styles.dimField}>
                    <span className={styles.dimLabel}>Thickness</span>
                    <input className={styles.input} type="number" min="0" value={thicknessMm} onChange={e => setThicknessMm(e.target.value)} placeholder="50" />
                  </div>
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Number of Pieces</label>
                <input className={styles.input} type="number" min="1" value={quantity} onChange={e => setQuantity(e.target.value)} placeholder="100" />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className={styles.results}>
            {result.valid ? (
              <>
                <div className={styles.statGrid}>
                  <div className={styles.stat}>
                    <span className={styles.statNum}>{result.volumeM3.toFixed(3)}</span>
                    <span className={styles.statLabel}>m³ total volume</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNum}>{result.dMin}–{result.dMax}</span>
                    <span className={styles.statLabel}>days to dry</span>
                  </div>
                </div>

                <div className={styles.treatmentCard}>
                  <span className={styles.treatmentEyebrow}>Recommended Treatment</span>
                  <p className={styles.treatmentLabel}>{result.treatment.label}</p>
                  <div className={styles.treatmentBadges}>
                    {result.treatment.kiln && <span className={styles.badge}>Kiln Drying</span>}
                    {result.treatment.vpi && <span className={styles.badge}>VPI (Boron Borax)</span>}
                    {result.treatment.ispm && <span className={styles.badge}>ISPM 15 Heat Treatment</span>}
                  </div>
                  <p className={styles.treatmentNote}>{result.treatment.note}</p>
                </div>

                <div className={styles.disclaimer}>
                  This is a guide estimate. Actual drying time varies with initial moisture content, stacking, and kiln load. Contact us for an exact quote.
                </div>

                <div className={styles.ctaButtons}>
                  <a
                    href={`https://wa.me/94714711417?text=${whatsappMsg}`}
                    className={styles.btnWa}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.554 4.112 1.523 5.84L0 24l6.335-1.501A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.002-1.368l-.359-.214-3.72.881.938-3.618-.235-.372A9.783 9.783 0 012.18 12C2.18 6.566 6.566 2.18 12 2.18c5.434 0 9.82 4.386 9.82 9.82 0 5.434-4.386 9.818-9.82 9.818z"/>
                    </svg>
                    Send via WhatsApp
                  </a>
                  <a href="/#contact" className={styles.btnSecondary}>Request a Quote</a>
                </div>
              </>
            ) : (
              <div className={styles.placeholder}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
                  <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
                </svg>
                <p>Enter your timber dimensions to see your estimate.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
