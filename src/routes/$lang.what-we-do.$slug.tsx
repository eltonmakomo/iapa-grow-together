import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import { getWhatWeDo, WHAT_WE_DO_DETAILS } from "@/lib/iapa-details";
import { PageHero, Photo, SectionHead, asLang } from "@/components/iapa/site";
import { FormDialog } from "@/components/iapa/forms";
import { bannerSpec } from "@/components/iapa/media";

export const Route = createFileRoute("/$lang/what-we-do/$slug")({
  beforeLoad: ({ params }) => {
    if (!getWhatWeDo(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const lang = asLang(params.lang);
    const entry = getWhatWeDo(params.slug);
    if (!entry) return { meta: [{ title: "IAPA" }, { name: "robots", content: "noindex" }] };
    const copy = entry[lang];
    const title = `${copy.title} — IAPA`;
    const hero = bannerSpec(entry.img).src;
    return {
      meta: [
        { title }, { name: "description", content: copy.lead },
        { property: "og:title", content: title }, { property: "og:description", content: copy.lead },
        { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" },
        { property: "og:image", content: hero }, { name: "twitter:image", content: hero },
      ],
    };
  },
  component: WhatWeDoDetail,
});

function WhatWeDoDetail() {
  const { lang: rawLang, slug } = Route.useParams();
  const lang = asLang(rawLang);
  const entry = getWhatWeDo(slug)!;
  const copy = entry[lang];
  const isPartner = entry.audience !== "member";
  const ui = lang === "fr"
    ? { back: "Retour à l'accueil", highlights: "Points clés", cta: isPartner ? "Discuter d'un partenariat" : "Demander l'adhésion", more: "Autres services" }
    : { back: "Back to Home", highlights: "Key highlights", cta: isPartner ? "Discuss a partnership" : "Enquire about membership", more: "More of what we do" };
  const others = WHAT_WE_DO_DETAILS.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow={copy.eyebrow} title={copy.title} lead={copy.lead} img={entry.img} />
      <section className="py-16 md:py-24">
        <div className="container-page">
          <Link to="/$lang" params={{ lang }} hash="key-initiatives" className="inline-flex items-center gap-2 font-bold text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" aria-hidden /> {ui.back}
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
            <div>
              <SectionHead eyebrow={copy.eyebrow} title={copy.title} />
              {copy.body.map((paragraph) => (
                <p key={paragraph} className="mt-5 text-lg leading-relaxed text-muted-foreground">{paragraph}</p>
              ))}
              <div className="mt-8">
                <FormDialog
                  lang={lang}
                  formType={isPartner ? "partnership" : "membership"}
                  triggerLabel={ui.cta}
                  title={copy.title}
                  description={copy.lead}
                  defaultSubject={copy.title}
                  metadata={{ service: slug }}
                />
              </div>
            </div>
            <div className="grid gap-6">
              <Photo k={entry.img} lang={lang} ratio="aspect-[16/10]" />
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
          <div className="mt-16 border-t pt-12">
            <h2 className="text-2xl font-extrabold">{ui.more}</h2>
            <ul className="mt-6 grid gap-4 md:grid-cols-3">
              {others.map((item) => (
                <li key={item.slug}>
                  <Link to="/$lang/what-we-do/$slug" params={{ lang, slug: item.slug }} className="curve-card block h-full bg-card p-6 transition hover:-translate-y-0.5">
                    <p className="eyebrow text-xs">{item[lang].eyebrow}</p>
                    <h3 className="mt-2 text-lg font-extrabold">{item[lang].title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item[lang].lead}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}