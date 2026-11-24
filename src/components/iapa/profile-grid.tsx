import { ArrowDown, ArrowUp, MapPin } from "lucide-react";
import type { Lang } from "@/lib/iapa-content";
import type { SampleItem } from "@/lib/iapa-child-content";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export function ProfileGrid({ lang, items }: { lang: Lang; items: SampleItem[] }) {
  const ui = lang === "fr"
    ? { placeholder: "Profil fictif · Portrait IA", more: "Voir le profil", less: "Réduire le profil" }
    : { placeholder: "Placeholder profile · AI portrait", more: "View profile", less: "Close profile" };
  return (
    <ul className="mt-8 grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <li key={item.name ?? item.title} className="group overflow-hidden rounded-lg border bg-card shadow-soft">
          {item.portraitUrl ? (
            <img src={item.portraitUrl} alt={item.name ?? item.title} loading="lazy" className="aspect-square w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]" />
          ) : (
            <div className="grid h-24 place-items-center bg-secondary text-2xl font-bold text-primary">
              {(item.name ?? item.title).split(/\s+/).slice(0, 2).map((word) => word[0]).join("")}
            </div>
          )}
          <div className="p-5">
            <p className="text-xs font-bold uppercase text-primary">{item.title}</p>
            <h3 className="mt-2 text-xl font-extrabold leading-snug">{item.name ?? item.title}</h3>
            {item.location && <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground"><MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />{item.location}</p>}
            {item.portraitUrl && <p className="mt-3 text-xs text-muted-foreground">{ui.placeholder}</p>}
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            {item.highlights && (
              <Collapsible className="group/profile mt-4 border-t pt-3">
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="h-auto w-full justify-between px-0 py-2 text-primary whitespace-normal">
                    <span className="group-data-[state=open]/profile:hidden">{ui.more}</span>
                    <span className="hidden group-data-[state=open]/profile:inline">{ui.less}</span>
                    <ArrowDown className="group-data-[state=open]/profile:hidden" aria-hidden />
                    <ArrowUp className="hidden group-data-[state=open]/profile:block" aria-hidden />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  {item.byline && <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{item.byline}</p>}
                  <ul className="mt-3 space-y-2 border-l-2 border-primary/20 pl-3 text-xs font-semibold text-primary">
                    {item.highlights.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}