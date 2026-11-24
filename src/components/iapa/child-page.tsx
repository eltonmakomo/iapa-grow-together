import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, BookOpen, Check, Download, FileText, Film, Headphones, MapPin, Video } from "lucide-react";
import { CONTACT, CONTENT, type Lang } from "@/lib/iapa-content";
import { childLabel, navPage } from "@/lib/iapa-nav";
import { PAGES, type PageSlug } from "@/lib/iapa-pages";
import { CHILD_UI, childContent, childHero, type ChildCopy } from "@/lib/iapa-child-content";
import { AfricaImpactMap } from "@/components/iapa/africa-map";
import { Arc, PageHero, ResultsBlock, SectionHead } from "@/components/iapa/site";
import { PULSE, PULSE_COVER, storyImg, storyPosition } from "@/components/iapa/media";
import { PartnerCards } from "@/components/iapa/partner-logos";
import { SampleShowcase } from "@/components/iapa/sample-showcase";

const PARENT_ROUTES = {
  "who-we-are": "/$lang/who-we-are",
  "our-work": "/$lang/our-work",
  training: "/$lang/training",
  "knowledge-hub": "/$lang/knowledge-hub",
  media: "/$lang/media",
  "join-us": "/$lang/join-us",
} as const;

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

function FeatureBody({ lang, title, copy, child }: { lang: Lang; title: string; copy: ChildCopy; child: string }) {
  const ui = CHILD_UI[lang];
  return (
    <>
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-start">
        <div>
          <SectionHead title={copy.heading ?? title} />
          {copy.body?.map((text) => <p key={text} className="mt-5 text-lg leading-relaxed text-muted-foreground">{text}</p>)}
        </div>
        {copy.points && (
          <div className="curve-card bg-card p-7">
            <h3 className="text-2xl font-extrabold">{ui.highlights}</h3>
            <ul className="mt-6 grid gap-4">
              {copy.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-sun text-accent-foreground"><Check className="h-5 w-5" aria-hidden /></span>
                  <span className="pt-1 font-semibold leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {copy.samples && <SampleShowcase lang={lang} kind={copy.sampleKind} items={copy.samples} child={child} />}
      {copy.note && <p className="mt-6 rounded-2xl bg-secondary p-5 font-semibold text-secondary-foreground">{copy.note}</p>}
    </>
  );
}

function WhoBody({ lang, child }: { lang: Lang; child: string }) {
  const t = CONTENT[lang].who;
  const w = CONTENT[lang].work;
  const p = PAGES[lang].who;
  if (child === "leadership" || child === "iapa-team") {
    return <FeatureBody lang={lang} title={childLabel("who-we-are", child, lang)} copy={childContent("who-we-are", child, lang)} child={child} />;
  }
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
  if (child === "partners") return <><PartnerCards lang={lang} className="sm:grid-cols-2 lg:grid-cols-3" /><div className="mt-12"><SectionHead title={w.inViewTitle} /><PairCards items={w.inView.map(([name, text]) => [name, text])} /></div></>;
  return <>
    <div className="curve-card bg-primary p-7 text-primary-foreground"><p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider"><MapPin className="h-4 w-4" aria-hidden />{p.hq}</p><p className="mt-2 text-xl font-extrabold">{CONTACT.address}</p></div>
    <div className="mt-10"><SectionHead title={t.regionsTitle} /><AfricaImpactMap lang={lang} /></div>
  </>;
}

function WorkBody({ lang, child }: { lang: Lang; child: string }) {
  const w = CONTENT[lang].work;
  const p = PAGES[lang].work;
  if (child === "impact-map") return <><SectionHead title={p.mapTitle} lead={p.mapNote} /><AfricaImpactMap lang={lang} /></>;
  if (child === "iapa-in-numbers") return <><SectionHead title={w.resultsTitle} lead={w.resultsNote} /><div className="mt-8"><ResultsBlock lang={lang} /></div></>;
  if (child === "stories") return <>
    <SectionHead title={w.storiesTitle} lead={w.storiesNote} />
    <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{w.stories.map((story) => <li key={story.title}><Link to="/$lang/stories/$storyId" params={{ lang, storyId: story.img }} className="curve-card group flex h-full flex-col overflow-hidden bg-card"><img src={storyImg(story.img)} alt="" loading="lazy" style={{ objectPosition: storyPosition(story.img) }} className="aspect-[4/3] w-full object-cover object-top" /><div className="flex flex-1 flex-col p-5"><p className="eyebrow text-xs">{story.place}</p><h3 className="mt-1.5 text-lg font-extrabold">{story.title}</h3><p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{story.text}</p><span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary">{lang === "fr" ? "Lire l'histoire" : "Read story"} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden /></span></div></Link></li>)}</ul>
  </>;
  return <FeatureBody lang={lang} title={childLabel("our-work", child, lang)} copy={childContent("our-work", child, lang)} child={child} />;
}

function TrainingBody({ lang, child }: { lang: Lang; child: string }) {
  return <FeatureBody lang={lang} title={childLabel("training", child, lang)} copy={childContent("training", child, lang)} child={child} />;
}

function HubBody({ lang, child }: { lang: Lang; child: string }) {
  const h = CONTENT[lang].hub;
  if (child !== "publications") {
    const copy = childContent("knowledge-hub", child, lang);
    return <>
      {copy.body?.map((text) => <p key={text} className="max-w-3xl text-lg leading-relaxed text-muted-foreground">{text}</p>)}
      {copy.samples && <SampleShowcase lang={lang} kind={copy.sampleKind} items={copy.samples} child={child} />}
    </>;
  }
  return <>
    <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">{h.lead}</p>
    <ul className="mt-8 grid gap-6 md:grid-cols-2">{h.issues.map((issue, i) => <li key={issue.key} className="curve-card flex flex-col overflow-hidden bg-card"><div className={`h-2 ${i === 0 ? "bg-primary" : "bg-arid"}`} /><div className="grid flex-1 gap-6 p-7 sm:grid-cols-[9rem_1fr]"><img src={PULSE_COVER[issue.key]!} alt={`IAPA Pulse — ${issue.label}`} loading="lazy" className="w-36 rounded-lg border shadow-soft sm:w-full" /><div><p className="eyebrow">{issue.label}</p><h3 className="mt-2 text-2xl font-extrabold">{issue.title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{issue.text}</p><div className="mt-6 flex flex-wrap gap-3"><a href={PULSE[issue.key]!} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-5 py-2.5 font-bold text-primary hover:bg-primary hover:text-primary-foreground"><BookOpen className="h-5 w-5" aria-hidden />{h.read}</a><a href={PULSE[issue.key]!} download className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-bold text-primary-foreground hover:brightness-110"><Download className="h-5 w-5" aria-hidden />{h.download}</a></div><p className="mt-2 text-xs text-muted-foreground">{h.size}</p></div></div></li>)}</ul>
  </>;
}

function MediaBody({ lang, child }: { lang: Lang; child: string }) {
  const m = PAGES[lang].media;
  if (child === "events") return <ol className="grid gap-3">{m.events.map(([date, title, text, planned]) => <li key={title} className={`grid gap-2 rounded-2xl p-5 sm:grid-cols-[11rem_1fr] ${planned ? "border-2 border-dashed border-arid bg-cream" : "bg-card"}`}><p className="font-extrabold text-primary">{date}{planned && <span className="ml-2 rounded-full bg-arid/20 px-2 py-0.5 text-xs uppercase text-arid-ink">{m.upcoming}</span>}</p><div><h3 className="font-extrabold">{title}</h3>{text && <p className="mt-1 text-sm text-muted-foreground">{text}</p>}</div></li>)}</ol>;
  if (child === "key-documents") return <ul className="grid gap-4 md:grid-cols-2">{m.docs.map(([title, text]) => <li key={title} className="curve-card flex flex-col bg-card p-7"><FileText className="h-8 w-8 text-primary" aria-hidden /><h3 className="mt-3 text-xl font-extrabold">{title}</h3><p className="mt-2 flex-1 text-muted-foreground">{text}</p><a href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(title ?? "")}`} className="mt-5 inline-flex w-fit rounded-full border-2 border-primary px-5 py-2.5 font-bold text-primary hover:bg-primary hover:text-primary-foreground">{m.requestDoc}</a></li>)}</ul>;
  return <ul className="grid gap-6 md:grid-cols-2">{m.press.map(([date, title, text]) => <li key={title} className="curve-card bg-card p-7"><p className="eyebrow">{date}</p><h3 className="mt-2 text-2xl font-extrabold">{title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{text}</p></li>)}</ul>;
}

function JoinBody({ lang, child }: { lang: Lang; child: string }) {
  return <FeatureBody lang={lang} title={childLabel("join-us", child, lang)} copy={childContent("join-us", child, lang)} child={child} />;
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
  const isHub = slug === "knowledge-hub";
  const copy = childContent(slug, child, lang);
  const ui = CHILD_UI[lang];
  const Icon = child === "podcasts" ? Headphones : child === "webinars" ? Video : child === "multimedia" ? Film : BookOpen;
  const browseLabel = child === "podcasts" ? ui.browsePodcasts : child === "webinars" ? ui.browseRecordings : child === "multimedia" ? ui.browseMultimedia : ui.browsePublications;
  const contentId = child === "webinars" ? "webinar-recordings" : "hub-resources";
  const heroKey = childHero(slug, child);
  const siblings = n.groups.flatMap((group) => group.items).filter((item) => item.id !== child);
  return <>
    {isHub ? <section className="relative overflow-hidden bg-forest text-forest-foreground">
      <div className="container-page pb-10 pt-8 md:pb-14 md:pt-12">
        <Link to="/$lang/knowledge-hub" params={{ lang }} className="inline-flex items-center gap-2 text-sm font-bold text-sun hover:underline"><ArrowLeft className="h-4 w-4" aria-hidden />{p.nav[slug]}</Link>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-12">
          <div>
            <h1 className="text-3xl font-extrabold leading-[1.08] tracking-tight md:text-5xl">{childLabel(slug, child, lang)}</h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-forest-foreground/85 md:text-lg">{copy.lead}</p>
            {copy.heading && <p className="mt-5 flex items-center gap-3 text-sm font-bold text-forest-foreground/95 md:text-base"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-forest-foreground/12 text-sun"><Icon className="h-4 w-4" aria-hidden /></span><span>{copy.heading}</span></p>}
            <a href={`#${contentId}`} className="mt-7 inline-flex items-center gap-2 rounded-full bg-sun px-6 py-3 text-sm font-extrabold text-accent-foreground shadow-soft hover:brightness-105"><Icon className="h-4 w-4" aria-hidden />{browseLabel}<ArrowRight className="h-4 w-4" aria-hidden /></a>
          </div>
          <div className="curve-card overflow-hidden bg-forest-foreground/10 ring-1 ring-forest-foreground/15">
            <img src={storyImg(heroKey)} alt="" fetchPriority="high" style={{ objectPosition: storyPosition(heroKey) }} className="aspect-[16/10] w-full object-cover" />
          </div>
        </div>
      </div>
      <Arc className="-mb-px text-background" />
    </section> : <PageHero eyebrow={p.nav[slug]} title={childLabel(slug, child, lang)} lead={copy.lead} img={childHero(slug, child)} uncropped />}
    <section id={isHub ? contentId : undefined} className={isHub ? "py-10 md:py-14" : "py-16 md:py-24"}><div className="container-page">{!isHub && <Link to={PARENT_ROUTES[slug]} params={{ lang }} className="mb-10 inline-flex items-center gap-2 font-bold text-primary hover:underline"><ArrowLeft className="h-4 w-4" aria-hidden />{p.nav[slug]}</Link>}<ChildBody lang={lang} slug={slug} child={child} /></div></section>
    <section className="bg-secondary py-14 md:py-20"><div className="container-page"><SectionHead title={p.nav[slug]} /><ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{siblings.map((item) => <li key={item.id}><Link to="/$lang/$section/$child" params={{ lang, section: slug, child: item.id }} className="group flex h-full items-center justify-between gap-4 rounded-2xl bg-card p-5 font-bold transition hover:-translate-y-1 hover:shadow-soft">{item.label[lang]}<ArrowRight className="h-5 w-5 shrink-0 text-primary transition group-hover:translate-x-1" aria-hidden /></Link></li>)}</ul></div></section>
  </>;
}
