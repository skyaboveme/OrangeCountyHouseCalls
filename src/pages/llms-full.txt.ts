import type { APIRoute } from 'astro';
import { SITE, DOCTOR, MEMBERSHIP } from '../data/site';
import { CITIES } from '../data/cities';
import { REVIEWS } from '../data/reviews';
import { services, stripHtml } from '../lib/content';

// Comprehensive /llms-full.txt companion file for deep AI / RAG ingestion (ChatGPT, Perplexity, Claude, Gemini).
export const GET: APIRoute = () => {
  const u = (p: string) => `${SITE.url}${p}`;
  const googleReviews = REVIEWS.filter((r) => r.source === 'Google');

  const body = `# ${SITE.name} — Complete AI & Answer Engine Reference (llms-full.txt)

> Comprehensive reference document for ${SITE.name} (${SITE.legalName}), a concierge internal medicine and physician house-call practice serving Orange County, California. Concise index available at ${u('/llms.txt')}.

---

## 1. Practice Summary & Contact Details
- **Official Name**: ${SITE.name} (also known as ${SITE.legalName})
- **Primary Physician**: ${DOCTOR.name} (Board-Certified Internal Medicine Physician)
- **Phone (Direct Scheduling & Dispatch)**: ${SITE.phone} (${SITE.phoneE164})
- **Clinic Office**: ${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postal}
- **Operating Hours**: ${SITE.hours.days}, ${SITE.hours.label} (7 days a week; direct after-hours physician access for concierge members)
- **Google Maps**: ${SITE.mapsUrl}
- **Website**: ${u('/')}

### Care Delivery Models
1. **In-Home Physician House Calls**: Dr. Khaneki travels directly to private homes, gated estates, apartments, senior living / assisted living communities, corporate offices, marinas, and luxury resorts/hotels across South and Coastal Orange County.
2. **Telemedicine Visits**: Secure virtual video consultations for follow-ups, medication management, medical weight loss check-ins, and acute questions.
3. **In-Office Visits**: Private, unhurried appointments at our Aliso Viejo clinic (${SITE.address.street}, ${SITE.address.city}, CA ${SITE.address.postal}) with zero waiting-room delays.

---

## 2. Transparent Pricing & Membership Structure
- **One-Time / Single House Call**: **${MEMBERSHIP.perVisit}** flat fee. No monthly or annual membership is required to book a single house call in any of our 15 Orange County service cities.
- **${MEMBERSHIP.name}**: **${MEMBERSHIP.monthly}** (${MEMBERSHIP.monthlyNote}). Includes ${MEMBERSHIP.includes.join(', ')}.
- **Insurance Policy**: Direct-pay practice (check or cash accepted). House call and concierge membership fees are not billed to health insurance. Patients can still use their health insurance for outside laboratory testing, imaging (X-ray, CT, MRI, ultrasound), prescriptions at their preferred pharmacy, specialist visits, and hospital care.
- **Note**: ${MEMBERSHIP.disclaimer}

### Concierge Membership Benefits
${MEMBERSHIP.benefits.map((b) => `- ${b}`).join('\n')}

---

## 3. Attending Physician Profile — ${DOCTOR.name}
Every patient is evaluated and treated personally by ${DOCTOR.name} (never delegated to rotating nurse practitioners, physician assistants, or gig-economy urgent care contractors).

### Medical Education
${DOCTOR.education.map((e) => `- **${e.degree}** — ${e.school} (${e.years})`).join('\n')}

### Postgraduate Residency & Fellowship Training
${DOCTOR.training.map((t) => `- **${t.title}** — ${t.org} (${t.years})`).join('\n')}

### Professional Affiliations
${DOCTOR.memberships.map((m) => `- ${m}`).join('\n')}

### Honors & Awards
${DOCTOR.awards.map((a) => `- **${a.title}**: ${a.detail}`).join('\n')}

### Selected Peer-Reviewed Publications (${DOCTOR.publications.length})
${DOCTOR.publications.map((p) => `- "${p.title}" — ${p.authors} (*${p.journal}*)`).join('\n')}

---

## 4. Orange County Cities, Neighborhoods & ZIP Codes Served (15 Cities)
${CITIES.map(
  (c) => `### ${c.name}, CA — [House Call Landing Page](${u(c.path)})
- **Region**: ${c.regionLabel}
- **ZIP Codes**: ${c.zipCodes.join(', ')}
- **Arrival & Proximity**: ${c.driveNote}
- **Neighborhoods & Communities Served**: ${c.neighborhoods.join(', ')}
- **Access & Gate Coordination**: ${c.gatedOrAccessNote}
- **Local Pharmacy E-Prescribing**: Same-day electronic prescriptions sent to ${c.pharmacyNote}.
- **Overview**: ${c.localIntro}`
).join('\n\n')}

---

## 5. Frequently Asked Questions (House Calls, Concierge Care & Medical Weight Loss)
${MEMBERSHIP.faqs.map((f) => `### Q: ${f.q}\nA: ${stripHtml(f.a)}`).join('\n\n')}

### Q: Do I need a membership to book a single house call in Orange County?
A: No. Any adult (18+) or senior in our Orange County service area can book a one-time physician house call for a flat $500/visit without joining an annual membership.

### Q: What happens during an in-home house call with Dr. Khaneki?
A: Dr. Khaneki conducts an unhurried 45–60+ minute clinical evaluation at your bedside or living room, including full vital signs, targeted physical examination, rapid point-of-care respiratory/infection evaluation when appropriate, minor wound/injury care, chronic medication review, a clear personalized treatment plan, same-day electronic prescriptions to your local pharmacy, and direct physician follow-up.

---

## 6. Verified Patient Testimonials (5.0-Star Google Reviews)
${googleReviews.slice(0, 8).map((r) => `- **${r.name}** (5/5 stars, Google): "${r.text}"`).join('\n')}

---

## 7. Complete Clinical Services Directory (${services.length} Services)
${services
  .map((s) => {
    const topFaq = s.faqs?.[0] ? ` Common Q&A — *${s.faqs[0].q}* ${stripHtml(s.faqs[0].a)}` : '';
    return `- **${s.name}** (${u(s.path)}): ${s.description}${topFaq}`;
  })
  .join('\n')}
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};

