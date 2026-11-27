import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Download, FileText } from "lucide-react";
import { CONTENT } from "@/lib/iapa-content";
import { PAGES } from "@/lib/iapa-pages";
import { childLabel } from "@/lib/iapa-nav";
import { DOC_FILES } from "@/components/iapa/media";
import { PulseIssuesGrid } from "@/components/iapa/pulse-issues";
import { PageHero, SectionHead, asLang, pageHead } from "@/components/iapa/site";

export const Route = createFileRoute("/$lang/knowledge-hub")({
  head: ({ params }) => pageHead(params.lang, "knowledge-hub"),
  component: Hub,
});

function Hub() {
  const lang = asLang(Route.useParams().lang);
  const h = CONTENT[lang].hub;
  const p = PAGES[lang].hub;
  const m = PAGES[lang].media;
  return (
    <>
      <PageHero eyebrow={h.eyebrow} title={h.title} lead={p.lead} img="morocco" />
      <section id="newsletters" className="py-16 md:py-24">
        <div className="container-page">
          <SectionHead eyebrow={h.title} title={childLabel("knowledge-hub", "newsletters", lang)} lead={h.lead} />
          <PulseIssuesGrid lang={lang} />
        </div>
      </section>
      <section id="key-documents" className="bg-card py-16 md:py-24">
        <div className="container-page">
          <SectionHead title={childLabel("knowledge-hub", "key-documents", lang)} />
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {m.docs.map(([title, text], i) => {
              const file = DOC_FILES[i];
              return <li key={title} className="curve-card flex flex-col bg-background p-7">
                <FileText className="h-8 w-8 text-primary" aria-hidden />
                <h3 className="mt-3 text-xl font-extrabold">{title}</h3>
                <p className="mt-2 flex-1 text-muted-foreground">{text}</p>
                {file && <div className="mt-5 flex flex-wrap gap-3">
                  <a href={file.url} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-primary px-5 py-2.5 font-bold text-primary">{m.viewDoc}<ArrowUpRight className="h-4 w-4" aria-hidden /></a>
                  <a href={file.url} download={file.name} className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-primary px-5 py-2.5 font-bold text-primary">{m.downloadDoc}<Download className="h-4 w-4" aria-hidden /></a>
                </div>}
              </li>;
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
