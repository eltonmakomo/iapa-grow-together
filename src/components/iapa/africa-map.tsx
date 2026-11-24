import { useState } from "react";
import { MapPin, RotateCcw } from "lucide-react";
import { CONTENT, type Lang } from "@/lib/iapa-content";
import mapData from "@/lib/africa-map-data.json";

interface MapCountryShape {
  id: string;
  d: string[];
  t?: string;
  circle?: string;
  ct?: string;
}

interface RegionMeta {
  key: string;
  fill: string;
  cardClass: string;
  chipClass: string;
  chipActiveClass: string;
  countries: ReadonlyArray<{ id: string; en: string; fr: string; hq?: boolean }>;
}

const softMapFill = (colour: string) => `color-mix(in oklab, ${colour} 68%, var(--card))`;

export const AFRICA_REGIONS: ReadonlyArray<RegionMeta> = [
  {
    key: "north",
    fill: softMapFill("var(--primary)"),
    cardClass: "border border-primary/20 bg-primary/10 text-foreground",
    chipClass: "bg-primary/10 text-primary hover:bg-primary/20",
    chipActiveClass: "bg-primary text-primary-foreground",
    countries: [
      { id: "tn", en: "Tunisia", fr: "Tunisie" },
      { id: "dz", en: "Algeria", fr: "Algérie" },
    ],
  },
  {
    key: "west-fr",
    fill: softMapFill("var(--sun)"),
    cardClass: "border border-sun/30 bg-sun/15 text-foreground",
    chipClass: "bg-sun/20 text-accent-foreground hover:bg-sun/30",
    chipActiveClass: "bg-sun text-accent-foreground",
    countries: [
      { id: "bj", en: "Benin", fr: "Bénin" },
      { id: "bf", en: "Burkina Faso", fr: "Burkina Faso" },
      { id: "ml", en: "Mali", fr: "Mali" },
      { id: "cv", en: "Cabo Verde", fr: "Cabo Verde" },
      { id: "tg", en: "Togo", fr: "Togo" },
    ],
  },
  {
    key: "west-en",
    fill: softMapFill("var(--savanna)"),
    cardClass: "border border-savanna/30 bg-savanna/15 text-foreground",
    chipClass: "bg-savanna/20 text-secondary-foreground hover:bg-savanna/30",
    chipActiveClass: "bg-savanna text-accent-foreground",
    countries: [
      { id: "gh", en: "Ghana", fr: "Ghana", hq: true },
      { id: "ng", en: "Nigeria", fr: "Nigeria" },
      { id: "cm", en: "Cameroon", fr: "Cameroun" },
    ],
  },
  {
    key: "east",
    fill: softMapFill("var(--arid)"),
    cardClass: "border border-arid/25 bg-arid/10 text-foreground",
    chipClass: "bg-arid/15 text-arid-ink hover:bg-arid/25",
    chipActiveClass: "bg-arid text-accent-foreground",
    countries: [
      { id: "ss", en: "South Sudan", fr: "Soudan du Sud" },
      { id: "et", en: "Ethiopia", fr: "Éthiopie" },
      { id: "tz", en: "Tanzania", fr: "Tanzanie" },
      { id: "rw", en: "Rwanda", fr: "Rwanda" },
      { id: "mg", en: "Madagascar", fr: "Madagascar" },
    ],
  },
  {
    key: "south",
    fill: softMapFill("var(--forest)"),
    cardClass: "border border-forest/20 bg-forest/10 text-foreground",
    chipClass: "bg-forest/10 text-forest hover:bg-forest/20",
    chipActiveClass: "bg-forest text-forest-foreground",
    countries: [
      { id: "na", en: "Namibia", fr: "Namibie" },
      { id: "mz", en: "Mozambique", fr: "Mozambique" },
      { id: "zm", en: "Zambia", fr: "Zambie" },
      { id: "mw", en: "Malawi", fr: "Malawi" },
    ],
  },
];

const COUNTRY_LOOKUP = new Map(
  AFRICA_REGIONS.flatMap((region, regionIndex) =>
    region.countries.map((c) => [c.id, { ...c, regionIndex, fill: region.fill }] as const),
  ),
);

const SHAPES = mapData.countries as ReadonlyArray<MapCountryShape>;

const UI = {
  en: {
    prompt: "Click or hover a region or country to explore",
    all: "All regions",
    hq: "HQ · Accra",
    hqShort: "HQ",
    countries: "countries",
    mapLabel: "Interactive map of IAPA presence across five African regions",
    note: "5 regions · Headquarters in Accra, Ghana",
  },
  fr: {
    prompt: "Cliquez ou survolez une région ou un pays pour explorer",
    all: "Toutes les régions",
    hq: "Siège · Accra",
    hqShort: "Siège",
    countries: "pays",
    mapLabel: "Carte interactive de la présence de l'IAPA dans cinq régions africaines",
    note: "5 régions · Siège à Accra, Ghana",
  },
} as const;

export function AfricaImpactMap({ lang }: { lang: Lang }) {
  const [selectedRegion, setSelectedRegion] = useState<number | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<number | null>(null);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  const regionNames = CONTENT[lang].who.regions.map(([name]) => name ?? "");
  const ui = UI[lang];

  const activeCountryId = hoveredCountry ?? selectedCountry;
  const activeCountryInfo = activeCountryId ? COUNTRY_LOOKUP.get(activeCountryId) : undefined;
  const activeRegionIndex = activeCountryInfo?.regionIndex ?? hoveredRegion ?? selectedRegion;
  const hasSelection = selectedRegion !== null || selectedCountry !== null;

  function resetSelection() {
    setSelectedRegion(null);
    setSelectedCountry(null);
  }

  function toggleRegion(index: number) {
    if (selectedRegion === index && selectedCountry === null) {
      resetSelection();
    } else {
      setSelectedRegion(index);
      setSelectedCountry(null);
    }
  }

  function toggleCountry(id: string, regionIndex: number) {
    if (selectedCountry === id) {
      setSelectedCountry(null);
      setSelectedRegion(regionIndex);
    } else {
      setSelectedCountry(id);
      setSelectedRegion(regionIndex);
    }
  }

  const statusRegionName = activeRegionIndex !== null ? regionNames[activeRegionIndex] : undefined;
  const statusFill = activeRegionIndex !== null ? AFRICA_REGIONS[activeRegionIndex]?.fill : undefined;

  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_1fr] lg:items-start">
      <div className="curve-card bg-card p-5 md:p-7">
        <div className="flex min-h-11 flex-wrap items-center justify-between gap-2 border-b pb-4">
          <div className="flex flex-wrap items-center gap-2.5">
            {statusFill && (
              <span className="h-3.5 w-3.5 shrink-0 rounded-full" style={{ backgroundColor: statusFill }} aria-hidden />
            )}
            {activeCountryInfo ? (
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <span className="text-lg font-extrabold">{activeCountryInfo[lang]}</span>
                <span className="text-sm font-semibold text-muted-foreground">{statusRegionName}</span>
                {activeCountryInfo.hq && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-0.5 text-xs font-bold text-primary-foreground">
                    <MapPin className="h-3 w-3" aria-hidden />{ui.hq}
                  </span>
                )}
              </div>
            ) : statusRegionName ? (
              <span className="text-lg font-extrabold">{statusRegionName}</span>
            ) : (
              <span className="text-sm font-semibold text-muted-foreground">{ui.prompt}</span>
            )}
          </div>
          {hasSelection && (
            <button
              type="button"
              onClick={resetSelection}
              className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold text-primary transition hover:bg-secondary"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden />
              {ui.all}
            </button>
          )}
        </div>

        <div className="relative mx-auto mt-4 max-w-[34rem]">
          <svg
            viewBox="-5 0 1000 985"
            role="img"
            aria-label={ui.mapLabel}
            className="africa-map-svg h-auto w-full select-none"
          >
            <g transform={mapData.transform}>
              {SHAPES.map((shape) => {
                const info = COUNTRY_LOOKUP.get(shape.id);
                if (!info) {
                  return (
                    <g key={shape.id} transform={shape.t}>
                      {shape.d.map((d, idx) => (
                        <path
                          key={idx}
                          d={d}
                          fill="color-mix(in oklab, var(--border) 65%, var(--cream))"
                          stroke="var(--card)"
                          strokeWidth={1.1}
                          vectorEffect="non-scaling-stroke"
                        />
                      ))}
                    </g>
                  );
                }

                const inActiveRegion = activeRegionIndex === null || activeRegionIndex === info.regionIndex;
                const isExact = activeCountryId === shape.id;
                const label = `${info[lang]} — ${regionNames[info.regionIndex] ?? ""}`;

                return (
                  <g
                    key={shape.id}
                    role="button"
                    tabIndex={0}
                    aria-label={label}
                    aria-pressed={selectedCountry === shape.id}
                    className="cursor-pointer outline-none transition-opacity duration-200"
                    style={{ opacity: inActiveRegion ? 1 : 0.25 }}
                    onMouseEnter={() => setHoveredCountry(shape.id)}
                    onMouseLeave={() => setHoveredCountry(null)}
                    onFocus={() => setHoveredCountry(shape.id)}
                    onBlur={() => setHoveredCountry(null)}
                    onClick={() => toggleCountry(shape.id, info.regionIndex)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleCountry(shape.id, info.regionIndex);
                      }
                    }}
                  >
                    <title>{label}</title>
                    {shape.circle && (
                      <path
                        d={shape.circle}
                        transform={shape.ct}
                        fill={info.fill}
                        fillOpacity={isExact ? 0.45 : 0.22}
                        stroke={info.fill}
                        strokeWidth={isExact ? 2.5 : 1.5}
                        vectorEffect="non-scaling-stroke"
                      />
                    )}
                    <g transform={shape.t}>
                      {shape.d.map((d, idx) => (
                        <path
                          key={idx}
                          d={d}
                          fill={info.fill}
                          stroke={isExact ? "var(--foreground)" : "var(--card)"}
                          strokeWidth={isExact ? 2.4 : 1.2}
                          vectorEffect="non-scaling-stroke"
                          style={{ filter: isExact ? "brightness(1.08)" : undefined }}
                        />
                      ))}
                    </g>
                  </g>
                );
              })}
            </g>
            {/* HQ pin: Accra, Ghana */}
            <g className="pointer-events-none" aria-hidden="true">
              <circle cx={290} cy={436} r={11} fill="var(--card)" fillOpacity={0.92} />
              <circle cx={290} cy={436} r={6.5} fill="var(--primary)" />
            </g>
          </svg>
        </div>

        <p className="mt-3 flex items-center justify-center gap-2 text-center text-xs font-semibold text-muted-foreground">
          <span className="inline-flex h-3 w-3 items-center justify-center rounded-full border-2 border-card bg-primary ring-1 ring-primary/40" aria-hidden />
          {ui.note}
        </p>
      </div>

      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1" aria-label={ui.all}>
        {AFRICA_REGIONS.map((region, index) => {
          const isSelected = selectedRegion === index;
          const isActive = activeRegionIndex === null || activeRegionIndex === index;
          const title = regionNames[index] ?? "";
          return (
            <li
              key={region.key}
              onMouseEnter={() => setHoveredRegion(index)}
              onMouseLeave={() => setHoveredRegion(null)}
              className={`curve-card p-5 transition-all duration-200 ${region.cardClass} ${
                isSelected ? "ring-2 ring-foreground/50 ring-offset-2 ring-offset-background" : ""
              } ${isActive ? "opacity-100" : "opacity-65 hover:opacity-100"}`}
            >
              <button
                type="button"
                onClick={() => toggleRegion(index)}
                aria-pressed={isSelected}
                className="flex w-full items-center justify-between gap-3 text-left"
              >
                <span className="text-base font-extrabold leading-snug">{title}</span>
                <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-bold ${region.chipClass}`}>
                  {region.countries.length} {ui.countries}
                </span>
              </button>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {region.countries.map((c) => {
                  const exact = activeCountryId === c.id;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onMouseEnter={() => setHoveredCountry(c.id)}
                      onMouseLeave={() => setHoveredCountry(null)}
                      onClick={() => toggleCountry(c.id, index)}
                      aria-pressed={selectedCountry === c.id}
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold transition ${
                        exact ? region.chipActiveClass : region.chipClass
                      }`}
                    >
                      {c[lang]}
                      {c.hq && <span className="opacity-80">· {ui.hqShort}</span>}
                    </button>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}