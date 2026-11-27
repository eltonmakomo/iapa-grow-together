import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays } from "lucide-react";
import type { Lang } from "@/lib/iapa-content";
import { PAGES, type PagesContent } from "@/lib/iapa-pages";
import { EVENT_DETAILS } from "@/lib/iapa-details";
import { FormDialog } from "@/components/iapa/forms";
import { SectionHead } from "@/components/iapa/site";

export type MediaEvent = PagesContent["media"]["events"][number];

export function partitionEvents(events: readonly MediaEvent[]) {
  return {
    upcoming: events.filter((event) => event[3] === true),
    past: events.filter((event) => event[3] !== true),
  };
}

function EventList({
  lang,
  events,
  badge,
  upcoming = false,
}: {
  lang: Lang;
  events: readonly (typeof EVENT_DETAILS)[number][];
  badge: string;
  upcoming?: boolean;
}) {
  const ui = lang === "fr"
    ? { view: "Voir les détails", register: "S'inscrire", registerDesc: "Complétez ce formulaire pour recevoir l'ordre du jour et les informations de participation." }
    : { view: "View details", register: "Register", registerDesc: "Complete this form to receive the agenda and participation details from the Secretariat." };
  return (
    <ol className="mt-8 grid gap-4">
      {events.map((ev) => {
        const copy = ev[lang];
        return (
          <li
            key={ev.slug}
            className={`group relative overflow-hidden rounded-2xl border bg-card p-5 shadow-soft transition duration-300 hover:-translate-y-1 sm:grid sm:grid-cols-[11rem_1fr] sm:gap-6 sm:p-6 ${upcoming ? "border-primary/25" : "border-border"}`}
          >
            <span aria-hidden className={`absolute inset-y-0 left-0 w-1 ${upcoming ? "bg-primary" : "bg-border"}`} />
            <p className="flex flex-wrap items-center gap-2 font-extrabold text-primary">
              <CalendarDays className="h-5 w-5 shrink-0" aria-hidden />
              <span>{copy.date}</span>
              {upcoming && <span className="rounded-full bg-secondary px-2.5 py-1 text-xs uppercase tracking-wide text-primary">{badge}</span>}
            </p>
            <div className="mt-3 flex flex-col justify-between gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <Link to="/$lang/events/$eventId" params={{ lang, eventId: ev.slug }} className="block flex-1">
                <h3 className="text-lg font-extrabold leading-snug group-hover:text-primary">{copy.title}</h3>
                {copy.summary && <p className="mt-1.5 leading-relaxed text-muted-foreground">{copy.summary}</p>}
                <span className="mt-2.5 inline-flex items-center gap-1 text-sm font-bold text-primary">
                  {ui.view} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
              {upcoming && (
                <div className="shrink-0">
                  <FormDialog
                    lang={lang}
                    formType="event"
                    triggerLabel={ui.register}
                    title={`${ui.register} — ${copy.title}`}
                    description={ui.registerDesc}
                    defaultSubject={`${copy.title} (${copy.date})`}
                    metadata={{ eventSlug: ev.slug, eventDate: copy.date }}
                    triggerClassName="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-extrabold text-primary-foreground transition hover:brightness-110"
                  />
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export function EventsSections({ lang }: { lang: Lang }) {
  const m = PAGES[lang].media;
  const upcoming = EVENT_DETAILS.filter((ev) => ev.upcoming === true);
  const past = EVENT_DETAILS.filter((ev) => ev.upcoming !== true);

  return (
    <div className="grid gap-14 md:gap-16">
      <section id="upcoming-events" aria-label={m.upcomingEventsTitle}>
        <SectionHead title={m.upcomingEventsTitle} />
        <EventList lang={lang} events={upcoming} badge={m.upcoming} upcoming />
      </section>
      <section id="past-events" aria-label={m.pastEventsTitle}>
        <SectionHead title={m.pastEventsTitle} />
        <EventList lang={lang} events={past} badge={m.upcoming} />
      </section>
    </div>
  );
}
