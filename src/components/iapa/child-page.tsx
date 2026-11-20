import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Download, FileText, Mail, MapPin, Quote } from "lucide-react";
import { CONTACT, CONTENT, type Lang } from "@/lib/iapa-content";
import { childLabel, navPage } from "@/lib/iapa-nav";
import { PAGES, type PageSlug } from "@/lib/iapa-pages";
import { PageHero, Photo, ResultsBlock, SectionHead } from "@/components/iapa/site";
import { PULSE, PULSE_COVER, storyImg, storyPosition, type BannerKey } from "@/components/iapa/media";

const BANNERS: Record<PageSlug, BannerKey> = {
  "who-we-are": "ghana",
  "our-work": "cameroon",
  training: "burkina",
  "knowledge-hub": "morocco",
  media: "mauritania",
  "join-us": "join",
};

const PARENT_ROUTES = {
  "who-we-are": "/$lang/who-we-are",
  "our-work": "/$lang/our-work",
  training: "/$lang/training",
  "knowledge-hub": "/$lang/knowledge-hub",
  media: "/$lang/media",
  "join-us": "/$lang/join-us",
} as const;

type Pair = [string, string];

function PairCards({ items }: { items: ReadonlyArray<ReadonlyArray<string | undefined>> }) {
  return (
    <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(([title, text]) => (
        <li key={title} className="curve-card bg-card p-6">
          <h3 className="text-lg font-extrabold text-primary">{title}</h3>
          <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
        </li>
      ))}
    </ul>
  );
}

function Regions({ lang }: { lang: Lang }) {
  const regions = CONTENT[lang].who.regions;
  return (
    <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {regions.map(([region, countries], i) => (
        <li key={region} className={`curve-card p-6 ${["bg-primary text-primary-foreground", "bg-sun text-accent-foreground", "bg-savanna text-accent-foreground", "bg-arid text-accent-foreground", "bg-forest text-forest-foreground"][i]}`}>
          <h3 className="font-extrabold">{region}</h3>
          <ul className="mt-3 space-y-1 text-sm">{(countries ?? "").split(", ").map((country) => <li key={country}>{country}</li>)}</ul>
        </li>
      ))}
    </ul>
  );
}

function WhoBody({ lang, child }: { lang: Lang; child: string }) {
  const t = CONTENT[lang].who;
  const w = CONTENT[lang].work;
  const p = PAGES[lang].who;
  const a = PAGES[lang].arch;
  if (child === "about") return <>
    <div className="grid gap-10 lg:grid-cols-2">
      <div><SectionHead title={p.whyTitle} />{[...p.why, ...t.body].map((text) => <p key={text} className="mt-5 text-lg leading-relaxed text-muted-foreground">{text}</p>)}</div>
      <div className="grid gap-4">{[[t.vision, t.visionText], [t.mission, t.missionText], [p.motto, CONTENT[lang].footer.motto]].map(([title, text]) => <div key={title} className="rounded-2xl border-l-4 border-sun bg-card p-6 shadow-soft"><h3 className="text-sm font-extrabold uppercase tracking-wider text-primary">{title}</h3><p className="mt-2 text-lg leading-relaxed">{text}</p></div>)}</div>
    </div>
    <div className="mt-14"><SectionHead eyebrow={t.pillarsEyebrow} title={t.pillarsTitle} /><PairCards items={t.pillars} /></div>
  </>;
  if (child === "managing-board") return <>
    <SectionHead title={p.govTitle} lead={p.govText} /><PairCards items={p.organs} />
    <div className="mt-12"><SectionHead title={p.boardTitle} /><ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{p.board.map((role) => <li key={role} className="rounded-2xl border bg-card p-5 font-semibold">{role}</li>)}</ul></div>
  </>;
  if (child === "leadership") return <>
    <SectionHead title={p.boardTitle} lead={a.leadershipText} />
    <PairCards items={p.board.slice(0, 4).map((role): Pair => [role, a.soon])} />
  </>;
  if (child === "asr-team") return <><SectionHead title={p.deptTitle} lead={a.asrText} /><PairCards items={p.depts} /></>;
  if (child === "partners") return <><PairCards items={w.partners} /><div className="mt-12"><SectionHead title={w.inViewTitle} /><PairCards items={w.inView.map(([name, text]) => [name, text])} /></div></>;
  return <>
    <div className="curve-card bg-primary p-7 text-primary-foreground"><p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider"><MapPin className="h-4 w-4" aria-hidden />{p.hq}</p><p className="mt-2 text-xl font-extrabold">{CONTACT.address}</p></div>
    <div className="mt-10"><SectionHead title={t.regionsTitle} /><Regions lang={lang} /></div>
  </>;
}

function WorkBody({ lang, child }: { lang: Lang; child: string }) {
  const w = CONTENT[lang].work;
  const p = PAGES[lang].work;
  const a = PAGES[lang].arch;
  if (child === "impact-map") return <><SectionHead title={p.mapTitle} lead={p.mapNote} /><Regions lang={lang} /></>;
  if (child === "asr-numbers") return <><SectionHead title={w.resultsTitle} lead={w.resultsNote} /><div className="mt-8"><ResultsBlock lang={lang} /></div></>;
  if (child === "stories") return <>
    <SectionHead title={w.storiesTitle} lead={w.storiesNote} />
    <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{w.stories.map((story) => <li key={story.title} className="curve-card overflow-hidden bg-card"><img src={storyImg(story.img)} alt="" loading="lazy" style={{ objectPosition: storyPosition(story.img) }} className="aspect-[4/3] w-full object-cover object-top" /><div className="p-5"><p className="eyebrow text-xs">{story.place}</p><h3 className="mt-1.5 text-lg font-extrabold">{story.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{story.text}</p></div></li>)}</ul>
  </>;
  return <div className="curve-card relative overflow-hidden bg-primary p-8 text-primary-foreground md:p-10"><Quote className="h-12 w-12 text-sun" aria-hidden /><p className="mt-4 max-w-2xl text-xl leading-relaxed">{a.testimonialsText}</p><p className="mt-4 text-2xl font-extrabold">{a.soon}</p><a href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(a.shareCta)}`} className="mt-6 inline-flex rounded-full bg-sun px-6 py-3 font-extrabold text-accent-foreground hover:brightness-105">{a.shareCta}</a></div>;
}

function TrainingBody({ lang, child }: { lang: Lang; child: string }) {
  const t = CONTENT[lang].training;
  const a = PAGES[lang].arch;
  const school = t.schools.find(([abbr]) => abbr?.toLowerCase() === child);
  const format = a.formats.find(([id]) => id === child);
  const title = school?.[1] ?? (child === "cf" ? t.cfTitle : child === "gap" ? childLabel("training", "gap", lang) : undefined);
  const text = school?.[2] ?? (child === "cf" ? t.cfText : child === "gap" ? t.gap : format?.[1]);
  return <>
    <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-start">
      <div><SectionHead title={title ?? a.formatsTitle} lead={text ?? t.lead} /><p className="mt-5 text-lg leading-relaxed text-muted-foreground">{t.lead}</p></div>
      <div className="curve-card bg-card p-7"><h3 className="text-2xl font-extrabold">{t.processTitle}</h3><ol className="mt-6 grid gap-4">{t.process.map((step, i) => <li key={step} className="flex items-center gap-3"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-savanna font-extrabold text-accent-foreground">{i + 1}</span><span className="font-semibold">{step}</span></li>)}</ol></div>
    </div>
    <div className="mt-12 grid gap-4 md:grid-cols-3"><Photo k="burkinaMaize" lang={lang} /><Photo k="burkinaSession" lang={lang} /><Photo k="mauritania" lang={lang} /></div>
  </>;
}

function HubBody({ lang, child }: { lang: Lang; child: string }) {
  const h = CONTENT[lang].hub;
  const p = PAGES[lang].hub;
  if (child !== "publications") return <div className="curve-card border-2 border-dashed border-savanna bg-card p-8 md:p-10"><h2 className="text-2xl font-extrabold">{childLabel("knowledge-hub", child, lang)}</h2><p className="mt-3 text-lg text-muted-foreground">{PAGES[lang].arch.hubText}</p><p className="mt-5 font-bold text-arid-ink">{p.soon}</p></div>;
  return <>
    <SectionHead title={h.title} lead={h.lead} />
    <ul className="mt-8 grid gap-6 md:grid-cols-2">{h.issues.map((issue, i) => <li key={issue.key} className="curve-card flex flex-col overflow-hidden bg-card"><div className={`h-2 ${i === 0 ? "bg-primary" : "bg-arid"}`} /><div className="grid flex-1 gap-6 p-7 sm:grid-cols-[9rem_1fr]"><img src={PULSE_COVER[issue.key]!} alt={`IAPA Pulse — ${issue.label}`} loading="lazy" className="w-36 rounded-lg border shadow-soft sm:w-full" /><div><p className="eyebrow">{issue.label}</p><h3 className="mt-2 text-2xl font-extrabold">{issue.title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{issue.text}</p><a href={PULSE[issue.key]!} download target="_blank" rel="noopener" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground hover:brightness-110"><Download className="h-5 w-5" aria-hidden />{h.download}</a><p className="mt-2 text-xs text-muted-foreground">{h.size}</p></div></div></li>)}</ul>
  </>;
}

function MediaBody({ lang, child }: { lang: Lang; child: string }) {
  const m = PAGES[lang].media;
  if (child === "events") return <ol className="grid gap-3">{m.events.map(([date, title, text, planned]) => <li key={title} className={`grid gap-2 rounded-2xl p-5 sm:grid-cols-[11rem_1fr] ${planned ? "border-2 border-dashed border-arid bg-cream" : "bg-card"}`}><p className="font-extrabold text-primary">{date}{planned && <span className="ml-2 rounded-full bg-arid/20 px-2 py-0.5 text-xs uppercase text-arid-ink">{m.upcoming}</span>}</p><div><h3 className="font-extrabold">{title}</h3>{text && <p className="mt-1 text-sm text-muted-foreground">{text}</p>}</div></li>)}</ol>;
  if (child === "key-documents") return <ul className="grid gap-4 md:grid-cols-2">{m.docs.map(([title, text]) => <li key={title} className="curve-card flex flex-col bg-card p-7"><FileText className="h-8 w-8 text-primary" aria-hidden /><h3 className="mt-3 text-xl font-extrabold">{title}</h3><p className="mt-2 flex-1 text-muted-foreground">{text}</p><a href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(title ?? "")}`} className="mt-5 inline-flex w-fit rounded-full border-2 border-primary px-5 py-2.5 font-bold text-primary hover:bg-primary hover:text-primary-foreground">{m.requestDoc}</a></li>)}</ul>;
  return <ul className="grid gap-6 md:grid-cols-2">{m.press.map(([date, title, text]) => <li key={title} className="curve-card bg-card p-7"><p className="eyebrow">{date}</p><h3 className="mt-2 text-2xl font-extrabold">{title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{text}</p></li>)}</ul>;
}

function JoinBody({ lang, child }: { lang: Lang; child: string }) {
  const p = PAGES[lang].join;
  const j = CONTENT[lang].join;
  const [title, text] = child === "vacancies" ? p.vacancies : p.scholarships;
  return <div className="grid gap-6 lg:grid-cols-2"><div className="curve-card bg-card p-8"><h2 className="text-2xl font-extrabold">{title}</h2><p className="mt-3 text-lg leading-relaxed text-muted-foreground">{text}</p><a href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(title ?? "")}`} className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-extrabold text-primary-foreground"><Mail className="h-5 w-5" aria-hidden />{j.contactTitle}</a></div><div className="curve-card bg-sun p-8 text-accent-foreground"><p className="text-lg leading-relaxed">{p.oppStory}</p></div></div>;
}

function ChildBody({ lang, slug, child }: { lang: Lang; slug: PageSlug; child: string }) {
  if (slug === "who-we-are") return <WhoBody lang={lang} child={child} />;
  if (slug === "our-work") return <WorkBody lang={lang} child={child} />;
  if (slug === "training") return <TrainingBody lang={lang} child={child} />;
  if (slug === "knowledge-hub") return <HubBody lang={lang} child={child} />;
  if (slug === "media") return <MediaBody lang={lang} child={child} />;
  return <JoinBody lang={lang} child={child} />;
}

export function ChildPage({ lang, slug, child }: { lang: Lang; slug: PageSlug; child: string }) {
  const p = PAGES[lang];
  const n = navPage(slug);
  const siblings = n.groups.flatMap((group) => group.items).filter((item) => item.id !== child);
  return <>
    <PageHero eyebrow={p.nav[slug]} title={childLabel(slug, child, lang)} lead={n.blurb[lang]} img={BANNERS[slug]} />
    <section className="py-16 md:py-24"><div className="container-page"><Link to={PARENT_ROUTES[slug]} params={{ lang }} className="mb-10 inline-flex items-center gap-2 font-bold text-primary hover:underline"><ArrowLeft className="h-4 w-4" aria-hidden />{p.nav[slug]}</Link><ChildBody lang={lang} slug={slug} child={child} /></div></section>
    <section className="bg-secondary py-14 md:py-20"><div className="container-page"><SectionHead title={p.nav[slug]} /><ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{siblings.map((item) => <li key={item.id}><Link to="/$lang/$section/$child" params={{ lang, section: slug, child: item.id }} className="group flex h-full items-center justify-between gap-4 rounded-2xl bg-card p-5 font-bold transition hover:-translate-y-1 hover:shadow-soft">{item.label[lang]}<ArrowRight className="h-5 w-5 shrink-0 text-primary transition group-hover:translate-x-1" aria-hidden /></Link></li>)}</ul></div></section>
  </>;
}
