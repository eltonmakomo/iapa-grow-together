import { createFileRoute } from "@tanstack/react-router";
import { IapaPage } from "@/components/iapa/IapaPage";
import { CONTENT } from "@/lib/iapa-content";

const t = CONTENT.fr;

export const Route = createFileRoute("/fr")({
  head: () => ({
    meta: [
      { title: t.meta.title },
      { name: "description", content: t.meta.description },
      { property: "og:title", content: t.meta.title },
      { property: "og:description", content: t.meta.description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_FR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "alternate", hrefLang: "en", href: "/en" },
      { rel: "alternate", hrefLang: "fr", href: "/fr" },
    ],
  }),
  component: () => <IapaPage lang="fr" />,
});
