import { Link, useMatches } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode, type SVGProps } from "react";
import { Globe, Menu, X, Plus, Search, ArrowUp, ArrowRight, ArrowUpRight, ChevronDown, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navPage } from "@/lib/iapa-nav";
import brandPdf from "@/assets/brand-guidelines.pdf.asset.json";
import { CONTACT, CONTENT, SOCIALS, type Lang } from "@/lib/iapa-content";
import { PAGES, PAGE_SLUGS, type PageSlug } from "@/lib/iapa-pages";
import { CAPTION_TBC, CAPTIONS } from "@/lib/iapa-photos";
import { bannerSpec, BANNER, IMG, PHOTO_POSITION, type HeroKey, type ImgKey } from "@/components/iapa/media";
import { CountUp } from "@/components/iapa/motion";
import logoEn from "@/assets/logo-en.png.asset.json";
import logoFr from "@/assets/logo-fr.png.asset.json";
import { PageBreadcrumbs } from "@/components/iapa/breadcrumbs";
import { assetUrl } from "@/lib/asset-url";

export const asLang = (v: string): Lang => (v === "fr" ? "fr" : "en");

export function pageHead(lang: string, slug: PageSlug) {
  const [title, description] = PAGES[asLang(lang)].meta[slug];
  const heroKeys: Record<PageSlug, string> = { "who-we-are": "ghana", "our-work": "cameroon", training: "burkina", "knowledge-hub": "morocco", media: "mauritania", "join-us": "join" };
  const hero = bannerSpec(heroKeys[slug]).src;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  };
}

const pathFor = (slug: PageSlug) => `/$lang/${slug}` as "/$lang/training";

function LangSwitch({ lang }: { lang: Lang }) {
  const matches = useMatches();
  const leaf = matches[matches.length - 1];
  const other: Lang = lang === "en" ? "fr" : "en";
  const to = (leaf?.fullPath?.startsWith("/$lang") ? leaf.fullPath : "/$lang") as "/$lang";
  const currentParams = (leaf?.params ?? {}) as Record<string, string>;
  return (
    <Link to={to} params={{ ...currentParams, lang: other }} hrefLang={other} aria-label={CONTENT[lang].langLabel}
      className="header-language inline-flex shrink-0 items-center gap-1.5 text-sm font-bold text-foreground transition-colors hover:text-primary">
      <Globe className="h-4 w-4" aria-hidden />
      <span>{other === "fr" ? "Français" : "English"}</span>
    </Link>
  );
}

const navCls = "header-nav-link inline-flex items-center gap-1 whitespace-nowrap px-3 py-2 text-[0.95rem] font-medium transition-colors hover:text-primary";

function MegaPanel({ lang, slug, onNavigate }: { lang: Lang; slug: PageSlug; onNavigate: () => void }) {
  const n = navPage(slug);
  const p = PAGES[lang];
  return (
    <div id={`mega-${slug}`} className="mega-panel container-page absolute inset-x-0 top-full pt-3">
      <div className="grid gap-8 rounded-3xl border border-border/60 bg-card/95 p-8 shadow-lift backdrop-blur-2xl backdrop-saturate-150 lg:grid-cols-[1.1fr_repeat(2,1fr)_1.1fr] lg:p-10">
        <div className="flex flex-col lg:border-r lg:pr-8">
          <p className="eyebrow text-xs">{p.nav[slug]}</p>
          <p className="mt-3 text-xl font-semibold leading-snug">{n.blurb[lang]}</p>
          <Link to={pathFor(slug)} params={{ lang }} onClick={onNavigate} className="group mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-arid/20 px-5 py-2.5 font-bold text-arid-ink ring-1 ring-arid/40 transition hover:bg-arid/30">
            <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />{p.readMore}
          </Link>
        </div>
        {[0, 1].map((gi) => {
          const g = n.groups[gi];
          return (
            <div key={gi}>
              {g && <>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">{g.title[lang]}</p>
                <ul className="mt-4 space-y-1">
                  {g.items.map((it) => (
                    <li key={it.id}><Link to="/$lang/$section/$child" params={{ lang, section: slug, child: it.id }} onClick={onNavigate} className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2 -mx-3 text-[1.05rem] transition hover:bg-secondary hover:text-primary">
                      {it.label[lang]}<ArrowRight className="h-4 w-4 shrink-0 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" aria-hidden />
                    </Link></li>
                  ))}
                </ul>
              </>}
            </div>
          );
        })}
        <img src={IMG[n.img]} alt="" loading="lazy" style={{ objectPosition: PHOTO_POSITION[n.img] }} className="hidden h-full max-h-64 w-full rounded-[1.5rem] object-cover lg:block" />
      </div>
    </div>
  );
}

export function SiteHeader({ lang }: { lang: Lang }) {
  const t = CONTENT[lang];
  const p = PAGES[lang];
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState<PageSlug | null>(null);
  const [sub, setSub] = useState<PageSlug | null>(null);
  const [compact, setCompact] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const matches = useMatches();
  const path = matches[matches.length - 1]?.pathname;
  useEffect(() => { setOpen(false); setMega(null); }, [path]);
  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!open && !mega) return;
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); setMega(null); } };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open, mega]);
  const show = (s: PageSlug) => { clearTimeout(timer.current); setMega(s); };
  const hide = () => { clearTimeout(timer.current); timer.current = setTimeout(() => setMega(null), 160); };

  return (
    <>
    <header className={`site-header fixed inset-x-0 top-0 z-50 ${compact ? "is-compact" : ""}`} onMouseLeave={hide}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">{t.skip}</a>
      <div className="header-capsule container-page flex items-center justify-between gap-4 rounded-full border border-card/70 bg-card/80 text-foreground shadow-soft backdrop-blur-xl">
        <Link to="/$lang" params={{ lang }} className="min-w-0 shrink" aria-label={`IAPA — ${p.home}`}>
          <img src={assetUrl((lang === "en" ? logoEn : logoFr).url)} alt="IAPA" width={180} height={50} className="header-logo w-auto" />
        </Link>
        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-0.5">
            {PAGE_SLUGS.map((s) => {
              const hasMenu = navPage(s).groups.length > 0;
              return (
                <li key={s} onMouseEnter={() => (hasMenu ? show(s) : setMega(null))} className="flex items-center">
                  <Link to={pathFor(s)} params={{ lang }} className={`${navCls} ${mega === s ? "text-primary" : ""}`} activeProps={{ className: "text-primary font-bold", "aria-current": "page" }} onFocus={() => (hasMenu ? show(s) : setMega(null))}>{p.nav[s]}</Link>
                  {hasMenu && (
                    <Button variant="ghost" size="icon" type="button" aria-expanded={mega === s} aria-controls={`mega-${s}`} aria-label={`${p.nav[s]} — ${t.menu}`} onClick={() => setMega(mega === s ? null : s)} className="header-icon -ml-2 h-8 w-6 rounded-full text-muted-foreground hover:text-primary">
                      <Plus className={`h-4 w-4 transition-transform ${mega === s ? "rotate-45" : ""}`} aria-hidden />
                    </Button>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="hidden items-center gap-3 xl:flex">
          <LangSwitch lang={lang} />
          <Button asChild size="icon" className="header-search rounded-full" title={p.nav["knowledge-hub"]}>
            <Link to="/$lang/knowledge-hub" params={{ lang }} aria-label={p.nav["knowledge-hub"]}><Search aria-hidden /></Link>
          </Button>
        </div>
          <Button variant="ghost" size="icon" type="button" className="header-icon ml-auto h-10 w-10 rounded-full xl:hidden"
            aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? t.close : t.menu} onClick={() => setOpen((o) => !o)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
      </div>
      {mega && <div className="hidden xl:block" onMouseEnter={() => show(mega)}><MegaPanel key={mega} lang={lang} slug={mega} onNavigate={() => setMega(null)} /></div>}
      {open && (
        <nav id="mobile-nav" aria-label="Primary" className="mobile-menu overflow-y-auto border bg-card shadow-lift xl:hidden">
          <div className="flex items-center justify-between px-5 pt-5"><LangSwitch lang={lang} /><Button variant="ghost" size="icon" className="header-icon" aria-label={t.close} onClick={() => setOpen(false)}><X aria-hidden /></Button></div>
          <ul className="container-page flex flex-col py-3">
            <li><Link to="/$lang" params={{ lang }} activeOptions={{ exact: true }} className="block rounded-xl px-3 py-3 text-lg font-semibold" activeProps={{ className: "text-primary", "aria-current": "page" }}>{p.home}</Link></li>
            {PAGE_SLUGS.map((s) => {
              const hasMenu = navPage(s).groups.length > 0;
              return (
                <li key={s} className="border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <Link to={pathFor(s)} params={{ lang }} className="block flex-1 rounded-xl px-3 py-3 text-lg font-semibold" activeProps={{ className: "text-primary", "aria-current": "page" }}>{p.nav[s]}</Link>
                    {hasMenu && (
                      <Button variant="ghost" size="icon" type="button" aria-expanded={sub === s} aria-label={`${p.nav[s]} — ${t.menu}`} onClick={() => setSub(sub === s ? null : s)} className="header-icon h-10 w-10 rounded-full hover:bg-secondary">
                        <ChevronDown className={`h-5 w-5 transition-transform ${sub === s ? "rotate-180" : ""}`} aria-hidden />
                      </Button>
                    )}
                  </div>
                  {hasMenu && sub === s && (
                    <ul className="mb-3 ml-3 border-l-2 border-savanna pl-3">
                      {navPage(s).groups.flatMap((g) => g.items).map((it) => (
                        <li key={it.id}><Link to="/$lang/$section/$child" params={{ lang, section: s, child: it.id }} onClick={() => setOpen(false)} className="block rounded-lg px-2 py-2 text-muted-foreground hover:text-primary">{it.label[lang]}</Link></li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
    {open && <div aria-hidden onClick={() => setOpen(false)} className="fixed inset-0 z-40 bg-foreground/50 xl:hidden" />}
    {mega && <div aria-hidden onClick={() => setMega(null)} className="mega-backdrop fixed inset-0 z-40 hidden bg-forest/25 backdrop-blur-md xl:block" />}
    </>
  );
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

const SOCIAL_ICON = { facebook: Facebook, linkedin: Linkedin, instagram: Instagram, x: XIcon } as const;

export function SiteFooter({ lang }: { lang: Lang }) {
  const t = CONTENT[lang];
  const p = PAGES[lang];
  return (
    <footer className="relative overflow-hidden bg-forest text-forest-foreground">
      <EmblemBackdrop className="absolute -bottom-20 -right-14 h-[340px] w-[340px] text-forest-foreground opacity-[0.06] md:h-[420px] md:w-[420px]" />
      <div className="container-page relative grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1.3fr]">
        <div className="min-w-0">
          <Link to="/$lang" params={{ lang }} aria-label={`IAPA — ${p.home}`} className="inline-block">
            <img src={assetUrl((lang === "en" ? logoEn : logoFr).url)} alt="IAPA" width={220} height={62} className="h-16 w-auto brightness-0 invert md:h-20" />
          </Link>
          <p className="mt-4 max-w-xs text-sm text-forest-foreground/80">{t.footer.rights}</p>
          <p className="mt-2 text-sm font-semibold text-sun">{t.footer.motto}</p>
          <a href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(p.subscribe.subject)}`} className="mt-6 inline-flex rounded-full bg-sun px-5 py-2.5 text-sm font-extrabold text-accent-foreground hover:brightness-105">{p.subscribe.cta}</a>
          <div className="mt-7">
            <p className="text-sm font-extrabold uppercase tracking-wider text-sun">{p.arch.social}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {SOCIALS.map((s) => {
                const Icon = SOCIAL_ICON[s.icon];
                return (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      title={s.name}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-sun/55 bg-sun/12 text-sun transition hover:-translate-y-0.5 hover:border-sun hover:bg-sun hover:text-accent-foreground"
                    >
                      <Icon className="h-4 w-4" aria-hidden />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
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
        <div className="container-page relative flex flex-wrap items-center justify-between gap-4 py-5 text-sm text-forest-foreground/80">
          <span>© 2026 IAPA</span>
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            <li><Link to="/$lang/join-us" params={{ lang }} hash="faq" className="hover:underline">{p.arch.faqs}</Link></li>
            <li><a href={assetUrl(brandPdf.url)} target="_blank" rel="noopener" className="hover:underline">{p.arch.brand}</a></li>
            <li><Link to="/$lang/privacy" params={{ lang }} className="hover:underline">{p.arch.privacy}</Link></li>
            <li><Link to="/$lang/legal" params={{ lang }} className="hover:underline">{p.arch.legal}</Link></li>
          </ul>
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

export function EmblemBackdrop({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden className={`iapa-emblem pointer-events-none select-none ${className}`}>
      <circle cx="70" cy="58" r="14" fill="currentColor" />
      <circle cx="70" cy="58" r="25" fill="none" stroke="currentColor" strokeWidth="4.5" strokeDasharray="6 6.5" strokeLinecap="round" />
      <path d="M0 104 C44 109 70 136 80 200" fill="none" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" />
      <path d="M0 124 C34 129 56 151 64 200" fill="none" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" />
      <path d="M0 124 C34 129 56 151 64 200 L0 200 Z" fill="currentColor" fillOpacity="0.32" />
      <path d="M78 200 C83 122 126 80 200 72" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <path d="M100 200 C105 138 140 102 200 95" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <path d="M100 200 C105 138 140 102 200 95 L200 200 Z" fill="currentColor" fillOpacity="0.45" />
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

export function PageHero({ title, lead, img, children }: { eyebrow?: string; title: string; lead: string; img: string; children?: ReactNode }) {
  const source = bannerSpec(img);
  return (
    <section className="page-banner inside-banner relative isolate w-full overflow-hidden bg-banner-night text-forest-foreground">
      <img src={source.src} alt="" fetchPriority="high" data-flip={source.flip ? "true" : undefined} style={{ objectPosition: source.pos }} className={`absolute inset-0 -z-10 h-full w-full object-cover origin-top ${source.flip ? "-scale-x-100" : ""}`} />
      <div className="photo-scrim absolute inset-0 -z-10" />
      <div className="banner-content container-page">
        <PageBreadcrumbs inBanner />
        <h1 className="banner-title font-bold">{title}</h1>
        <p className="banner-lead text-forest-foreground/95">{lead}</p>
        {children}
      </div>
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
            <dd className={`text-4xl font-extrabold tracking-tight md:text-5xl ${num}`}><CountUp value={n ?? ""} /></dd>
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


export function Photo({ k, lang, className = "", ratio = "aspect-[4/3]" }: { k: ImgKey; lang: Lang; className?: string; ratio?: string }) {
  const entry = CAPTIONS[k];
  const cap = entry?.[lang] ?? "";
  return (
    <figure className={`curve-card group relative overflow-hidden bg-muted ${className}`}>
      <img src={IMG[k]} alt={cap} loading="lazy" style={{ objectPosition: PHOTO_POSITION[k] }} className={`h-full w-full object-cover object-top origin-top transition duration-500 group-hover:scale-105 ${ratio}`} />
      {cap && (
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/90 to-transparent p-4 pt-10 text-sm font-semibold text-forest-foreground">
          {cap}
          {entry?.tbc && <>{" "}<span className="text-xs font-normal italic opacity-85">{CAPTION_TBC[lang]}</span></>}
        </figcaption>
      )}
    </figure>
  );
}

export function Gallery({ keys, lang, title }: { keys: ImgKey[]; lang: Lang; title?: string }) {
  return (
    <div>
      {title && <h2 className="section-title mb-8">{title}</h2>}
      <ul className="grid auto-rows-[14rem] grid-cols-2 gap-4 md:auto-rows-[16rem] md:grid-cols-4">
        {keys.map((k, i) => (
          <li key={k} className={i === 0 ? "col-span-2 row-span-2" : i === 3 ? "col-span-2" : i === 5 ? "md:col-span-3" : ""}>
            <Photo k={k} lang={lang} ratio="" className="h-full" />
          </li>
        ))}
      </ul>
    </div>
  );
}
