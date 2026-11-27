import { describe, expect, it } from "vitest";
import { CONTACT, CONTENT, SOCIALS } from "@/lib/iapa-content";
import { PAGES } from "@/lib/iapa-pages";
import { NAV } from "@/lib/iapa-nav";
import { AFRICA_REGIONS } from "@/components/iapa/africa-map";
import mapData from "@/lib/africa-map-data.json";
import { CHILD_CONTENT } from "@/lib/iapa-child-content";
import { CAPTIONS } from "@/lib/iapa-photos";
import { partitionEvents } from "@/components/iapa/events";
import { PULSE, PULSE_COVER } from "@/components/iapa/media";
import { STORIES } from "@/lib/iapa-stories";
import { EVENT_DETAILS, LEADERSHIP_PROFILES, PRESS_DETAILS, WHAT_WE_DO_DETAILS } from "@/lib/iapa-details";
import { formSubmissionSchema } from "@/lib/forms.functions";

describe("IAPA content", () => {
  it("keeps the same number of figures in English and French for each results group", () => {
    for (const k of ["ownStats", "sharedStats", "targetStats"] as const) {
      expect(CONTENT.fr.work[k].length).toBe(CONTENT.en.work[k].length);
    }
  });
  it("shows exactly the four headline figures on the results summary, in both languages", () => {
    const en = CONTENT.en.work.headlineStats;
    const fr = CONTENT.fr.work.headlineStats;
    expect(en.map(([n]) => n)).toEqual(["20+", "1.5M+", "500+", "75+"]);
    expect(fr.map(([n]) => n)).toEqual(["20+", "1,5 M+", "500+", "75+"]);
    expect(en.map(([, , tone]) => tone)).toEqual(["own", "shared", "shared", "own"]);
    expect(fr.map(([, , tone]) => tone)).toEqual(["own", "shared", "shared", "own"]);
    expect(CONTENT.en.work.viewAll).toBe("View all figures");
    expect(CONTENT.fr.work.viewAll).toBe("Voir tous les chiffres");
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
  it("gives all 33 dropdown children across all 6 top-level pages a unique page path in each language", () => {
    expect(NAV.every((page) => page.groups.length > 0)).toBe(true);
    const children = NAV.flatMap((page) => page.groups.flatMap((group) => group.items.map((item) => ({ page: page.slug, id: item.id }))));
    expect(children).toHaveLength(33);
    for (const lang of ["en", "fr"] as const) {
      const paths = children.map(({ page, id }) => `/${lang}/${page}/${id}`);
      expect(new Set(paths).size).toBe(33);
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
    expect(heroes.size).toBe(33);
    expect(leads.size).toBe(66);
  });
  it("populates all 6 Knowledge Hub categories, Stories, Team and Testimonials with sample content in both languages", () => {
    expect(NAV.find((n) => n.slug === "knowledge-hub")?.groups).toHaveLength(2);
    for (const id of ["policy-briefs", "research-papers", "case-studies", "webinars", "multimedia", "podcasts"]) {
      expect(CHILD_CONTENT["knowledge-hub"][id]?.en.samples?.length, id).toBeGreaterThanOrEqual(3);
      expect(CHILD_CONTENT["knowledge-hub"][id]?.fr.samples?.length, id).toBeGreaterThanOrEqual(3);
    }
    expect(CHILD_CONTENT["who-we-are"]["iapa-team"]?.en.samples?.length).toBeGreaterThanOrEqual(3);
    expect(CHILD_CONTENT["our-work"]["testimonials"]?.en.samples?.length).toBeGreaterThanOrEqual(3);
    expect(STORIES).toHaveLength(6);
    expect(WHAT_WE_DO_DETAILS).toHaveLength(7);
    expect(EVENT_DETAILS).toHaveLength(6);
    expect(PRESS_DETAILS).toHaveLength(1);
    expect(LEADERSHIP_PROFILES).toHaveLength(4);
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
  it("includes IAPA Pulse Issue 1 and Issue 2 while keeping Issue 3, AfCFTA, Patrick and Oct 2026 removed", () => {
    expect(Object.keys(PULSE)).toEqual(["2"]);
    expect(Object.keys(PULSE_COVER)).toEqual(["1", "2"]);
    expect(CONTENT.en.hub.issues.map((i) => i.key)).toEqual(["1", "2"]);
    expect(CONTENT.fr.hub.issues.map((i) => i.key)).toEqual(["1", "2"]);
    expect(PAGES.en.media.press.map(([d]) => d)).toEqual(["Aug 2026"]);
    expect(PAGES.fr.media.press.map(([d]) => d)).toEqual(["Août 2026"]);
    const allCopy = JSON.stringify([CONTENT, PAGES, CHILD_CONTENT, STORIES]);
    expect(allCopy).not.toMatch(/issue 3|numéro 3|october 2026|octobre 2026|oct\.? 2026|afcfta|zlecaf|patrick|2 october 2026|2 octobre 2026/i);
  });
  it("validates form submissions with Zod for newsletter and contact forms", () => {
    expect(formSubmissionSchema.safeParse({ formType: "newsletter", lang: "en", email: "bad-email" }).success).toBe(false);
    expect(formSubmissionSchema.safeParse({ formType: "newsletter", lang: "en", email: "member@iapa.org" }).success).toBe(true);
    expect(formSubmissionSchema.safeParse({ formType: "contact", lang: "en", fullName: "Amina", email: "a@iapa.org", message: "short" }).success).toBe(false);
    expect(formSubmissionSchema.safeParse({ formType: "contact", lang: "en", fullName: "Amina", email: "a@iapa.org", message: "Hello IAPA Secretariat, I would like to discuss training." }).success).toBe(true);
  });
});
