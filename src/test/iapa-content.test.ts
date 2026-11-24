import { describe, expect, it } from "vitest";
import { CONTACT, CONTENT, SOCIALS } from "@/lib/iapa-content";
import { PAGES } from "@/lib/iapa-pages";
import { NAV } from "@/lib/iapa-nav";
import { AFRICA_REGIONS } from "@/components/iapa/africa-map";
import { getStory, STORIES } from "@/lib/iapa-stories";
import mapData from "@/lib/africa-map-data.json";
import { CHILD_CONTENT } from "@/lib/iapa-child-content";
import { partitionEvents } from "@/components/iapa/events";

describe("IAPA content", () => {
  it("keeps the same number of figures in English and French for each results group", () => {
    for (const k of ["ownStats", "sharedStats", "targetStats"] as const) {
      expect(CONTENT.fr.work[k].length).toBe(CONTENT.en.work[k].length);
    }
  });
  it("labels 2030 figures as future targets", () => {
    expect(CONTENT.en.work.targets.tag).toMatch(/not yet achieved/i);
    expect(CONTENT.en.work.targetStats.map(([n]) => n)).toEqual(["200", "860", "70", "370", "40", "1M+"]);
  });
  it("uses the verified contact email", () => {
    expect(CONTACT.email).toBe("secretariatexecutif.iapa@gmail.com");
  });
  it("links the footer to Facebook, LinkedIn, Instagram and X", () => {
    expect(SOCIALS.map((s) => s.name)).toEqual(["Facebook", "LinkedIn", "Instagram", "X"]);
    for (const s of SOCIALS) {
      expect(s.href).toMatch(/^https:\/\/(www\.)?(facebook|linkedin|instagram|x)\.com\/.+$/);
    }
  });
  it("labels the social links in both languages", () => {
    expect(PAGES.en.arch.social).toBe("Follow us");
    expect(PAGES.fr.arch.social).toBe("Suivez-nous");
  });
  it("gives all 32 dropdown children a unique page path in each language", () => {
    const children = NAV.flatMap((page) => page.groups.flatMap((group) => group.items.map((item) => ({ page: page.slug, id: item.id }))));
    expect(children).toHaveLength(32);
    for (const lang of ["en", "fr"] as const) {
      const paths = children.map(({ page, id }) => `/${lang}/${page}/${id}`);
      expect(new Set(paths).size).toBe(32);
      expect(paths.every((path) => !path.includes("#"))).toBe(true);
    }
  });
  it("never shows the ASR acronym in navigation or page copy", () => {
    const labels = NAV.flatMap((page) => page.groups.flatMap((group) => group.items.flatMap((item) => [item.id, item.label.en, item.label.fr])));
    expect(labels.some((text) => /\bASR\b/.test(text))).toBe(false);
    expect(labels).toContain("iapa-team");
    expect(labels).toContain("iapa-in-numbers");
    expect(JSON.stringify([PAGES.en, PAGES.fr])).not.toMatch(/\bASR\b/);
  });
  it("maps every IAPA region and country to a real SVG shape in both languages", () => {
    const shapeIds = new Set(mapData.countries.map((c) => c.id));
    expect(AFRICA_REGIONS).toHaveLength(5);
    for (const lang of ["en", "fr"] as const) {
      AFRICA_REGIONS.forEach((region, i) => {
        const expected = (CONTENT[lang].who.regions[i]?.[1] ?? "").split(", ");
        expect(region.countries.map((c) => c[lang])).toEqual(expected);
        for (const c of region.countries) {
          expect(shapeIds.has(c.id)).toBe(true);
        }
      });
    }
  });
  it("gives every child page distinct bilingual copy and a unique hero image", () => {
    const children = NAV.flatMap((page) => page.groups.flatMap((group) => group.items.map((item) => ({ page: page.slug, id: item.id }))));
    const heroes = new Set<string>();
    const leads = new Set<string>();
    for (const { page, id } of children) {
      const entry = CHILD_CONTENT[page][id];
      expect(entry, `${page}/${id}`).toBeDefined();
      heroes.add(entry!.img);
      leads.add(entry!.en.lead);
      leads.add(entry!.fr.lead);
    }
    expect(heroes.size).toBe(32);
    expect(leads.size).toBe(64);
  });
  it("fills formerly empty resource and opportunity pages with sample cards", () => {
    const pages = ["policy-briefs", "research-papers", "case-studies", "webinars", "multimedia", "podcasts"];
    for (const id of pages) {
      expect(CHILD_CONTENT["knowledge-hub"][id]?.en.samples?.length, id).toBeGreaterThanOrEqual(3);
      expect(CHILD_CONTENT["knowledge-hub"][id]?.fr.samples?.length, id).toBeGreaterThanOrEqual(3);
    }
    for (const id of ["vacancies", "scholarships"]) {
      expect(CHILD_CONTENT["join-us"][id]?.en.samples?.length, id).toBeGreaterThanOrEqual(3);
      expect(CHILD_CONTENT["join-us"][id]?.fr.samples?.length, id).toBeGreaterThanOrEqual(3);
    }
  });
  it("gives podcasts playable durations and publications structured takeaways without generic sample phrasing", () => {
    for (const lang of ["en", "fr"] as const) {
      const pods = CHILD_CONTENT["knowledge-hub"]["podcasts"]?.[lang];
      expect(pods?.sampleKind).toBe("podcast");
      for (const ep of pods?.samples ?? []) {
        expect(ep.durationSec).toBeGreaterThan(60);
        expect(ep.text).not.toMatch(/^(A sample|Un épisode fictif)/i);
      }
      for (const pubId of ["policy-briefs", "research-papers", "case-studies"]) {
        const pub = CHILD_CONTENT["knowledge-hub"][pubId]?.[lang];
        expect(pub?.sampleKind).toBe("publication");
        for (const doc of pub?.samples ?? []) {
          expect(doc.highlights?.length).toBeGreaterThanOrEqual(3);
          expect(doc.text).not.toMatch(/^(A sample|Une note fictive|Un article fictif|Un cas fictif)/i);
        }
      }
    }
  });
  it("separates upcoming and past events in both languages", () => {
    for (const lang of ["en", "fr"] as const) {
      const media = PAGES[lang].media;
      const { upcoming, past } = partitionEvents(media.events);
      expect(upcoming.map(([, title]) => title)).toEqual([
        lang === "en" ? "General meeting of members" : "Réunion générale des membres",
      ]);
      expect(past).toHaveLength(5);
      expect(media.upcomingEventsTitle).toBe(lang === "en" ? "Upcoming events" : "Événements à venir");
      expect(media.pastEventsTitle).toBe(lang === "en" ? "Past events" : "Événements passés");
    }
  });
  it("provides a bilingual inside page for every field story", () => {
    expect(STORIES).toHaveLength(CONTENT.en.work.stories.length);
    for (const s of CONTENT.en.work.stories) {
      const detail = getStory(s.img);
      expect(detail).toBeDefined();
      expect(detail?.en.body.length).toBeGreaterThanOrEqual(3);
      expect(detail?.fr.body.length).toBeGreaterThanOrEqual(3);
      expect(detail?.en.highlights.length).toBeGreaterThanOrEqual(3);
      expect(detail?.fr.highlights.length).toBeGreaterThanOrEqual(3);
    }
  });
});
