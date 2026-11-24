import { describe, expect, it } from "vitest";
import { assetUrl } from "@/lib/asset-url";
import { BANNER, IMG, PULSE, PULSE_COVER } from "@/components/iapa/media";
import { PARTNER_LOGOS } from "@/components/iapa/partner-logos";
import { CHILD_CONTENT } from "@/lib/iapa-child-content";

const PUBLIC_ASSET_PREFIX = "https://iapa-grow-together.lovable.app/__l5e/assets-v1/";

describe("downloadable source asset URLs", () => {
  it("uses absolute public URLs for every image and newsletter registry", () => {
    const portraits = Object.values(CHILD_CONTENT).flatMap((children) =>
      Object.values(children).flatMap((child) => [child.en, child.fr].flatMap((copy) =>
        (copy.samples ?? []).flatMap((sample) => sample.portraitUrl ? [sample.portraitUrl] : []),
      )),
    );
    const urls = [
      ...Object.values(IMG),
      ...Object.values(BANNER).map((banner) => banner.src),
      ...Object.values(PULSE),
      ...Object.values(PULSE_COVER),
      ...PARTNER_LOGOS.flat().map((logo) => logo.src),
      ...portraits,
    ];

    expect(urls.length).toBeGreaterThan(90);
    for (const url of urls) expect(url.startsWith(PUBLIC_ASSET_PREFIX)).toBe(true);
  });

  it("adds the public origin to relative asset paths without changing absolute URLs", () => {
    expect(assetUrl("/__l5e/assets-v1/id/photo.webp")).toBe(`${PUBLIC_ASSET_PREFIX}id/photo.webp`);
    expect(assetUrl("https://example.com/photo.webp")).toBe("https://example.com/photo.webp");
  });
});
