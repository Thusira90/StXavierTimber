// Single source of truth for St. Xavier Timber's NAP (Name, Address, Phone).
// Import these everywhere — display strings AND schema.org PostalAddress —
// so the business's canonical details can never drift across the site.

export const COMPANY_NAME = 'St. Xavier Timber';

export const PHONE_OFFICE = '031 227 7752';
export const PHONE_MOBILE = '071 471 1417';
export const PHONE_MOBILE_ALT = '076 949 4944';

// E.164 forms for tel: links and schema telephone fields.
export const PHONE_OFFICE_E164 = '+94312277752';
export const PHONE_MOBILE_E164 = '+94714711417';
export const PHONE_MOBILE_ALT_E164 = '+94769494944';
export const PHONES_E164 = [PHONE_OFFICE_E164, PHONE_MOBILE_E164, PHONE_MOBILE_ALT_E164];

export const EMAIL = 'info@stxaviertimber.com';

// Canonical postal address parts.
export const STREET_ADDRESS = '1088, Colombo Road';
export const ADDRESS_LOCALITY = 'Daluwakotuwa, Kochchikade';
export const ADDRESS_REGION = 'Western Province';
export const POSTAL_CODE = '11540';
export const ADDRESS_COUNTRY = 'LK';

// Canonical single-line display address:
// "1088, Colombo Road, Daluwakotuwa, Kochchikade 11540, Sri Lanka"
export const NAP_ADDRESS_LINE =
  `${STREET_ADDRESS}, ${ADDRESS_LOCALITY} ${POSTAL_CODE}, Sri Lanka`;

// Shorter display used where a full postcode line is too long (e.g. footer).
export const NAP_ADDRESS_SHORT =
  `${STREET_ADDRESS}, ${ADDRESS_LOCALITY} ${POSTAL_CODE}`;

// schema.org PostalAddress — spread into every LocalBusiness JSON-LD block.
export const POSTAL_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: STREET_ADDRESS,
  addressLocality: ADDRESS_LOCALITY,
  addressRegion: ADDRESS_REGION,
  postalCode: POSTAL_CODE,
  addressCountry: ADDRESS_COUNTRY,
} as const;

export const GEO = {
  '@type': 'GeoCoordinates',
  latitude: 7.3553,
  longitude: 79.8638,
} as const;
