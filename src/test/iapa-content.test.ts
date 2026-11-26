import { describe, expect, it } from "vitest";
import { CONTACT, CONTENT, SOCIALS } from "@/lib/iapa-content";
import { PAGES } from "@/lib/iapa-pages";
import { NAV } from "@/lib/iapa-nav";
import { AFRICA_REGIONS } from "@/components/iapa/africa-map";
import mapData from "@/lib/africa-map-data.json";
import { CHILD_CONTENT } from "@/lib/iapa-child-content";
import { CAPTIONS } from "@/lib/iapa-photos";
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
  it("gives all 24 dropdown children a unique page path in each language", () => {
    const children = NAV.flatMap((page) => page.groups.flatMap((group) => group.items.map((item) => ({ page: page.slug, id: item.id }))));
    expect(children).toHaveLength(24);
    for (const lang of ["en", "fr"] as const) {
      const paths = children.map(({ page, id }) => `/${lang}/${page}/${id}`);
      expect(new Set(paths).size).toBe(24);
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
    expect(heroes.size).toBe(24);
    expect(leads.size).toBe(48);
  });
  it("keeps Knowledge Hub sub-pages empty and lists the six coming-soon categories in both languages", () => {
    expect(Object.keys(CHILD_CONTENT["knowledge-hub"])).toHaveLength(0);
    expect(NAV.find((n) => n.slug === "knowledge-hub")?.groups).toHaveLength(0);
    expect(PAGES.en.hub.categories).toHaveLength(6);
    expect(PAGES.fr.hub.categories).toHaveLength(6);
    expect(PAGES.en.hub.soon).toBe("Coming soon");
    expect(PAGES.fr.hub.soon).toBe("Bientôt disponible");
    for (const id of ["vacancies", "scholarships"]) {
      expect(CHILD_CONTENT["join-us"][id]?.en.samples?.length, id).toBeGreaterThanOrEqual(3);
      expect(CHILD_CONTENT["join-us"][id]?.fr.samples?.length, id).toBeGreaterThanOrEqual(3);
    }
  });
  it("matches the five client-approved Our Journey steps in English and French", () => {
    expect(PAGES.en.who.timeline).toEqual([
      ["2014–2019", "Idea generation for the establishment of country associations of trainers"],
      ["Sep 2023", "Master Trainer Network Conference in Johannesburg; an interim steering team was set up to develop the statutes"],
      ["Jul 2024", "IAPA Constituent General Assembly: validation of the statutes and election of the governing body"],
      ["2025", "IAPA Ordinary General Assembly, Aburi, Ghana"],
      ["2026", "IAPA legalisation and development of framework documents"],
    ]);
    expect(PAGES.fr.who.timeline).toEqual([
      ["2014–2019", "Émergence de l'idée de créer des associations nationales de formateurs"],
      ["Sept. 2023", "Conférence du réseau des Master Trainers à Johannesburg ; mise en place d'un comité de pilotage intérimaire chargé d'élaborer les statuts"],
      ["Juil. 2024", "Assemblée générale constitutive de l'IAPA : validation des statuts et élection des organes dirigeants"],
      ["2025", "Assemblée générale ordinaire de l'IAPA, Aburi, Ghana"],
      ["2026", "Légalisation de l'IAPA et élaboration des documents cadres"],
    ]);
  });
  it("marks only unconfirmed photo captions as TBC and removes unconfirmed partner/date claims", () => {
    const kept = ["kenya", "evaluation", "signing", "robusta", "chadSup", "burkinaSession", "mali", "morocco"];
    for (const k of kept) expect(CAPTIONS[k]?.tbc).toBeUndefined();
    expect(CAPTIONS["ghana"]).toMatchObject({ en: "IAPA members, Ghana", tbc: true });
    expect(CAPTIONS["mauritania"]).toMatchObject({ en: "Processor Business School training session", tbc: true });
    expect(CAPTIONS["civ"]).toEqual({ en: "FBS Coffee training of trainers, Côte d'Ivoire", fr: "Formation de formateurs FBS Café, Côte d'Ivoire" });
    expect(CAPTIONS["spirulina"]).toMatchObject({ en: "Farmer Business School training session", tbc: true });
    expect(CAPTIONS["burkinaMaize"]).toEqual({ en: "PBS training of trainers, Burkina Faso", fr: "Formation de formateurs PBS, Burkina Faso" });
    expect(CAPTIONS["cameroon"]).toMatchObject({ en: "FBS Coffee trainers, Cameroon", tbc: true });
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
});
