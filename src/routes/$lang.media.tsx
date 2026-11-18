import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { CONTACT } from "@/lib/iapa-content";
import { PAGES } from "@/lib/iapa-pages";
import { PageHero, SectionHead, asLang, pageHead } from "@/components/iapa/site";
import { IMG } from "@/components/iapa/media";

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
      <PageHero eyebrow={p.nav.media} title={p.nav.media} lead={m.lead} img={IMG.mauritania} />
      <section className="py-16 md:py-24">
        <div className="container-page">
          <SectionHead title={m.pressTitle} />
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {m.press.map(([d, h, x], i) => (
              <li key={h} className="curve-card overflow-hidden bg-card">
                {i === 0 && <img src={IMG.ghana} alt="" loading="lazy" className="aspect-[16/8] w-full object-cover" />}
                <div className="p-7"><p className="eyebrow">{d}</p><h3 className="mt-2 text-2xl font-extrabold">{h}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{x}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="bg-card py-16 md:py-24">
        <div className="container-page">
          <SectionHead title={m.eventsTitle} />
          <ol className="mt-8 grid gap-3">
            {m.events.map(([d, h, x, planned]) => (
              <li key={h} className={`grid gap-2 rounded-2xl p-5 sm:grid-cols-[11rem_1fr] ${planned ? "border-2 border-dashed border-arid bg-cream" : "bg-background"}`}>
                <p className="font-extrabold text-primary">{d}{planned && <span className="ml-2 rounded-full bg-arid/20 px-2 py-0.5 text-xs uppercase text-arid-ink">{m.upcoming}</span>}</p>
                <div><h3 className="font-extrabold">{h}</h3>{x && <p className="mt-1 text-sm text-muted-foreground">{x}</p>}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container-page">
          <SectionHead title={m.docsTitle} />
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {m.docs.map(([h, x]) => (
              <li key={h} className="curve-card flex flex-col bg-card p-7">
                <FileText className="h-8 w-8 text-primary" aria-hidden />
                <h3 className="mt-3 text-xl font-extrabold">{h}</h3>
                <p className="mt-2 flex-1 text-muted-foreground">{x}</p>
                <a href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(h ?? "")}`} className="mt-5 inline-flex w-fit rounded-full border-2 border-primary px-5 py-2.5 font-bold text-primary hover:bg-primary hover:text-primary-foreground">{m.requestDoc}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
