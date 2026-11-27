import { ACTION_UI, type Lang } from "@/lib/iapa-content";
import { ACTION_PHOTOS } from "@/lib/iapa-action";

export function ActionGallery({ lang, title, id, headingId }: { lang: Lang; title: string; id: string; headingId: string }) {
  return (
    <section id={id} className="py-16 md:py-24" aria-labelledby={headingId}>
      <div className="container-page">
        <h2 id={headingId} className="section-title mb-8">{title}</h2>
        <ul className="grid auto-rows-[14rem] grid-cols-2 gap-4 md:auto-rows-[16rem] md:grid-cols-4">
          {ACTION_PHOTOS.map((src, i) => (
            <li key={src} className={i === 0 ? "col-span-2 row-span-2" : i === 3 ? "col-span-2" : i === 5 ? "md:col-span-3" : ""}>
              <figure className="curve-card h-full overflow-hidden bg-muted">
                <img src={src} alt={`${ACTION_UI[lang].photo} ${i + 1}`} loading="lazy" className="h-full w-full object-cover object-top" />
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}