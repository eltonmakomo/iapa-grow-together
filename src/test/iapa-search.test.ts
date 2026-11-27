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
  it("excludes deleted stories and Knowledge Hub child pages in both languages", () => {
    for (const lang of ["en", "fr"] as const) {
      expect(searchIndex(lang).filter((entry) => /stories|knowledge-hub\//.test(entry.href))).toEqual([]);
    }
  });
});