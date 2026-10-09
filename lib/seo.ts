import type { Metadata } from 'next';

// Next.js merges `metadata` SHALLOWLY across layout -> page: a page that sets its
// own `openGraph` replaces the layout's openGraph object wholesale, dropping
// og:type, og:site_name, og:locale and og:image. Spread OG_BASE at the start of
// every page-level `openGraph` so those tags survive, then add the page's own
// url / title / description (and `images` / `type` where they differ).
//
// The image is a static file (public/og-image.jpg, 1200x630). Do not reintroduce
// an app/opengraph-image route: the file convention silently supplies og:image
// for any page whose openGraph lacks `images`, and a generated PNG was taking
// ~6s to render for social crawlers.
export const OG_IMAGE = {
  url: '/og-image.jpg',
  width: 1200,
  height: 630,
  alt: 'St. Xavier Timber — Kiln Drying & VPI Treatment Sri Lanka',
};

export const OG_BASE = {
  type: 'website',
  siteName: 'St. Xavier Timber',
  locale: 'en_LK',
  images: [OG_IMAGE],
} satisfies NonNullable<Metadata['openGraph']>;
