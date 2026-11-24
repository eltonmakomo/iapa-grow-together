import { createFileRoute, notFound, Outlet, useLocation } from "@tanstack/react-router";
import { ScrollProgress, useSiteMotion } from "@/components/iapa/motion";
import { SiteFooter, SiteHeader, asLang } from "@/components/iapa/site";
import { PageBreadcrumbs } from "@/components/iapa/breadcrumbs";

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
  useSiteMotion();
  return (
    <div id="top" lang={lang}>
      <ScrollProgress />
      <SiteHeader lang={lang} />
      <main id="main" key={useLocation({ select: (l) => l.pathname })} className="page-enter"><PageBreadcrumbs lang={lang} /><Outlet /></main>
      <SiteFooter lang={lang} />
    </div>
  );
}
