import { BookOpen, Download } from "lucide-react";
import { CONTENT, type Lang } from "@/lib/iapa-content";
import { PULSE, PULSE_COVER } from "@/components/iapa/media";
import { PULSE_ISSUE_1_READER } from "@/lib/iapa-details";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export function PulseIssuesGrid({ lang }: { lang: Lang }) {
  const h = CONTENT[lang].hub;
  const issue1 = PULSE_ISSUE_1_READER[lang];
  return (
    <ul className="mt-8 grid gap-6 md:grid-cols-2">
      {h.issues.map((is, i) => {
        const pdf = PULSE[is.key];
        const cover = PULSE_COVER[is.key];
        return (
          <li key={is.key} className="curve-card flex flex-col overflow-hidden bg-card">
            <div className={`h-2 ${i === 0 ? "bg-arid" : "bg-primary"}`} />
            <div className="grid flex-1 gap-6 p-7 sm:grid-cols-[9rem_1fr]">
              {cover && (
                <img
                  src={cover}
                  alt={`IAPA Pulse — ${is.label}`}
                  loading="lazy"
                  className="aspect-[3/4] w-36 rounded-lg border object-cover shadow-soft sm:w-full"
                />
              )}
              <div className="flex flex-col">
                <p className="eyebrow">{is.label}</p>
                <h3 className="mt-2 text-2xl font-extrabold">{is.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{is.text}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {pdf ? (
                    <>
                      <a href={pdf} target="_blank" rel="noopener" className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-primary px-5 py-2.5 font-bold text-primary hover:bg-primary hover:text-primary-foreground">
                        <BookOpen className="h-5 w-5" aria-hidden /> {h.read}<span className="sr-only"> — IAPA Pulse {is.label}</span>
                      </a>
                      <a href={pdf} download={`IAPA-Pulse-${is.key}.pdf`} className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-bold text-primary-foreground hover:brightness-110">
                        <Download className="h-5 w-5" aria-hidden /> {h.download}<span className="sr-only"> — IAPA Pulse {is.label}</span>
                      </a>
                    </>
                  ) : (
                    <Dialog>
                      <DialogTrigger asChild>
                        <button type="button" className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-bold text-primary-foreground hover:brightness-110">
                          <BookOpen className="h-5 w-5" aria-hidden /> {h.read}
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-h-[calc(100svh-2rem)] w-[calc(100%-2rem)] overflow-y-auto rounded-2xl sm:max-w-2xl">
                        <DialogHeader className="text-left">
                          <p className="eyebrow text-xs">{is.label}</p>
                          <DialogTitle className="text-2xl font-extrabold">{issue1.title}</DialogTitle>
                          <DialogDescription className="pt-1 font-semibold text-primary">{issue1.subtitle}</DialogDescription>
                        </DialogHeader>
                        <div className="mt-3 space-y-4">
                          {issue1.sections.map((sec) => (
                            <div key={sec.heading} className="rounded-xl border bg-secondary/40 p-4">
                              <h4 className="font-extrabold text-foreground">{sec.heading}</h4>
                              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{sec.text}</p>
                            </div>
                          ))}
                          <p className="text-xs italic text-muted-foreground">{issue1.note}</p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{pdf ? h.size : lang === "fr" ? "Édition en ligne" : "Online edition"}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}