import { Link, useLocation } from "@tanstack/react-router";
import { Home } from "lucide-react";
import type { Lang } from "@/lib/iapa-content";
import { PAGES, PAGE_SLUGS, LEGAL, type PageSlug } from "@/lib/iapa-pages";
import { childLabel } from "@/lib/iapa-nav";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const parents = {
  "who-we-are": "/$lang/who-we-are", "our-work": "/$lang/our-work", training: "/$lang/training",
  "knowledge-hub": "/$lang/knowledge-hub", media: "/$lang/media", "join-us": "/$lang/join-us",
} as const;

export function PageBreadcrumbs({ lang: requestedLang, inBanner = false }: { lang?: Lang; inBanner?: boolean }) {
  const pathname = useLocation({ select: (location) => location.pathname });
  const lang = requestedLang ?? (pathname.split("/")[1] === "fr" ? "fr" : "en");
  const [, , section, child] = pathname.split("/");
  if (!section && !inBanner) return null;
  if (!section) {
    return (
      <div className="banner-breadcrumbs">
        <Breadcrumb aria-label={lang === "fr" ? "Fil d'Ariane" : "Breadcrumb"}>
          <BreadcrumbList className="gap-1.5 text-sm text-forest-foreground">
            <BreadcrumbItem><BreadcrumbPage className="font-semibold text-banner-accent">{PAGES[lang].home}</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    );
  }
  const slug = PAGE_SLUGS.find((value) => value === section);
  const parent: PageSlug | undefined = slug;
  const current = slug ? child ? childLabel(slug, child, lang) : PAGES[lang].nav[slug]
    : section === "privacy" || section === "legal" ? LEGAL[lang][section].title : section;
  return (
    <div className={inBanner ? "banner-breadcrumbs" : "border-b bg-background"}>
      <Breadcrumb aria-label={lang === "fr" ? "Fil d'Ariane" : "Breadcrumb"} className={inBanner ? "" : "container-page py-3"}>
        <BreadcrumbList className={inBanner ? "gap-1.5 text-sm text-forest-foreground [&_a:hover]:text-banner-accent" : "gap-2 text-xs"}>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/$lang" params={{ lang }} className="inline-flex items-center gap-1.5">
                {!inBanner && <Home className="h-3.5 w-3.5" aria-hidden />}
                {PAGES[lang].home}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className={inBanner ? "opacity-50" : undefined} />
          {parent && child && <>
            <BreadcrumbItem><BreadcrumbLink asChild><Link to={parents[parent]} params={{ lang }}>{PAGES[lang].nav[parent]}</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator className={inBanner ? "opacity-50" : undefined} />
          </>}
          <BreadcrumbItem className="min-w-0"><BreadcrumbPage className={`font-semibold ${inBanner ? "text-banner-accent" : ""}`}>{current}</BreadcrumbPage></BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}