import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { CONTENT } from "@/lib/iapa-content";
import { childLabel } from "@/lib/iapa-nav";
import { PAGES } from "@/lib/iapa-pages";
import { childContent } from "@/lib/iapa-child-content";
import { AfricaImpactMap } from "@/components/iapa/africa-map";
import { FormDialog } from "@/components/iapa/forms";
import { PageHero, ResultsSummary, SectionHead, asLang, pageHead } from "@/components/iapa/site";

export const Route = createFileRoute("/$lang/our-work")({
  head: ({ params }) => pageHead(params.lang, "our-work"),
  component: OurWork,
});

function OurWork() {
  const lang = asLang(Route.useParams().lang);
  const w = CONTENT[lang].work;
  const p = PAGES[lang].work;
  const a = PAGES[lang].arch;
  const testimonials = childContent("our-work", "testimonials", lang).samples ?? [];
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
          <div className="mt-8"><ResultsSummary lang={lang} /></div>
        </div>
      </section>

      <section id="testimonials" className="bg-card py-16 md:py-24">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHead title={childLabel("our-work", "testimonials", lang)} lead={childContent("our-work", "testimonials", lang).lead} />
            <FormDialog
              lang={lang}
              formType="testimonial"
              triggerLabel={a.shareCta}
              title={a.shareCta}
              description={a.testimonialsText}
              triggerClassName="inline-flex rounded-full bg-primary px-6 py-3 font-extrabold text-primary-foreground hover:brightness-110"
            />
          </div>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <li key={item.title} className="curve-card flex h-full flex-col bg-background p-7">
                <Quote className="h-8 w-8 text-sun" aria-hidden />
                <blockquote className="mt-4 flex-1 text-lg font-bold leading-snug">{item.title}</blockquote>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                <div className="mt-5 border-t pt-4">
                  {item.byline && <p className="font-extrabold text-primary">{item.byline}</p>}
                  <p className="text-xs font-semibold text-muted-foreground">{item.meta}{item.date ? ` · ${item.date}` : ""}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
