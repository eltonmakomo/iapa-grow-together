import { createFileRoute } from "@tanstack/react-router";
import { Check, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { CONTACT, CONTENT } from "@/lib/iapa-content";
import { PAGES } from "@/lib/iapa-pages";
import { PageHero, Photo, SectionHead, asLang, pageHead } from "@/components/iapa/site";
import { IMG } from "@/components/iapa/media";

export const Route = createFileRoute("/$lang/join-us")({
  head: ({ params }) => pageHead(params.lang, "join-us"),
  component: JoinUs,
});

function JoinUs() {
  const lang = asLang(Route.useParams().lang);
  const j = CONTENT[lang].join;
  const p = PAGES[lang].join;
  const mail = (s: string) => `mailto:${CONTACT.email}?subject=${encodeURIComponent(s)}`;
  return (
    <>
      <PageHero eyebrow={j.eyebrow} title={j.title} lead={p.lead} img={IMG.hero} />
      <section className="py-16 md:py-24">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          {([["membership", j.member, "bg-primary text-primary-foreground", "bg-sun text-accent-foreground"], ["partnership", j.partner, "bg-card", "bg-primary text-primary-foreground"]] as const).map(([id, c, cls, btn]) => (
            <div key={id} id={id} className={`curve-card scroll-mt-24 p-7 md:p-9 ${cls}`}>
              <h2 className="text-3xl font-extrabold">{c.title}</h2>
              <p className="mt-3 text-lg leading-relaxed opacity-90">{c.text}</p>
              <ul className="mt-5 space-y-2">{c.perks.map((x) => <li key={x} className="flex gap-2"><Check className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />{x}</li>)}</ul>
              <a href={mail(c.subject)} className={`mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-extrabold hover:brightness-105 ${btn}`}><Mail className="h-5 w-5" aria-hidden />{c.cta}</a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="container-page">
          <SectionHead title={p.oppTitle} />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[p.vacancies, p.scholarships].map(([h, x]) => <div key={h} className="curve-card bg-card p-6"><h3 className="text-xl font-extrabold">{h}</h3><p className="mt-2 text-muted-foreground">{x}</p></div>)}
            <div className="curve-card bg-sun p-6 text-accent-foreground"><p className="leading-relaxed">{p.oppStory}</p></div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Photo k="cameroon" lang={lang} ratio="aspect-[4/3]" />
            <Photo k="burkinaMaize" lang={lang} ratio="aspect-[4/3]" />
            <Photo k="civ" lang={lang} ratio="aspect-[4/3]" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHead title={p.faqTitle} />
            <div className="mt-6 divide-y rounded-2xl border bg-card">
              {p.faq.map(([q, a]) => (
                <details key={q} className="group p-5">
                  <summary className="cursor-pointer list-none font-bold marker:hidden">
                    <span className="flex items-center justify-between gap-4">{q}<span aria-hidden className="text-xl text-primary transition group-open:rotate-45">+</span></span>
                  </summary>
                  <p className="mt-3 text-muted-foreground">{a}</p>
                </details>
              ))}
            </div>
          </div>
          <div id="contact" className="scroll-mt-24">
            <SectionHead title={j.contactTitle} />
            <dl className="curve-card mt-6 grid gap-6 bg-card p-7 sm:grid-cols-2">
              <div><dt className="flex items-center gap-2 text-sm font-bold text-primary"><Mail className="h-4 w-4" aria-hidden />{j.email}</dt><dd className="mt-1 text-sm [overflow-wrap:anywhere]"><a className="font-semibold underline underline-offset-4" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></dd></div>
              <div><dt className="flex items-center gap-2 text-sm font-bold text-primary"><Phone className="h-4 w-4" aria-hidden />{j.phone}</dt><dd className="mt-1 space-y-1">{CONTACT.phones.map((ph, i) => <a key={ph} className="block font-semibold underline underline-offset-4" href={`tel:${CONTACT.phoneHrefs[i]}`}>{ph}</a>)}</dd></div>
              <div><dt className="flex items-center gap-2 text-sm font-bold text-primary"><MessageCircle className="h-4 w-4" aria-hidden />{j.whatsapp}</dt><dd className="mt-1 space-y-1">{CONTACT.phones.map((ph, i) => <a key={ph} className="block font-semibold underline underline-offset-4" href={`https://wa.me/${CONTACT.whatsapp[i]}`} target="_blank" rel="noopener noreferrer">{ph}</a>)}</dd></div>
              <div><dt className="flex items-center gap-2 text-sm font-bold text-primary"><MapPin className="h-4 w-4" aria-hidden />{j.hq}</dt><dd className="mt-1 font-semibold">{CONTACT.address}</dd></div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
