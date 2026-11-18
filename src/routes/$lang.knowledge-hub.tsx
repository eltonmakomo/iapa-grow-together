import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { CONTENT } from "@/lib/iapa-content";
import { PAGES } from "@/lib/iapa-pages";
import { PageHero, SectionHead, asLang, pageHead } from "@/components/iapa/site";
import { IMG, PULSE } from "@/components/iapa/media";

export const Route = createFileRoute("/$lang/knowledge-hub")({
  head: ({ params }) => pageHead(params.lang, "knowledge-hub"),
  component: Hub,
});

function Hub() {
  const lang = asLang(Route.useParams().lang);
  const h = CONTENT[lang].hub;
  const p = PAGES[lang].hub;
  return (
    <>
      <PageHero eyebrow={h.eyebrow} title={h.title} lead={p.lead} img={IMG.morocco} />
      <section className="py-16 md:py-24">
        <div className="container-page">
          <SectionHead title={h.title} lead={h.lead} />
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {h.issues.map((is, i) => (
              <li key={is.key} className="curve-card flex flex-col overflow-hidden bg-card">
                <div className={`h-2 ${i === 0 ? "bg-primary" : "bg-arid"}`} />
                <div className="flex flex-1 flex-col p-7">
                  <p className="eyebrow">{is.label}</p>
                  <h3 className="mt-2 text-2xl font-extrabold">{is.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{is.text}</p>
                  <a href={PULSE[is.key]} download target="_blank" rel="noopener" className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground hover:brightness-110">
                    <Download className="h-5 w-5" aria-hidden /> {h.download}<span className="sr-only"> — IAPA Pulse {is.label}</span>
                  </a>
                  <p className="mt-2 text-xs text-muted-foreground">{h.size}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-page">
          <SectionHead title={p.libraryTitle} />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {p.library.map((x) => (
              <li key={x} className="rounded-2xl border-2 border-dashed border-savanna bg-card/60 p-6">
                <h3 className="text-lg font-extrabold">{x}</h3>
                <p className="mt-2 text-sm font-semibold text-arid-ink">{p.soon}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
