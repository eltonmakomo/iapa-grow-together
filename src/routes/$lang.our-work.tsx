import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { CONTACT, CONTENT } from "@/lib/iapa-content";
import { childLabel } from "@/lib/iapa-nav";
import { PAGES } from "@/lib/iapa-pages";
import { AfricaImpactMap } from "@/components/iapa/africa-map";
import { EmblemBackdrop, PageHero, ResultsBlock, SectionHead, asLang, pageHead } from "@/components/iapa/site";

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

      <section id="testimonials" className="py-16 md:py-24">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <SectionHead title={childLabel("our-work", "testimonials", lang)} lead={a.testimonialsText} />
          <div className="curve-card relative overflow-hidden bg-primary p-8 text-primary-foreground md:p-10">
            <EmblemBackdrop className="absolute -bottom-10 -right-8 h-60 w-60 text-primary-foreground opacity-[0.1]" />
            <Quote className="relative h-12 w-12 text-sun" aria-hidden />
            <p className="relative mt-4 text-2xl font-extrabold">{a.soon}</p>
            <a href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(a.shareCta)}`} className="relative mt-6 inline-flex rounded-full bg-sun px-6 py-3 font-extrabold text-accent-foreground hover:brightness-105">{a.shareCta}</a>
          </div>
        </div>
      </section>
    </>
  );
}
