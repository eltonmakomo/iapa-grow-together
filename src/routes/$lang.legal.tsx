import { createFileRoute } from "@tanstack/react-router";
import { CONTACT } from "@/lib/iapa-content";
import { LEGAL } from "@/lib/iapa-pages";
import { asLang } from "@/components/iapa/site";

export const Route = createFileRoute("/$lang/legal")({
  head: ({ params }) => {
    const l = LEGAL[asLang(params.lang)].legal;
    return { meta: [{ title: `${l.title} — IAPA` }, { name: "description", content: l.body[0] }, { property: "og:title", content: `${l.title} — IAPA` }, { property: "og:description", content: l.body[0] }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] };
  },
  component: Legal,
});

function Legal() {
  const lang = asLang(Route.useParams().lang);
  const l = LEGAL[lang].legal;
  return (
    <section className="py-16 md:py-24">
      <div className="container-page max-w-3xl">
        <h1 className="section-title">{l.title}</h1>
        {l.body.map((x) => <p key={x} className="mt-5 text-lg leading-relaxed text-muted-foreground">{x}</p>)}
        <p className="mt-8 font-semibold"><a className="text-primary underline underline-offset-4" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
      </div>
    </section>
  );
}
