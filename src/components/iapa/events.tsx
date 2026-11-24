import { CalendarDays } from "lucide-react";
import type { Lang } from "@/lib/iapa-content";
import { PAGES, type PagesContent } from "@/lib/iapa-pages";
import { SectionHead } from "@/components/iapa/site";

export type MediaEvent = PagesContent["media"]["events"][number];

export function partitionEvents(events: readonly MediaEvent[]) {
  return {
    upcoming: events.filter((event) => event[3] === true),
    past: events.filter((event) => event[3] !== true),
  };
}

function EventList({ events, badge, upcoming = false }: { events: MediaEvent[]; badge: string; upcoming?: boolean }) {
  return (
    <ol className="mt-8 grid gap-4">
      {events.map(([date, title, text]) => (
        <li
          key={title}
          className={`group relative overflow-hidden rounded-2xl border bg-card p-5 shadow-soft transition duration-300 hover:-translate-y-1 sm:grid sm:grid-cols-[11rem_1fr] sm:gap-6 sm:p-6 ${upcoming ? "border-primary/25" : "border-border"}`}
        >
          <span aria-hidden className={`absolute inset-y-0 left-0 w-1 ${upcoming ? "bg-primary" : "bg-border"}`} />
          <p className="flex flex-wrap items-center gap-2 font-extrabold text-primary">
            <CalendarDays className="h-5 w-5 shrink-0" aria-hidden />
            <span>{date}</span>
            {upcoming && <span className="rounded-full bg-secondary px-2.5 py-1 text-xs uppercase tracking-wide text-primary">{badge}</span>}
          </p>
          <div className="mt-3 sm:mt-0">
            <h3 className="text-lg font-extrabold leading-snug">{title}</h3>
            {text && <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function EventsSections({ lang }: { lang: Lang }) {
  const m = PAGES[lang].media;
  const { upcoming, past } = partitionEvents(m.events);

  return (
    <div className="grid gap-14 md:gap-16">
      <section id="upcoming-events" aria-label={m.upcomingEventsTitle}>
        <SectionHead title={m.upcomingEventsTitle} />
        <EventList events={upcoming} badge={m.upcoming} upcoming />
      </section>
      <section id="past-events" aria-label={m.pastEventsTitle}>
        <SectionHead title={m.pastEventsTitle} />
        <EventList events={past} badge={m.upcoming} />
      </section>
    </div>
  );
}
