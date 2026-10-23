import servicesData from '../data/services.json';
import postsData from '../data/posts.json';
import pagesData from '../data/pages.json';
import glossaryData from '../data/glossary.json';

export interface FAQ { q: string; a: string }
export interface Service {
  path: string; slug: string; name: string; title: string; description: string; h1: string; html: string;
  faqs: FAQ[]; definitions: { term: string; def: string }[];
  related: { href: string; title: string }[]; references: { name: string; url: string }[];
  modified: string | null;
}
export interface Post {
  path: string; slug: string; title: string; description: string; h1: string; html: string;
  published: string | null; modified: string | null; excerpt: string;
}
export interface Page { path: string; title: string; description: string; h1: string; html: string }

export const services = servicesData as Service[];
export const posts = postsData as Post[];
export const pages = pagesData as Record<string, Page>;
export const glossary = glossaryData as { term: string; def: string }[];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

export const stripHtml = (h: string) => h.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

export const formatDate = (iso: string | null) =>
  iso ? new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }) : '';

export const readingTime = (h: string) => Math.max(2, Math.round(stripHtml(h).split(' ').length / 220));

/** Split a page's HTML into sections at each <h2>, used for in-page TOC */
export const tocFromHtml = (h: string) =>
  [...h.matchAll(/<h2>(.*?)<\/h2>/g)].map((m) => {
    const text = stripHtml(m[1]);
    return { text, id: slugify(text) };
  });

export const slugify = (t: string) =>
  t.toLowerCase().replace(/&[a-z]+;/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/** Add ids to h2s so the TOC can anchor to them */
export const withHeadingIds = (h: string) =>
  h.replace(/<h2>(.*?)<\/h2>/g, (_m, inner) => `<h2 id="${slugify(stripHtml(inner))}">${inner}</h2>`);

/** Split article HTML before the Nth <h2> so a mid-content CTA can be inserted. */
export const splitForCta = (h: string, nth = 2): [string, string] => {
  let idx = -1, from = 0;
  for (let i = 0; i < nth; i++) { idx = h.indexOf('<h2', from); if (idx === -1) return [h, '']; from = idx + 3; }
  return [h.slice(0, idx), h.slice(idx)];
};
