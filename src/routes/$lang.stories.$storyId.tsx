import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarDays, MapPin, Users, Handshake, BookOpen } from "lucide-react";
import { getStory, STORY_UI } from "@/lib/iapa-stories";
import { PageHero, Photo, SectionHead, asLang } from "@/components/iapa/site";
import { bannerSpec } from "@/components/iapa/media";

export const Route = createFileRoute("/$lang/stories/$storyId")({
  beforeLoad: ({ params }) => {
    if (!getStory(params.storyId)) throw notFound();
  },
  head: ({ params }) => {
    const lang = asLang(params.lang);
    const story = getStory(params.storyId);
    if (!story) return { meta: [{ title: "IAPA" }, { name: "robots", content: "noindex" }] };
    const copy = story[lang];
    const title = `${copy.title} (${copy.place}) — IAPA`;
    const hero = bannerSpec(story.img).src;
    return {
      meta: [
        { title }, { name: "description", content: copy.lead },
        { property: "og:title", content: title }, { property: "og:description", content: copy.lead },
        { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" },
        { property: "og:image", content: hero }, { name: "twitter:image", content: hero },
      ],
    };
  },
  component: StoryDetailPage,
});

function StoryDetailPage() {
  const { lang: rawLang, storyId } = Route.useParams();
  const lang = asLang(rawLang);
  const story = getStory(storyId)!;
  const copy = story[lang];
  const ui = STORY_UI[lang];

  return (
    <>
      <PageHero eyebrow={copy.place} title={copy.title} lead={copy.lead} img={story.img} />
      <section className="py-16 md:py-24">
        <div className="container-page">
          <Link to="/$lang/$section/$child" params={{ lang, section: "our-work", child: "stories" }} className="inline-flex items-center gap-2 font-bold text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" aria-hidden /> {ui.back}
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-start">
            <div>
              <SectionHead eyebrow={copy.approach} title={copy.title} />
              {copy.body.map((paragraph) => (
                <p key={paragraph} className="mt-5 text-lg leading-relaxed text-muted-foreground">{paragraph}</p>
              ))}
              {story.gallery.length > 0 && (
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {story.gallery.map((imgKey) => (
                    <Photo key={imgKey} k={imgKey} lang={lang} ratio="aspect-[16/10]" />
                  ))}
                </div>
              )}
            </div>
            <div className="grid gap-6">
              <Photo k={story.img} lang={lang} ratio="aspect-[16/10]" />
              <dl className="curve-card grid gap-4 bg-card p-6 text-sm">
                <div className="flex gap-3"><CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden /><div><dt className="font-bold text-primary">{ui.date}</dt><dd className="text-muted-foreground">{copy.date}</dd></div></div>
                <div className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden /><div><dt className="font-bold text-primary">{ui.location}</dt><dd className="text-muted-foreground">{copy.location}</dd></div></div>
                <div className="flex gap-3"><Users className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden /><div><dt className="font-bold text-primary">{ui.team}</dt><dd className="text-muted-foreground">{copy.team}</dd></div></div>
                <div className="flex gap-3"><Handshake className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden /><div><dt className="font-bold text-primary">{ui.partners}</dt><dd className="text-muted-foreground">{copy.partners}</dd></div></div>
              </dl>
              <div className="curve-card bg-primary p-6 text-primary-foreground">
                <h2 className="text-lg font-extrabold">{ui.highlights}</h2>
                <ul className="mt-4 grid gap-3">
                  {copy.highlights.map(([stat, label]) => (
                    <li key={label} className="flex items-baseline gap-3 border-b border-primary-foreground/15 pb-2.5 last:border-0 last:pb-0">
                      <span className="shrink-0 text-xl font-extrabold text-sun">{stat}</span>
                      <span className="text-sm text-primary-foreground/90">{label}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="curve-card border bg-card p-6">
                <p className="flex items-center gap-2 font-extrabold text-primary"><BookOpen className="h-4 w-4" aria-hidden /> {ui.sourceTitle}</p>
                <p className="mt-2 text-sm text-muted-foreground">{ui.sourceNote}</p>
                <Link to="/$lang/$section/$child" params={{ lang, section: "media", child: "newsletters" }} className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline">
                  {ui.download} <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}