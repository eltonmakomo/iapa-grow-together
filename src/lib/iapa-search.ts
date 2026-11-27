import { CONTENT, type Lang } from "./iapa-content";
import { PAGES, LEGAL } from "./iapa-pages";
import { NAV } from "./iapa-nav";
import { CHILD_CONTENT } from "./iapa-child-content";
import { STORIES } from "./iapa-stories";

export type SearchEntry = { title: string; section: string; href: string; description: string; text: string };

function strings(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(strings);
  if (value && typeof value === "object") return Object.values(value).flatMap(strings);
  return [];
}

const normalize = (text: string) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[’']/g, " ");

export function searchIndex(lang: Lang): SearchEntry[] {
  const p = PAGES[lang];
  const c = CONTENT[lang];
  const pageData = { "who-we-are": [p.who, c.who], "our-work": [p.work, c.work], training: [p.training, c.training], "knowledge-hub": [p.hub, c.hub], media: p.media, "join-us": [p.join, c.join] };
  const entries: SearchEntry[] = [{ title: p.home, section: "IAPA", href: "/$lang", description: c.hero.lead, text: strings([c.hero, p.homeIntro]).join(" ") }];
  for (const page of NAV) {
    entries.push({ title: p.nav[page.slug], section: "IAPA", href: `/$lang/${page.slug}`, description: p.meta[page.slug][1], text: strings(pageData[page.slug]).join(" ") });
    for (const item of page.groups.flatMap((group) => group.items)) {
      const copy = CHILD_CONTENT[page.slug][item.id]?.[lang];
      entries.push({ title: item.label[lang], section: p.nav[page.slug], href: `/$lang/${page.slug}/${item.id}`, description: copy?.lead ?? page.blurb[lang], text: strings([copy?.heading, copy?.body, copy?.points]).join(" ") });
    }
  }
  for (const slug of ["privacy", "legal"] as const) {
    entries.push({ title: LEGAL[lang][slug].title, section: "IAPA", href: `/$lang/${slug}`, description: LEGAL[lang][slug].body[0] ?? "", text: LEGAL[lang][slug].body.join(" ") });
  }
  for (const story of STORIES) {
    const copy = story[lang];
    entries.push({ title: copy.title, section: copy.place, href: `/$lang/stories/${story.id}`, description: copy.lead, text: copy.body.join(" ") });
  }
  return entries;
}

const indexes = { en: searchIndex("en"), fr: searchIndex("fr") };

export function searchSite(query: string, lang: Lang): SearchEntry[] {
  const terms = normalize(query.trim()).split(/\s+/).filter(Boolean);
  if (!terms.length) return indexes[lang].filter((entry) => NAV.some((page) => entry.href === `/$lang/${page.slug}`));
  return indexes[lang].map((entry) => {
    const title = normalize(entry.title);
    const description = normalize(entry.description);
    const full = normalize(`${entry.title} ${entry.description} ${entry.text}`);
    const score = terms.every((term) => full.includes(term))
      ? terms.reduce((sum, term) => sum + (title.includes(term) ? 10 : description.includes(term) ? 3 : 1), 0)
      : 0;
    return { entry, score };
  }).filter(({ score }) => score > 0).sort((a, b) => b.score - a.score).map(({ entry }) => entry);
}