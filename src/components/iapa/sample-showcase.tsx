import { useState } from "react";
import { BookOpen, Briefcase, Calendar, Check, Download, FileText, GraduationCap, Mail, MapPin, Quote, X } from "lucide-react";
import type { Lang } from "@/lib/iapa-content";
import type { SampleItem, SampleKind } from "@/lib/iapa-child-content";
import { IMG, PHOTO_POSITION } from "@/components/iapa/media";
import { FormDialog } from "@/components/iapa/forms";
import { PodcastPlayer, VideoShowcase } from "@/components/iapa/media-player";
import { ProfileGrid } from "@/components/iapa/profile-grid";

const LABELS = {
  en: {
    read: "Read online",
    download: "Download brief",
    close: "Close",
    takeaways: "Key takeaways",
    details: "Key details",
    enquire: "Enquire via email",
    previewNotice: "Published by the International Agribusiness Practitioners Association (IAPA).",
  },
  fr: {
    read: "Lire en ligne",
    download: "Télécharger la fiche",
    close: "Fermer",
    takeaways: "Points clés",
    details: "Détails clés",
    enquire: "Nous écrire par e-mail",
    previewNotice: "Publié par l'Association Internationale des Praticiens de l'Agribusiness (IAPA).",
  },
} as const;

function downloadSummary(item: SampleItem) {
  const lines = [
    item.title,
    `${item.meta}${item.date ? ` | ${item.date}` : ""}${item.duration ? ` | ${item.duration}` : ""}`,
    item.byline ?? "",
    "",
    item.text,
    ...(item.highlights?.length ? ["", ...item.highlights.map((h) => `- ${h}`)] : []),
  ].join("\n");
  const blob = new Blob([lines], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 48)}.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

function PublicationGrid({ lang, items }: { lang: Lang; items: SampleItem[] }) {
  const ui = LABELS[lang];
  const [selected, setSelected] = useState<SampleItem | null>(null);
  return (
    <>
      <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.title} className="curve-card flex h-full flex-col overflow-hidden bg-card">
            {item.img ? (
              <img src={IMG[item.img]} alt="" loading="lazy" style={{ objectPosition: PHOTO_POSITION[item.img] }} className="aspect-[16/9] w-full object-cover" />
            ) : (
              <div className="h-2 bg-primary" />
            )}
            <div className="flex flex-1 flex-col p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-extrabold uppercase tracking-wider text-primary">
                <span>{item.tag ?? item.meta}</span>
                {item.date && <span className="text-muted-foreground">{item.date}</span>}
              </div>
              <h3 className="mt-2.5 text-xl font-extrabold leading-snug">{item.title}</h3>
              {item.byline && <p className="mt-1.5 text-xs font-semibold text-muted-foreground">{item.byline}</p>}
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              {item.duration && <p className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-primary"><FileText className="h-3.5 w-3.5" aria-hidden /> {item.duration}</p>}
              <div className="mt-5 flex flex-wrap gap-2.5">
                <button type="button" onClick={() => setSelected(item)} className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground hover:brightness-110">
                  <BookOpen className="h-4 w-4" aria-hidden /> {ui.read}
                </button>
                <button type="button" onClick={() => downloadSummary(item)} className="inline-flex items-center gap-1.5 rounded-full border-2 border-primary px-4 py-2 text-sm font-bold text-primary hover:bg-primary hover:text-primary-foreground">
                  <Download className="h-4 w-4" aria-hidden /> {ui.download}
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {selected && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-foreground/60 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={selected.title}>
          <div className="curve-card max-h-[85vh] w-full max-w-2xl overflow-y-auto bg-card p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow text-xs">{selected.meta}{selected.date ? ` · ${selected.date}` : ""}</p>
                <h3 className="mt-2 text-2xl font-extrabold leading-tight">{selected.title}</h3>
                {selected.byline && <p className="mt-1 text-sm font-semibold text-primary">{selected.byline}</p>}
              </div>
              <button type="button" onClick={() => setSelected(null)} aria-label={ui.close} className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground">
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>
            <p className="mt-5 leading-relaxed text-muted-foreground">{selected.text}</p>
            {selected.highlights && selected.highlights.length > 0 && (
              <div className="mt-6 rounded-2xl bg-secondary p-5">
                <p className="text-xs font-extrabold uppercase tracking-wider text-primary">{ui.takeaways}</p>
                <ul className="mt-3 space-y-2.5">
                  {selected.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm leading-relaxed">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden /> <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t pt-4">
              <p className="text-xs text-muted-foreground">{ui.previewNotice}</p>
              <button type="button" onClick={() => downloadSummary(selected)} className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground hover:brightness-110">
                <Download className="h-4 w-4" aria-hidden /> {ui.download}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function TestimonialGrid({ items }: { items: SampleItem[] }) {
  return (
    <ul className="mt-10 grid gap-6 md:grid-cols-3">
      {items.map((item) => (
        <li key={item.title} className="curve-card flex h-full flex-col bg-card p-7">
          <Quote className="h-8 w-8 text-sun" aria-hidden />
          <blockquote className="mt-4 flex-1 text-lg font-bold leading-snug">{item.title}</blockquote>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
          <div className="mt-5 border-t pt-4">
            {item.byline && <p className="font-extrabold text-primary">{item.byline}</p>}
            <p className="text-xs font-semibold text-muted-foreground">{item.meta}{item.date ? ` · ${item.date}` : ""}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function OpportunityGrid({ lang, items, isScholarship }: { lang: Lang; items: SampleItem[]; isScholarship?: boolean }) {
  const ui = LABELS[lang];
  const Icon = isScholarship ? GraduationCap : Briefcase;
  return (
    <ul className="mt-10 grid gap-5 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.title} className="curve-card flex h-full flex-col bg-card p-6">
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-extrabold text-primary">
              <Icon className="h-3.5 w-3.5" aria-hidden /> {item.tag ?? item.meta}
            </span>
            {item.date && <span className="flex items-center gap-1 text-xs font-semibold text-muted-foreground"><Calendar className="h-3.5 w-3.5" aria-hidden /> {item.date}</span>}
          </div>
          <h3 className="mt-3 text-xl font-extrabold leading-snug">{item.title}</h3>
          {item.byline && <p className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-muted-foreground"><MapPin className="h-3.5 w-3.5 text-primary" aria-hidden /> {item.byline}</p>}
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
          {item.highlights && (
            <ul className="mt-4 space-y-1.5 border-t pt-4 text-xs text-muted-foreground">
              {item.highlights.map((h) => <li key={h} className="flex items-start gap-2"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden /> {h}</li>)}
            </ul>
          )}
          <div className="mt-5">
            <FormDialog
              lang={lang}
              formType="opportunity"
              triggerLabel={ui.enquire}
              title={item.title}
              description={item.text}
              defaultSubject={item.title}
              metadata={{ opportunity: item.title, category: isScholarship ? "scholarship" : "vacancy" }}
              icon={<Mail className="h-4 w-4" aria-hidden />}
              triggerClassName="inline-flex w-fit items-center gap-2 rounded-full border-2 border-primary px-4 py-2 text-sm font-bold text-primary hover:bg-primary hover:text-primary-foreground"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export function SampleShowcase({ lang, kind, items, child }: { lang: Lang; kind?: SampleKind | undefined; items: SampleItem[]; child: string }) {
  if (kind === "podcast") return <PodcastPlayer lang={lang} items={items} />;
  if (kind === "webinar" || kind === "multimedia") return <VideoShowcase lang={lang} items={items} isMultimedia={kind === "multimedia"} />;
  if (kind === "publication") return <PublicationGrid lang={lang} items={items} />;
  if (kind === "testimonial") return <TestimonialGrid items={items} />;
  if (kind === "profile") return <ProfileGrid lang={lang} items={items} />;
  return <OpportunityGrid lang={lang} items={items} isScholarship={child === "scholarships"} />;
}