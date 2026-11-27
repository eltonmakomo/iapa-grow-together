import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Lang } from "@/lib/iapa-content";
import type { SampleItem } from "@/lib/iapa-child-content";
import { LEADERSHIP_PROFILES } from "@/lib/iapa-details";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const GRID_COLS = [
  "grid-cols-1",
  "grid-cols-1",
  "sm:grid-cols-2",
  "sm:grid-cols-3",
  "sm:grid-cols-2 lg:grid-cols-4",
];

export function ProfileGrid({ lang, items }: { lang: Lang; items: SampleItem[] }) {
  const cols = GRID_COLS[Math.min(items.length, 4)] ?? "sm:grid-cols-2 lg:grid-cols-4";
  const ui = lang === "fr"
    ? { placeholder: "Profil fictif · Portrait IA", more: "Voir le profil" }
    : { placeholder: "Placeholder profile · AI portrait", more: "View profile" };
  return (
    <ul className={`mt-8 grid gap-5 ${cols}`}>
      {items.map((item) => {
        const leader = item.name ? LEADERSHIP_PROFILES.find((p) => p[lang].name === item.name || p.en.name === item.name) : undefined;
        if (leader) {
          return (
            <li key={leader.slug} className="group h-full">
              <Link
                to="/$lang/leadership/$profileId"
                params={{ lang, profileId: leader.slug }}
                className="card-fill flex h-full flex-col overflow-hidden rounded-lg border bg-card shadow-soft transition hover:-translate-y-1"
              >
                <img src={leader.portraitUrl} alt={item.name ?? item.title} loading="lazy" className="aspect-square w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]" />
                <div className="flex flex-1 flex-col p-5">
                  <p className="card-fill-text text-xs font-bold uppercase text-primary">{item.title}</p>
                  <h3 className="mt-2 text-base font-extrabold leading-snug sm:text-lg lg:text-xl">{item.name ?? item.title}</h3>
                  {item.location && <p className="card-fill-text mt-2 flex items-center gap-1.5 text-xs text-muted-foreground"><MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />{item.location}</p>}
                  <span className="card-fill-text mt-auto inline-flex items-center gap-1 pt-4 text-sm font-bold text-primary">
                    {ui.more} <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </div>
              </Link>
            </li>
          );
        }
        return (
          <li key={item.name ?? item.title} className="card-fill group flex h-full flex-col overflow-hidden rounded-lg border bg-card shadow-soft">
            {item.portraitUrl ? (
              <img src={item.portraitUrl} alt={item.name ?? item.title} loading="lazy" className="aspect-square w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]" />
            ) : (
              <div className="card-fill-panel grid h-24 place-items-center bg-secondary text-2xl font-bold text-primary">
                {(item.name ?? item.title).split(/\s+/).filter((word) => /[A-Za-zÀ-ÿ]/.test(word[0] ?? "")).slice(0, 2).map((word) => word[0]).join("")}
              </div>
            )}
            <div className="flex flex-1 flex-col p-5">
              <p className="card-fill-text text-xs font-bold uppercase text-primary">{item.title}</p>
              <h3 className="mt-2 text-base font-extrabold leading-snug sm:text-lg lg:text-xl">{item.name ?? item.title}</h3>
              {item.location && <p className="card-fill-text mt-2 flex items-center gap-1.5 text-xs text-muted-foreground"><MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />{item.location}</p>}
              <div className="mt-auto pt-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon" className="card-fill-panel text-primary" aria-label={`${ui.more} · ${item.name ?? item.title}`} title={ui.more}>
                    <ArrowUpRight aria-hidden />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-h-[calc(100svh-2rem)] w-[calc(100%-2rem)] overflow-y-auto rounded-lg sm:max-w-xl">
                  <DialogHeader className="text-left">
                    {item.portraitUrl && <img src={item.portraitUrl} alt={item.name ?? item.title} className="mb-4 h-40 w-40 rounded-lg object-cover object-top" />}
                    <p className="text-xs font-bold uppercase text-primary">{item.title}</p>
                    <DialogTitle className="text-2xl leading-snug">{item.name ?? item.title}</DialogTitle>
                    {item.location && <p className="flex items-center gap-1.5 text-sm text-muted-foreground"><MapPin className="h-4 w-4 shrink-0" aria-hidden />{item.location}</p>}
                    <DialogDescription className="pt-3 leading-relaxed">{item.text}</DialogDescription>
                  </DialogHeader>
                  {item.portraitUrl && <p className="text-xs text-muted-foreground">{ui.placeholder}</p>}
                  {item.byline && <p className="border-t pt-4 text-sm leading-relaxed text-muted-foreground">{item.byline}</p>}
                  {item.highlights && <ul className="space-y-2 border-l-2 border-primary/20 pl-3 text-sm font-semibold text-primary">
                    {item.highlights.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>}
                </DialogContent>
              </Dialog>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}