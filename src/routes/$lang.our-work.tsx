import { createFileRoute } from "@tanstack/react-router";
import { CONTENT } from "@/lib/iapa-content";
import { PAGES } from "@/lib/iapa-pages";
import { Gallery, PageHero, Photo, ResultsBlock, SectionHead, asLang, pageHead } from "@/components/iapa/site";
import { storyImg, storyPosition } from "@/components/iapa/media";

export const Route = createFileRoute("/$lang/our-work")({
  head: ({ params }) => pageHead(params.lang, "our-work"),
  component: OurWork,
});

function OurWork() {
  const lang = asLang(Route.useParams().lang);
  const w = CONTENT[lang].work;
  const who = CONTENT[lang].who;
  const p = PAGES[lang].work;
  return (
    <>
      <PageHero eyebrow={w.eyebrow} title={w.title} lead={p.lead} img="cameroon" />
      <section className="py-16 md:py-24">
        <div className="container-page grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-primary">{w.partnersLabel}</h2>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {w.partnerServices.map(([h, d]) => <li key={h} className="curve-card bg-card p-6"><h3 className="text-lg font-extrabold">{h}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p></li>)}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-primary">{w.membersLabel}</h2>
            <ul className="mt-4 grid gap-4">
              {w.memberServices.map(([h, d]) => <li key={h} className="rounded-2xl bg-secondary p-6"><h3 className="text-lg font-extrabold">{h}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p></li>)}
            </ul>
            <Photo k="burkina" lang={lang} className="mt-4" ratio="aspect-[16/10]" />
          </div>
        </div>
        <div className="container-page mt-12">
          <Gallery lang={lang} keys={["cameroon", "chadSup", "morocco", "burkinaMaize", "mali", "spirulina"]} />
        </div>
      </section>

      <section className="bg-card py-16 md:py-24">
        <div className="container-page">
          <SectionHead title={w.resultsTitle} lead={w.resultsNote} />
          <div className="mt-8"><ResultsBlock lang={lang} /></div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page">
          <SectionHead title={p.mapTitle} lead={p.mapNote} />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {who.regions.map(([r, c], i) => (
              <li key={r} className={`curve-card p-6 ${["bg-primary text-primary-foreground", "bg-sun text-accent-foreground", "bg-savanna text-accent-foreground", "bg-arid text-accent-foreground", "bg-forest text-forest-foreground"][i]}`}>
                <h3 className="font-extrabold">{r}</h3>
                <ul className="mt-3 space-y-1 text-sm">{(c ?? "").split(", ").map((x) => <li key={x}>{x}</li>)}</ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="stories" className="scroll-mt-24 bg-secondary py-16 md:py-24">
        <div className="container-page">
          <SectionHead title={w.storiesTitle} lead={w.storiesNote} />
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {w.stories.map((s) => (
              <li key={s.title} className="curve-card overflow-hidden bg-card">
                <img src={storyImg(s.img)} alt="" loading="lazy" style={{ objectPosition: storyPosition(s.img) }} className="aspect-[4/3] w-full object-cover object-top origin-top" />
                <div className="p-5"><p className="eyebrow text-xs">{s.place}</p><h3 className="mt-1.5 text-lg font-extrabold leading-snug">{s.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page">
          <SectionHead title={w.inViewTitle} />
          <Photo k="evaluation" lang={lang} className="mt-6" ratio="aspect-[21/9]" />
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {w.inView.map(([n, d, href]) => (
              <li key={n} className="rounded-2xl border-2 border-dashed border-savanna p-6">
                <h3 className="text-lg font-extrabold">{href ? <a href={href} target="_blank" rel="noopener noreferrer" className="underline decoration-savanna underline-offset-4 hover:text-primary">{n}</a> : n}</h3>
                <p className="mt-1 text-muted-foreground">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
