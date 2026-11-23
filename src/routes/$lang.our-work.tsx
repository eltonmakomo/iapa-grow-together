import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";
import { CONTACT, CONTENT } from "@/lib/iapa-content";
import { childLabel } from "@/lib/iapa-nav";
import { PAGES } from "@/lib/iapa-pages";
import { AfricaImpactMap } from "@/components/iapa/africa-map";
import { PageHero, ResultsBlock, SectionHead, asLang, pageHead } from "@/components/iapa/site";
import { storyImg, storyPosition } from "@/components/iapa/media";

export const Route = createFileRoute("/$lang/our-work")({
  head: ({ params }) => pageHead(params.lang, "our-work"),
  component: OurWork,
});

function OurWork() {
  const lang = asLang(Route.useParams().lang);
  const w = CONTENT[lang].work;
  const p = PAGES[lang].work;
  const a = PAGES[lang].arch;
  return (
    <>
      <PageHero eyebrow={w.eyebrow} title={w.title} lead={p.lead} img="cameroon" />
      <section id="impact-map" className="py-16 md:py-24">
        <div className="container-page">
          <SectionHead eyebrow={p.mapTitle} title={childLabel("our-work", "impact-map", lang)} lead={p.mapNote} />
          <AfricaImpactMap lang={lang} />
        </div>
      </section>

      <section id="iapa-in-numbers" className="bg-card py-16 md:py-24">
        <div className="container-page">
          <SectionHead eyebrow={w.resultsTitle} title={childLabel("our-work", "iapa-in-numbers", lang)} lead={w.resultsNote} />
          <div className="mt-8"><ResultsBlock lang={lang} /></div>
        </div>
      </section>

      <section id="stories" className="bg-secondary py-16 md:py-24">
        <div className="container-page">
          <SectionHead eyebrow={w.storiesTitle} title={childLabel("our-work", "stories", lang)} lead={w.storiesNote} />
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {w.stories.map((s) => (
              <li key={s.title} id={`story-${s.img}`} className="curve-card scroll-mt-28 overflow-hidden bg-card target:ring-4 target:ring-sun">
                <Link to="/$lang/stories/$storyId" params={{ lang, storyId: s.img }} className="group flex h-full flex-col">
                  <img src={storyImg(s.img)} alt="" loading="lazy" style={{ objectPosition: storyPosition(s.img) }} className="aspect-[4/3] w-full object-cover object-top origin-top" />
                  <div className="flex flex-1 flex-col p-5"><p className="eyebrow text-xs">{s.place}</p><h3 className="mt-1.5 text-lg font-extrabold leading-snug">{s.title}</h3><p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p><span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary">{lang === "fr" ? "Lire l'histoire" : "Read story"} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden /></span></div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="testimonials" className="py-16 md:py-24">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <SectionHead title={childLabel("our-work", "testimonials", lang)} lead={a.testimonialsText} />
          <div className="curve-card relative overflow-hidden bg-primary p-8 text-primary-foreground md:p-10">
            <Quote className="h-12 w-12 text-sun" aria-hidden />
            <p className="mt-4 text-2xl font-extrabold">{a.soon}</p>
            <a href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(a.shareCta)}`} className="mt-6 inline-flex rounded-full bg-sun px-6 py-3 font-extrabold text-accent-foreground hover:brightness-105">{a.shareCta}</a>
          </div>
        </div>
      </section>
    </>
  );
}
