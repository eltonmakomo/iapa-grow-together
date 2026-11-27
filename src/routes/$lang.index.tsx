import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Compass, BookOpen, GraduationCap, CalendarDays, BadgeCheck, Handshake, Megaphone } from "lucide-react";
import { ACTION_UI, CONTENT } from "@/lib/iapa-content";
import { PAGES } from "@/lib/iapa-pages";
import { WHAT_WE_DO_DETAILS } from "@/lib/iapa-details";
import { NewsletterInlineForm } from "@/components/iapa/forms";
import { ActionGallery } from "@/components/iapa/action-gallery";
import { EmblemBackdrop, Photo, ResultsSummary, SectionHead, asLang } from "@/components/iapa/site";
import { PageBreadcrumbs } from "@/components/iapa/breadcrumbs";
import { bannerSpec } from "@/components/iapa/media";

const offerIcons = {
  "strategic-advisory": Compass,
  "curriculum-adaptation": BookOpen,
  "training-at-scale": GraduationCap,
  "events-conferences": CalendarDays,
  "certification-capacity": BadgeCheck,
  "coaching-mentorship": Handshake,
  "visibility-opportunities": Megaphone,
};

export const Route = createFileRoute("/$lang/")({
  head: ({ params }) => {
    const t = CONTENT[asLang(params.lang)].meta;
    const hero = bannerSpec("home").src;
    return { meta: [
      { title: t.title }, { name: "description", content: t.description },
      { property: "og:title", content: t.title }, { property: "og:description", content: t.description },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: hero }, { name: "twitter:image", content: hero },
    ] };
  },
  component: Home,
});

function Home() {
  const lang = asLang(Route.useParams().lang);
  const t = CONTENT[lang];
  const p = PAGES[lang];
  const partnerOffers = WHAT_WE_DO_DETAILS.filter((d) => d.audience === "partner");
  const memberOffers = WHAT_WE_DO_DETAILS.filter((d) => d.audience === "member");
  return (
    <>
      <section className="page-banner home-banner relative isolate w-full overflow-hidden bg-banner-night text-forest-foreground">
        <img src={bannerSpec("home").src} alt={t.hero.photoAlt} fetchPriority="high" style={{ objectPosition: bannerSpec("home").pos }} className="absolute inset-0 -z-10 h-full w-full object-cover origin-top" />
        <div className="photo-scrim absolute inset-0 -z-10" />
        <div className="banner-content container-page">
          <PageBreadcrumbs lang={lang} inBanner />
          <h1 className="banner-title font-bold">{t.hero.title}</h1>
          <p className="banner-lead text-forest-foreground/95">{t.hero.lead}</p>
          <div className="banner-actions flex flex-wrap gap-3">
            <Link to="/$lang/join-us" params={{ lang }} hash="membership" className="wwu group relative inline-flex items-center rounded-full border border-banner-sun">
              <span className="wwu-fill" aria-hidden="true" />
              <span className="relative z-10 px-7 py-3.5 font-bold text-banner-ink">{t.hero.join}</span>
              <span className="wwu-arrow relative z-10 grid h-11 w-11 shrink-0 place-items-center"><ArrowUpRight className="h-[23px] w-[23px]" strokeWidth={2} aria-hidden /></span>
            </Link>
            <Link to="/$lang/join-us" params={{ lang }} hash="partnership" className="wwu wwu-ghost relative inline-flex items-center rounded-full border border-forest-foreground">
              <span className="wwu-fill" aria-hidden="true" />
              <span className="wwu-label relative z-10 px-7 py-3.5 font-bold text-forest-foreground">{t.hero.partner}</span>
              <span className="wwu-arrow wwu-reveal relative z-10 grid h-11 w-11 shrink-0 place-items-center"><ArrowRight className="h-[23px] w-[23px]" strokeWidth={2} aria-hidden /></span>
            </Link>
          </div>
        </div>
      </section>

      <section id="about-us" className="py-16 md:py-24">
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

      <section id="key-initiatives" className="bg-card py-16 md:py-24">
        <div className="container-page">
          <SectionHead title={p.initiativesTitle} />
          <div className="mt-10 grid gap-10 lg:grid-cols-[2fr_1fr]">
            <div>
              <h3 className="eyebrow">{t.work.partnersLabel}</h3>
              <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                {partnerOffers.map((item) => {
                  const Icon = offerIcons[item.slug as keyof typeof offerIcons] ?? Compass;
                  return (
                  <li key={item.slug}>
                    <Link to="/$lang/what-we-do/$slug" params={{ lang, slug: item.slug }} className="offer-card group flex h-full flex-col rounded-lg border border-primary/20 bg-background p-6 text-primary md:p-7">
                      <div className="mb-7 flex items-start justify-between gap-4">
                        <Icon className="h-10 w-10 shrink-0" strokeWidth={1.5} aria-hidden />
                        <ArrowUpRight className="h-6 w-6 shrink-0" strokeWidth={1.5} aria-hidden />
                      </div>
                      <h4 className="text-xl font-extrabold leading-snug">{item[lang].title}</h4>
                      <p className="offer-description mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{item[lang].lead}</p>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold">{p.readMore} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden /></span>
                    </Link>
                  </li>
                );})}
              </ul>
            </div>
            <div>
              <h3 className="eyebrow">{t.work.membersLabel}</h3>
              <ul className="mt-4 grid gap-4">
                {memberOffers.map((item) => {
                  const Icon = offerIcons[item.slug as keyof typeof offerIcons] ?? BadgeCheck;
                  return (
                  <li key={item.slug}>
                    <Link to="/$lang/what-we-do/$slug" params={{ lang, slug: item.slug }} className="offer-card group flex h-full flex-col rounded-lg border border-primary/20 bg-background p-6 text-primary">
                      <div className="mb-4 flex items-start justify-between gap-4">
                        <Icon className="h-8 w-8 shrink-0" strokeWidth={1.5} aria-hidden />
                        <ArrowUpRight className="h-5 w-5 shrink-0" strokeWidth={1.5} aria-hidden />
                      </div>
                      <h4 className="text-lg font-extrabold leading-snug">{item[lang].title}</h4>
                      <p className="offer-description mt-2 text-sm leading-relaxed text-muted-foreground">{item[lang].lead}</p>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold">{p.readMore} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden /></span>
                    </Link>
                  </li>
                );})}
              </ul>
              <Link to="/$lang/join-us" params={{ lang }} className="group mt-5 inline-flex items-center gap-1.5 font-bold text-primary underline-offset-4 hover:underline">{p.nav["join-us"]} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card py-16 md:py-24">
        <div className="container-page">
          <SectionHead title={p.numbersTitle} lead={t.work.resultsNote} />
          <div className="mt-8"><ResultsSummary lang={lang} /></div>
        </div>
      </section>

      <ActionGallery lang={lang} title={ACTION_UI[lang].title} id="iapa-in-action" headingId="action-title" />

      <section className="py-16 md:py-20">
        <div className="container-page">
          <div className="curve-card relative flex flex-col gap-6 overflow-hidden bg-primary p-8 text-primary-foreground md:flex-row md:items-center md:justify-between md:p-12">
            <EmblemBackdrop className="absolute -bottom-14 -right-6 h-64 w-64 text-primary-foreground opacity-[0.1]" />
            <div className="relative"><h2 className="text-3xl font-extrabold">{p.subscribe.title}</h2><p className="mt-2 opacity-90">{p.subscribe.text}</p></div>
            <div className="relative w-full md:w-auto"><NewsletterInlineForm lang={lang} dark /></div>
          </div>
        </div>
      </section>
    </>
  );
}
