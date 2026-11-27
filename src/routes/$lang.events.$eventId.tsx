import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Check, MapPin } from "lucide-react";
import { getEventDetail } from "@/lib/iapa-details";
import { PageHero, Photo, SectionHead, asLang } from "@/components/iapa/site";
import { FormDialog } from "@/components/iapa/forms";
import { bannerSpec } from "@/components/iapa/media";

export const Route = createFileRoute("/$lang/events/$eventId")({
  beforeLoad: ({ params }) => {
    if (!getEventDetail(params.eventId)) throw notFound();
  },
  head: ({ params }) => {
    const lang = asLang(params.lang);
    const ev = getEventDetail(params.eventId);
    if (!ev) return { meta: [{ title: "IAPA" }, { name: "robots", content: "noindex" }] };
    const copy = ev[lang];
    const title = `${copy.title} — IAPA`;
    const hero = bannerSpec(ev.img).src;
    return {
      meta: [
        { title }, { name: "description", content: copy.summary || copy.body[0] || title },
        { property: "og:title", content: title }, { property: "og:description", content: copy.summary || copy.body[0] || title },
        { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" },
        { property: "og:image", content: hero }, { name: "twitter:image", content: hero },
      ],
    };
  },
  component: EventDetailPage,
});

function EventDetailPage() {
  const { lang: rawLang, eventId } = Route.useParams();
  const lang = asLang(rawLang);
  const ev = getEventDetail(eventId)!;
  const copy = ev[lang];
  const ui = lang === "fr"
    ? { back: "Retour aux événements", upcoming: "À venir", past: "Événement passé", highlights: "Points clés", register: "S'inscrire à l'événement", registerDesc: "Complétez ce formulaire pour recevoir l'ordre du jour et les informations de participation." }
    : { back: "Back to Events", upcoming: "Upcoming", past: "Past event", highlights: "Event highlights", register: "Register for this event", registerDesc: "Complete this form to receive the agenda and participation details from the Secretariat." };

  return (
    <>
      <PageHero eyebrow={ev.upcoming ? ui.upcoming : ui.past} title={copy.title} lead={copy.summary || copy.body[0] || ""} img={ev.img} />
      <section className="py-16 md:py-24">
        <div className="container-page">
          <Link to="/$lang/$section/$child" params={{ lang, section: "media", child: "events" }} className="inline-flex items-center gap-2 font-bold text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" aria-hidden /> {ui.back}
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
            <div>
              <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-primary">
                <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-4 w-4" aria-hidden /> {copy.date}</span>
                <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" aria-hidden /> {copy.location}</span>
                {ev.upcoming && <span className="rounded-full bg-secondary px-3 py-1 text-xs uppercase tracking-wide">{ui.upcoming}</span>}
              </div>
              <div className="mt-4"><SectionHead title={copy.title} /></div>
              {copy.body.map((paragraph) => (
                <p key={paragraph} className="mt-5 text-lg leading-relaxed text-muted-foreground">{paragraph}</p>
              ))}
              {ev.upcoming && (
                <div className="mt-8">
                  <FormDialog
                    lang={lang}
                    formType="event"
                    triggerLabel={ui.register}
                    title={`${ui.register} — ${copy.title}`}
                    description={ui.registerDesc}
                    defaultSubject={`${copy.title} (${copy.date})`}
                    metadata={{ eventSlug: ev.slug, eventDate: copy.date }}
                  />
                </div>
              )}
            </div>
            <div className="grid gap-6">
              <Photo k={ev.img} lang={lang} ratio="aspect-[16/10]" />
              <div className="curve-card bg-card p-7">
                <h2 className="text-2xl font-extrabold">{ui.highlights}</h2>
                <ul className="mt-5 grid gap-3.5">
                  {copy.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sun text-accent-foreground"><Check className="h-4 w-4" aria-hidden /></span>
                      <span className="pt-0.5 font-semibold leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}