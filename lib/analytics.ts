// Lightweight conversion tracking for GA4 (G-QS03GW2LEN). Fires events through
// the global gtag instance set up in components/Analytics.tsx. Mark these events
// as key events in GA4 (Admin → Events) so they count as conversions.

type GtagParams = Record<string, unknown>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

/**
 * Send a GA4 event. No-ops safely during SSR or before gtag has loaded
 * (falls back to a dataLayer push so nothing is lost). On non-production hosts
 * gtag is never set, so events quietly go nowhere — which is what we want.
 */
export function trackConversion(action: string, params: GtagParams = {}): void {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, params);
  } else {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(['event', action, params]);
  }
}

// Event names — kept stable so GA4 key-event config doesn't break.
export const CONVERSION_EVENTS = {
  whatsappClick: 'contact_whatsapp',
  phoneClick: 'contact_phone',
  formSubmit: 'generate_lead',
} as const;
