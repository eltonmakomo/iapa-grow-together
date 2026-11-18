import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";
import { SiteFooter, SiteHeader, asLang } from "@/components/iapa/site";

export const Route = createFileRoute("/$lang")({
  beforeLoad: ({ params }) => {
    if (params.lang !== "en" && params.lang !== "fr") throw notFound();
  },
  head: ({ params }) => ({
    links: [
      { rel: "alternate", hrefLang: "en", href: "/en" },
      { rel: "alternate", hrefLang: "fr", href: "/fr" },
    ],
    meta: [{ property: "og:locale", content: params.lang === "fr" ? "fr_FR" : "en_GB" }],
  }),
  component: LangLayout,
});

function LangLayout() {
  const lang = asLang(Route.useParams().lang);
  return (
    <div id="top" lang={lang}>
      <SiteHeader lang={lang} />
      <main id="main"><Outlet /></main>
      <SiteFooter lang={lang} />
    </div>
  );
}
