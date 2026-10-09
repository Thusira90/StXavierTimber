import type { Post } from './posts';

// Most organic traffic lands on Knowledge Centre articles, which until now had no
// internal links to the pages that sell the service. Each article gets up to two
// topic-matched service links, rendered as a "Need this done?" block.
export type ServiceLink = { href: string; title: string; blurb: string };

const KILN: ServiceLink = {
  href: '/services/kiln-drying',
  title: 'Kiln drying & timber seasoning',
  blurb: 'Automated kiln drying to a verified 12–15% moisture content, typically 3–12 days per batch.',
};

const VPI: ServiceLink = {
  href: '/#services',
  title: 'VPI timber treatment',
  blurb: 'Borate preservative driven in at 10 bar, with retention records per batch and a 10-year pest warranty.',
};

const ISPM: ServiceLink = {
  href: '/#services',
  title: 'ISPM 15 heat treatment',
  blurb: 'IPPC-registered heat treatment for export wooden packaging, with the IPPC mark and a certificate per batch.',
};

const EXPORT_RE = /ispm|ippc|export|packaging|pallet/;
const TREATMENT_RE = /vpi|termite|borate|boron|preserv|decay|fungal|masonry|roof|joist|lintel|wall-plate|decking|coastal|frame|warranty|impregnat|beetle/;
const DRYING_RE = /kiln|dry|drying|seasoning|moisture|warp|crack|split|case-hardening|fibre|schedule|meter|shrink/;

export function serviceLinksFor(post: Post): ServiceLink[] {
  // Slug and tags only: the category label ("Timber Treatment") is generic and
  // appears on most articles, so matching it would tag nearly every post as VPI.
  const text = `${post.slug} ${post.tags.join(' ')}`.toLowerCase();
  const matched: ServiceLink[] = [];
  if (EXPORT_RE.test(text)) matched.push(ISPM);
  if (TREATMENT_RE.test(text)) matched.push(VPI);
  if (DRYING_RE.test(text)) matched.push(KILN);
  // Topic matches lead; the core services follow so every article gets two
  // cards. De-duplicate by URL — ISPM 15 and VPI share the homepage section.
  const seen = new Set<string>();
  return [...matched, KILN, VPI].filter((l) => !seen.has(l.href) && seen.add(l.href)).slice(0, 2);
}
