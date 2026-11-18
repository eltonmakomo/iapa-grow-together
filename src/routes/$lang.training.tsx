import { createFileRoute, Link } from "@tanstack/react-router";
import { CONTENT } from "@/lib/iapa-content";
import { PAGES } from "@/lib/iapa-pages";
import { Arc, Gallery, PageHero, SectionHead, asLang, pageHead } from "@/components/iapa/site";
import { TRAINING_GALLERY_TITLE } from "@/lib/iapa-photos";

export const Route = createFileRoute("/$lang/training")({
  head: ({ params }) => pageHead(params.lang, "training"),
  component: Training,
});

function Training() {
  const lang = asLang(Route.useParams().lang);
  const t = CONTENT[lang].training;
  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} lead={PAGES[lang].training.lead} img="burkina" />
      <section className="py-16 md:py-24">
        <div className="container-page">
          <SectionHead title={t.schoolsTitle} lead={t.lead} />
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {t.schools.map(([abbr, name, d], i) => (
              <li key={abbr} className="curve-card flex gap-5 bg-card p-7">
                <span className={`grid h-16 w-16 shrink-0 place-items-center rounded-2xl text-lg font-extrabold text-accent-foreground ${["bg-sun", "bg-arid", "bg-savanna", "bg-sun"][i]}`}>{abbr}</span>
                <div><h3 className="text-xl font-extrabold">{name}</h3><p className="mt-2 leading-relaxed text-muted-foreground">{d}</p></div>
              </li>
            ))}
          </ul>
          <div className="mt-16">
            <Gallery lang={lang} title={TRAINING_GALLERY_TITLE[lang]} keys={["burkinaMaize", "civ", "robusta", "chadSup", "burkinaSession", "mauritania"]} />
          </div>
        </div>
      </section>
      <section className="bg-forest text-forest-foreground">
        <Arc className="-mt-px rotate-180 text-background" />
        <div className="container-page grid gap-6 py-14 lg:grid-cols-2">
          <div className="curve-card bg-sun p-8 text-accent-foreground">
            <h2 className="text-3xl font-extrabold">{t.cfTitle}</h2>
            <p className="mt-3 text-lg leading-relaxed">{t.cfText}</p>
            <p className="mt-4 font-semibold">{t.gap}</p>
          </div>
          <div className="curve-card p-8 ring-1 ring-forest-foreground/20">
            <h2 className="text-3xl font-extrabold">{t.processTitle}</h2>
            <ol className="mt-6 grid gap-4">
              {t.process.map((s, i) => <li key={s} className="flex items-center gap-3"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-savanna font-extrabold text-accent-foreground">{i + 1}</span><span className="text-lg font-semibold">{s}</span></li>)}
            </ol>
            <p className="mt-6 text-forest-foreground/85">{t.formats}</p>
          </div>
        </div>
        <Arc className="-mb-px text-background" />
      </section>
      <section className="py-16">
        <div className="container-page text-center">
          <Link to="/$lang/join-us" params={{ lang }} hash="partnership" className="inline-flex rounded-full bg-primary px-8 py-4 text-lg font-extrabold text-primary-foreground hover:brightness-110">{CONTENT[lang].hero.partner}</Link>
        </div>
      </section>
    </>
  );
}
