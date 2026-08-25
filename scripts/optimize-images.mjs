import sharp from 'sharp';
import { readFileSync, writeFileSync, statSync } from 'fs';
import { join } from 'path';

const PUBLIC = 'public';
const jobs = [
  { in: 'logo.png',                          out: 'logo.webp',        maxW: 400,  quality: 88 },
  { in: 'KD.png',                            out: 'KD.webp',          maxW: 1600, quality: 78 },
  { in: 'vpi-chamber.png',                   out: 'vpi-chamber.webp', maxW: 1600, quality: 78 },
  { in: 'IPPC HEat Treated Pallet.jpg',      out: 'IPPC-HEat-Treated-Pallet.webp', maxW: 1600, quality: 78 },
  { in: 'CoverpicSXT.png',                   out: 'CoverpicSXT.webp', maxW: 1600, quality: 78 },
  { in: 'kiln-drying.png',                   out: 'kiln-drying.webp', maxW: 1600, quality: 78 },
];

for (const j of jobs) {
  const src = join(PUBLIC, j.in);
  const dst = join(PUBLIC, j.out);
  const before = statSync(src).size;
  await sharp(src)
    .resize({ width: j.maxW, withoutEnlargement: true })
    .webp({ quality: j.quality, effort: 6 })
    .toFile(dst);
  const after = statSync(dst).size;
  console.log(`${j.in.padEnd(38)} ${(before/1024).toFixed(0).padStart(6)}KB -> ${(after/1024).toFixed(0).padStart(5)}KB  (${((1-after/before)*100).toFixed(0)}% smaller)`);
}
