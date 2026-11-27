import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";
import { CONTENT } from "@/lib/iapa-content";
import { childLabel } from "@/lib/iapa-nav";
import { PAGES } from "@/lib/iapa-pages";
import { childContent } from "@/lib/iapa-child-content";
import { STORIES, STORY_UI } from "@/lib/iapa-stories";
import { AfricaImpactMap } from "@/components/iapa/africa-map";
import { FormDialog } from "@/components/iapa/forms";
import { IMG, PHOTO_POSITION } from "@/components/iapa/media";
import { PageHero, ResultsBlock, SectionHead, asLang, pageHead } from "@/components/iapa/site";

export const Route = createFileRoute("/$lang/our-work")({
  head: ({ params }) => pageHead(params.lang, "our-work"),
  component: OurWork,
});

function OurWork() {
  const lang = asLang(Route.useParams().lang);
  const w = CONTENT[lang].work;
  const p = PAGES[lang].work;
  const a = PAGES[lang].arch;
  const sui = STORY_UI[lang];
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
          <div className="mt-8"><ResultsBlock lang={lang} /></div>
        </div>
      </section>

      <section id="stories" className="py-16 md:py-24">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHead eyebrow={sui.eyebrow} title={childLabel("our-work", "stories", lang)} lead={sui.sectionLead} />
            <Link to="/$lang/$section/$child" params={{ lang, section: "our-work", child: "stories" }} className="group inline-flex items-center gap-1.5 font-bold text-primary hover:underline">
              {sui.allStories} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
            </Link>
          </div>
          <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {STORIES.map((story) => (
              <li key={story.id}>
                <Link to="/$lang/stories/$storyId" params={{ lang, storyId: story.id }} className="curve-card group flex h-full flex-col overflow-hidden bg-card transition hover:-translate-y-1">
                  <img src={IMG[story.img]} alt={story[lang].title} loading="lazy" style={{ objectPosition: PHOTO_POSITION[story.img] }} className="aspect-[16/10] w-full object-cover" />
                  <div className="flex flex-1 flex-col p-6">
                    <p className="eyebrow text-xs">{story[lang].place}</p>
                    <h3 className="mt-2 text-xl font-extrabold leading-snug group-hover:text-primary">{story[lang].title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{story[lang].lead}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary">{sui.readStory} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden /></span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
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
