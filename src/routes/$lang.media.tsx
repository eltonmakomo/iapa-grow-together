import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Download, FileText } from "lucide-react";
import { PAGES } from "@/lib/iapa-pages";
import { childLabel } from "@/lib/iapa-nav";
import { EventsSections } from "@/components/iapa/events";
import { Gallery, PageHero, SectionHead, asLang, pageHead } from "@/components/iapa/site";
import { MEDIA_GALLERY_TITLE } from "@/lib/iapa-photos";
import { IMG, PHOTO_POSITION } from "@/components/iapa/media";
import { DOC_FILES } from "@/components/iapa/media";

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
      <section className="py-16 md:py-24">
        <div className="container-page">
          <Gallery lang={lang} title={MEDIA_GALLERY_TITLE[lang]} keys={["kenya", "evaluation", "signing", "ghana", "spirulina", "robusta"]} />
        </div>
      </section>

      <section id="key-documents" className="py-16 md:py-24">
        <div className="container-page">
          <SectionHead title={childLabel("media", "key-documents", lang)} />
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {m.docs.map(([h, x], i) => {
              const file = DOC_FILES[i];
              return <li key={h} className="curve-card flex flex-col bg-card p-7">
                <FileText className="h-8 w-8 text-primary" aria-hidden />
                <h3 className="mt-3 text-xl font-extrabold">{h}</h3>
                <p className="mt-2 flex-1 text-muted-foreground">{x}</p>
                {file && <div className="mt-5 flex flex-wrap gap-3">
                  <a href={file.url} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-primary px-5 py-2.5 font-bold text-primary">{m.viewDoc}<ArrowUpRight className="h-4 w-4" aria-hidden /></a>
                  <a href={file.url} download={file.name} className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-primary px-5 py-2.5 font-bold text-primary">{m.downloadDoc}<Download className="h-4 w-4" aria-hidden /></a>
                </div>}
              </li>;
            })}
          </ul>
        </div>
      </section>
      <section id="press-releases" className="bg-card py-16 md:py-24">
        <div className="container-page">
          <SectionHead title={childLabel("media", "press-releases", lang)} />
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {m.press.map(([d, h, x], i) => (
              <li key={h} className="curve-card overflow-hidden bg-background">
                <img src={i === 0 ? IMG.ghana : IMG.signing} alt="" loading="lazy" style={{ objectPosition: PHOTO_POSITION[i === 0 ? "ghana" : "signing"] }} className="aspect-[16/8] w-full object-cover object-top origin-top" />
                <div className="p-7"><p className="eyebrow">{d}</p><h3 className="mt-2 text-2xl font-extrabold">{h}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{x}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
