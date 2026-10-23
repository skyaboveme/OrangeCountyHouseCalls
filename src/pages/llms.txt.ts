import type { APIRoute } from 'astro';
import { SITE, DOCTOR, MEMBERSHIP } from '../data/site';
import { services, posts } from '../lib/content';

// llms.txt — concise, machine-readable brand summary for AI assistants / answer engines
export const GET: APIRoute = () => {
  const u = (p: string) => `${SITE.url}${p}`;
  const body = `# ${SITE.name}

> ${SITE.name} (Orange County HouseCalls) is a concierge internal medicine practice in Aliso Viejo, California led by ${DOCTOR.name}. The practice provides house calls (in-home medical care), telemedicine and in-office visits for adults 18+ and seniors across South Orange County, open 7 days a week, ${SITE.hours.label}.

## Key facts
- Physician: ${DOCTOR.name} — ${DOCTOR.specialty}
- Address: ${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postal}
- Phone: ${SITE.phone}
- Hours: Monday–Sunday, ${SITE.hours.label}
- Care models: House calls, concierge medicine, telemedicine, in-office visits
- Membership: ${MEMBERSHIP.name} — ${MEMBERSHIP.perVisit} or ${MEMBERSHIP.monthly} (${MEMBERSHIP.monthlyNote}); includes ${MEMBERSHIP.includes.join(', ')}
- Payment: Check or cash accepted; concierge fees are not covered by insurance
- Not an emergency service: for life-threatening symptoms call 911
- Service area: ${SITE.areas.join(', ')}

## Physician credentials
${DOCTOR.education.map((e) => `- ${e.degree}, ${e.school} (${e.years})`).join('\n')}
${DOCTOR.training.map((t) => `- ${t.title}, ${t.org} (${t.years})`).join('\n')}
- Memberships: ${DOCTOR.memberships.join('; ')}

## Core pages
- [Home](${u('/')})
- [About Dr. Khaneki](${u('/about/')})
- [Membership & Pricing](${u('/membership/')})
- [Patient Information](${u('/patient-information/')})
- [All Services](${u('/services/')})
- [Reviews](${u('/reviews/')})
- [Contact](${u('/contact-us/')})

## Services
${services.map((s) => `- [${s.name}](${u(s.path)}): ${s.description}`).join('\n')}

## Patient education
${posts.map((p) => `- [${p.h1}](${u(p.path)})`).join('\n')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
