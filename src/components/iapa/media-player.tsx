import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp, Headphones, Pause, Play, RotateCcw, RotateCw, Video, Volume2, VolumeX } from "lucide-react";
import type { Lang } from "@/lib/iapa-content";
import type { SampleItem } from "@/lib/iapa-child-content";
import { IMG, PHOTO_POSITION } from "@/components/iapa/media";

const UI = {
  en: {
    nowPlaying: "Now playing",
    play: "Play",
    pause: "Pause",
    notes: "Show notes",
    hideNotes: "Hide notes",
    watch: "Watch recording",
    explore: "Open feature",
    chapters: "Key segments",
  },
  fr: {
    nowPlaying: "Lecture en cours",
    play: "Lire",
    pause: "Pause",
    notes: "Notes de l'épisode",
    hideNotes: "Masquer les notes",
    watch: "Regarder",
    explore: "Ouvrir le contenu",
    chapters: "Séquences clés",
  },
} as const;

function fmtTime(sec: number): string {
  const s = Math.max(0, Math.floor(sec));
  const m = Math.floor(s / 60);
  return `${m}:${String(s % 60).padStart(2, "0")}`;
}

/** Gentle Web Audio ambient chord so pressing Play gives real audible feedback. */
function usePreviewTone(playing: boolean, muted: boolean) {
  const ctxRef = useRef<AudioContext | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  useEffect(() => {
    if (!playing || muted) {
      gainRef.current?.gain.setTargetAtTime(0, ctxRef.current?.currentTime ?? 0, 0.08);
      return;
    }
    try {
      const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!Ctx) return;
      const ctx = ctxRef.current ?? new Ctx();
      ctxRef.current = ctx;
      if (ctx.state === "suspended") void ctx.resume();
      if (!gainRef.current) {
        const master = ctx.createGain();
        master.gain.value = 0;
        master.connect(ctx.destination);
        gainRef.current = master;
        for (const freq of [196, 246.94, 293.66]) {
          const osc = ctx.createOscillator();
          osc.type = "sine";
          osc.frequency.value = freq;
          const g = ctx.createGain();
          g.gain.value = 0.012;
          osc.connect(g);
          g.connect(master);
          osc.start();
        }
      }
      gainRef.current.gain.setTargetAtTime(1, ctx.currentTime, 0.15);
    } catch {
      // Audio playback blocked or unavailable; timeline still advances.
    }
  }, [playing, muted]);

  useEffect(() => () => { void ctxRef.current?.close(); }, []);
}

export function PodcastPlayer({ lang, items }: { lang: Lang; items: SampleItem[] }) {
  const ui = UI[lang];
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [speed, setSpeed] = useState<1 | 1.25 | 1.5>(1);
  const [muted, setMuted] = useState(false);
  const [openNotes, setOpenNotes] = useState<number | null>(0);

  const current = items[active] ?? items[0];
  const total = current?.durationSec ?? 1680;
  usePreviewTone(playing, muted);

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      setElapsed((prev) => (prev + speed >= total ? (setPlaying(false), 0) : prev + speed));
    }, 1000);
    return () => window.clearInterval(id);
  }, [playing, speed, total]);

  const selectEpisode = (idx: number) => {
    if (idx === active) { setPlaying((p) => !p); return; }
    setActive(idx);
    setElapsed(0);
    setOpenNotes(null);
    setPlaying(true);
  };
  const skip = (delta: number) => setElapsed((prev) => Math.min(total, Math.max(0, prev + delta)));
  const cycleSpeed = () => setSpeed((s) => (s === 1 ? 1.25 : s === 1.25 ? 1.5 : 1));

  if (!current) return null;

  return (
    <div className="mt-10 space-y-6">
      <div className="curve-card overflow-hidden bg-primary text-primary-foreground">
        <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-[9rem_1fr] md:items-center">
          {current.img && (
            <img src={IMG[current.img]} alt="" style={{ objectPosition: PHOTO_POSITION[current.img] }} className="aspect-square w-32 rounded-2xl object-cover shadow-soft md:w-full" />
          )}
          <div className="min-w-0">
            <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-sun">
              <Headphones className="h-4 w-4" aria-hidden /> {ui.nowPlaying} · {current.meta}
            </p>
            <h3 className="mt-2 text-2xl font-extrabold leading-tight">{current.title}</h3>
            {current.byline && <p className="mt-1 text-sm opacity-90">{current.byline}{current.date ? ` · ${current.date}` : ""}</p>}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button type="button" onClick={() => setPlaying((p) => !p)} aria-label={playing ? ui.pause : ui.play} className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-sun text-accent-foreground transition hover:brightness-105">
                {playing ? <Pause className="h-5 w-5" aria-hidden /> : <Play className="ml-0.5 h-5 w-5" aria-hidden />}
              </button>
              <button type="button" onClick={() => skip(-15)} aria-label="-15s" className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/15 hover:bg-primary-foreground/25"><RotateCcw className="h-4 w-4" aria-hidden /></button>
              <button type="button" onClick={() => skip(15)} aria-label="+15s" className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/15 hover:bg-primary-foreground/25"><RotateCw className="h-4 w-4" aria-hidden /></button>
              <div className="flex min-w-[12rem] flex-1 items-center gap-3">
                <span className="w-10 text-xs font-bold tabular-nums">{fmtTime(elapsed)}</span>
                <input type="range" min={0} max={total} value={Math.floor(elapsed)} onChange={(e) => setElapsed(Number(e.target.value))} aria-label={current.title} className="h-1.5 flex-1 cursor-pointer accent-sun" />
                <span className="w-10 text-right text-xs font-bold tabular-nums opacity-85">{fmtTime(total)}</span>
              </div>
              <button type="button" onClick={cycleSpeed} className="rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-extrabold hover:bg-primary-foreground/25">{speed}x</button>
              <button type="button" onClick={() => setMuted((m) => !m)} aria-label={muted ? "Unmute" : "Mute"} className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/15 hover:bg-primary-foreground/25">
                {muted ? <VolumeX className="h-4 w-4" aria-hidden /> : <Volume2 className="h-4 w-4" aria-hidden />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <ul className="grid gap-4">
        {items.map((ep, idx) => ({ ep, idx })).filter(({ idx }) => idx !== active).map(({ ep, idx }) => {
          const isCurrent = idx === active;
          const isPlaying = isCurrent && playing;
          const expanded = openNotes === idx;
          return (
            <li key={ep.title} className={`curve-card bg-card p-5 sm:p-6 ${isCurrent ? "ring-2 ring-primary" : ""}`}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <button type="button" onClick={() => selectEpisode(idx)} aria-label={`${isPlaying ? ui.pause : ui.play} ${ep.title}`} className={`grid h-12 w-12 shrink-0 place-items-center rounded-full transition ${isCurrent ? "bg-primary text-primary-foreground" : "bg-secondary text-primary hover:bg-primary hover:text-primary-foreground"}`}>
                  {isPlaying ? <Pause className="h-5 w-5" aria-hidden /> : <Play className="ml-0.5 h-5 w-5" aria-hidden />}
                </button>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-extrabold uppercase tracking-wider text-primary">
                    <span>{ep.meta}</span>
                    {ep.date && <span className="text-muted-foreground">· {ep.date}</span>}
                    {ep.duration && <span className="rounded-full bg-secondary px-2.5 py-0.5 text-secondary-foreground">{ep.duration}</span>}
                  </div>
                  <h3 className="mt-1.5 text-xl font-extrabold leading-snug">{ep.title}</h3>
                  {ep.byline && <p className="mt-1 text-sm font-semibold text-primary/90">{ep.byline}</p>}
                  <p className="mt-2 leading-relaxed text-muted-foreground">{ep.text}</p>
                  {ep.highlights && ep.highlights.length > 0 && (
                    <div className="mt-3">
                      <button type="button" onClick={() => setOpenNotes(expanded ? null : idx)} className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline">
                        {expanded ? ui.hideNotes : ui.notes}
                        {expanded ? <ChevronUp className="h-4 w-4" aria-hidden /> : <ChevronDown className="h-4 w-4" aria-hidden />}
                      </button>
                      {expanded && (
                        <ul className="mt-3 grid gap-2 rounded-xl bg-secondary/70 p-4 text-sm text-secondary-foreground">
                          {ep.highlights.map((h) => <li key={h} className="leading-relaxed">• {h}</li>)}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function VideoShowcase({ lang, items, isMultimedia }: { lang: Lang; items: SampleItem[]; isMultimedia?: boolean }) {
  const ui = UI[lang];
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const current = items[active] ?? items[0];
  const total = current?.durationSec ?? 2400;

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      setElapsed((prev) => (prev + 1 >= total ? (setPlaying(false), 0) : prev + 1));
    }, 1000);
    return () => window.clearInterval(id);
  }, [playing, total]);

  if (!current) return null;

  return (
    <div className="mt-10 space-y-8">
      <div className="curve-card overflow-hidden bg-card">
        <div className="grid lg:grid-cols-[1.35fr_1fr]">
          <div className="relative aspect-[16/10] bg-foreground/95">
            {current.img && (
              <img src={IMG[current.img]} alt="" style={{ objectPosition: PHOTO_POSITION[current.img] }} className={`h-full w-full object-cover transition duration-500 ${playing ? "scale-105 brightness-75" : "brightness-90"}`} />
            )}
            <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-foreground/75 px-3 py-1 text-xs font-bold text-background backdrop-blur-sm">
                  <Video className="h-3.5 w-3.5" aria-hidden /> {current.tag ?? current.meta}
                </span>
                {current.duration && <span className="rounded-full bg-foreground/75 px-3 py-1 text-xs font-bold tabular-nums text-background backdrop-blur-sm">{current.duration}</span>}
              </div>
              <button type="button" onClick={() => setPlaying((p) => !p)} aria-label={playing ? ui.pause : ui.play} className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-sun text-accent-foreground shadow-lg transition hover:scale-105">
                {playing ? <Pause className="h-7 w-7" aria-hidden /> : <Play className="ml-1 h-7 w-7" aria-hidden />}
              </button>
              <div className="rounded-xl bg-foreground/80 px-3 py-2 text-background backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold tabular-nums">{fmtTime(elapsed)}</span>
                  <input type="range" min={0} max={total} value={elapsed} onChange={(e) => setElapsed(Number(e.target.value))} aria-label={current.title} className="h-1.5 flex-1 cursor-pointer accent-sun" />
                  <span className="text-xs font-bold tabular-nums opacity-80">{fmtTime(total)}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between p-6 sm:p-7">
            <div>
              <p className="eyebrow text-xs">{current.meta}{current.date ? ` · ${current.date}` : ""}</p>
              <h3 className="mt-2 text-2xl font-extrabold leading-snug">{current.title}</h3>
              {current.byline && <p className="mt-1.5 text-sm font-semibold text-primary">{current.byline}</p>}
              <p className="mt-3 leading-relaxed text-muted-foreground">{current.text}</p>
              {current.highlights && (
                <div className="mt-5">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-primary">{ui.chapters}</p>
                  <ul className="mt-2 space-y-1.5 text-sm">
                    {current.highlights.map((ch, i) => (
                      <li key={ch}>
                        <button type="button" onClick={() => { setElapsed(Math.floor((total / (current.highlights!.length + 1)) * (i + 1))); setPlaying(true); }} className="text-left text-muted-foreground hover:text-primary hover:underline">
                          {ch}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <ul className="grid gap-5 md:grid-cols-2 lg:mx-auto lg:max-w-5xl">
        {items.map((item, idx) => ({ item, idx })).filter(({ idx }) => idx !== active).map(({ item, idx }) => (
          <li key={item.title} className={`curve-card flex flex-col overflow-hidden bg-card ${idx === active ? "ring-2 ring-primary" : ""}`}>
            {item.img && (
              <button type="button" onClick={() => { setActive(idx); setElapsed(0); setPlaying(true); }} className="group relative aspect-[16/10] w-full overflow-hidden text-left">
                <img src={IMG[item.img]} alt="" loading="lazy" style={{ objectPosition: PHOTO_POSITION[item.img] }} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                <span className="absolute bottom-3 right-3 rounded-full bg-foreground/80 px-2.5 py-0.5 text-xs font-bold text-background">{item.duration ?? item.meta}</span>
                <span className="absolute inset-0 grid place-items-center bg-foreground/20 opacity-90 transition group-hover:bg-foreground/30">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-sun text-accent-foreground shadow"><Play className="ml-0.5 h-5 w-5" aria-hidden /></span>
                </span>
              </button>
            )}
            <div className="flex flex-1 flex-col p-5">
              <p className="eyebrow text-xs">{item.tag ?? item.meta}</p>
              <h3 className="mt-1.5 text-lg font-extrabold leading-snug">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              <button type="button" onClick={() => { setActive(idx); setElapsed(0); setPlaying(true); }} className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-bold text-primary hover:underline">
                <Play className="h-4 w-4" aria-hidden /> {isMultimedia ? ui.explore : ui.watch}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}