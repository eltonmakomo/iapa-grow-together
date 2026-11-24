import { useEffect, useRef, useState } from "react";
import { useMatches } from "@tanstack/react-router";

const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Scroll-reveal + parallax for everything inside <main>, re-run on each page change. */
export function useSiteMotion() {
  const path = useMatches().at(-1)?.pathname;
  useEffect(() => {
    if (reduced()) return;
    const main = document.getElementById("main");
    if (!main) return;
    const els = Array.from(
      main.querySelectorAll<HTMLElement>("section .container-page > *, section ul > li, section ol > li, section dl > div"),
    ).filter((el) => !el.closest("[role='dialog']") && !el.parentElement?.closest("li"));
    els.forEach((el) => {
      const sib = el.parentElement ? Array.from(el.parentElement.children).indexOf(el) : 0;
      el.style.setProperty("--reveal-delay", `${Math.min(sib, 6) * 80}ms`);
      el.classList.add("reveal");
      if (el.matches("figure, li:has(> figure)")) el.classList.add("reveal-zoom");
      else if (el.closest(".lg\\:grid-cols-2, .md\\:grid-cols-2") && el.parentElement?.children.length === 2) el.classList.add(sib === 0 ? "reveal-left" : "reveal-right");
    });
    main.querySelectorAll<HTMLElement>("h2.section-title, .eyebrow").forEach((el) => { el.classList.add("reveal", "reveal-title"); els.push(el); });
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: 0.01, rootMargin: "0px 0px -20px 0px" });
    els.forEach((el) => io.observe(el));

    const px = Array.from(main.querySelectorAll<HTMLElement>("section.isolate > img"));
    px.forEach((el) => el.classList.add("parallax"));
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => px.forEach((el) => {
        const r = el.parentElement!.getBoundingClientRect();
        if (r.bottom < 0 || r.top > innerHeight) return;
        const offset = Math.max(-r.height * 0.03, Math.min(0, r.top) * 0.05);
        const flipX = el.dataset["flip"] === "true" ? -1.03 : 1.03;
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0) scale(${flipX}, 1.03)`;
      }));
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => { io.disconnect(); removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, [path]);
}

/** Counts up the leading number in strings like "75+", "1,200", "10 000", "€2.5M". */
export function CountUp({ value }: { value: string }) {
  const m = value.match(/^(\D*?)(\d[\d,.\s\u00a0\u202f]*\d|\d)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(value);
  useEffect(() => {
    if (!m || reduced() || !ref.current) return;
    const pre = m[1] ?? "", numStr = m[2] ?? "0", post = m[3] ?? "";
    const sep = numStr.match(/[,\s\u00a0\u202f]/)?.[0];
    const dec = /\.\d+$/.test(numStr) && !/,/.test(numStr) ? (numStr.split(".")[1] ?? "").length : 0;
    const target = parseFloat(numStr.replace(/[,\s\u00a0\u202f]/g, ""));
    if (!isFinite(target)) return;
    const fmt = (n: number) => {
      const s = n.toFixed(dec);
      const [i = "", d] = s.split(".");
      const g = sep && target >= 1000 ? i.replace(/\B(?=(\d{3})+(?!\d))/g, sep) : i;
      return pre + g + (d ? "." + d : "") + post;
    };
    setShown(fmt(0));
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e?.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now(), dur = 1600;
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / dur);
        setShown(p < 1 ? fmt(target * (1 - Math.pow(1 - p, 3))) : value);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return <span ref={ref} aria-label={value}><span aria-hidden>{shown}</span></span>;
}

export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      if (ref.current) ref.current.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
    };
    on(); addEventListener("scroll", on, { passive: true }); addEventListener("resize", on);
    return () => { removeEventListener("scroll", on); removeEventListener("resize", on); };
  }, []);
  return <div ref={ref} aria-hidden className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-primary via-savanna to-sun" style={{ transform: "scaleX(0)" }} />;
}
