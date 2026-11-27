import { CONTENT, type Lang } from "@/lib/iapa-content";
import { assetUrl } from "@/lib/asset-url";
import abf from "@/assets/partners/abf.svg.asset.json";
import acbf from "@/assets/partners/acbf.svg.asset.json";
import eu from "@/assets/partners/european-union-transparent.png.asset.json";
import germanCooperation from "@/assets/partners/german-cooperation-transparent.png.asset.json";
import giz from "@/assets/partners/giz-transparent.png.asset.json";
import move from "@/assets/partners/move.png.asset.json";
import oacps from "@/assets/partners/oacps.png.asset.json";

type PartnerLogo = { src: string; alt: string };

export const PARTNER_LOGOS: ReadonlyArray<ReadonlyArray<PartnerLogo>> = [
  [
    { src: assetUrl(abf.url), alt: "Agri-Business Facility for Africa" },
    { src: assetUrl(giz.url), alt: "GIZ" },
  ],
  [
    { src: assetUrl(germanCooperation.url), alt: "German Cooperation — BMZ" },
    { src: assetUrl(giz.url), alt: "GIZ" },
  ],
  [
    { src: assetUrl(eu.url), alt: "European Union" },
    { src: assetUrl(oacps.url), alt: "Organisation of African, Caribbean and Pacific States" },
  ],
  [{ src: assetUrl(acbf.url), alt: "African Capacity Building Foundation" }],
  [{ src: assetUrl(move.url), alt: "MOVE — Market-Oriented Value Chains for Jobs and Growth in the ECOWAS Region" }],
];

export function PartnerCards({ lang, className = "sm:grid-cols-2 lg:grid-cols-3" }: { lang: Lang; className?: string }) {
  return (
    <ul className={`grid gap-5 ${className}`}>
      {CONTENT[lang].work.partners.map(([name, description], index) => {
        const logos = PARTNER_LOGOS[index] ?? [];
        return (
          <li key={name} className="curve-card group flex h-full flex-col bg-card p-6 md:p-7">
            <div className="flex h-28 items-center justify-center gap-5 px-5 py-4">
              {logos.map((logo) => (
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className={`h-full min-w-0 object-contain transition duration-300 group-hover:scale-105 ${logos.length > 1 ? "w-1/2" : "w-full"}`}
                />
              ))}
            </div>
            <h3 className="mt-5 text-lg font-extrabold text-primary">{name}</h3>
            <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">{description}</p>
          </li>
        );
      })}
    </ul>
  );
}

/** Paired partner logos in one continuous strip, then the standalone ACBF and MOVE logos below. */
export function PartnerStrip({ lang }: { lang: Lang }) {
  const partners = CONTENT[lang].work.partners;
  const group = (i: number) => {
    const entry = partners[i];
    return { name: entry?.[0] ?? "", text: entry?.[1] ?? "", logos: PARTNER_LOGOS[i] ?? [] };
  };
  const paired = [0, 1, 2].map(group);
  const standalones = [3, 4].map(group);
  const seen = new Set<string>();
  const units = paired.map((p) => {
    const logos = p.logos.filter((logo) => (seen.has(logo.alt) ? false : (seen.add(logo.alt), true)));
    return { ...p, logos };
  });
  return (
    <div>
      <div className="curve-card border bg-background px-6 py-8">
        <ul className="flex flex-wrap items-start justify-center gap-x-10 gap-y-10 md:gap-x-12">
          {units.map((p) => (
            <li key={p.name} className="flex w-[15rem] flex-col items-center text-center">
              <div className="flex h-20 items-center justify-center gap-4">
                {p.logos.map((logo) => (
                  <img key={logo.alt} src={logo.src} alt={logo.alt} loading="lazy" className="h-16 w-auto max-w-[9rem] object-contain md:h-20" />
                ))}
              </div>
              <h3 className="mt-4 text-sm font-extrabold text-primary">{p.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <ul className="mt-12 grid gap-6 sm:grid-cols-2">
        {standalones.map((p) => (
          <li key={p.name} className="curve-card flex flex-col items-center border bg-background p-8 text-center">
            {p.logos.map((logo) => (
              <img key={logo.alt} src={logo.src} alt={logo.alt} loading="lazy" className="h-28 w-auto max-w-[16rem] object-contain" />
            ))}
            <h3 className="mt-6 text-lg font-extrabold text-primary">{p.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
