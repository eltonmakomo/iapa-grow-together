import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { CONTACT, CONTENT } from "@/lib/iapa-content";
import { PAGES } from "@/lib/iapa-pages";
import { PageHero, SectionHead, asLang, pageHead } from "@/components/iapa/site";
import { IMG } from "@/components/iapa/media";

export const Route = createFileRoute("/$lang/who-we-are")({
  head: ({ params }) => pageHead(params.lang, "who-we-are"),
  component: WhoWeAre,
});

function WhoWeAre() {
  const lang = asLang(Route.useParams().lang);
  const t = CONTENT[lang].who;
  const w = CONTENT[lang].work;
  const p = PAGES[lang].who;
  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} lead={p.lead} img={IMG.ghana} />

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2">
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
                <span aria-hidden className={`absolute -right-6 -top-6 h-24 w-24 rounded-full ${["bg-sun/40", "bg-arid/30", "bg-savanna/40"][i]}`} />
                <span className="relative text-5xl font-extrabold text-primary">{i + 1}</span>
                <h3 className="relative mt-3 text-xl font-extrabold">{h}</h3>
                <p className="relative mt-3 leading-relaxed text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
          <h3 className="mt-14 text-2xl font-extrabold">{t.valuesTitle}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {t.values.map((v) => <li key={v} className="rounded-full border-2 border-savanna px-4 py-1.5 font-semibold">{v}</li>)}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page">
          <SectionHead title={p.timelineTitle} />
          <ol className="mt-8 border-l-4 border-savanna pl-6 md:pl-10">
            {p.timeline.map(([d, x]) => (
              <li key={d} className="relative pb-8 last:pb-0">
                <span aria-hidden className="absolute -left-[2.05rem] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary md:-left-[3.05rem]" />
                <p className="eyebrow">{d}</p><p className="mt-1 text-lg font-semibold">{x}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="container-page">
          <SectionHead title={p.govTitle} lead={p.govText} />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {p.organs.map(([h, d]) => <li key={h} className="curve-card bg-card p-6"><h3 className="text-lg font-extrabold text-primary">{h}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p></li>)}
          </ul>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-extrabold">{p.boardTitle}</h3>
              <ul className="mt-4 grid gap-2">
                {p.board.map((b) => <li key={b} className="rounded-xl bg-card px-4 py-3 font-semibold">{b}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-extrabold">{p.deptTitle}</h3>
              <ul className="mt-4 grid gap-3">
                {p.depts.map(([h, d]) => <li key={h} className="rounded-xl border-l-4 border-arid bg-card px-4 py-3"><p className="font-bold">{h}</p><p className="text-sm text-muted-foreground">{d}</p></li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHead title={w.partnersTitle} />
            <ul className="mt-6 grid gap-3">
              {w.partners.map(([n, d]) => <li key={n} className="rounded-2xl border p-4"><p className="font-extrabold text-primary">{n}</p><p className="mt-1 text-sm text-muted-foreground">{d}</p></li>)}
            </ul>
          </div>
          <div>
            <SectionHead title={p.officesTitle} />
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
