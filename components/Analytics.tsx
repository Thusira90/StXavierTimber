'use client';

import { useEffect } from 'react';

// GA4 tag. Loaded ONLY on the canonical production host.
//
// Why not gate on NODE_ENV: on Vercel, preview deployments also build with
// NODE_ENV === 'production', so a NODE_ENV gate lets the production GA tag fire
// on every preview URL — polluting the property with vercel.app referral and
// short-session "Direct" traffic. Gate on the Vercel environment variable and
// the live hostname instead. Set NEXT_PUBLIC_VERCEL_ENV in the Vercel project
// (production scope = "production") so it is inlined into the client bundle.
//
// The tag is injected imperatively from the effect (an external system) rather
// than rendered as JSX — this keeps SSR/hydration output empty and side-steps
// setState-in-effect.
const GA_MEASUREMENT_ID = 'G-QS03GW2LEN';
// Accept both www and non-www — visitors reach the site under either hostname
// depending on how the link was shared, and the tag must fire in both cases.
const PRODUCTION_HOSTS = new Set(['www.stxaviertimber.com', 'stxaviertimber.com']);

export function Analytics() {
  useEffect(() => {
    const isProd =
      process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' &&
      PRODUCTION_HOSTS.has(window.location.hostname);
    if (!isProd) return;
    if (document.getElementById('ga4-gtag')) return; // guard against double-injection

    const tag = document.createElement('script');
    tag.id = 'ga4-gtag';
    tag.async = true;
    tag.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(tag);

    window.dataLayer = window.dataLayer || [];
    // Each dataLayer entry is a command tuple; gtag.js reads them positionally.
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    // Expose globally so lib/analytics.ts trackConversion() can fire events.
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);
  }, []);

  return null;
}
