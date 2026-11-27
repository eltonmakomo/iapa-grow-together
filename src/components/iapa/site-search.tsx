import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search, ArrowRight, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SEARCH_UI, type Lang } from "@/lib/iapa-content";
import { searchSite } from "@/lib/iapa-search";

export function SiteSearch({ lang, open, onOpenChange }: { lang: Lang; open: boolean; onOpenChange: (open: boolean) => void }) {
  const [query, setQuery] = useState("");
  const ui = SEARCH_UI[lang];
  const results = searchSite(query, lang);
  return <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent aria-describedby={undefined} className="max-h-[85dvh] w-[calc(100%-2rem)] max-w-2xl gap-0 overflow-hidden rounded-lg p-0">
      <DialogTitle className="px-6 pb-4 pt-6 text-xl">{ui.title}</DialogTitle>
      <div className="relative mx-6 mb-4">
        <Search aria-hidden className="pointer-events-none absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
        <Input aria-label={ui.title} placeholder={ui.placeholder} value={query} onChange={(event) => setQuery(event.target.value)} className="h-11 pl-10 pr-10 text-base" />
        {query && <div className="absolute right-1 top-1"><Button variant="ghost" size="icon" aria-label={ui.clear} onClick={() => setQuery("")} className="h-9 w-9"><X className="h-4 w-4" /></Button></div>}
      </div>
      <p aria-live="polite" className="border-t px-6 py-3 text-sm text-muted-foreground">{query.trim() ? `${results.length} ${ui.results}` : ui.popular}</p>
      <div className="max-h-[55dvh] overflow-y-auto px-3 pb-3">
        {results.length === 0 && <p className="px-3 py-8 text-muted-foreground">{ui.empty}</p>}
        <ul>{results.map((result) => <li key={result.href}>
          <Link to={result.href as "/$lang"} params={{ lang }} onClick={() => { onOpenChange(false); setQuery(""); }} className="group flex items-center gap-4 rounded-md px-3 py-4 transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <div className="min-w-0 flex-1"><p className="text-xs text-muted-foreground">{result.section}</p><p className="mt-1 font-semibold text-foreground group-hover:text-primary">{result.title}</p><p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{result.description}</p></div>
            <ArrowRight aria-hidden className="h-4 w-4 shrink-0 text-primary" />
          </Link>
        </li>)}</ul>
      </div>
    </DialogContent>
  </Dialog>;
}