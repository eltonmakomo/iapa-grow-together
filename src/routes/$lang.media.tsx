import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ACTION_UI } from "@/lib/iapa-content";
import { PAGES } from "@/lib/iapa-pages";
import { childLabel } from "@/lib/iapa-nav";
import { PRESS_DETAILS } from "@/lib/iapa-details";
import { ActionGallery } from "@/components/iapa/action-gallery";
import { EventsSections } from "@/components/iapa/events";
import { PageHero, SectionHead, asLang, pageHead } from "@/components/iapa/site";
import { IMG, PHOTO_POSITION } from "@/components/iapa/media";

export const Route = createFileRoute("/$lang/media")({
  head: ({ params }) => pageHead(params.lang, "media"),
  component: Media,
});

function Media() {
  const lang = asLang(Route.useParams().lang);
  const p = PAGES[lang];
  const m = p.media;
  return (
    <>
      <PageHero eyebrow={p.nav.media} title={p.nav.media} lead={m.lead} img="mauritania" />
      <section id="events" className="bg-card py-16 md:py-24">
        <div className="container-page">
          <EventsSections lang={lang} />
        </div>
      </section>
      <ActionGallery lang={lang} title={ACTION_UI[lang].galleryTitle} id="photo-gallery" headingId="photo-gallery-title" />
      <section id="press-releases" className="bg-card py-16 md:py-24">
        <div className="container-page">
          <SectionHead title={childLabel("media", "press-releases", lang)} />
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {PRESS_DETAILS.map((pr) => {
              const copy = pr[lang];
              return (
                <li key={pr.slug}>
                  <Link to="/$lang/press/$pressId" params={{ lang, pressId: pr.slug }} className="curve-card group block overflow-hidden bg-background transition hover:-translate-y-1">
                    <img src={IMG[pr.img]} alt={copy.title} loading="lazy" style={{ objectPosition: PHOTO_POSITION[pr.img] }} className="aspect-[16/8] w-full object-cover object-top origin-top" />
                    <div className="p-7">
                      <p className="eyebrow">{copy.date}</p>
                      <h3 className="mt-2 text-2xl font-extrabold group-hover:text-primary">{copy.title}</h3>
                      <p className="mt-3 leading-relaxed text-muted-foreground">{copy.summary}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary">{p.readMore} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden /></span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
