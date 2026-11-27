import { describe, expect, it } from "vitest";
import { searchIndex, searchSite } from "@/lib/iapa-search";

describe("site search", () => {
  it("finds training by name and ranks the matching child above general content", () => {
    expect(searchSite("Farmer Business School", "en")[0]?.href).toBe("/$lang/training/fbs");
  });
  it("matches French without requiring accents", () => {
    expect(searchSite("evenements", "fr")[0]?.href).toBe("/$lang/media/events");
  });
  it("finds newsletter content on the current Knowledge Hub page", () => {
    expect(searchSite("Pulse", "en").some((entry) => entry.href === "/$lang/knowledge-hub")).toBe(true);
  });
  it("returns no results for unmatched queries", () => {
    expect(searchSite("xyzzzznotfound", "en")).toEqual([]);
  });
  it("indexes stories and Knowledge Hub category pages in both languages", () => {
    for (const lang of ["en", "fr"] as const) {
      expect(searchIndex(lang).filter((entry) => /\/stories\//.test(entry.href))).toHaveLength(6);
      const hubChildren = searchIndex(lang).filter((entry) => /knowledge-hub\//.test(entry.href)).map((entry) => entry.href);
      expect(hubChildren).toHaveLength(9);
      expect(hubChildren).toContain("/$lang/knowledge-hub/key-documents");
      expect(hubChildren).toContain("/$lang/knowledge-hub/newsletters");
      const mediaChildren = searchIndex(lang).filter((entry) => /\/media\//.test(entry.href)).map((entry) => entry.href);
      expect(mediaChildren).toEqual(["/$lang/media/events", "/$lang/media/press-releases"]);
    }
  });
});