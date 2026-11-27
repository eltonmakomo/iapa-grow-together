import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Check, MapPin } from "lucide-react";
import { getPressDetail } from "@/lib/iapa-details";
import { PageHero, Photo, SectionHead, asLang } from "@/components/iapa/site";
import { bannerSpec } from "@/components/iapa/media";

export const Route = createFileRoute("/$lang/press/$pressId")({
  beforeLoad: ({ params }) => {
    if (!getPressDetail(params.pressId)) throw notFound();
  },
  head: ({ params }) => {
    const lang = asLang(params.lang);
    const pr = getPressDetail(params.pressId);
    if (!pr) return { meta: [{ title: "IAPA" }, { name: "robots", content: "noindex" }] };
    const copy = pr[lang];
    const title = `${copy.title} — IAPA`;
    const hero = bannerSpec(pr.img).src;
    return {
      meta: [
        { title }, { name: "description", content: copy.summary },
        { property: "og:title", content: title }, { property: "og:description", content: copy.summary },
        { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" },
        { property: "og:image", content: hero }, { name: "twitter:image", content: hero },
      ],
    };
  },
  component: PressDetailPage,
});

function PressDetailPage() {
  const { lang: rawLang, pressId } = Route.useParams();
  const lang = asLang(rawLang);
  const pr = getPressDetail(pressId)!;
  const copy = pr[lang];
  const ui = lang === "fr"
    ? { eyebrow: "Communiqué de presse", back: "Retour aux communiqués", highlights: "À retenir" }
    : { eyebrow: "Press release", back: "Back to Press Releases", highlights: "Key facts" };

  return (
    <>
      <PageHero eyebrow={ui.eyebrow} title={copy.title} lead={copy.summary} img={pr.img} />
      <section className="py-16 md:py-24">
        <div className="container-page">
          <Link to="/$lang/$section/$child" params={{ lang, section: "media", child: "press-releases" }} className="inline-flex items-center gap-2 font-bold text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" aria-hidden /> {ui.back}
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
            <div>
              <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-primary">
                <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-4 w-4" aria-hidden /> {copy.date}</span>
                <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" aria-hidden /> {copy.location}</span>
              </div>
              <div className="mt-4"><SectionHead title={copy.title} /></div>
              {copy.body.map((paragraph) => (
                <p key={paragraph} className="mt-5 text-lg leading-relaxed text-muted-foreground">{paragraph}</p>
              ))}
            </div>
            <div className="grid gap-6">
              <Photo k={pr.img} lang={lang} ratio="aspect-[16/10]" />
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