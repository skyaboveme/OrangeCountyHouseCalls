import { SITE, DOCTOR } from '../data/site';
import type { FAQ } from './content';
import { stripHtml } from './content';

const ORG_ID = `${SITE.url}/#clinic`;
const DOC_ID = `${SITE.url}/#physician`;
const WEB_ID = `${SITE.url}/#website`;

const address = {
  '@type': 'PostalAddress',
  streetAddress: SITE.address.street,
  addressLocality: SITE.address.city,
  addressRegion: SITE.address.region,
  postalCode: SITE.address.postal,
  addressCountry: SITE.address.country,
};

/** Site-wide graph: MedicalClinic + Physician + WebSite (included on every page) */
export const baseGraph = () => [
  {
    '@type': ['MedicalClinic', 'MedicalBusiness', 'LocalBusiness'],
    '@id': ORG_ID,
    name: SITE.name,
    alternateName: SITE.legalName,
    description: SITE.about,
    slogan: 'Personalized Medical Care, Delivered to Your Doorstep',
    url: `${SITE.url}/`,
    logo: `${SITE.url}/images/logo.png`,
    image: [`${SITE.url}/images/og-default.jpg`, `${SITE.url}/images/dr-sina-khaneki.jpg`],
    telephone: SITE.phoneE164,
    priceRange: '$$$',
    paymentAccepted: 'Cash, Check',
    currenciesAccepted: 'USD',
    address,
    geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    hasMap: SITE.mapsUrl,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: SITE.hours.open,
        closes: SITE.hours.close,
      },
    ],
    areaServed: SITE.areas.map((a) => ({ '@type': 'City', name: `${a}, CA` })),
    medicalSpecialty: ['InternalMedicine', 'PrimaryCare', 'Geriatric'],
    availableService: [
      { '@type': 'MedicalProcedure', name: 'House Calls (In-Home Medical Care)' },
      { '@type': 'MedicalProcedure', name: 'Concierge Medicine' },
      { '@type': 'MedicalProcedure', name: 'Telemedicine' },
      { '@type': 'MedicalProcedure', name: 'Medical Weight Loss' },
      { '@type': 'MedicalProcedure', name: 'Personal Injury & Auto Accident Care' },
    ],
    employee: { '@id': DOC_ID },
    founder: { '@id': DOC_ID },
    sameAs: [SITE.social.facebook, SITE.social.instagram, SITE.social.google],
    makesOffer: {
      '@type': 'Offer',
      name: 'Premier Membership',
      description: 'Concierge membership including in-office visits, telemedicine and house calls.',
      priceSpecification: [
        { '@type': 'UnitPriceSpecification', price: 500, priceCurrency: 'USD', unitText: 'visit' },
        { '@type': 'UnitPriceSpecification', price: 500, priceCurrency: 'USD', unitText: 'month', description: 'with 1-year membership' },
      ],
    },
  },
  {
    '@type': ['Physician', 'Person'],
    '@id': DOC_ID,
    name: DOCTOR.name,
    givenName: DOCTOR.givenName,
    familyName: DOCTOR.familyName,
    honorificSuffix: 'MD, MPH',
    jobTitle: 'Internal Medicine Physician',
    medicalSpecialty: 'InternalMedicine',
    image: `${SITE.url}/images/dr-sina-khaneki.jpg`,
    url: `${SITE.url}/about/`,
    telephone: SITE.phoneE164,
    address,
    worksFor: { '@id': ORG_ID },
    alumniOf: DOCTOR.education.map((e) => ({ '@type': 'CollegeOrUniversity', name: e.school })),
    memberOf: DOCTOR.memberships.map((m) => ({ '@type': 'Organization', name: m })),
    award: DOCTOR.awards.map((a) => `${a.title} — ${a.detail}`),
    knowsAbout: ['Internal Medicine', 'Concierge Medicine', 'House Calls', 'Obesity Medicine', 'Medical Weight Loss', 'Geriatric Medicine', 'Preventive Medicine', 'Chronic Disease Management'],
  },
  {
    '@type': 'WebSite',
    '@id': WEB_ID,
    url: `${SITE.url}/`,
    name: SITE.name,
    description: SITE.tagline,
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-US',
  },
];

export const breadcrumb = (items: { name: string; path: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: `${SITE.url}${it.path}`,
  })),
});

export const faqPage = (faqs: FAQ[]) =>
  faqs.length
    ? {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: stripHtml(f.a) },
        })),
      }
    : null;

export const medicalWebPage = (o: { path: string; title: string; description: string; about?: string; modified?: string | null }) => ({
  '@type': 'MedicalWebPage',
  '@id': `${SITE.url}${o.path}#webpage`,
  url: `${SITE.url}${o.path}`,
  name: o.title,
  description: o.description,
  isPartOf: { '@id': WEB_ID },
  publisher: { '@id': ORG_ID },
  reviewedBy: { '@id': DOC_ID },
  lastReviewed: o.modified ? o.modified.slice(0, 10) : undefined,
  audience: { '@type': 'PeopleAudience', suggestedMinAge: 18 },
  about: o.about ? { '@type': 'MedicalCondition', name: o.about } : undefined,
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.lede'] },
  inLanguage: 'en-US',
});

export const serviceSchema = (o: { name: string; path: string; description: string }) => ({
  '@type': 'MedicalProcedure',
  name: `${o.name} in Aliso Viejo, CA`,
  description: o.description,
  url: `${SITE.url}${o.path}`,
  provider: { '@id': ORG_ID },
  performer: { '@id': DOC_ID },
  areaServed: SITE.areas.map((a) => `${a}, CA`),
});

export const definedTerms = (name: string, path: string, terms: { term: string; def: string }[]) =>
  terms.length
    ? {
        '@type': 'DefinedTermSet',
        name,
        url: `${SITE.url}${path}`,
        hasDefinedTerm: terms.map((t) => ({ '@type': 'DefinedTerm', name: t.term, description: t.def })),
      }
    : null;

export const article = (o: { path: string; title: string; description: string; published: string | null; modified: string | null }) => ({
  '@type': 'BlogPosting',
  '@id': `${SITE.url}${o.path}#article`,
  headline: o.title,
  description: o.description,
  url: `${SITE.url}${o.path}`,
  mainEntityOfPage: `${SITE.url}${o.path}`,
  datePublished: o.published,
  dateModified: o.modified || o.published,
  image: `${SITE.url}/images/og-default.jpg`,
  author: { '@id': DOC_ID },
  reviewedBy: { '@id': DOC_ID },
  publisher: { '@id': ORG_ID },
  inLanguage: 'en-US',
});

export const graph = (...nodes: (object | null | undefined)[]) => ({
  '@context': 'https://schema.org',
  '@graph': [...baseGraph(), ...nodes.filter(Boolean)],
});
