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
