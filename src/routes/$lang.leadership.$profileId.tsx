import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, MapPin } from "lucide-react";
import { getLeadershipProfile, LEADERSHIP_PROFILES } from "@/lib/iapa-details";
import { PageHero, SectionHead, asLang } from "@/components/iapa/site";
import { bannerSpec } from "@/components/iapa/media";

export const Route = createFileRoute("/$lang/leadership/$profileId")({
  beforeLoad: ({ params }) => {
    if (!getLeadershipProfile(params.profileId)) throw notFound();
  },
  head: ({ params }) => {
    const lang = asLang(params.lang);
    const profile = getLeadershipProfile(params.profileId);
    if (!profile) return { meta: [{ title: "IAPA" }, { name: "robots", content: "noindex" }] };
    const copy = profile[lang];
    const title = `${copy.name} (${copy.role}) — IAPA`;
    const hero = bannerSpec("leadership").src;
    return {
      meta: [
        { title }, { name: "description", content: copy.lead },
        { property: "og:title", content: title }, { property: "og:description", content: copy.lead },
        { property: "og:type", content: "profile" }, { name: "twitter:card", content: "summary_large_image" },
        { property: "og:image", content: hero }, { name: "twitter:image", content: hero },
      ],
    };
  },
  component: LeadershipDetailPage,
});

function LeadershipDetailPage() {
  const { lang: rawLang, profileId } = Route.useParams();
  const lang = asLang(rawLang);
  const profile = getLeadershipProfile(profileId)!;
  const copy = profile[lang];
  const ui = lang === "fr"
    ? { back: "Retour à la direction", focus: "Domaines de responsabilité", placeholder: "Profil fictif · Portrait IA — en attente des biographies officielles des responsables de l'IAPA.", others: "Autres responsables" }
    : { back: "Back to Leadership", focus: "Areas of responsibility", placeholder: "Placeholder profile · AI portrait — pending official IAPA officeholder biographies.", others: "Other leadership profiles" };
  const others = LEADERSHIP_PROFILES.filter((p) => p.slug !== profileId);

  return (
    <>
      <PageHero eyebrow={copy.role} title={copy.name} lead={copy.lead} img="leadership" />
      <section className="py-16 md:py-24">
        <div className="container-page">
          <Link to="/$lang/$section/$child" params={{ lang, section: "who-we-are", child: "leadership" }} className="inline-flex items-center gap-2 font-bold text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" aria-hidden /> {ui.back}
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[20rem_1fr] lg:items-start">
            <div className="curve-card overflow-hidden bg-card">
              <img src={profile.portraitUrl} alt={copy.name} className="aspect-square w-full object-cover object-top" />
              <div className="p-6">
                <p className="text-xs font-extrabold uppercase tracking-wider text-primary">{copy.role}</p>
                <p className="mt-1 text-xl font-extrabold">{copy.name}</p>
                <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground"><MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden /> {profile.location}</p>
                <p className="mt-3 border-t pt-3 text-xs text-muted-foreground">{copy.byline}</p>
                <p className="mt-2 text-xs italic text-muted-foreground">{ui.placeholder}</p>
              </div>
            </div>
            <div>
              <SectionHead eyebrow={copy.meta} title={`${copy.name} — ${copy.role}`} />
              {copy.body.map((paragraph) => (
                <p key={paragraph} className="mt-5 text-lg leading-relaxed text-muted-foreground">{paragraph}</p>
              ))}
              <div className="curve-card mt-8 bg-card p-7">
                <h2 className="text-xl font-extrabold">{ui.focus}</h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                  {copy.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 font-semibold">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-sun text-accent-foreground"><Check className="h-4 w-4" aria-hidden /></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t pt-12">
            <h2 className="text-2xl font-extrabold">{ui.others}</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-3">
              {others.map((other) => (
                <li key={other.slug}>
                  <Link to="/$lang/leadership/$profileId" params={{ lang, profileId: other.slug }} className="curve-card flex items-center gap-4 bg-card p-4 transition hover:-translate-y-0.5">
                    <img src={other.portraitUrl} alt={other[lang].name} loading="lazy" className="h-16 w-16 shrink-0 rounded-lg object-cover object-top" />
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase text-primary">{other[lang].role}</p>
                      <p className="truncate font-extrabold">{other[lang].name}</p>
                      <p className="text-xs text-muted-foreground">{other.location}</p>
                    </div>
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