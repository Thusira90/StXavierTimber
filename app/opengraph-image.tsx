import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'St. Xavier Timber — Kiln Drying & VPI Treatment Sri Lanka';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0f1f08',
          padding: '72px 80px',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Top — badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              fontSize: '12px',
              fontFamily: 'system-ui, sans-serif',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              color: '#8aad5a',
              border: '1px solid rgba(138,173,90,0.3)',
              padding: '6px 16px',
              borderRadius: '100px',
            }}
          >
            Est. 1955 · Daluwakotuwa, Sri Lanka
          </div>
        </div>

        {/* Middle — headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              fontSize: '68px',
              fontWeight: 400,
              color: '#ffffff',
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
            }}
          >
            St. Xavier Timber
          </div>
          <div
            style={{
              fontSize: '26px',
              fontWeight: 300,
              color: 'rgba(212,232,184,0.82)',
              lineHeight: 1.5,
              maxWidth: '700px',
            }}
          >
            Kiln Drying · Vacuum Pressure Impregnation · ISPM 15 Certified
          </div>
        </div>

        {/* Bottom — stats row */}
        <div
          style={{
            display: 'flex',
            gap: '0px',
            borderTop: '1px solid rgba(168,195,120,0.2)',
            paddingTop: '32px',
          }}
        >
          {[
            { num: '70+', label: 'Years in Timber' },
            { num: '10 bar', label: 'VPI Pressure' },
            { num: '12–15%', label: 'Target Moisture' },
            { num: 'ISPM 15', label: 'Export Standard' },
          ].map((s, i) => (
            <div
              key={s.label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                flex: 1,
                paddingRight: i < 3 ? '32px' : '0',
                borderRight: i < 3 ? '1px solid rgba(168,195,120,0.15)' : 'none',
                marginRight: i < 3 ? '32px' : '0',
              }}
            >
              <div
                style={{
                  fontSize: '32px',
                  color: '#ffffff',
                  fontWeight: 400,
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontSize: '12px',
                  color: 'rgba(212,232,184,0.6)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontFamily: 'system-ui, sans-serif',
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
