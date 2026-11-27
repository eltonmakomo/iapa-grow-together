import { Link, useLocation } from "@tanstack/react-router";
import { Home } from "lucide-react";
import type { Lang } from "@/lib/iapa-content";
import { PAGES, PAGE_SLUGS, LEGAL, type PageSlug } from "@/lib/iapa-pages";
import { childLabel } from "@/lib/iapa-nav";
import { getEventDetail, getLeadershipProfile, getPressDetail, getWhatWeDo } from "@/lib/iapa-details";
import { getStory } from "@/lib/iapa-stories";
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
  const detailParent: { slug: PageSlug; label: string } | undefined =
    section === "stories" ? { slug: "our-work", label: PAGES[lang].nav["our-work"] }
    : section === "events" || section === "press" ? { slug: "media", label: PAGES[lang].nav.media }
    : section === "leadership" ? { slug: "who-we-are", label: PAGES[lang].nav["who-we-are"] }
    : undefined;
  const current = slug ? child ? childLabel(slug, child, lang) : PAGES[lang].nav[slug]
    : section === "stories" && child ? (getStory(child)?.[lang].title ?? child)
    : section === "what-we-do" && child ? (getWhatWeDo(child)?.[lang].title ?? child)
    : section === "events" && child ? (getEventDetail(child)?.[lang].title ?? child)
    : section === "press" && child ? (getPressDetail(child)?.[lang].title ?? child)
    : section === "leadership" && child ? (getLeadershipProfile(child)?.[lang].name ?? child)
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
          {detailParent && <>
            <BreadcrumbItem><BreadcrumbLink asChild><Link to={parents[detailParent.slug]} params={{ lang }}>{detailParent.label}</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator className={inBanner ? "opacity-50" : undefined} />
          </>}
          <BreadcrumbItem className="min-w-0"><BreadcrumbPage className={`font-semibold ${inBanner ? "text-banner-accent" : ""}`}>{current}</BreadcrumbPage></BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}