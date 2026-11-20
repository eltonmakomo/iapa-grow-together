import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mail } from "lucide-react";
import { CONTACT, CONTENT } from "@/lib/iapa-content";
import { PAGES } from "@/lib/iapa-pages";
import { Arc, Gallery, Photo, ResultsBlock, SectionHead, asLang } from "@/components/iapa/site";
import { GALLERY_TITLE } from "@/lib/iapa-photos";
import { BANNER, storyImg, storyPosition } from "@/components/iapa/media";

export const Route = createFileRoute("/$lang/")({
  head: ({ params }) => {
    const t = CONTENT[asLang(params.lang)].meta;
    return { meta: [
      { title: t.title }, { name: "description", content: t.description },
      { property: "og:title", content: t.title }, { property: "og:description", content: t.description },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ] };
  },
  component: Home,
});

function Home() {
  const lang = asLang(Route.useParams().lang);
  const t = CONTENT[lang];
  const p = PAGES[lang];
  return (
    <>
      <section className="relative isolate overflow-hidden bg-forest text-forest-foreground">
        <img src={BANNER.home.src} alt={t.hero.photoAlt} fetchPriority="high" style={{ objectPosition: BANNER.home.pos }} className="absolute inset-0 -z-10 h-full w-full object-cover origin-top" />
        <div className="bg-hero-overlay absolute inset-0 -z-10" />
        <div className="container-page flex min-h-[min(78svh,760px)] flex-col justify-center py-20 md:py-28">
          <p className="eyebrow text-sun">{t.hero.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">{t.hero.title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-forest-foreground/90 md:text-xl">{t.hero.lead}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/$lang/join-us" params={{ lang }} hash="membership" className="inline-flex items-center gap-2 rounded-full bg-sun px-7 py-3.5 font-extrabold text-accent-foreground hover:brightness-105">
              {t.hero.join} <ArrowRight className="h-5 w-5" aria-hidden />
            </Link>
            <Link to="/$lang/join-us" params={{ lang }} hash="partnership" className="inline-flex items-center gap-2 rounded-full border-2 border-forest-foreground px-7 py-3.5 font-bold hover:bg-forest-foreground hover:text-forest">
              {t.hero.partner}
            </Link>
          </div>
        </div>
        <Arc className="-mb-px text-background" />
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <SectionHead eyebrow={p.homeIntro.eyebrow} title={p.homeIntro.title} lead={p.homeIntro.text} />
            <Link to="/$lang/who-we-are" params={{ lang }} className="mt-7 inline-flex items-center gap-2 font-bold text-primary underline underline-offset-4">{p.nav["who-we-are"]} <ArrowRight className="h-4 w-4" aria-hidden /></Link>
          </div>
          <div className="grid gap-4">
          <Photo k="kenya" lang={lang} ratio="aspect-[16/9]" />
          <ol className="grid gap-4">
            {t.who.pillars.map(([h, d], i) => (
              <li key={h}><Link to="/$lang/who-we-are" params={{ lang }} className="curve-card group flex gap-4 bg-card p-5">
                <span className="text-4xl font-extrabold text-primary">{i + 1}</span>
                <div className="flex-1"><h3 className="font-extrabold">{h}</h3><p className="mt-1 text-sm text-muted-foreground">{d}</p></div>
                <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-primary transition group-hover:translate-x-1" aria-hidden />
              </Link></li>
            ))}
          </ol>
          </div>
        </div>
      </section>

      <section className="bg-card py-16 md:py-24">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="lg:sticky lg:top-32 lg:self-start"><SectionHead title={p.initiativesTitle} /></div>
          <ul className="grid gap-6">
            {p.initiatives.map(([slug, h, d], i) => (
              <li key={h} className="sticky" style={{ top: `${6 + i * 1.5}rem` }}>
                <Link to={`/$lang/${slug}` as "/$lang/training"} params={{ lang }} className="curve-card group relative block min-h-56 overflow-hidden border bg-background p-7 md:p-10 transition hover:-translate-y-1">
                  <span aria-hidden className={`absolute -right-6 -top-6 h-24 w-24 rounded-full ${["bg-sun/40", "bg-arid/30", "bg-savanna/40"][i]}`} />
                  <h3 className="relative text-xl font-extrabold">{h}</h3>
                  <p className="relative mt-2 leading-relaxed text-muted-foreground">{d}</p>
                  <span className="relative mt-5 inline-flex items-center gap-1.5 font-bold text-primary">{p.readMore} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden /></span>
                </Link>
              </li>
            ))}
          </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page">
          <Gallery lang={lang} title={GALLERY_TITLE[lang]} keys={["ghana", "robusta", "mauritania", "civ", "spirulina", "mali"]} />
        </div>
      </section>

      <section className="bg-card py-16 md:py-24">
        <div className="container-page">
          <SectionHead title={p.numbersTitle} lead={t.work.resultsNote} />
          <div className="mt-8"><ResultsBlock lang={lang} /></div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHead title={p.highlightsTitle} lead={t.work.storiesNote} />
            <Link to="/$lang/our-work" params={{ lang }} hash="stories" className="font-bold text-primary underline underline-offset-4">{p.readMore}</Link>
          </div>
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {t.work.stories.slice(0, 2).map((s) => (
              <li key={s.title}>
                <Link to="/$lang/our-work" params={{ lang }} hash={`story-${s.img}`} className="curve-card group grid h-full overflow-hidden bg-card sm:grid-cols-[1fr_1.2fr]">
                <img src={storyImg(s.img)} alt="" loading="lazy" style={{ objectPosition: storyPosition(s.img) }} className="h-full min-h-48 w-full object-cover object-top origin-top" />
                <div className="p-6"><p className="eyebrow text-xs">{s.place}</p><h3 className="mt-1.5 text-lg font-extrabold">{s.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p><span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary">{p.readMore} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden /></span></div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page">
          <div className="curve-card flex flex-col gap-6 bg-primary p-8 text-primary-foreground md:flex-row md:items-center md:justify-between md:p-12">
            <div><h2 className="text-3xl font-extrabold">{p.subscribe.title}</h2><p className="mt-2 opacity-90">{p.subscribe.text}</p></div>
            <a href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(p.subscribe.subject)}`} className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-sun px-7 py-3.5 font-extrabold text-accent-foreground hover:brightness-105">
              <Mail className="h-5 w-5" aria-hidden /> {p.subscribe.cta}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
