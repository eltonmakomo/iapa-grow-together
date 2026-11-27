import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { childLabel } from "@/lib/iapa-nav";
import { CONTACT, CONTENT } from "@/lib/iapa-content";
import { PAGES } from "@/lib/iapa-pages";
import { PageHero, Photo, SectionHead, asLang, pageHead } from "@/components/iapa/site";
import { PartnerCards } from "@/components/iapa/partner-logos";
import { ProfileGrid } from "@/components/iapa/profile-grid";
import { STRUCTURE_CHARTS } from "@/components/iapa/media";
import { childContent } from "@/lib/iapa-child-content";

export const Route = createFileRoute("/$lang/who-we-are")({
  head: ({ params }) => pageHead(params.lang, "who-we-are"),
  component: WhoWeAre,
});

function WhoWeAre() {
  const lang = asLang(Route.useParams().lang);
  const t = CONTENT[lang].who;
  const p = PAGES[lang].who;
  const p2 = PAGES[lang];
  const a = p2.arch;
  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} lead={p.lead} img="ghana" />

      <section id="about" className="py-16 md:py-24">
        <div className="container-page"><SectionHead eyebrow={p2.nav["who-we-are"]} title={childLabel("who-we-are", "about", lang)} /></div>
        <div className="container-page mt-10 grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHead title={p.whyTitle} />
            {p.why.map((x) => <p key={x} className="mt-5 text-lg leading-relaxed text-muted-foreground">{x}</p>)}
            {t.body.slice(1).map((x) => <p key={x} className="mt-5 text-lg leading-relaxed text-muted-foreground">{x}</p>)}
          </div>
          <div className="grid gap-4">
            {[[t.vision, t.visionText], [t.mission, t.missionText], [p.motto, CONTENT[lang].footer.motto]].map(([h, d]) => (
              <div key={h} className="rounded-2xl border-l-4 border-sun bg-card p-6 shadow-soft">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-primary">{h}</h3>
                <p className="mt-2 text-lg leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card py-16 md:py-24">
        <div className="container-page">
          <SectionHead eyebrow={t.pillarsEyebrow} title={t.pillarsTitle} />
          <ol className="mt-8 grid gap-5 md:grid-cols-3">
            {t.pillars.map(([h, d], i) => (
              <li key={h} className="curve-card relative overflow-hidden bg-background p-7">
                <span className="relative text-5xl font-extrabold text-primary">{i + 1}</span>
                <h3 className="relative mt-3 text-xl font-extrabold">{h}</h3>
                <p className="relative mt-3 leading-relaxed text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
          <h3 className="mt-14 text-2xl font-extrabold">{t.valuesTitle}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {t.values.map((v) => <li key={v} className="rounded-full border border-border px-4 py-1.5 font-semibold">{v}</li>)}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page">
          <SectionHead title={p.timelineTitle} />
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <ol className="border-l-4 border-border pl-6 md:pl-10">
            {p.timeline.map(([d, x]) => (
              <li key={d} className="relative pb-8 last:pb-0">
                <span aria-hidden className="absolute -left-[2.05rem] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary md:-left-[3.05rem]" />
                <p className="eyebrow">{d}</p><p className="mt-1 text-lg font-semibold">{x}</p>
              </li>
            ))}
          </ol>
          <div className="grid gap-4">
            <Photo k="kenya" lang={lang} ratio="aspect-[16/10]" />
            <Photo k="signing" lang={lang} ratio="aspect-[16/10]" />
          </div>
          </div>
        </div>
      </section>

      <section id="managing-board" className="bg-secondary py-16 md:py-24">
        <div className="container-page">
          <SectionHead eyebrow={p.govTitle} title={childLabel("who-we-are", "managing-board", lang)} lead={p.govText} />
          <div className="mt-10">
            <h3 className="text-2xl font-extrabold">{p.opsStructureTitle}</h3>
            <p className="mt-2 text-muted-foreground">{p.opsStructureLead}</p>
            <figure className="mt-5 overflow-hidden rounded-2xl border bg-card p-3 shadow-soft sm:p-5">
              <img src={STRUCTURE_CHARTS.operational} alt={`${p.opsStructureTitle} — ${p.opsStructureLead}`} loading="lazy" className="block h-auto w-full rounded-xl" />
            </figure>
          </div>
          <div className="mt-14">
            <h3 className="text-2xl font-extrabold">{p.orgStructureTitle}</h3>
            <p className="mt-2 text-muted-foreground">{p.orgStructureLead}</p>
            <figure className="mt-5 overflow-hidden rounded-2xl border bg-card p-3 shadow-soft sm:p-5">
              <img src={STRUCTURE_CHARTS.organizational} alt={`${p.orgStructureTitle} — ${p.orgStructureLead}`} loading="lazy" className="block h-auto w-full rounded-xl" />
            </figure>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <Photo k="ghana" lang={lang} ratio="aspect-[16/9]" />
            <Photo k="evaluation" lang={lang} ratio="aspect-[16/9]" />
          </div>
        </div>
      </section>

      <section id="leadership" className="py-16 md:py-24">
        <div className="container-page">
          <SectionHead title={childLabel("who-we-are", "leadership", lang)} lead={a.leadershipText} />
          <ProfileGrid lang={lang} items={childContent("who-we-are", "leadership", lang).samples ?? []} />
        </div>
      </section>

      <section id="iapa-team" className="bg-card py-16 md:py-24">
        <div className="container-page">
          <SectionHead title={childLabel("who-we-are", "iapa-team", lang)} lead={childContent("who-we-are", "iapa-team", lang).lead} />
          <ProfileGrid lang={lang} items={childContent("who-we-are", "iapa-team", lang).samples ?? []} />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div id="partners">
            <SectionHead title={childLabel("who-we-are", "partners", lang)} />
            <div className="mt-6"><PartnerCards lang={lang} className="sm:grid-cols-2" /></div>
          </div>
          <div id="offices">
            <SectionHead title={childLabel("who-we-are", "offices", lang)} />
            <div className="curve-card mt-6 bg-primary p-6 text-primary-foreground">
              <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider"><MapPin className="h-4 w-4" aria-hidden />{p.hq}</p>
              <p className="mt-2 text-xl font-extrabold">{CONTACT.address}</p>
            </div>
            <h3 className="mt-8 text-xl font-extrabold">{t.regionsTitle}</h3>
            <ul className="mt-3 divide-y">
              {t.regions.map(([r, c], i) => (
                <li key={r} className="flex gap-4 py-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sun text-sm font-bold text-accent-foreground">{i + 1}</span>
                  <div className="min-w-0"><p className="font-bold">{r}</p><p className="text-sm text-muted-foreground">{c}</p></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
