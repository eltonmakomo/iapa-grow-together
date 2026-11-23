import { createFileRoute, notFound } from "@tanstack/react-router";
import { ChildPage } from "@/components/iapa/child-page";
import { childLabel, navPage } from "@/lib/iapa-nav";
import { PAGE_SLUGS, type PageSlug } from "@/lib/iapa-pages";
import { asLang } from "@/components/iapa/site";
import { childContent } from "@/lib/iapa-child-content";

function validChild(section: string, child: string): section is PageSlug {
  return PAGE_SLUGS.includes(section as PageSlug) &&
    navPage(section as PageSlug).groups.some((g) => g.items.some((item) => item.id === child));
}

export const Route = createFileRoute("/$lang/$section/$child")({
  beforeLoad: ({ params }) => {
    if (!validChild(params.section, params.child)) throw notFound();
  },
  head: ({ params }) => {
    const lang = asLang(params.lang);
    const section = params.section as PageSlug;
    const title = `${childLabel(section, params.child, lang)} — IAPA`;
    const description = childContent(section, params.child, lang).lead;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ChildRoute,
});

function ChildRoute() {
  const { lang, section, child } = Route.useParams();
  return <ChildPage lang={asLang(lang)} slug={section as PageSlug} child={child} />;
}
