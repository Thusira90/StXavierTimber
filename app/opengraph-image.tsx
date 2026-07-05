import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const runtime = 'nodejs';
export const alt = 'St. Xavier Timber — Kiln Drying & VPI Treatment Sri Lanka';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  const logoData = readFileSync(join(process.cwd(), 'public', 'logo.png'));
  const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#1a2e0f',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse at 50% 40%, rgba(168,200,122,0.10) 0%, transparent 65%)',
            display: 'flex',
          }}
        />

        {/* Logo */}
        <img
          src={logoSrc}
          width={160}
          height={160}
          style={{ objectFit: 'contain', marginBottom: '24px' }}
        />

        {/* Company name */}
        <div
          style={{
            fontSize: '56px',
            fontWeight: 800,
            color: '#f0f4eb',
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            textAlign: 'center',
            marginBottom: '14px',
            display: 'flex',
          }}
        >
          St. Xavier Timber
        </div>

        {/* Green divider */}
        <div
          style={{
            width: '48px',
            height: '3px',
            background: '#a8c87a',
            borderRadius: '2px',
            marginBottom: '18px',
            display: 'flex',
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: '22px',
            color: 'rgba(240,244,235,0.65)',
            textAlign: 'center',
            display: 'flex',
          }}
        >
          Kiln Drying · VPI Treatment · ISPM 15 · Est. 1955
        </div>

        {/* Bottom badges */}
        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            display: 'flex',
            gap: '10px',
          }}
        >
          {['IPPC Registered', 'ISPM 15 Certified', 'stxaviertimber.com'].map((label) => (
            <div
              key={label}
              style={{
                background: 'rgba(168,200,122,0.12)',
                border: '1px solid rgba(168,200,122,0.28)',
                color: '#a8c87a',
                fontSize: '13px',
                fontWeight: 600,
                padding: '5px 14px',
                borderRadius: '20px',
                display: 'flex',
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
