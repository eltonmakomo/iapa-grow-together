import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Download, FileText, MapPin, Newspaper } from "lucide-react";
import { CONTACT, CONTENT, type Lang } from "@/lib/iapa-content";
import { childLabel } from "@/lib/iapa-nav";
import { PAGES, type PageSlug } from "@/lib/iapa-pages";
import { CHILD_CONTENT, CHILD_UI, childContent, childHero, type ChildCopy } from "@/lib/iapa-child-content";
import { PRESS_DETAILS } from "@/lib/iapa-details";
import { AfricaImpactMap } from "@/components/iapa/africa-map";
import { EventsSections } from "@/components/iapa/events";
import { FormDialog, NewsletterInlineForm } from "@/components/iapa/forms";
import { PulseIssuesGrid } from "@/components/iapa/pulse-issues";
import { PageHero, Photo, ResultsBlock, SectionHead } from "@/components/iapa/site";
import { PartnerStrip } from "@/components/iapa/partner-logos";
import { SampleShowcase } from "@/components/iapa/sample-showcase";
import { DOC_FILES, IMG, STRUCTURE_CHARTS, type ImgKey } from "@/components/iapa/media";

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
    <SectionHead eyebrow={p.govTitle} title={p.opsStructureTitle} lead={p.opsStructureLead} />
    <figure className="mt-8 overflow-hidden rounded-2xl border bg-card p-3 shadow-soft sm:p-5">
      <img src={STRUCTURE_CHARTS.operational} alt={`${p.opsStructureTitle} — ${p.opsStructureLead}`} className="block h-auto w-full rounded-xl" />
    </figure>
    <div className="mt-14">
      <SectionHead eyebrow={p.govTitle} title={p.orgStructureTitle} lead={p.orgStructureLead} />
      <figure className="mt-8 overflow-hidden rounded-2xl border bg-card p-3 shadow-soft sm:p-5">
        <img src={STRUCTURE_CHARTS.organizational} alt={`${p.orgStructureTitle} — ${p.orgStructureLead}`} loading="lazy" className="block h-auto w-full rounded-xl" />
      </figure>
    </div>
  </>;
  if (child === "partners") return <><PartnerStrip lang={lang} /><div className="mt-12"><SectionHead title={w.inViewTitle} /><PairCards items={w.inView.map(([name, text]) => [name, text])} /></div></>;
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
  return <FeatureBody lang={lang} title={childLabel("our-work", child, lang)} copy={childContent("our-work", child, lang)} child={child} />;
}

function TrainingBody({ lang, child }: { lang: Lang; child: string }) {
  const title = childLabel("training", child, lang);
  const copy = childContent("training", child, lang);
  const rawImg = CHILD_CONTENT.training[child]?.img;
  const img: ImgKey = rawImg && rawImg in IMG ? (rawImg as ImgKey) : "burkina";
  const ui = lang === "fr"
    ? { back: "Retour aux formations", cta: "Demander une formation / S'inscrire", desc: "Indiquez vos besoins et votre pays ; le Secrétariat exécutif vous répondra avec un plan adapté." }
    : { back: "Back to Training", cta: "Request training / Enrol", desc: "Share your target group and country; the Executive Secretariat will follow up with a tailored plan." };
  return (
    <>
      <Link to="/$lang/training" params={{ lang }} className="mb-8 inline-flex items-center gap-2 font-bold text-primary hover:underline">
        <ArrowLeft className="h-4 w-4" aria-hidden /> {ui.back}
      </Link>
      <FeatureBody lang={lang} title={title} copy={copy} child={child} />
      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <Photo k={img} lang={lang} ratio="aspect-[16/10]" />
        <div className="curve-card bg-secondary p-7 md:p-8">
          <h3 className="text-2xl font-extrabold">{title}</h3>
          <p className="mt-2 text-muted-foreground">{ui.desc}</p>
          <div className="mt-6">
            <FormDialog
              lang={lang}
              formType="training"
              triggerLabel={ui.cta}
              title={`${ui.cta} — ${title}`}
              description={ui.desc}
              defaultSubject={title}
              metadata={{ programme: child }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

function KnowledgeHubBody({ lang, child }: { lang: Lang; child: string }) {
  if (child === "publications") {
    const h = CONTENT[lang].hub;
    return (
      <>
        <SectionHead title={h.title} lead={h.lead} />
        <PulseIssuesGrid lang={lang} />
      </>
    );
  }
  if (child === "key-documents") {
    const m = PAGES[lang].media;
    return <>
      <SectionHead title={m.docsTitle} />
      <ul className="mt-8 grid gap-6 md:grid-cols-2">{m.docs.map(([title, text], i) => {
        const file = DOC_FILES[i];
        return <li key={title} className="curve-card group flex flex-col border bg-card p-7 transition duration-300 hover:-translate-y-1">
        <div className="flex items-center justify-between gap-4"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary"><FileText className="h-6 w-6" aria-hidden /></span><span className="rounded-full bg-sun/25 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-accent-foreground">IAPA</span></div>
        <h3 className="mt-5 text-2xl font-extrabold leading-tight">{title}</h3><p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{text}</p>
        {file && <div className="mt-6 flex flex-wrap gap-3">
          <a href={file.url} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-primary px-5 py-2.5 font-bold text-primary">{m.viewDoc}<ArrowUpRight className="h-4 w-4" aria-hidden /></a>
          <a href={file.url} download={file.name} className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-primary px-5 py-2.5 font-bold text-primary">{m.downloadDoc}<Download className="h-4 w-4" aria-hidden /></a>
        </div>}
      </li>; })}</ul>
    </>;
  }
  if (child === "newsletters") {
    const h = CONTENT[lang].hub;
    const sub = PAGES[lang].subscribe;
    return <>
      <SectionHead title={h.title} lead={h.lead} />
      <PulseIssuesGrid lang={lang} />
      <div className="curve-card mt-12 flex flex-col gap-6 bg-primary p-8 text-primary-foreground md:flex-row md:items-center md:justify-between">
        <div><h3 className="text-2xl font-extrabold">{sub.title}</h3><p className="mt-1 opacity-90">{sub.text}</p></div>
        <NewsletterInlineForm lang={lang} dark />
      </div>
    </>;
  }
  return <FeatureBody lang={lang} title={childLabel("knowledge-hub", child, lang)} copy={childContent("knowledge-hub", child, lang)} child={child} />;
}

function MediaBody({ lang, child }: { lang: Lang; child: string }) {
  const m = PAGES[lang].media;
  if (child === "events") return <EventsSections lang={lang} />;
  return <>
    <SectionHead title={m.pressTitle} />
    <ul className="mt-8 grid gap-6 md:grid-cols-2">{PRESS_DETAILS.map((pr) => {
      const copy = pr[lang];
      return <li key={pr.slug}>
        <Link to="/$lang/press/$pressId" params={{ lang, pressId: pr.slug }} className="curve-card group block h-full border bg-card p-7 transition duration-300 hover:-translate-y-1">
          <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground"><Newspaper className="h-5 w-5" aria-hidden /></span><p className="eyebrow">{copy.date}</p></div>
          <h3 className="mt-5 text-2xl font-extrabold leading-tight group-hover:text-primary">{copy.title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{copy.summary}</p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary">{PAGES[lang].readMore} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden /></span>
        </Link>
      </li>;
    })}</ul>
  </>;
}

function JoinBody({ lang, child }: { lang: Lang; child: string }) {
  return <FeatureBody lang={lang} title={childLabel("join-us", child, lang)} copy={childContent("join-us", child, lang)} child={child} />;
}

function ChildBody({ lang, slug, child }: { lang: Lang; slug: PageSlug; child: string }) {
  if (slug === "who-we-are") return <WhoBody lang={lang} child={child} />;
  if (slug === "our-work") return <WorkBody lang={lang} child={child} />;
  if (slug === "training") return <TrainingBody lang={lang} child={child} />;
  if (slug === "knowledge-hub") return <KnowledgeHubBody lang={lang} child={child} />;
  if (slug === "media") return <MediaBody lang={lang} child={child} />;
  return <JoinBody lang={lang} child={child} />;
}

export function ChildPage({ lang, slug, child }: { lang: Lang; slug: PageSlug; child: string }) {
  const p = PAGES[lang];
  const copy = childContent(slug, child, lang);
  const hasContentAnchor = slug === "media";
  const contentId = `media-${child}`;
  return <>
    <PageHero eyebrow={p.nav[slug]} title={childLabel(slug, child, lang)} lead={copy.lead} img={childHero(slug, child)} />
    <section id={hasContentAnchor ? contentId : undefined} className="py-16 md:py-24"><div className="container-page"><ChildBody lang={lang} slug={slug} child={child} /></div></section>
  </>;
}
