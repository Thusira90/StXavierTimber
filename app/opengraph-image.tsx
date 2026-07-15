import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const runtime = 'nodejs';
export const alt = 'St. Xavier Timber — Kiln Drying & VPI Treatment Sri Lanka';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  const coverData = readFileSync(join(process.cwd(), 'public', 'CoverpicSXT.png'));
  const coverSrc = `data:image/png;base64,${coverData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#111111',
        }}
      >
        <img
          src={coverSrc}
          width={1200}
          height={473}
          style={{ objectFit: 'contain' }}
        />
      </div>
    ),
    { ...size }
  );
}
