import { describe, expect, it } from "vitest";
import { CONTACT, CONTENT, SOCIALS } from "@/lib/iapa-content";
import { PAGES } from "@/lib/iapa-pages";

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
});
