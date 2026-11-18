import { Link, useMatches } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Globe, Menu, X, ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import { CONTACT, CONTENT, type Lang } from "@/lib/iapa-content";
import { PAGES, PAGE_SLUGS, type PageSlug } from "@/lib/iapa-pages";
import logoEn from "@/assets/logo-en.png.asset.json";
import logoFr from "@/assets/logo-fr.png.asset.json";

export const asLang = (v: string): Lang => (v === "fr" ? "fr" : "en");

export function pageHead(lang: string, slug: PageSlug) {
  const [title, description] = PAGES[asLang(lang)].meta[slug];
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}

const pathFor = (slug: PageSlug) => `/$lang/${slug}` as "/$lang/training";

function LangSwitch({ lang }: { lang: Lang }) {
  const matches = useMatches();
  const leaf = matches[matches.length - 1];
  const other: Lang = lang === "en" ? "fr" : "en";
  const to = (leaf?.fullPath?.startsWith("/$lang") ? leaf.fullPath : "/$lang") as "/$lang";
  return (
    <Link to={to} params={{ lang: other }} hrefLang={other} aria-label={CONTENT[lang].langLabel}
      className="inline-flex shrink-0 items-center gap-1.5 rounded-full border-2 border-primary px-3 py-1.5 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
      <Globe className="h-4 w-4" aria-hidden />
      <span aria-hidden>{lang.toUpperCase()}</span><span aria-hidden className="opacity-60">/</span><span aria-hidden>{other.toUpperCase()}</span>
    </Link>
  );
}

const navCls = "rounded-full px-3 py-2 text-[0.95rem] font-semibold transition-colors hover:bg-secondary";
const activeCls = { className: "bg-secondary text-primary", "aria-current": "page" as const };

export function SiteHeader({ lang }: { lang: Lang }) {
  const t = CONTENT[lang];
  const p = PAGES[lang];
  const [open, setOpen] = useState(false);
  const matches = useMatches();
  const path = matches[matches.length - 1]?.pathname;
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">{t.skip}</a>
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-20">
        <Link to="/$lang" params={{ lang }} className="min-w-0 shrink" aria-label={`IAPA — ${p.home}`}>
          <img src={(lang === "en" ? logoEn : logoFr).url} alt="IAPA" width={180} height={50} className="h-9 w-auto md:h-11" />
        </Link>
        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-0.5">
            {PAGE_SLUGS.map((s) => (
              <li key={s}><Link to={pathFor(s)} params={{ lang }} className={navCls} activeProps={activeCls}>{p.nav[s]}</Link></li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <LangSwitch lang={lang} />
          <Link to="/$lang/join-us" params={{ lang }} hash="membership" className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:brightness-110 md:inline-flex">{t.hero.join}</Link>
          <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-full border xl:hidden"
            aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? t.close : t.menu} onClick={() => setOpen((o) => !o)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Primary" className="border-t bg-background xl:hidden">
          <ul className="container-page flex flex-col py-3">
            <li><Link to="/$lang" params={{ lang }} activeOptions={{ exact: true }} className="block rounded-xl px-3 py-3 text-lg font-semibold" activeProps={{ className: "text-primary", "aria-current": "page" }}>{p.home}</Link></li>
            {PAGE_SLUGS.map((s) => (
              <li key={s}><Link to={pathFor(s)} params={{ lang }} className="block rounded-xl px-3 py-3 text-lg font-semibold" activeProps={{ className: "text-primary", "aria-current": "page" }}>{p.nav[s]}</Link></li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter({ lang }: { lang: Lang }) {
  const t = CONTENT[lang];
  const p = PAGES[lang];
  return (
    <footer className="bg-forest text-forest-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1.3fr]">
        <div className="min-w-0">
          <p className="text-3xl font-extrabold tracking-[0.3em]">IAPA</p>
          <p className="mt-2 max-w-xs text-sm text-forest-foreground/80">{t.footer.rights}</p>
          <p className="mt-2 text-sm font-semibold text-sun">{t.footer.motto}</p>
          <a href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(p.subscribe.subject)}`} className="mt-6 inline-flex rounded-full bg-sun px-5 py-2.5 text-sm font-extrabold text-accent-foreground hover:brightness-105">{p.subscribe.cta}</a>
        </div>
        <nav aria-label={p.footer.explore}>
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-sun">{p.footer.explore}</h2>
          <ul className="mt-4 space-y-2">
            <li><Link to="/$lang" params={{ lang }} className="hover:underline">{p.home}</Link></li>
            {PAGE_SLUGS.map((s) => <li key={s}><Link to={pathFor(s)} params={{ lang }} className="hover:underline">{p.nav[s]}</Link></li>)}
          </ul>
        </nav>
        <div className="min-w-0">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-sun">{p.footer.contact}</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0" aria-hidden /><a className="[overflow-wrap:anywhere] hover:underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0" aria-hidden /><span>{CONTACT.phones.map((ph, i) => <a key={ph} className="block hover:underline" href={`tel:${CONTACT.phoneHrefs[i]}`}>{ph}</a>)}</span></li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0" aria-hidden /><span>{CONTACT.address}</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-forest-foreground/15">
        <div className="container-page flex items-center justify-between py-5 text-sm text-forest-foreground/80">
          <span>© 2026 IAPA</span>
          <a href="#top" className="inline-flex items-center gap-1.5 hover:underline"><ArrowUp className="h-4 w-4" aria-hidden />{t.footer.backTop}</a>
        </div>
      </div>
    </footer>
  );
}

export function Arc({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden className={`block h-10 w-full md:h-16 ${className}`}>
      <path d="M0 80 C 360 0, 1080 0, 1440 80 Z" fill="currentColor" />
    </svg>
  );
}

export function SectionHead({ eyebrow, title, lead, light, as: H = "h2" }: { eyebrow?: string; title: string; lead?: string; light?: boolean; as?: "h1" | "h2" }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && <p className={light ? "eyebrow text-sun" : "eyebrow"}>{eyebrow}</p>}
      <H className="section-title mt-3">{title}</H>
      {lead && <p className={`mt-5 text-lg leading-relaxed ${light ? "text-forest-foreground/85" : "text-muted-foreground"}`}>{lead}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, lead, img, children }: { eyebrow: string; title: string; lead: string; img: string; children?: ReactNode }) {
  return (
    <section className="relative isolate overflow-hidden bg-forest text-forest-foreground">
      <img src={img} alt="" fetchPriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="bg-hero-overlay absolute inset-0 -z-10" />
      <div className="container-page py-16 md:py-24">
        <p className="eyebrow text-sun">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-forest-foreground/90">{lead}</p>
        {children}
      </div>
      <Arc className="-mb-px text-background" />
    </section>
  );
}

export function StatGroup({ label, tag, stats, tone }: { label: string; tag: string; stats: string[][]; tone: "own" | "shared" | "target" }) {
  const styles = { own: "bg-primary text-primary-foreground", shared: "bg-card border-2 border-savanna", target: "bg-cream border-2 border-dashed border-arid" }[tone];
  const num = tone === "own" ? "text-primary-foreground" : tone === "shared" ? "text-primary" : "text-arid-ink";
  const tagCls = tone === "own" ? "bg-sun text-accent-foreground" : tone === "shared" ? "bg-secondary text-secondary-foreground" : "bg-arid/20 text-arid-ink";
  return (
    <div className={`curve-card p-6 md:p-8 ${styles}`}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-xl font-extrabold">{label}</h3>
        <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${tagCls}`}>{tag}</span>
      </div>
      <dl className={`mt-6 grid gap-5 ${stats.length > 4 ? "grid-cols-2 md:grid-cols-3" : "grid-cols-2"}`}>
        {stats.map(([n, d]) => (
          <div key={d} className="flex flex-col-reverse">
            <dt className={`mt-1 text-sm leading-snug ${tone === "own" ? "text-primary-foreground/90" : "text-muted-foreground"}`}>{d}</dt>
            <dd className={`text-4xl font-extrabold tracking-tight md:text-5xl ${num}`}>{n}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function ResultsBlock({ lang }: { lang: Lang }) {
  const w = CONTENT[lang].work;
  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-2">
        <StatGroup tone="own" {...w.own} stats={w.ownStats} />
        <StatGroup tone="shared" {...w.shared} stats={w.sharedStats} />
      </div>
      <div className="mt-6"><StatGroup tone="target" {...w.targets} stats={w.targetStats} /></div>
    </div>
  );
}
