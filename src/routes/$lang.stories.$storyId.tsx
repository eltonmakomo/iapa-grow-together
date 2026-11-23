import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Building2, Calendar, Download, GraduationCap, MapPin, Users } from "lucide-react";
import { CONTENT } from "@/lib/iapa-content";
import { CAPTIONS } from "@/lib/iapa-photos";
import { getStory, STORIES, STORY_UI } from "@/lib/iapa-stories";
import { asLang, Photo, SectionHead } from "@/components/iapa/site";
import { PULSE, PULSE_COVER, storyImg, storyPosition } from "@/components/iapa/media";

export const Route = createFileRoute("/$lang/stories/$storyId")({
  beforeLoad: ({ params }) => {
    if (!getStory(params.storyId)) throw notFound();
  },
  head: ({ params }) => {
    const lang = asLang(params.lang);
    const story = getStory(params.storyId);
    if (!story) return { meta: [{ title: "IAPA" }] };
    const d = story[lang];
    const title = `${d.title} — IAPA`;
    return {
      meta: [
        { title },
        { name: "description", content: d.lead },
        { property: "og:title", content: title },
        { property: "og:description", content: d.lead },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: StoryPage,
});

function StoryPage() {
  const { lang: rawLang, storyId } = Route.useParams();
  const lang = asLang(rawLang);
  const story = getStory(storyId)!;
  const d = story[lang];
  const ui = STORY_UI[lang];
  const hub = CONTENT[lang].hub;
  const issue = hub.issues.find((i) => i.key === story.issue) ?? hub.issues[0]!;
  const others = STORIES.filter((s) => s.id !== story.id);
  const caption = CAPTIONS[story.img]?.[lang];

  const facts = [
    [Calendar, ui.date, d.date],
    [MapPin, ui.location, d.location],
    [GraduationCap, ui.approach, d.approach],
    [Users, ui.team, d.team],
    [Building2, ui.partners, d.partners],
  ] as const;

  return (
    <>
      <section className="bg-secondary/70 pb-12 pt-10 md:pb-16 md:pt-14">
        <div className="container-page">
          <Link to="/$lang/$section/$child" params={{ lang, section: "our-work", child: "stories" }} className="inline-flex items-center gap-2 font-bold text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" aria-hidden />{ui.back}
          </Link>
          <p className="eyebrow mt-6">{d.place}</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">{d.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">{d.lead}</p>
          <figure className="mt-8 overflow-hidden rounded-[2rem] bg-card shadow-lift">
            <img src={storyImg(story.img)} alt={caption ?? d.title} fetchPriority="high" style={{ objectPosition: storyPosition(story.img) }} className="aspect-[16/9] max-h-[540px] w-full object-cover" />
            {caption && <figcaption className="px-6 py-3.5 text-sm text-muted-foreground">{caption}</figcaption>}
          </figure>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <div>
            <div className="grid gap-4 sm:grid-cols-3">
              {d.highlights.map(([value, label], i) => (
                <div key={label} className="curve-card border bg-card p-5">
                  <p className={`text-2xl font-extrabold ${i === 0 ? "text-primary" : i === 1 ? "text-arid-ink" : "text-foreground"}`}>{value}</p>
                  <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 space-y-5 text-lg leading-relaxed text-muted-foreground">
              {d.body.map((para) => <p key={para}>{para}</p>)}
            </div>

            {story.gallery.length > 0 && (
              <div className={`mt-10 grid gap-5 ${story.gallery.length > 1 ? "sm:grid-cols-2" : ""}`}>
                {story.gallery.map((k) => <Photo key={k} k={k} lang={lang} />)}
              </div>
            )}
          </div>

          <aside className="grid gap-6 lg:sticky lg:top-28">
            <div className="curve-card border bg-card p-7">
              <dl className="divide-y divide-border/70">
                {facts.map(([Icon, label, value]) => (
                  <div key={label} className="flex gap-3 py-3.5 first:pt-0 last:pb-0">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</dt>
                      <dd className="mt-0.5 text-sm font-semibold leading-snug">{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            <div className="curve-card overflow-hidden bg-primary p-7 text-primary-foreground">
              <div className="grid grid-cols-[5rem_1fr] items-start gap-4">
                <img src={PULSE_COVER[issue.key]!} alt={`IAPA Pulse — ${issue.label}`} loading="lazy" className="w-20 rounded-lg border border-primary-foreground/20" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-sun">{ui.sourceTitle}</p>
                  <p className="mt-1 font-extrabold">{issue.label}</p>
                  <p className="mt-2 text-sm opacity-90">{ui.sourceNote}</p>
                </div>
              </div>
              <a href={PULSE[issue.key]!} download target="_blank" rel="noopener" className="mt-5 inline-flex items-center gap-2 rounded-full bg-sun px-5 py-2.5 text-sm font-extrabold text-accent-foreground hover:brightness-105">
                <Download className="h-4 w-4" aria-hidden />{ui.download}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-secondary py-14 md:py-20">
        <div className="container-page">
          <SectionHead title={ui.moreStories} />
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((item) => {
              const s = item[lang];
              return (
                <li key={item.id}>
                  <Link to="/$lang/stories/$storyId" params={{ lang, storyId: item.id }} className="curve-card group flex h-full flex-col overflow-hidden bg-card">
                    <img src={storyImg(item.img)} alt="" loading="lazy" style={{ objectPosition: storyPosition(item.img) }} className="aspect-[4/3] w-full object-cover object-top" />
                    <div className="flex flex-1 flex-col p-5">
                      <p className="eyebrow text-xs">{s.place}</p>
                      <h3 className="mt-1.5 text-lg font-extrabold leading-snug">{s.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.lead}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary">{ui.readStory} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden /></span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}