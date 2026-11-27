import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Home, Monitor, Shuffle, Wrench } from "lucide-react";
import { CONTENT } from "@/lib/iapa-content";
import { childLabel } from "@/lib/iapa-nav";
import { PAGES } from "@/lib/iapa-pages";
import { FormDialog } from "@/components/iapa/forms";
import { Arc, Gallery, PageHero, SectionHead, asLang, pageHead } from "@/components/iapa/site";
import { TRAINING_GALLERY_TITLE } from "@/lib/iapa-photos";

export const Route = createFileRoute("/$lang/training")({
  head: ({ params }) => pageHead(params.lang, "training"),
  component: Training,
});

function Training() {
  const lang = asLang(Route.useParams().lang);
  const t = CONTENT[lang].training;
  const a = PAGES[lang].arch;
  const ui = lang === "fr"
    ? { more: "Voir le programme", cta: "Demander une formation / S'inscrire", ctaDesc: "Précisez l'école d'entrepreneuriat ou le format souhaité ; le Secrétariat exécutif vous répondra." }
    : { more: "View details", cta: "Request training / Enrol", ctaDesc: "Tell us which Business School or format you need; the Executive Secretariat will follow up." };
  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} lead={PAGES[lang].training.lead} img="burkina">
        <div className="banner-actions">
          <FormDialog
            lang={lang}
            formType="training"
            triggerLabel={ui.cta}
            title={ui.cta}
            description={ui.ctaDesc}
            triggerClassName="inline-flex items-center gap-2 rounded-full bg-sun px-7 py-3.5 font-extrabold text-accent-foreground transition hover:brightness-105"
          />
        </div>
      </PageHero>
      <section className="py-16 md:py-24">
        <div className="container-page">
          <SectionHead eyebrow={a.approachesTitle} title={t.schoolsTitle} lead={t.lead} />
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {t.schools.map(([abbr, name, d], i) => {
              const id = (abbr ?? "").toLowerCase();
              return (
                <li key={abbr} id={id}>
                  <Link to="/$lang/$section/$child" params={{ lang, section: "training", child: id }} className="curve-card group flex h-full gap-5 bg-card p-7 transition hover:-translate-y-0.5">
                    <span className={`grid h-16 w-16 shrink-0 place-items-center rounded-2xl text-lg font-extrabold text-accent-foreground ${["bg-sun", "bg-arid", "bg-savanna", "bg-sun"][i]}`}>{abbr}</span>
                    <div className="flex flex-1 flex-col">
                      <h3 className="text-xl font-extrabold group-hover:text-primary">{name}</h3>
                      <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">{d}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary">{ui.more} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden /></span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-16">
            <Gallery lang={lang} title={TRAINING_GALLERY_TITLE[lang]} keys={["burkinaMaize", "civ", "robusta", "chadSup", "burkinaSession", "mauritania"]} />
          </div>
        </div>
      </section>
      <section className="bg-forest text-forest-foreground">
        <Arc className="-mt-px rotate-180 text-background" />
        <div className="container-page grid gap-6 py-14 lg:grid-cols-2">
          <div className="grid gap-6">
            <div id="cf" className="curve-card bg-card p-8 text-card-foreground">
              <h2 className="text-3xl font-extrabold">{childLabel("training", "cf", lang)}</h2>
              <p className="mt-3 text-lg leading-relaxed">{t.cfText}</p>
            </div>
            <div id="gap" className="curve-card bg-card p-8 text-card-foreground">
              <h2 className="text-2xl font-extrabold">{childLabel("training", "gap", lang)}</h2>
              <p className="mt-3 text-lg leading-relaxed">{t.gap}</p>
            </div>
          </div>
          <div className="curve-card p-8 ring-1 ring-forest-foreground/20">
            <h2 className="text-3xl font-extrabold">{t.processTitle}</h2>
            <ol className="mt-6 grid gap-4">
              {t.process.map((s, i) => <li key={s} className="flex items-center gap-3"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-savanna font-extrabold text-accent-foreground">{i + 1}</span><span className="text-lg font-semibold">{s}</span></li>)}
            </ol>
          </div>
        </div>
        <Arc className="-mb-px text-background" />
      </section>
      <section className="py-16 md:py-24">
        <div className="container-page">
          <SectionHead title={a.formatsTitle} />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {a.formats.map(([id, d], i) => {
              const Icon = [Monitor, Home, Shuffle, Wrench][i]!;
              return (
                <li key={id} id={id}>
                  <Link to="/$lang/$section/$child" params={{ lang, section: "training", child: id }} className="curve-card group flex h-full flex-col bg-card p-6 transition hover:-translate-y-0.5">
                    <Icon className="h-8 w-8 text-primary" aria-hidden />
                    <h3 className="mt-4 text-lg font-extrabold group-hover:text-primary">{childLabel("training", id, lang)}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{d}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary">{ui.more} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden /></span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section className="pb-16">
        <div className="container-page flex flex-wrap items-center justify-center gap-4 text-center">
          <FormDialog
            lang={lang}
            formType="training"
            triggerLabel={ui.cta}
            title={ui.cta}
            description={ui.ctaDesc}
            triggerClassName="inline-flex rounded-full bg-sun px-8 py-4 text-lg font-extrabold text-accent-foreground hover:brightness-105"
          />
          <Link to="/$lang/join-us" params={{ lang }} hash="partnership" className="inline-flex rounded-full bg-primary px-8 py-4 text-lg font-extrabold text-primary-foreground hover:brightness-110">{CONTENT[lang].hero.partner}</Link>
        </div>
      </section>
    </>
  );
}
