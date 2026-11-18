import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, Download, Globe, Mail, MapPin, Menu, MessageCircle, Phone, X, Check } from "lucide-react";
import { CONTACT, CONTENT, SECTION_IDS, type Lang, type SectionId } from "@/lib/iapa-content";
import logoEn from "@/assets/logo-en.png.asset.json";
import logoFr from "@/assets/logo-fr.png.asset.json";
import heroImg from "@/assets/hero-farmer.jpg.asset.json";
import cameroon from "@/assets/cameroon-coffee.jpg.asset.json";
import mauritania from "@/assets/mauritania-pbs.jpg.asset.json";
import morocco from "@/assets/morocco-milk.jpg.asset.json";
import burkina from "@/assets/burkina-pbs.jpg.asset.json";
import ghana from "@/assets/ghana-handover.jpg.asset.json";
import pulse3 from "@/assets/pulse-3.pdf.asset.json";
import pulse2 from "@/assets/pulse-2.pdf.asset.json";

const STORY_IMG: Record<string, string> = { cameroon: cameroon.url, mauritania: mauritania.url, morocco: morocco.url, burkina: burkina.url };
const PULSE: Record<string, string> = { "3": pulse3.url, "2": pulse2.url };

function useActiveSection() {
  const [active, setActive] = useState<SectionId | undefined>();
  useEffect(() => {
    const fromHash = window.location.hash.slice(1) as SectionId;
    if (SECTION_IDS.includes(fromHash)) setActive(fromHash);
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (vis) setActive(vis.target.id as SectionId);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    SECTION_IDS.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    const top = () => { if (window.scrollY < 200) setActive(undefined); };
    window.addEventListener("scroll", top, { passive: true });
    return () => { obs.disconnect(); window.removeEventListener("scroll", top); };
  }, []);
  return active;
}

function Header({ lang }: { lang: Lang }) {
  const t = CONTENT[lang];
  const active = useActiveSection();
  const [open, setOpen] = useState(false);
  const other: Lang = lang === "en" ? "fr" : "en";
  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);

  const LangSwitch = (
    <Link
      to={other === "en" ? "/en" : "/fr"}
      hash={active ?? ""}
      hrefLang={other}
      lang={other}
      aria-label={t.langLabel}
      className="inline-flex shrink-0 items-center gap-1.5 rounded-full border-2 border-primary px-3 py-1.5 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
    >
      <Globe className="h-4 w-4" aria-hidden />
      <span aria-hidden>{lang === "en" ? "EN" : "FR"}</span>
      <span aria-hidden className="text-muted-foreground">/</span>
      <span aria-hidden>{other.toUpperCase()}</span>
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">{t.skip}</a>
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-20">
        <a href="#top" className="min-w-0 shrink" aria-label="IAPA">
          <img src={(lang === "en" ? logoEn : logoFr).url} alt="IAPA" width={180} height={50} className="h-9 w-auto md:h-11" />
        </a>
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {SECTION_IDS.map((id) => (
              <li key={id}>
                <a href={`#${id}`} aria-current={active === id ? "true" : undefined}
                  className="rounded-full px-3.5 py-2 text-[0.95rem] font-semibold text-foreground transition-colors hover:bg-secondary aria-[current]:bg-secondary aria-[current]:text-primary">
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          {LangSwitch}
          <a href="#join-us" className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:brightness-110 md:inline-flex">{t.hero.join}</a>
          <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-full border lg:hidden"
            aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? t.close : t.menu} onClick={() => setOpen((o) => !o)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Primary" className="border-t bg-background lg:hidden">
          <ul className="container-page flex flex-col py-3">
            {SECTION_IDS.map((id) => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => setOpen(false)} aria-current={active === id ? "true" : undefined}
                  className="block rounded-xl px-3 py-3 text-lg font-semibold aria-[current]:text-primary">{t.nav[id]}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

function SectionHead({ eyebrow, title, lead, light }: { eyebrow: string; title: string; lead?: string; light?: boolean }) {
  return (
    <div className="max-w-3xl">
      <p className={light ? "eyebrow text-sun" : "eyebrow"}>{eyebrow}</p>
      <h2 className="section-title mt-3">{title}</h2>
      {lead && <p className={`mt-5 text-lg leading-relaxed ${light ? "text-forest-foreground/85" : "text-muted-foreground"}`}>{lead}</p>}
    </div>
  );
}

function Arc({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden className={`block h-10 w-full md:h-16 ${className}`}>
      <path d="M0 80 C 360 0, 1080 0, 1440 80 Z" fill="currentColor" />
    </svg>
  );
}

function StatGroup({ label, tag, stats, tone }: { label: string; tag: string; stats: string[][]; tone: "own" | "shared" | "target" }) {
  const styles = {
    own: "bg-primary text-primary-foreground",
    shared: "bg-card border-2 border-savanna",
    target: "bg-cream border-2 border-dashed border-arid",
  }[tone];
  const num = tone === "own" ? "text-primary-foreground" : tone === "shared" ? "text-primary" : "text-arid-ink";
  return (
    <div className={`curve-card p-6 md:p-8 ${styles}`}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h4 className="text-xl font-extrabold">{label}</h4>
        <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${tone === "own" ? "bg-sun text-accent-foreground" : tone === "shared" ? "bg-secondary text-secondary-foreground" : "bg-arid/20 text-arid-ink"}`}>{tag}</span>
      </div>
      <dl className={`mt-6 grid gap-5 ${stats.length > 4 ? "grid-cols-2 md:grid-cols-3" : "grid-cols-2"}`}>
        {stats.map(([n, d]) => (
          <div key={d}>
            <dt className="sr-only">{d}</dt>
            <dd>
              <span className={`block text-4xl font-extrabold tracking-tight md:text-5xl ${num}`}>{n}</span>
              <span className={`mt-1 block text-sm leading-snug ${tone === "own" ? "text-primary-foreground/90" : "text-muted-foreground"}`}>{d}</span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function IapaPage({ lang }: { lang: Lang }) {
  const t = CONTENT[lang];
  const mail = (subject: string) => `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}`;

  return (
    <div id="top" lang={lang}>
      <Header lang={lang} />
      <main id="main">
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-forest text-forest-foreground">
          <img src={heroImg.url} alt={t.hero.photoAlt} fetchPriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover object-[70%_center]" />
          <div className="bg-hero-overlay absolute inset-0 -z-10" />
          <div className="container-page flex min-h-[78svh] flex-col justify-center py-20 md:py-28">
            <p className="eyebrow text-sun">{t.hero.eyebrow}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">{t.hero.title}</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-forest-foreground/90 md:text-xl">{t.hero.lead}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#membership" className="inline-flex items-center gap-2 rounded-full bg-sun px-7 py-3.5 text-base font-extrabold text-accent-foreground transition hover:brightness-105">
                {t.hero.join} <ArrowRight className="h-5 w-5" aria-hidden />
              </a>
              <a href="#partnership" className="inline-flex items-center gap-2 rounded-full border-2 border-forest-foreground px-7 py-3.5 text-base font-bold transition hover:bg-forest-foreground hover:text-forest">
                {t.hero.partner}
              </a>
            </div>
          </div>
          <Arc className="text-background -mb-px" />
        </section>

        {/* WHO WE ARE */}
        <section id="who-we-are" className="py-16 md:py-24">
          <div className="container-page">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
              <div>
                <SectionHead eyebrow={t.who.eyebrow} title={t.who.title} />
                {t.who.body.map((p) => <p key={p} className="mt-5 text-lg leading-relaxed text-muted-foreground">{p}</p>)}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[[t.who.vision, t.who.visionText], [t.who.mission, t.who.missionText]].map(([h, p]) => (
                    <div key={h} className="rounded-2xl border-l-4 border-sun bg-card p-5 shadow-soft">
                      <h3 className="text-sm font-extrabold uppercase tracking-wider text-primary">{h}</h3>
                      <p className="mt-2 leading-relaxed">{p}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="curve-card bg-secondary p-6 md:p-8">
                <h3 className="text-2xl font-extrabold">{t.who.regionsTitle}</h3>
                <ul className="mt-5 divide-y divide-border">
                  {t.who.regions.map(([r, c], i) => (
                    <li key={r} className="flex gap-4 py-3.5">
                      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{i + 1}</span>
                      <div className="min-w-0"><p className="font-bold">{r}</p><p className="text-sm text-muted-foreground">{c}</p></div>
                    </li>
                  ))}
                </ul>
                <img src={ghana.url} alt="" loading="lazy" className="mt-4 aspect-[16/9] w-full rounded-2xl object-cover" />
              </div>
            </div>

            <div className="mt-20">
              <p className="eyebrow">{t.who.pillarsEyebrow}</p>
              <h3 className="section-title mt-3 text-3xl md:text-4xl">{t.who.pillarsTitle}</h3>
              <ol className="mt-8 grid gap-5 md:grid-cols-3">
                {t.who.pillars.map(([h, p], i) => (
                  <li key={h} className="curve-card relative overflow-hidden bg-card p-7">
                    <span aria-hidden className={`absolute -right-6 -top-6 h-24 w-24 rounded-full ${["bg-sun/40", "bg-arid/30", "bg-savanna/40"][i]}`} />
                    <span className="relative text-5xl font-extrabold text-primary">{i + 1}</span>
                    <h4 className="relative mt-3 text-xl font-extrabold leading-snug">{h}</h4>
                    <p className="relative mt-3 leading-relaxed text-muted-foreground">{p}</p>
                  </li>
                ))}
              </ol>
              <div className="mt-8 flex flex-wrap items-center gap-2">
                <span className="mr-2 font-bold">{t.who.valuesTitle}:</span>
                {t.who.values.map((v) => <span key={v} className="rounded-full border-2 border-savanna px-4 py-1.5 text-sm font-semibold">{v}</span>)}
              </div>
            </div>
          </div>
        </section>

        {/* OUR WORK */}
        <section id="our-work" className="bg-card py-16 md:py-24">
          <div className="container-page">
            <SectionHead eyebrow={t.work.eyebrow} title={t.work.title} />
            <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-primary">{t.work.partnersLabel}</h3>
                <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                  {t.work.partnerServices.map(([h, p]) => (
                    <li key={h} className="rounded-2xl border bg-background p-5">
                      <h4 className="font-extrabold">{h}</h4><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-primary">{t.work.membersLabel}</h3>
                <ul className="mt-4 grid gap-4">
                  {t.work.memberServices.map(([h, p]) => (
                    <li key={h} className="rounded-2xl bg-secondary p-5">
                      <h4 className="font-extrabold">{h}</h4><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-20">
              <h3 className="section-title text-3xl md:text-4xl">{t.work.resultsTitle}</h3>
              <p className="mt-3 max-w-2xl text-muted-foreground">{t.work.resultsNote}</p>
              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <StatGroup tone="own" {...t.work.own} stats={t.work.ownStats} />
                <StatGroup tone="shared" {...t.work.shared} stats={t.work.sharedStats} />
              </div>
              <div className="mt-6"><StatGroup tone="target" {...t.work.targets} stats={t.work.targetStats} /></div>
            </div>

            <div className="mt-20">
              <h3 className="section-title text-3xl md:text-4xl">{t.work.storiesTitle}</h3>
              <p className="mt-3 text-muted-foreground">{t.work.storiesNote}</p>
              <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {t.work.stories.map((s) => (
                  <li key={s.title} className="curve-card overflow-hidden bg-background">
                    <img src={STORY_IMG[s.img]} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover" />
                    <div className="p-5">
                      <p className="eyebrow text-xs">{s.place}</p>
                      <h4 className="mt-1.5 text-lg font-extrabold leading-snug">{s.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-20 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
              <div>
                <h3 className="text-2xl font-extrabold">{t.work.partnersTitle}</h3>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {t.work.partners.map(([n, d]) => (
                    <li key={n} className="rounded-2xl border p-4"><p className="font-extrabold text-primary">{n}</p><p className="mt-1 text-sm text-muted-foreground">{d}</p></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold">{t.work.inViewTitle}</h3>
                <ul className="mt-5 grid gap-3">
                  {t.work.inView.map(([n, d, href]) => (
                    <li key={n} className="rounded-2xl border-2 border-dashed border-savanna p-4">
                      <p className="font-extrabold">{href ? <a href={href} target="_blank" rel="noopener noreferrer" className="underline decoration-savanna underline-offset-4 hover:text-primary">{n}</a> : n}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* TRAINING */}
        <section id="training" className="relative bg-forest text-forest-foreground">
          <Arc className="rotate-180 text-card -mt-px" />
          <div className="container-page py-14 md:py-20">
            <SectionHead light eyebrow={t.training.eyebrow} title={t.training.title} lead={t.training.lead} />
            <h3 className="mt-12 text-2xl font-extrabold">{t.training.schoolsTitle}</h3>
            <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {t.training.schools.map(([abbr, name, d], i) => (
                <li key={abbr} className="curve-card bg-forest-foreground/5 p-6 ring-1 ring-forest-foreground/15">
                  <span className={`inline-block rounded-full px-3 py-1 text-sm font-extrabold text-accent-foreground ${["bg-sun", "bg-arid", "bg-savanna", "bg-sun"][i]}`}>{abbr}</span>
                  <h4 className="mt-4 text-xl font-extrabold">{name}</h4>
                  <p className="mt-2 leading-relaxed text-forest-foreground/85">{d}</p>
                </li>
              ))}
            </ul>
            <div className="mt-6 grid gap-5 lg:grid-cols-2">
              <div className="curve-card bg-sun p-7 text-accent-foreground">
                <h3 className="text-2xl font-extrabold">{t.training.cfTitle}</h3>
                <p className="mt-3 text-lg leading-relaxed">{t.training.cfText}</p>
                <p className="mt-4 text-sm font-semibold">{t.training.gap}</p>
              </div>
              <div className="curve-card p-7 ring-1 ring-forest-foreground/20">
                <h3 className="text-2xl font-extrabold">{t.training.processTitle}</h3>
                <ol className="mt-5 grid gap-3 sm:grid-cols-2">
                  {t.training.process.map((s, i) => (
                    <li key={s} className="flex items-center gap-3"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-savanna font-extrabold text-accent-foreground">{i + 1}</span><span className="font-semibold">{s}</span></li>
                  ))}
                </ol>
                <p className="mt-5 text-sm text-forest-foreground/80">{t.training.formats}</p>
              </div>
            </div>
          </div>
          <Arc className="text-background -mb-px" />
        </section>

        {/* KNOWLEDGE HUB */}
        <section id="knowledge-hub" className="py-16 md:py-24">
          <div className="container-page">
            <SectionHead eyebrow={t.hub.eyebrow} title={t.hub.title} lead={t.hub.lead} />
            <ul className="mt-10 grid gap-6 md:grid-cols-2">
              {t.hub.issues.map((is, i) => (
                <li key={is.key} className="curve-card flex flex-col overflow-hidden bg-card">
                  <div className={`h-2 ${i === 0 ? "bg-primary" : "bg-arid"}`} />
                  <div className="flex flex-1 flex-col p-7">
                    <p className="eyebrow">{is.label}</p>
                    <h3 className="mt-2 text-2xl font-extrabold">{is.title}</h3>
                    <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{is.text}</p>
                    <a href={PULSE[is.key]} download target="_blank" rel="noopener"
                      className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition hover:brightness-110">
                      <Download className="h-5 w-5" aria-hidden /> {t.hub.download}
                      <span className="sr-only">— IAPA Pulse {is.label}</span>
                    </a>
                    <p className="mt-2 text-xs text-muted-foreground">{t.hub.size}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* JOIN */}
        <section id="join-us" className="bg-secondary py-16 md:py-24">
          <div className="container-page">
            <SectionHead eyebrow={t.join.eyebrow} title={t.join.title} />
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {([["membership", t.join.member, "bg-primary text-primary-foreground", "bg-sun text-accent-foreground"], ["partnership", t.join.partner, "bg-card", "bg-primary text-primary-foreground"]] as const).map(([id, c, cls, btn]) => (
                <div key={id} id={id} className={`curve-card scroll-mt-24 p-7 md:p-9 ${cls}`}>
                  <h3 className="text-3xl font-extrabold">{c.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed opacity-90">{c.text}</p>
                  <ul className="mt-5 space-y-2">
                    {c.perks.map((p) => <li key={p} className="flex gap-2"><Check className="mt-0.5 h-5 w-5 shrink-0" aria-hidden /> {p}</li>)}
                  </ul>
                  <a href={mail(c.subject)} className={`mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-extrabold transition hover:brightness-105 ${btn}`}>
                    <Mail className="h-5 w-5" aria-hidden /> {c.cta}
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-10 curve-card bg-card p-7 md:p-9">
              <h3 className="text-2xl font-extrabold">{t.join.contactTitle}</h3>
              <dl className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div><dt className="flex items-center gap-2 text-sm font-bold text-primary"><Mail className="h-4 w-4" aria-hidden />{t.join.email}</dt>
                  <dd className="mt-1 text-sm [overflow-wrap:anywhere]"><a className="font-semibold underline underline-offset-4" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></dd></div>
                <div><dt className="flex items-center gap-2 text-sm font-bold text-primary"><Phone className="h-4 w-4" aria-hidden />{t.join.phone}</dt>
                  <dd className="mt-1 space-y-1">{CONTACT.phones.map((p, i) => <a key={p} className="block font-semibold underline underline-offset-4" href={`tel:${CONTACT.phoneHrefs[i]}`}>{p}</a>)}</dd></div>
                <div><dt className="flex items-center gap-2 text-sm font-bold text-primary"><MessageCircle className="h-4 w-4" aria-hidden />{t.join.whatsapp}</dt>
                  <dd className="mt-1 space-y-1">{CONTACT.phones.map((p, i) => <a key={p} className="block font-semibold underline underline-offset-4" href={`https://wa.me/${CONTACT.whatsapp[i]}`} target="_blank" rel="noopener noreferrer">{p}</a>)}</dd></div>
                <div><dt className="flex items-center gap-2 text-sm font-bold text-primary"><MapPin className="h-4 w-4" aria-hidden />{t.join.hq}</dt>
                  <dd className="mt-1 font-semibold">{CONTACT.address}</dd></div>
              </dl>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-forest text-forest-foreground">
        <div className="container-page flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
          <div className="min-w-0">
            <p className="text-2xl font-extrabold tracking-[0.3em]">IAPA</p>
            <p className="mt-1 text-sm text-forest-foreground/80">© 2026 {t.footer.rights}</p>
            <p className="mt-1 text-sm font-semibold text-sun">{t.footer.motto}</p>
          </div>
          <a href="#top" className="inline-flex w-fit items-center gap-2 rounded-full border border-forest-foreground/40 px-4 py-2 text-sm font-semibold hover:bg-forest-foreground/10">
            <ArrowDown className="h-4 w-4 rotate-180" aria-hidden /> {t.footer.backTop}
          </a>
        </div>
      </footer>
    </div>
  );
}
