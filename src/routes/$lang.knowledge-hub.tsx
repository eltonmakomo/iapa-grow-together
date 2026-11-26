import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Download, FileText, Film, Headphones, Video } from "lucide-react";
import { CONTENT } from "@/lib/iapa-content";
import { PAGES } from "@/lib/iapa-pages";
import { PageHero, Photo, SectionHead, asLang, pageHead } from "@/components/iapa/site";
import { PULSE, PULSE_COVER } from "@/components/iapa/media";

export const Route = createFileRoute("/$lang/knowledge-hub")({
  head: ({ params }) => pageHead(params.lang, "knowledge-hub"),
  component: Hub,
});

const CAT_ICON: Record<string, typeof FileText> = {
  "policy-briefs": FileText,
  "research-papers": BookOpen,
  "case-studies": FileText,
  webinars: Video,
  multimedia: Film,
  podcasts: Headphones,
};

function Hub() {
  const lang = asLang(Route.useParams().lang);
  const h = CONTENT[lang].hub;
  const p = PAGES[lang].hub;
  return (
    <>
      <PageHero eyebrow={h.eyebrow} title={h.title} lead={p.lead} img="morocco" />
      <section id="publications" className="py-16 md:py-24">
        <div className="container-page">
          <SectionHead eyebrow={h.title} title={p.publicationsTitle} lead={h.lead} />
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {h.issues.map((is, i) => (
              <li key={is.key} className="curve-card flex flex-col overflow-hidden bg-card">
                <div className={`h-2 ${i === 0 ? "bg-primary" : "bg-arid"}`} />
                <div className="grid flex-1 gap-6 p-7 sm:grid-cols-[9rem_1fr]">
                <img src={PULSE_COVER[is.key]} alt={`IAPA Pulse — ${is.label}`} loading="lazy" className="w-36 rounded-lg border shadow-soft sm:w-full" />
                <div className="flex flex-col">
                  <p className="eyebrow">{is.label}</p>
                  <h3 className="mt-2 text-2xl font-extrabold">{is.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{is.text}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href={PULSE[is.key]} target="_blank" rel="noopener" className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-primary px-5 py-2.5 font-bold text-primary hover:bg-primary hover:text-primary-foreground">
                      <BookOpen className="h-5 w-5" aria-hidden /> {h.read}<span className="sr-only"> — IAPA Pulse {is.label}</span>
                    </a>
                    <a href={PULSE[is.key]} download className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-bold text-primary-foreground hover:brightness-110">
                      <Download className="h-5 w-5" aria-hidden /> {h.download}<span className="sr-only"> — IAPA Pulse {is.label}</span>
                    </a>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">{h.size}</p>
                </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-page">
          <div className="mb-10 grid gap-4 md:grid-cols-3">
            <Photo k="mali" lang={lang} ratio="aspect-[4/3]" />
            <Photo k="burkinaSession" lang={lang} ratio="aspect-[4/3]" />
            <Photo k="morocco" lang={lang} ratio="aspect-[4/3]" />
          </div>
          <SectionHead title={p.libraryTitle} />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {p.categories.map(([id, title, description]) => {
              const Icon = CAT_ICON[id] ?? FileText;
              return (
                <li key={id} id={id}>
                  <div className="curve-card flex h-full flex-col bg-card p-6">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-primary"><Icon className="h-5 w-5" aria-hidden /></span>
                    <h3 className="mt-4 text-lg font-extrabold">{title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
                    <span className="mt-4 inline-flex items-center text-sm font-semibold text-muted-foreground">{p.soon}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
