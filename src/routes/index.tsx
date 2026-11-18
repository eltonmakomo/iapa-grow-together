import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IAPA — International Agribusiness Practitioners Association" },
      { name: "description", content: "Pan-African network of certified agribusiness practitioners. English and French." },
      { property: "og:title", content: "IAPA — International Agribusiness Practitioners Association" },
      { property: "og:description", content: "Pan-African network of certified agribusiness practitioners." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  beforeLoad: () => {
    throw redirect({ to: "/en" });
  },
});
