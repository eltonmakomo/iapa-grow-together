import { createFileRoute } from "@tanstack/react-router";
import { IapaPage } from "@/components/iapa/IapaPage";
import { CONTENT } from "@/lib/iapa-content";

const t = CONTENT.en;

export const Route = createFileRoute("/en")({
  head: () => ({
    meta: [
      { title: t.meta.title },
      { name: "description", content: t.meta.description },
      { property: "og:title", content: t.meta.title },
      { property: "og:description", content: t.meta.description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "alternate", hrefLang: "en", href: "/en" },
      { rel: "alternate", hrefLang: "fr", href: "/fr" },
    ],
  }),
  component: () => <IapaPage lang="en" />,
});
